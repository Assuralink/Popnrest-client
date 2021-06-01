import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import "./style.scss";

import SignUpForm from "../SignUpForm/index";
import LogInForm from "../LogInForm/index";

function AuthModal(props) {
  const [mode, setMode] = useState("login");

  return (
    <Modal {...props} id="AuthModal" size="md" centered>
      <Modal.Header>
        {mode === "signup" ? <h2>Sign up</h2> : <h2>Log in</h2>}
        <button className="closeModalButton" onClick={() => props.onHide()}>
          Close
        </button>
      </Modal.Header>
      <Modal.Body>
        {mode === "signup" ? (
          <article>Create an account and access to amazing stuff</article>
        ) : (
          <article>Sign in and book your private space</article>
        )}
        {mode === "signup" ? (
          <SignUpForm onModalClose={() => props.onHide()} />
        ) : (
          <LogInForm onModalClose={() => props.onHide()} />
        )}
        <div class="separator"></div>
        {mode === "signup" ? (
          <p>
            Already have a Pop&Rest account ?
            <button className="switchMode" onClick={() => setMode("login")}>
              Log in
            </button>
          </p>
        ) : (
          <p>
            Don't have a Pop&Rest account yet ?
            <button className="switchMode" onClick={() => setMode("signup")}>
              Sign up
            </button>
          </p>
        )}
      </Modal.Body>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    uid: state.loginReducer.uid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);

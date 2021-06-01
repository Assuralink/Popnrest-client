import React from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import "./LogOut.scss";

import { logout } from "../../../actions/loginActions";

function LogOut(props) {
  const handleLogout = () => {
    props.logout();
    props.onHide();
  };
  return (
    <Modal {...props} size="md" centered>
      <Modal.Body>
        <h2>Log out</h2>
        <article>Are you sure to leave ?</article>
        <div class="bloc">
          <button class="action" onClick={() => handleLogout()}>
            Confirm
          </button>
          <button class="cancel" onClick={props.onHide}>
            Cancel
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);

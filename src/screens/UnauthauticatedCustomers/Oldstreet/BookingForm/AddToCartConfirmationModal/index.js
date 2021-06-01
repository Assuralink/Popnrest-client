import React from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import "./style.scss";

function AddToCartConfirmationModal(props) {
  console.log("AddToCartModal props");
  console.log(props);
  return (
    <Modal {...props} id="AuthModal" size="md" centered>
      <Modal.Header>
        Your booking have been added to the cart
        <button className="closeModalButton" onClick={() => props.onHide()}>
          Close
        </button>
      </Modal.Header>
      <Modal.Body>
        <button onClick={() => props.proceedToNextStep()}>Proceed</button>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCartConfirmationModal);

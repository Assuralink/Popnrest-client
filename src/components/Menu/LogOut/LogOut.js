import React from "react";
import { Modal } from "react-bootstrap";
import "./LogOut.scss";

function LogOut(props) {
  return (
    <Modal {...props} size="md" centered>
      <Modal.Body>
        <h2>Log out</h2>
        <article>Are you sure to leave ?</article>
        <div class="bloc">
          <button class="action" onClick={props.onLogout}>
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

export default LogOut;

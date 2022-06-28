import React from "react";
import  ReactDOM  from "react-dom";

import ModalBackdrop from "./Modal/ModalBackdrop";
import ModalOverlay from "./Modal/ModalOverlay";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const backdropROOT = document.querySelector("#backdrop");
  const overlayROOT = document.querySelector("#overlay");

  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop
          className={classes.backdrop}
          onClick={props.onConfirm}
        />,
        backdropROOT
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          className={classes.modal}
          headerClassName={classes.header}
          contentClassName={classes.content}
          actionsClassName={classes.actions}
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        overlayROOT
      )}
    </>
  );
};

export default ErrorModal;

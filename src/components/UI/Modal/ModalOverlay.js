import React from "react";

import Card from "../Card";
import Button from "../Button";

const ModalOverlay = (props) => {
  return (
    <Card className={props.className}>
      <header className={props.headerClassName}>
        <h2>{props.title}</h2>
      </header>
      <div className={props.contentClassName}>
        <p>{props.message}</p>
      </div>
      <footer className={props.actionsClassName}>
        <Button onClick={props.onConfirm}>Got it</Button>
      </footer>
    </Card>
  );
};

export default ModalOverlay;

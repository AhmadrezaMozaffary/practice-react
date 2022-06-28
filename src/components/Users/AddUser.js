import React, { useRef, useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const enteredName = useRef();
  const enteredUserAge = useRef();
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredName.current.value.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name !",
      });
      return;
    }

    if (
      +enteredUserAge.current.value < 1 ||
      enteredUserAge.current.value.trim().length === 0
    ) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age!",
      });
      return;
    }

    props.onAddUser(enteredName.current.value, enteredUserAge.current.value);

    enteredName.current.value = "";
    enteredUserAge.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={enteredName} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={enteredUserAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

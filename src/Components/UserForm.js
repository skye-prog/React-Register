import React, { useState } from "react";
import Errors from "./ErroMessage";
import "./UserForm.css";
function UserForm(props) {
  const [username, setusername] = useState("");
  const [userage, setuserage] = useState("");
  const [inputerror, setinputerror] = useState();
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || userage.trim().length === 0) {
      setinputerror({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    // useState return a string , using a + sign
    if (+userage < 1) {
      setinputerror({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const UserData = {
      name: username,
      age: userage,
      id: Math.random.toString(),
    };
    props.addNewUsers(UserData);
    setusername("");
    setuserage("");
  };
  const errorHandler = () => {
    setinputerror(null);
    setusername("");
    setuserage("");
  };
  return (
    <div className='Form-container'>
      {inputerror && (
        <Errors
          title={inputerror.title}
          message={inputerror.message}
          onConfirm={errorHandler}
        />
      )}
      <form className='UserForm' onSubmit={SubmitHandler}>
        <label>
          Username:
          <input
            className='UserControls'
            type='text'
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </label>
        <label>
          Age(Years):
          <input
            className='UserControls'
            type='number'
            value={userage}
            onChange={(e) => setuserage(e.target.value)}
          />
        </label>
        <button className='Form-Button' type='submit' value='Submit'>
          Add User
        </button>
      </form>
    </div>
  );
}

export default UserForm;

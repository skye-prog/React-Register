import React, { useState } from "react";
import UserForm from "./Components/UserForm";

import UserList from "./Components/UserList";
function App() {
  // const InitialState = [
  //   { id: 1, name: "mike", age: 12 },
  //   { id: 2, name: "sike", age: 13 },
  // ];
  const [currentData, setcurrentData] = useState([]); //
  const addNewUsersHandler = (newUser) => {
    // If the state depends on the previous state, using the updating form function.
    setcurrentData((prevUser) => {
      // add newItems into a array
      return [...prevUser, newUser];
    });
  };
  return (
    <div>
      <UserForm addNewUsers={addNewUsersHandler} />
      <UserList items={currentData} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

const UseStateBasic = () => {
  const [title, setTitle] = useState("hello Rahul");
  const handleClick = () => {
    if (title === "hello Rahul") {
      setTitle("bye Rahul");
    } else {
      setTitle("hello Rahul");
    }
  };
  return (
    <div>
      <h2>{title}</h2>
      <button type="button" onClick={handleClick}>
        Change Title
      </button>
    </div>
  );
};

export default UseStateBasic;

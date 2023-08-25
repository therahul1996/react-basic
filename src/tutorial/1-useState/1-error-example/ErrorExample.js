import React from "react";

const ErrorExample = () => {
  let title = 'hello Rahul';
  const handleClick = () => {
    title = 'Bye Rahul'
    console.log(title);
  }
  return (
    <div>
      <h2>{title}</h2>
      <button type="button" onClick={handleClick}>change Title</button>
    </div>
  );
};

export default ErrorExample;

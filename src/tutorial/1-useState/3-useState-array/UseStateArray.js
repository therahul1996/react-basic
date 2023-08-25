import React, { useState } from "react";
import data from "./data.json";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const handleDelete = (id) => {
    let newPeople = people.filter((people) => people.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((people, id) => {
        return (
          <div key={id}>
            <h3>{people.name}</h3>
            <button type="button" onClick={() => handleDelete(people.id)}>Clear</button>
          </div>
        );
      })}
      <button type="button" onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
};

export default UseStateArray;

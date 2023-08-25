import React, { useState } from 'react'

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'Rahul Kumar Sahu',
        age: 27,
        title: 'Frontend Developer',
        message: 'hello Rahul'
    })
    const handleChange = () => {
        setPerson({...person, message: 'bye Rahul'})
    }
  return (
    <>
        <h2>{person.name}</h2>
        <span>{person.age}</span>
        <h3>{person.title}</h3>
        <p>{person.message}</p>
        <button onClick={handleChange}>change message</button>
    </>
  )
}

export default UseStateObject
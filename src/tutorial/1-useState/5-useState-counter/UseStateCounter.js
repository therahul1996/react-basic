import React, { useState } from 'react'

const UseStateCounter = () => {
    const [count, setCount] = useState(0);
    const handleIncreaseSlow = () => {
        setTimeout(() => {
            setCount((prevState) => {
                return prevState  + 1
            })
        }, 2000);
        
    }
   return (
    <div>
        <h2>{count}</h2>
        <button type='button' onClick={() => setCount(count - 1)}>-</button>
        <button type='button' onClick={() => setCount(0)}>Reset</button>
        <button type='button' onClick={() => setCount(count + 1)}>+</button>
        <h3>Increase slow</h3>
        <button type='button' onClick={handleIncreaseSlow}>Increase slow</button>
    </div>
  )
}

export default UseStateCounter
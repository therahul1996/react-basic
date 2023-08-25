import React, {useState, useEffect} from 'react'

const UseEffectBasic = () => {
    const [value, setValue] = useState(0)
    useEffect(() => {
        console.log('call effect');
        if (value > 0) {
            document.title = `New Message(${value})`;
        }
    })
    console.log('render component')
  return (
    <div>
        <h2>{value}</h2>
        <button type='button' onClick={() => setValue(value + 1)}>Add</button>
    </div>
  )
}

export default UseEffectBasic
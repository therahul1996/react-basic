import React, {useState, useEffect} from 'react'

const UseEffectCleanUp = () => {
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth);
    }
    useEffect(() => {
        console.log('useEffect');
        window.addEventListener('resize', checkSize)
        return() => {
            console.log('clean up')
            window.removeEventListener('resize', checkSize)
        }
    })
    console.log('Outer Render')
  return (
    <div>
        <h1>Window</h1>
        <h2>{size} PX</h2>
    </div>
  )
}

export default UseEffectCleanUp
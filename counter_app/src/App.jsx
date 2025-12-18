import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
        <p>Count is <strong>{count}</strong></p>
        <button onClick={() => setCount((count) => count + 1)}>Increment
        </button>
        <button onClick={() => setCount((count) =>  Math.max(0, count - 1))}>Decrement
        </button>
        <button onClick={()=>setCount(0)}>Reset</button>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import InputBox from './InputBox'
import './App.css'

function App() {
  const [text, setText] = useState('')

  return (
    <div className="container">
      <h2>Lifting State Up</h2>

      <InputBox
        value={text}
        onChange={setText}
      />

      <p>You typed: <strong>{text}</strong></p>
    </div>
  )
}

export default App

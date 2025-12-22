import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassWord] = useState('');

  const getStrength = ()=>{
    if(password.length===0) return ' ';
    if (password.length < 6) return 'Weak'
    if (password.length < 10) return 'Medium'
    return 'Strong'
  }

  const strength = getStrength();

  return (
    <>
      <div className="form-container">
      <h2>Password Strength Checker</h2>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassWord(e.target.value)}
      />

      {strength && (
        <p className={`strength ${strength.toLowerCase()}`}>
          Strength: {strength}
        </p>
      )}
    </div>
    </>
  )
}

export default App

import { useState } from 'react'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = ()=>{
    setIsLoggedIn(prev => !prev)
  }



  return (
    <>

      <div className="auth-container">
      <h1>{isLoggedIn ? 'Welcome Back 👋' : 'Please Log In'}</h1>

      {isLoggedIn && (
        <p>You are logged in successfully.</p>
      )}

      <button onClick={handleAuth}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>

    </>
  )
}

export default App

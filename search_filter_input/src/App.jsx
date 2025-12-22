import { useState } from 'react'
import './App.css'

function App() {
  
  const users = [
    "Pavan",
    "Rahul",
    "Rakesh",
    "Rohit",
    "Sharan",
    "Samarth",
    "Shivu",
    "Veeresh",
    "Praveen"
  ]

  const [search,setSearch] = useState('');

  const filteredUsers = users.filter(user =>
    user.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <>
        <div className="container">
      <h2>User Search</h2>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))
        ) : (
          <p>No users found ❌</p>
        )}
      </ul>
    </div>
    </>
  )
}

export default App

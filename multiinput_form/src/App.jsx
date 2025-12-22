import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:" ",
    email:" ",
    age:" "
  });

  const handleChange = (e)=>{
    const {name,value}=e.target;
    setFormData(prev=>({
      ...prev,
      [name]:value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    alert('Form submitted successfully ✅')

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      age: ''
    })
  }



  return (
    <>
     <div className="form-container">
      <h2>Multi-Input Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          name="age"
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default App

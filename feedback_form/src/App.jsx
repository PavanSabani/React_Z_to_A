import { useState } from 'react'
import './App.css'

function App() {

  const [feedback, setFeedback] = useState('');
  const [rating ,setRating] = useState('');
  const [submitted,setSubmitted] = useState('');

  const handleSubmit  = (e)=>{
    e.preventDefault()

    if(!feedback.trim() || rating) return

    console.log({
      feedback,
      rating
    })

    setSubmitted(true)
    setFeedback('')
    setRating('')
  }


  return (
    <>
      <div className="form-container">
      <h2>Feedback Form</h2>

      {submitted && <p className="success">Thank you for your feedback! 🙌</p>}

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Rate us</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Average</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default App

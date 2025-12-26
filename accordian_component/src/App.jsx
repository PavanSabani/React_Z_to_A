import { useState } from 'react'
import Accordion from './Accordian'
import './App.css'

function App() {
  const [openId, setOpenId] = useState(null);

  const items =[
    {
      id: 1,
      title: 'What is React?',
      content: 'React is a JavaScript library for building UIs.'
    },
    {
      id: 2,
      title: 'Why use React?',
      content: 'React makes UI predictable and reusable.'
    },
    {
      id: 3,
      title: 'What are components?',
      content: 'Components are reusable UI building blocks.'
    }
  ]

  const handleToggle = (id) => {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <>
    <div className="container">
      <h2>Accordion Component</h2>

      <Accordion
        items={items}
        openId={openId}
        onToggle={handleToggle}
      />
    </div>
    </>
  )
}

export default App

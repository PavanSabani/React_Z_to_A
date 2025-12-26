import { useState } from 'react'
import Modal from './Modal'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="container">
      <h2>Modal Demo</h2>

      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <h3>Hello from Modal 👋</h3>
        <p>This content is passed using children.</p>
      </Modal>
    </div>
  )
}

export default App

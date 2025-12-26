function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <div className="overlay">
      <div className="modal">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal

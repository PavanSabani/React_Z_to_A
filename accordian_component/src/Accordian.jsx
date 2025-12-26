function Accordion({ items, openId, onToggle }) {
  return (
    <div>
      {items.map(item => (
        <div key={item.id} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => onToggle(item.id)}
          >
            {item.title}
          </div>
          {openId === item.id && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
export default Accordion

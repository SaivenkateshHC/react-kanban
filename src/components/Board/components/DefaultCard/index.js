export default function ({children: card, dragging, allowRemoveCard, onCardRemove}) {
	return (
		<div className={`react-kanban-card ${dragging ? 'react-kanban-card--dragging' : ''}`}>
      <span>
        <div className='react-kanban-card__title'>
          <span>{card.title}</span>
	        <p className={'react-kanban-board__priority'}>{card.priority}</p>
	        {card.assignee && <p className={'react-kanban-board__assignee'}>{card.assignee}</p>}
	        {allowRemoveCard && (
		        <span style={{cursor: 'pointer'}} onClick={() => onCardRemove(card)}>
              ×
            </span>
	        )}
        </div>
      </span>
			<div className='react-kanban-card__description'>{card.description}</div>
			<p className={'react-kanban-board__priority'}>{card.priority}</p>
			<p className={'react-kanban-board__assignee'}>{card.assignee}</p>
		</div>
	)
}

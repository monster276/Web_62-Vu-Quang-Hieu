import React, { useContext } from 'react'
import contactContext from '../../contexts/ContactContext/ContactContext'
import './ContactCard.css'
const ContactCard = ({ card, removeContact }) => {
  const ctxContact = useContext(contactContext)

  return (
    <div className="content">
      <div className="info">
        <p className="card">{card.name}</p>
        <p className='type'>{card.type}</p>
      </div>
      <p className="email">Email: {card.email}</p> <br />
      <p className="phone">Phone: {card.phone}</p>
      <div className="gr-button">
        <button
          className="edit-button"
          onClick={() => ctxContact.setContactForm(card)}
        >
          Edit
        </button>
        <button
          className="delete-button"
          onClick={() => ctxContact.removeContact(card.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default ContactCard

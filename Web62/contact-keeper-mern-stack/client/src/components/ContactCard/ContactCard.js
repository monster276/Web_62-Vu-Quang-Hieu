import React, { useContext } from 'react'
import { PROFESSIONAL } from '../../configs/constants'
import contactContext from '../../contexts/ContactContext/ContactContext'
import ContactService from '../../services/contactServices'

const ContactCard = (props) => {
  const { contact } = props
  const ctxContact = useContext(contactContext)
  const { setContactsData } = useContext(contactContext)
  const { id, name, email, phone, type } = contact
  const typeClassName =
    type === PROFESSIONAL ? 'badge bg-danger' : 'badge bg-success'
  return (
    <div>
      <div className="card mb-3" style={{ width: '80%' }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
          <p className="card-text">{phone}</p>
          <p className={typeClassName}>{type}</p>
          <button
            onClick={()=>ctxContact.set }
          >
            Edit
          </button>
          <button
            onClick={async () => {
              const rest = await ContactService.delete(id)
              setContactsData(rest.data.data)
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactCard

import React, { useEffect, useState } from "react";
import ContactContext from "../../contexts/ContactContext/ContactContext";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { PERSONAL } from "../../configs/constants";
const contactData = [
  {
    id: 1,
    name: "Jill Johnson",
    email: "jill@gmail.com",
    phone: "111-111-1111",
    type: "personal",
  },
  {
    id: 2,
    name: "Sara Watson",
    email: "sara@gmail.com",
    phone: "222-222-2222",
    type: "personal",
  },
  {
    id: 3,
    name: "Harry White",
    email: "harry@gmail.com",
    phone: "333-333-3333",
    type: "professional",
  },
];
export const initialValues = {
  name: "",
  email: "",
  phone: "",
  type: PERSONAL,
};
const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [contactForm, setContactForm] = useState(initialValues);
  useEffect(() => {
    setContacts(contactData);
  }, []);

  const removeContact = id => {
    console.log(id)
    setContacts(contacts.filter(item => item.id !== id));
  };
  const onAddContact = (contact) => {
    const index = contacts.findIndex((item) => item.id === contact.id)
    if (index >= 0) {
      const newContact = [...contacts]
      newContact.splice(index, 1, contact)
      setContacts(newContact)
    } else {
      setContacts((prev) => [...prev, {...contact, id: new Date().toDateString(),}]);
    }
  };
  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      alert("Name is required!") ;
    }
    if (!values.email) {
      alert("Email is required!") ;
    } else if (!regex.test(values.email)) {
      alert ("This is not a valid email format!");
    }
    if (!values.phone) {
      alert("Phone is required");
    }
    return values;
  };
  return (
    <div className="container mt-4">
      <ContactContext.Provider
        value={{
          contacts,
          setContactForm,
          removeContact,
          validate,
        }}
      >
        <div className="row">
          <div className="col-12 col-md-6">
            <ContactForm onAddContact={onAddContact} contactForm={contactForm} setContactForm={setContactForm} />
          </div>
          <div className="col-12 col-md-6">
            <ContactList contacts={contacts} removeContact={removeContact}></ContactList>
          </div>
        </div>
      </ContactContext.Provider>
    </div>
  );
};

export default HomePage;

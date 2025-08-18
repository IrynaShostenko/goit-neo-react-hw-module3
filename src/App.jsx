import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import "./App.css";

const STORAGE_KEY = "phonebook_contacts";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialContacts;
    }
    catch {
      return initialContacts;
    }
  });

  const [filter, setFilter] = useState("");


  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    if (contacts.some(c => c.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts(prev => prev.filter(c => c.id !== contactId));
  };

  const visibleContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </>
  );
};

export default App;
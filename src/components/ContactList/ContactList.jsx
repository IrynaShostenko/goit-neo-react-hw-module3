import styles from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={styles.container}>
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
      </ul>
    </div>
  );
};

export default ContactList;

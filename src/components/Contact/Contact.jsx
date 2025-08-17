import styles from './Contact.module.css';
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}><FaUser /> {name}</p>
      <p className={styles.text}><FaPhone /> {number}</p>
      <button className={styles.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;

import styles from './Contact.module.css';
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.line}>
          <FaUser className={styles.icon} />
          <span className={styles.name}>{name}</span>
        </p>
        <p className={styles.line}>
          <FaPhone className={styles.icon} />
          <span className={styles.number}>{number}</span>
        </p>
      </div>

      <button className={styles.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;

import styles from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

const ContactForm = ({ onAdd }) => {
  const ContactSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phone: Yup.string()
  .matches(
    /^(\+?\d{1,3}[- ]?)?\d{2,4}([- ]?\d{2,4})+$/,
    "Phone number is not valid"
  )
  .required("Required")
      .min(7, "Too Short!")
      .max(15, "Too Long!")
  });

  const formId = useId();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: (crypto?.randomUUID?.() ?? `id-${Date.now()}`),
      name: values.username,
      number: values.phone,
    };
    onAdd(newContact);
    resetForm();
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ username: '', phone: '' }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <label htmlFor={`name-${formId}`} className={styles.label}>
              Name
            </label>
            <Field
              type="text"
              name="username"
              id={`name-${formId}`}
              className={styles.input}
            />
            <ErrorMessage name="username" component="span" className={styles.error} />

            <label htmlFor={`phone-${formId}`} className={styles.label}>
              Number
            </label>
            <Field
              type="tel"
              name="phone"
              id={`phone-${formId}`}
              className={styles.input}
            />
            <ErrorMessage name="phone" component="span" className={styles.error} />

            <button type="submit" className={styles.btn}>Add Contact</button>
          </fieldset>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

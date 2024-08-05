/* eslint-disable react/prop-types */
import css from "./Contact.module.css";

const Contact = ({ name, number, onDeleteContact, id }) => {
  return (
    <li className={css.item}>
      <div className={css.userData}>
        <p className={css.line}>{name}</p>
        <p className={css.line}>{number}</p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

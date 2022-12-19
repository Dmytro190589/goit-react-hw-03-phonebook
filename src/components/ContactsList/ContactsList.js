import PropTypes from 'prop-types';
import css from './ContactList.module.css';
export default function ContactList({ contacts, onClick }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={css.list} key={id} id={id}>
          <p>
            {name} : {number}
          </p>
          <button className={css.btn} onClick={() => onClick(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};
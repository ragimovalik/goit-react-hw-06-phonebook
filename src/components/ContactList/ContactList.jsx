import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { MdDelete } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/store';

const ContactList = ({ contacts, onClick }) => (
  <div className={styles.ContactList}>
    <h3 className={styles.ContactList__title}>Contact List</h3>
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={styles.ContactList__item}>
            <p className={styles.ContactList__name}>{contact.name}</p>
            <p className={styles.ContactList__phone}>{contact.number}</p>

            <IconContext.Provider
              value={{
                color: 'inherit',
                size: '1.2rem',
                className: 'global-class-name',
                title: 'delete',
              }}
            >
              <div onClick={() => onClick(contact.id)}>
                <MdDelete className={styles.ContactList__icon} />
              </div>
            </IconContext.Provider>
          </li>
        );
      })}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.string,
    }),
  ).isRequired,
};

const filteredContacts = (contacts, filter) => {
  const normalizedText = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedText),
  );
};

const mapStateToProps = state => ({
  contacts: filteredContacts(state.contactReducer, state.filterContactsReducer),
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

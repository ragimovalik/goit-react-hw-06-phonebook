import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice';
// import { deleteContact } from '../../redux/creators';
import { IconContext } from 'react-icons';
import { MdDelete } from 'react-icons/md';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const { items, filter } = contacts;

  // const items = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const filterContacts = (items, filter) => {
    const normalizedText = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedText),
    );
  };

  const filteredContacts = filterContacts(items, filter);

  return (
    <div className={styles.ContactList}>
      <h3 className={styles.ContactList__title}>Contact List</h3>
      <ul>
        {filteredContacts.map(contact => {
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
                <div onClick={() => dispatch(deleteContact(contact.id))}>
                  <MdDelete className={styles.ContactList__icon} />
                </div>
              </IconContext.Provider>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;

/*
const mapStateToProps = state => ({
  contacts: filteredContacts(state.contactReducer, state.filterContactsReducer),
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(deleteContact(id)),
});

*/

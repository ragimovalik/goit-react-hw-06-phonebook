import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/*
  componentDidMount() {
    const storedData = localStorage.getItem('al-phonebook');
    const parsedData = JSON.parse(storedData);

    parsedData?.length >= 1 && this.props.getSavedContacts(parsedData);
  }

  componentDidUpdate() {
    if (this.props.contacts)
      localStorage.setItem('al-phonebook', JSON.stringify(this.props.contacts));
  }

//----------------------------------------------------------
  const localStorageChecher = () => {
  const storedData = localStorage.getItem('al-phonebook');
  const parsedData = JSON.parse(storedData);

  return parsedData?.length >= 1 && getSavedContacts(parsedData);
};

*/

//Store Design
const initialStore = {
  contacts: {
    items: [
      // { id: 'id-12345', name: 'Daniel Defoe', number: '987-6541210' },
      // { id: 'id-54321', name: 'Jonathan Swift', number: '987-6542210' },
      // { id: 'id-98765', name: 'Robert Stevenson', number: '987-6543210' },
      // { id: 'id-56789', name: 'Lewis Carroll', number: '987-6544210' },
    ],
    filter: '',
  },
};

console.log(initialStore);

// Actions - Action Types

const ADD_CONTACT = 'contacts/addContact';
const DELETE_CONTACT = 'contacts/deleteContact';
const FILTER_CONTACT = 'contacts/filterContacts';
const GET_SAVED_CONTACTS = 'contacts/getSavedContacts';

export const addContact = newContact => ({
  type: ADD_CONTACT,
  payload: newContact,
});

export const getSavedContacts = (contacts = []) => ({
  type: GET_SAVED_CONTACTS,
  payload: contacts,
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const filterContacts = text => ({
  type: FILTER_CONTACT,
  payload: text,
});

//Reducers

const contactReducer = (
  state = initialStore.contacts.items,
  { type, payload },
) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];

    case GET_SAVED_CONTACTS:
      return [...state, ...payload];

    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

export const filterContactsReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER_CONTACT:
      return payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  contactReducer,
  filterContactsReducer,
});

export const store = createStore(contactsReducer, composeWithDevTools());

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//Store Design
const initialStore = {
  contacts: {
    items: [],
    filter: '',
  },
};

console.log(initialStore);

// Actions - Action Types

const ADD_CONTACT = 'contacts/addContact';
const DELETE_CONTACT = 'contacts/deleteContact';
const FILTER_CONTACT = 'contacts/filterContacts';

export const addContact = newContact => ({
  type: ADD_CONTACT,
  payload: newContact,
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

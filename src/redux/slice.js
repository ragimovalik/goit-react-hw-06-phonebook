import { createSlice } from '@reduxjs/toolkit';

const storedData = localStorage.getItem('al-phonebook');
const parsedData = JSON.parse(storedData);

const initialContacts = parsedData?.length >= 1 ? parsedData : [];

/*
{ id: 'id-12345', name: 'Daniel Defoe', number: '987-6541210' },
{ id: 'id-54321', name: 'Jonathan Swift', number: '987-6542210' },
{ id: 'id-98765', name: 'Robert Stevenson', number: '987-6543210' },
{ id: 'id-56789', name: 'Lewis Carroll', number: '987-6544210' },
*/

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: initialContacts,
    filter: '',
  },

  reducers: {
    addContact: (state, action) => ({
      ...state,
      items: [...state.items, action.payload],
    }),

    deleteContact: (state, action) => ({
      ...state,
      items: state.items.filter(contact => contact.id !== action.payload),
    }),

    setFilter: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;

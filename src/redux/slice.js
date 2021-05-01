import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-12345', name: 'Daniel Defoe', number: '987-6541210' },
      { id: 'id-54321', name: 'Jonathan Swift', number: '987-6542210' },
      { id: 'id-98765', name: 'Robert Stevenson', number: '987-6543210' },
      { id: 'id-56789', name: 'Lewis Carroll', number: '987-6544210' },
    ],
    filter: '',
  },

  reducers: {
    addContact: (state, action) => ({
      ...state,
      items: [...state.items, action.payload],
    }),

    getSavedContacts: (state, action) => [...state, ...action.payload],

    deleteContact: (state, action) =>
      state.items.filter(contact => contact.id !== action.payload),

    setFilter: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
  },
});

export const {
  addContact,
  getSavedContacts,
  deleteContact,
  setFilter,
} = contactsSlice.actions;

export default contactsSlice.reducer;

import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

// Actions
export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('contacts/setFilter');

//Reducers

const contactsReducer = createReducer([], builder => {
  builder
    .addCase(addContact, (state, { payload }) => [...state, payload])
    .addCase(deleteContact, (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
    )
    .addDefaultCase((state, action) => state);
});

const filterReducer = createReducer('', builder => {
  builder.addCase(setFilter, (state, { payload }) => payload);
});

//Store
export default configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

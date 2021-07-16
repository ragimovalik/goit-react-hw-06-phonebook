import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PageTitle from './components/PageTitle/PageTitle';
import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import locales from './locales/en.json';

const { labels, placeholders, titles, submitButtonLabel } = locales;

console.log(labels, placeholders, submitButtonLabel);

const App = () => {
  const { items } = useSelector(state => state.contacts);

  useEffect(() => {
    return localStorage.setItem('al-phonebook', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <PageTitle title={'HW #6 (Redux / RTK)'} />
      <Form boxTitle={titles.formBox} />
      <Filter boxTitle={titles.filterBox} />
      <ContactList boxTitle={titles.contactsBox} />
    </>
  );
};

export default App;
/*
// Form component
title
name
phone number
submitButton

//Filter component
searchingBoxTitle 
findname

//Contact List component
ContactListTitle
*/

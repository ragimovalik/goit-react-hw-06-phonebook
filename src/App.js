import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PageTitle from './components/PageTitle/PageTitle';
import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const App = () => {
  const { items } = useSelector(state => state.contacts);

  useEffect(() => {
    return localStorage.setItem('al-phonebook', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <PageTitle title={'HomeWork #6 (Phonebook) of React'} />
      <Form />
      <Filter />
      <ContactList />
    </>
  );
};

export default App;

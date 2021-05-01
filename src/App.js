import PageTitle from './components/PageTitle/PageTitle';
import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const App = () => {
  return (
    <>
      <PageTitle title={'HomeWork #6-Phonebook of React'} />
      <Form />
      <Filter />
      <ContactList />
    </>
  );
};

export default App;

/*
{ id: 'id-12345', name: 'Daniel Defoe', number: '987-6541210' },
{ id: 'id-54321', name: 'Jonathan Swift', number: '987-6542210' },
{ id: 'id-98765', name: 'Robert Stevenson', number: '987-6543210' },
{ id: 'id-56789', name: 'Lewis Carroll', number: '987-6544210' },
*/

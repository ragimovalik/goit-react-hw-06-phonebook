import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/slice';
import PropTypes from 'prop-types';
import InputBox from '../InputBox/InputBox';
import styles from './Form.module.css';

const Form = () => {
  const [localState, setLocalState] = useState({ name: '', number: '' });
  const { items } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const setDefault = () =>
    setLocalState({
      name: '',
      number: '',
    });

  const onInputChange = ({ target: { name, value } }) => {
    return setLocalState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const contactsChecker = name => {
    return items?.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase()),
    );
  };

  const handleSubmit = event => {
    event.preventDefault();

    const { name, number } = localState;

    const idSetter = `id-${Math.ceil(Math.random() * 100000)}`;

    const newContact = { id: idSetter, name, number };

    contactsChecker(name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(newContact));

    setDefault();
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <InputBox
        labelText={'Name'}
        htmlFor={'name'}
        type={'text'}
        id={'name'}
        name={'name'}
        title={
          "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        }
        pattern={'text'}
        placeholder={'Name'}
        required={true}
        value={localState.name}
        onChange={onInputChange}
      />

      <InputBox
        labelText={'Phone number'}
        htmlFor={'tel'}
        type={'tel'}
        id={'tel'}
        name={'number'}
        title={
          'Номер телефона должен состоять из 11-12 цифр и может содержать цифры, точки, пузатые скобки и может начинаться с +'
        }
        pattern={'phone'}
        placeholder={'Phone Number'}
        required={true}
        value={localState.number}
        onChange={onInputChange}
      />
      <button className={styles.Form__btn} type="submit">
        Submit
      </button>
    </form>
  );
};

Form.propTypes = {
  onSubmitData: PropTypes.func,
};

export default Form;

/*
const mapStateToProps = state => ({
  contacts: state.contactReducer,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: newContact => dispatch(addContact(newContact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
*/

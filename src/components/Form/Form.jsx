import React, { Component } from 'react';
import InputBox from '../InputBox/InputBox';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../redux/store';
import styles from './Form.module.css';

class Form extends Component {
  state = { name: '', number: '' };

  setDefaultState = () =>
    this.setState({
      name: '',
      number: '',
    });

  onChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  contactsChecker = name => {
    // const { contacts } = this.state;

    return this.props.contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase()),
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;

    const idSetter = `id-${Math.ceil(Math.random() * 100000)}`;
    const newContact = { id: idSetter, name, number };

    this.contactsChecker(name)
      ? alert(`${name} is already in contacts`)
      : this.props.onSubmit(newContact);

    this.setDefaultState();
  };

  render() {
    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
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
          value={this.state.name}
          onChange={this.onChange}
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
          value={this.state.number}
          onChange={this.onChange}
        />
        <button className={styles.Form__btn} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contactReducer,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: newContact => dispatch(addContact(newContact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

import InputBox from '../InputBox/InputBox';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/store';

const Filter = ({ contacts, onChange }) => {
  return (
    <div className={styles.Filter__wrap}>
      <h3 className={styles.Filter__title}>Search</h3>

      <InputBox
        labelText={'Find Name'}
        htmlFor={'filter'}
        type={'text'}
        id={'filter'}
        name={'filter'}
        pattern={'text'}
        placeholder={'Name'}
        required={false}
        value={contacts.filterContactsReducer}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  contacts: PropTypes.array,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: state.contactReducer,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(filterContacts(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

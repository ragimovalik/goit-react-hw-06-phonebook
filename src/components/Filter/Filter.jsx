import InputBox from '../InputBox/InputBox';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/slice';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  // const filterSetting = event =>

  const filterHandler = event => dispatch(setFilter(event.currentTarget.value));

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
        value={filter}
        onChange={filterHandler}
      />
    </div>
  );
};

Filter.propTypes = {
  contacts: PropTypes.array,
  onChange: PropTypes.func,
};

export default Filter;

// const mapStateToProps = state => ({
//   contacts: state.contactReducer,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(filterContacts(event.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
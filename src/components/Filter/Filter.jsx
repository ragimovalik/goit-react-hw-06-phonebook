import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/slice';
// import { setFilter } from '../../redux/creators';
import PropTypes from 'prop-types';
import InputBox from '../InputBox/InputBox';
import styles from './Filter.module.css';

const Filter = ({ boxTitle }) => {
  const { filter } = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterHandler = event => dispatch(setFilter(event.currentTarget.value));

  return (
    <div className={styles.Filter__wrap}>
      <h3 className={styles.Filter__title}>{boxTitle}</h3>

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
  boxTitle: PropTypes.string.isRequired,
};

export default Filter;

// const mapStateToProps = state => ({
//   contacts: state.contactReducer,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(filterContacts(event.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

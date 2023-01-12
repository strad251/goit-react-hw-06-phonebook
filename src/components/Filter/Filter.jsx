import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice/filerSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
    <p>Find contacts by name</p>
    <input
      type="text"
      onChange={e => {
        const action = filterContacts(e.target.value);
        dispatch(action);
      }}
    />
    </>
  );
};
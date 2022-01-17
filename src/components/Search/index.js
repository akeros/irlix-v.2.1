import './index.css';
import {useDispatch, useSelector} from "react-redux";
import cancel from '@images/cancel.svg'
import {clearSearch, searching,} from "../../redux/appSlice";
import {useNavigate} from "react-router";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const value = useSelector(state => state.app.search);

  const handleChange = (event) => {
    dispatch(searching(event.target.value));
  }

  const handleClear= () => {
    if (value) {
      dispatch(clearSearch());
    } else {
      navigate('/');
    }
  }

  return (
    <div className='cancel-table'>
      <input className='input' value={value} onChange={handleChange} autoFocus />
      <div className='cancel-top'>
        <button className='button-top' onClick={handleClear}><img src={cancel}/></button>
      </div>
    </div>
  );
}

export default Search;
import './index.css';
import search from '../../search.svg';
import krest from '../../images/krest.svg';
import { useState } from 'react';
import {useNavigate} from 'react-router';
import Search from '../Search';



function Footer() {   
    const [isInput, setInput] = useState(false)
    const [isValue, setValue] =useState('')
    function handleInput() {
        setInput((prevState) => !prevState);
    }
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/step-two/`)
    }

    function handleChange(event) {
        setValue(event.target.value);
    }

    function filter() {
       return isValue.split()
    }; 
    // Возможно то что нужно

    console.log(filter());

  return (
        <div className="footer">
            {
             isInput ? <button className="footertext" onClick={handleClick}>Избранные</button> : 
             <Search isInput={isInput} isValue={isValue} handleChange={handleChange} handleInput={handleInput} krest={krest}/>    
            }
            {
             isInput && <button className="footersearch" onClick={handleInput}> <img src={search}/> </button>
             }
        </div>
  );
}

export default Footer;

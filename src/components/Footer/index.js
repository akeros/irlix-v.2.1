import './index.css';
import search from '../../search.svg';
import krest from '../../images/krest.svg';
import { useState } from 'react';
import {useNavigate} from 'react-router';



function Footer() {   
    const [isInput, setInput] = useState(false)
    function handleInput() {
        setInput((prevState) => !prevState);
      }
      const navigate = useNavigate();

  function handleClick() {
    navigate(`/step-two/`)
  }
      
function Search() {
    return (
        <div className='krest-table'>
            <input  className='input' type="Введите запрос"  />
            <div className='krest-top'>
                <button className='button-top' onClick={handleInput}><img src={krest}/></button>
            </div>
        </div>
            )
        }

  return (
        <div className="footer">
            {
             isInput ? <button className="footertext" onClick={handleClick}>Избранные</button> : <Search />     
            }            
            {
             isInput ? < button className="footersearch" onClick={handleInput}> <img src={search}/> </button> : <></>
             }
        </div>
  );
}

export default Footer;

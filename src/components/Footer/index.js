import './index.css';
import search from '../../search.svg';
import krest from '../../images/krest.svg';
import { useState } from 'react';



function Footer() {   
    const [isInput, setInput] = useState(false)
    function handleInput() {
        setInput((prevState) => !prevState);
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
             isInput ? <button className="footertext">Избранные</button> : <Search />     
            }            
            {
             isInput ? < button className="footersearch" onClick={handleInput}> <img src={search}/> </button> : <></>
             }
        </div>
  );
}

export default Footer;

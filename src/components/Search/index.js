import './index.css';

function Search(props) {

    return (
        <div className='krest-table'>
            <input className='input' value={props.isValue} onChange={props.handleChange}/>
            <div className='krest-top'>
                <button className='button-top' onClick={props.handleInput}><img src={props.krest}/></button>
            </div>
        </div>
            );
        }

export default Search;
import './index.css';
import empty from '@images/empty.png'

const CardSearch = () => (
        <div className="cardSearch">
            <div className="cardSearch_style">
              <img src={empty}/>
            </div>
            <div className="cardSearch_notResult">Начинайте вводить</div>
        </div>
      );
    
  
  export default CardSearch;
import './index.css';
import empty from '../../empty.png'

function CardSearch() {
    return (
        <div className="cardSearch">
          <div className="style"><img src={empty}/></div>
            <div className="notResult">Начинайте вводить</div>
          <div className="cardrazmett">
          </div>
        </div>
      );
    }
  
  export default CardSearch;
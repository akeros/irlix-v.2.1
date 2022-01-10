import './index.css';
import empty from '../../empty.svg'

function CardSearch() {
    return (
        <div className="card">
          <button className="style"><img src={empty}/></button>
         <div className="notResult">Начинайте вводить</div>
          <div className="cardrazmett">
          </div>
        </div>
      );
    }
  
  export default CardSearch;
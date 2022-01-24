import './cardsearch.css';
import empty from '@images/empty.png'

export const CardSearch = () => (
    <div className="cardSearch">
        <div className="cardSearch_style">
            <img src={empty} alt='logo'/>
        </div>
        <div className="cardSearch_notResult">Начинайте вводить</div>
    </div>
    );
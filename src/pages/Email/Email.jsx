import {useSelector} from "react-redux";
import {Card} from "@components/Card";

export const Email = () =>  {
    const favorites = useSelector((state => state.app.favorites));
    const cards = useSelector((state => state.app.cards));
 
    return (
        <div className="card-list">
            {cards.filter(card => favorites.includes(card.id)).map((item) => (
                <Card
                    img={item.img}
                    percents={item.percents}
                    title={item.title}
                    description={item.description}
                    key={item.id}
                    id={item.id}
                    isEmpty={item?.isEmpty}
                />
            ))}
        </div>
    )
}
  
export default Email;
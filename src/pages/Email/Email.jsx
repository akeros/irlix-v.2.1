import {useSelector} from "react-redux";
import {Card} from "@components/Card";
import {CardEmpty} from "@components/CardSearch";

export const Email = () =>  {
    const favorites = useSelector((state => state.app.favorites));
    const cards = useSelector((state => state.app.cards));
 
    return (
        <div className="card-list">
            { favorites?.length ?
                cards.filter(card => favorites.includes(card.id)).map((item) => (
                    <Card
                        img={item.img}
                        percents={item.percents}
                        title={item.title}
                        description={item.description}
                        key={item.id}
                        id={item.id}
                        isEmpty={item?.isEmpty}
                    />
                )) : <CardEmpty text={"Вы еще ничего не добавили в закладки"}/>
            }
        </div>
    )
}

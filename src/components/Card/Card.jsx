import "./card.scss";
import {Button} from "@components/Button";
import empty from "@images/empty.png";
import {descriptionUrl} from "src/utils/routes";
import {useDispatch, useSelector} from "react-redux";
import {useToast} from "@hooks/useToast";
import {toggleFavorite} from "@redux/AppSlice";
import {Link} from "react-router-dom";
import { cn } from '@bem-react/classname'
import { withNaming } from '@bem-react/classname'



export const Card = ({img, percents, title, description, id, isEmpty}) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state => state.app.favorites));

  const isFavorite = favorites.includes(id);

  const { handlerToast } = useToast();

  const favoriteClick = () => {
    if (!isFavorite) {
      handlerToast("Добавлено в избранное");
    }
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={ isEmpty ? "cardEmpty" : "col" } >
      <div className="card">
        <Link className="card__link" to={!isEmpty && `${descriptionUrl}/${id}`}>
            <img className="card__image" alt="logo" src={isEmpty ? empty : img}/>
        </Link>
        {isEmpty
          ? <div className="card__Result">Нет результатов</div>
          : (
            <>
              <div className="card__card-black">
                <div className="card__percents">{percents}%</div>
                <div className="card__type">Алкоголь</div>
              </div>
              <Button className="card__flag" isFavorite={isFavorite} onClick={favoriteClick} />
            </>
          )
        }
        <div className="card__text">
          <div className="card__title">{title}</div>
          <div className="card__subtitle">{description}</div>
        </div>
      </div>
    </div>
  );
}



const cat = cn('Cat')

cat() // Cat
cat({ size: 'm' }) // Cat Cat_size_m
cat('Tail') // Cat-Tail
cat('Tail', { length: 'small' }) // Cat-Tail Cat-Tail_length_small

const dogPaw = cn('Dog', 'Paw')

const catdog = cn("cat","dog");
catdog({color: "black", type: "animal", exists: true})
console.log(catdog());

dogPaw() // Dog-Paw
dogPaw({ color: 'black', exists: true }) // Dog-Paw Dog-Paw_color_black Dog-Paw_exists


// mixes

cat(null, ['Dog']) // Cat Dog
cat({ size: 'm' }, ['Dog', 'Horse']) // Cat Cat_size_m Dog Horse

cat('Tail', [dogPaw()]) // Cat-Tail Dog-Paw
cat('Tail', { length: 'small' }, [dogPaw({ color: 'black' })]) // Cat-Tail Cat-Tail_length_small Dog-Paw Dog-Paw_color_black


// const cn = withNaming({ n: 'ns-', e: '__', m: '_', v: '_' })

cn('block', 'elem')({ theme: 'default' }) // ns-block__elem_theme_default
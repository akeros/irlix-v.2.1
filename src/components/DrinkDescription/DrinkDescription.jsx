import "./drinkdescription.scss";

export const DrinkDescription = ({title, value, valueType, dots}) => (
    <div className="inner">
        <div className="inner-dots">{`${title}\u00A0${dots()}`}</div>
        <div className="inner-text-right">{value}{valueType}</div>
    </div>
    );
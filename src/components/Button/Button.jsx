import flag from '@images/flag.svg';
import flaggrey from '@images/flaggrey.svg';

export const Button = ({isFavorite, onClick, className}) => {
return (
    <button className={className} onClick={onClick}>
        <img src={isFavorite ? flag : flaggrey} alt='logo'/>
    </button>
);
}


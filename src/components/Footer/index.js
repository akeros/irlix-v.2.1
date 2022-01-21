import './index.css';
import search from '@images/search.svg'
import {useNavigate} from 'react-router';
import Search from '../Search';
import {useLocation} from "react-router-dom";
import {baseUrl, favoritesUrl, searchUrl} from "@utils/routes";

const Footer = () =>  {
  const navigate = useNavigate();
  const { pathname } = useLocation();


  const isFavoritesUrl = pathname === favoritesUrl; // разделить компоненты
  const isSearchUrl = pathname === searchUrl;// разделить компоненты

  const show = () => {
    navigate(searchUrl);
  }

  const handleClick = () => {
    navigate(isFavoritesUrl ? baseUrl : favoritesUrl)
  }

  return (
    <div className="footer">
      {isSearchUrl
        ? <Search />
        : (
          <>
            <button className="footer-text" onClick={handleClick}>
              {isFavoritesUrl ? 'Назад' : 'Избранные'}
            </button>
            <button className="footer-search" onClick={show}>
              <img src={search} alt='logo'/>
            </button>
          </>
        )
      }
    </div>
  );
}

export default Footer;

// const FooterOne = () =>  {
//   const navigate = useNavigate();
//   const { pathname } = useLocation();


//   const isFavoritesUrl = pathname === favoritesUrl; // разделить компоненты
//   const isSearchUrl = pathname === searchUrl;// разделить компоненты

//   const show = () => {
//     navigate(searchUrl);
//   }

//   const handleClick = () => {
//     navigate(isFavoritesUrl ? baseUrl : favoritesUrl)
//   }

//   return (
//     <div className="footer">
//       {isSearchUrl
//         ? <Search />
//         : (
//           <>
//             <button className="footer-text" onClick={handleClick}>
//               {isFavoritesUrl ? 'Назад' : 'Избранные'}
//             </button>
//             <button className="footer-search" onClick={show}>
//               <img src={search} alt='logo'/>
//             </button>
//           </>
//         )
//       }
//     </div>
//   );
// }

// export default FooterOne;
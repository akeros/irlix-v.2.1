import "./footer.css";
import search from "@images/search.svg"
import {useNavigate} from "react-router";
import {baseUrl, searchUrl} from "src/utils/routes";

export const FavoriteFooter = () =>  {
    const navigate = useNavigate();
  
    const showFooter = () => {
      navigate(searchUrl);
    }
  
    const handleClick = () => {
      navigate(baseUrl);
    }
  
    return (
      <>
        <button className="footer-text" onClick={handleClick}>
          Назад
        </button>
        <button className="footer-search" onClick={showFooter}>
          <img src={search} alt="logo"/>
        </button>
      </>
    );
  }
  
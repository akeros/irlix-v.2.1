import "./hooks.css";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearToast, showToast} from "../Redux/AppSlice";

export const useToast = () => {
  const dispatch = useDispatch();
  const isToastVisible = useSelector(state => state.app.isToastVisible);
  const toastText = useSelector(state => state.app.toastText);

  useEffect(() => {
    if (isToastVisible) {
      const timeoutId = setTimeout(() => {
        dispatch(clearToast())
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      }
    }
  }, [isToastVisible, dispatch]);

  const handlerToast = (text) => {
    dispatch(showToast(text))
  }

  const renderToast = () => isToastVisible && (
    <div className="upper-favorite">
        <div className="upper-favorite-text">
            {toastText}
        </div>
    </div>
  )

  return { renderToast, handlerToast };
};

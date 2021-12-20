import './index.css';
import { useEffect, useState } from 'react';

export const useToast = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (visible) {
      const timeoutId = setTimeout(() => {
        setVisible(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      }
    }
  }, [visible]);

  const handlerToast = (text) => {
    setTitle(text);
    setVisible(true);
  }

  const renderToast = () => visible && (
    <div className='upper-favorite'>
        <div className='upper-text'>
            { title }
        </div>
    </div>
  )

  return { renderToast, handlerToast };
};

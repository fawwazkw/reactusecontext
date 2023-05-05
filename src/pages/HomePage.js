import { useContext, useEffect } from 'react';
import { CommonContext } from '../contexts/CommonContext';

const HomePage = () => {
  const { state } = useContext(CommonContext);

  useEffect(() => {
    document.title = state.title;
    const navbar = document.querySelector('.navbar');
    navbar.style.backgroundColor = state.color;
  }, [state]);

  return (
    <div>
      <h1>Welcome to my website</h1>
    </div>
  );
};

export default HomePage;

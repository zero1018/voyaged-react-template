import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const goAboutPage = () => {
    navigate('/about');
  };

  return (
    <div>
      <button className={'text-6xl'} onClick={goAboutPage}>点击跳转到about页面，我爱你们</button>
    </div>
  );
}

export default Home;

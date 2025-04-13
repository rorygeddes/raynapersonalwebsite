import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import './Layout.scss';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? <Preloader /> : (
        <div className="layout">
          <Header />
          <div className="outlet-container">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;

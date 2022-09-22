import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaArrowCircleUp } from 'react-icons/fa';

import Header from 'apps/trinity-front/src/app/components/Header';
import Footer from 'apps/trinity-front/src/app/components/Footer';

import './MainLayout.css';

const MainLayout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const { pathname, hash, key } = useLocation();

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    let timeout;
    window.addEventListener('scroll', toggleVisible);

    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      timeout = window.setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener('scroll', toggleVisible);
    };
  }, [pathname, hash, key]);

  return (
    <main>
      <button
        className="buttonTop"
        style={{ display: visible ? 'inline' : 'none' }}
      >
        <FaArrowCircleUp onClick={scrollToTop} />
      </button>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;

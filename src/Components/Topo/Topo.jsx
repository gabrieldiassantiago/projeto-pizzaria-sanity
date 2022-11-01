import styles from './Topo.module.scss';
import Image from 'next/image';
import Navlinks from './Navlinks';
import { useEffect, useState } from 'react';

import logo from './logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isNavbarShow, setIsNavbarShow] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  if (isNavbarShow == true) {
    console.log('ok')
  }

  useEffect(() => {
    const setNavbarHandler = () => {
      if (window.scrollY >= 600) return setIsNavbarShow(true);
      return setIsNavbarShow(false);
    };

    document.addEventListener('scroll', setNavbarHandler);

    return () => {
      document.removeEventListener('scroll', setNavbarHandler);
    };
  }, []);

  const toggleMenuHandler = () => setIsMenu(!isMenu);

  return (
    <section
      className={`${styles['navbar-wrapper']} ${
        isNavbarShow && styles.active
      }`}>
      <div className={styles.navbar}>
        <a href='#'>
          <Image src={logo.src} width={180} height={38} />
        </a>
        <nav className={styles.links}>
          <Navlinks toggleMenu={null} />
        </nav>

        <GiHamburgerMenu className={styles.icon} onClick={toggleMenuHandler} />
        <nav className={`${styles.burger} ${isMenu && styles.active}`}>
          <Navlinks toggleMenu={toggleMenuHandler} />
        </nav>
        <div className={`${styles.background} ${isMenu && styles.active}`} />
      </div>
    </section>
  );
};

export default Navbar;
import {Link, useLocation} from 'react-router-dom';

import headerLogo from '../../resources/img/logo.png';

import './_header.scss';

const Header = ({setActiveMenu}) => {
  const {pathname} = useLocation();

  function setHireBtnStyles() {
    if (pathname === '/belivePage' || pathname === '/contactPage') {
      return {
        pointerEvents: "auto",
        opacity: 1
      }
    } else {
      return {
        pointerEvents: "none",
        opacity: 0
      }
    }
  }


  return (
    <header className="header">
      <Link to="/" className="header__logo">
      <div className="header__img">
          <img src={headerLogo} alt="logo"/>
      </div>
      <span>GLOBAL</span>
      </Link>
      <Link
        to="/requestPage"
        className="btn btn_header"
        style={setHireBtnStyles()}>
          hire us
        </Link>
      <div
        className="header__menu"
        onClick={() => setActiveMenu(true)}>
          <span></span>
      </div>
    </header>
  )
};

export default Header;

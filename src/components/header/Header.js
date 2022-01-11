import {Link} from 'react-router-dom';

import headerLogo from '../../resources/img/logo.png';

import './_header.scss';

const Header = ({setActiveMenu}) => {

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <div className="header__img">
            <img src={headerLogo} alt="logo"/>
        </div>
        <span>GLOBAL</span>
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

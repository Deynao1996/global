import { Link, useLocation } from 'react-router-dom'
import headerLogo from '../../resources/img/logo.png'

import './_header.scss'

const Header = ({ setActiveMenu }) => {
  const { pathname } = useLocation()

  function setHireBtnStyles() {
    if (pathname === '/believePage' || pathname === '/contactPage') {
      return {
        pointerEvents: 'auto',
        opacity: 1
      }
    } else {
      return {
        pointerEvents: 'none',
        opacity: 0
      }
    }
  }

  return (
    <header className="header">
      <div>
        <Link to="/" className="header__logo">
          <div className="header__img">
            <img src={headerLogo} alt="logo" />
          </div>
          <span>GLOBAL</span>
        </Link>
      </div>
      <div>
        <Link
          to="/request"
          className="btn btn_header"
          style={setHireBtnStyles()}
        >
          hire us
        </Link>
      </div>

      <div className="header__menu">
        <button
          className="header__box"
          // tabIndex={1}
          onClick={() => setActiveMenu(true)}
          aria-label="Open Menu"
        >
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header

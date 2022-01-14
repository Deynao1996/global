import React, {useState, useRef} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

import PerspectiveMenu from '../perspectiveMenu/PerspectiveMenu';
import Header from '../header/Header';
import Nav from '../nav/Nav';

import './_perspective.scss';

const Perspective = ({children}) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);
  const touchDirection = useRef(null);

  function onTouchStart(e) {
   touchStartRef.current = e.touches[0].clientY;
  }

  function changeRouteUp(pathname) {
    switch (pathname) {
      case '/':
        navigate('/requestPage');
        break;
      case '/requestPage':
        navigate('/contactPage');
        break;
      case '/contactPage':
        navigate('/belivePage');
        break;
      case '/belivePage':
        navigate('/worksPage');
        break;
      case '/worksPage':
        navigate('/');
        break;
      default:
        navigate('/');
    }
  }

  function changeRouteDown(pathname) {
    switch (pathname) {
      case '/':
        navigate('/worksPage');
        break;
      case '/worksPage':
        navigate('/belivePage');
        break;
      case '/belivePage':
        navigate('/contactPage');
        break;
      case '/contactPage':
        navigate('/requestPage');
        break;
      case '/requestPage':
        navigate('/');
        break;
      default:
        navigate('/');
    }
  }

  function onTouchRouting(e) {
   touchEndRef.current = e.changedTouches[0].clientY;
   touchDirection.current = touchEndRef.current - touchStartRef.current;
   
   if (touchDirection.current === 0) {
     return;
   } else if (touchDirection.current > 0) {
     changeRouteUp(pathname);
   } else {
     changeRouteDown(pathname);
   }
  }

  function onScrollRouting(e) {
    const delta = e.deltaY;

    if (delta < 0) {
      changeRouteUp(pathname);
    } else {
      changeRouteDown(pathname);
    }
  }


  return (
    <div className="perspective">
      <div className={activeMenu ? 'app app_transform' : 'app'}>
        <div
          className="container"
          onTouchStart={(e) => onTouchStart(e)}
          onTouchEnd={(e) => onTouchRouting(e)}
          onWheel={(e) => onScrollRouting(e)}>
          <Header
            setActiveMenu={setActiveMenu}/>
            <Nav />
              {children}
        </div>
      </div>
      {activeMenu ?
        <PerspectiveMenu
          setActiveMenu={setActiveMenu}/> :
          null}
    </div>
  )
}

export default Perspective;

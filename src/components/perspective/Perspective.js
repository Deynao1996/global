import React, {useState} from 'react';

import PerspectiveMenu from '../perspectiveMenu/PerspectiveMenu';
import Header from '../header/Header';
import Nav from '../nav/Nav';

import './_perspective.scss';

const Perspective = ({children}) => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className="perspective">
      <div className={activeMenu ? 'app app_transform' : 'app'}>
        <div className="container">
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

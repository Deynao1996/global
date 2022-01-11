import {Routes, Route, useLocation} from "react-router-dom";
import {useTransition, animated} from 'react-spring'

import PromoPage from '../pages/promoPage/PromoPage';
import WorksPage from '../pages/worksPage/WorksPage';
import BelivePage from '../pages/belivePage/BelivePage';
import ContactPage from '../pages/contactPage/ContactPage';
import RequestPage from '../pages/requestPage/RequestPage';

const AnimatedRoutes = () => {

  const location = useLocation();

  const transitions = useTransition(location, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    delay: 200,
    config: {
      duration: 800
    }
  })

  return (
    transitions((config, item) => (
      <animated.div style={config}>
        <div style={{position: 'absolute', width: '100%', height: '100%'}}>
          <Routes location={item}>
            <Route path="/" element={<PromoPage />}/>
            <Route path="/worksPage" element={<WorksPage />}/>
            <Route path="/belivePage" element={<BelivePage />}/>
            <Route path="/contactPage" element={<ContactPage />}/>
            <Route path="/requestPage" element={<RequestPage />}/>
          </Routes>
        </div>
      </animated.div>
    ))
  )
};

export default AnimatedRoutes;

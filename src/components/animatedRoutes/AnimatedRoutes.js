import React, { useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'

import PromoPage from '../pages/promoPage/PromoPage'
import WorksPage from '../pages/worksPage/WorksPage'
import ContactPage from '../pages/contactPage/ContactPage'
import RequestPage from '../pages/requestPage/RequestPage'
import BelievePage from '../pages/believePage/BelievePage'

const routesArr = [
  { path: '/', element: <PromoPage /> },
  { path: '/works', element: <WorksPage /> },
  { path: '/believe', element: <BelievePage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/request', element: <RequestPage /> }
]

const AnimatedRoutes = () => {
  const location = useLocation()
  const firstMountingRef = useRef(true)
  const prevRouteRef = useRef(location.pathname)

  const leaveStyles = {
    ...setTransformDirection(prevRouteRef.current, location.pathname),
    opacity: 0
  }

  const transitions = useTransition(location, {
    from: { transform: 'translateY(0px)', opacity: 0 },
    enter: { transform: 'translateY(0px)', opacity: 1 },
    leave: leaveStyles,
    trail: 500,
    delay: !firstMountingRef.current && 300,
    onStart: () => (prevRouteRef.current = location.pathname),
    onRest: () => (firstMountingRef.current = false),
    config: {
      duration: 500
    }
  })

  function setTransformDirection(prevPath, currentPath) {
    if (currentPath !== prevPath) {
      const currentIndex = routesArr.findIndex(
        (item) => item.path === currentPath
      )
      const prevIndex = routesArr.findIndex((item) => item.path === prevPath)

      if (currentIndex < prevIndex) {
        return {
          transform: 'translateY(50px)'
        }
      } else {
        return {
          transform: 'translateY(-50px)'
        }
      }
    }
  }

  return transitions((config, item) => (
    <animated.div style={config}>
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <Routes location={item}>
          {routesArr.map(({ path, element }, i) => (
            <React.Fragment key={i}>
              <Route path={path} element={element} />
            </React.Fragment>
          ))}
        </Routes>
      </div>
    </animated.div>
  ))
}

export default AnimatedRoutes

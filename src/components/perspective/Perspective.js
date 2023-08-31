import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import PerspectiveMenu from '../perspectiveMenu/PerspectiveMenu'
import Header from '../header/Header'
import Nav from '../nav/Nav'

import './_perspective.scss'

const Perspective = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false)
  const [isAnimation, setIsAnimation] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const touchStartRef = useRef(null)
  const touchEndRef = useRef(null)
  const touchDirection = useRef(null)

  function onTouchStart(e) {
    touchStartRef.current = e.touches[0].clientY
  }

  function changeRouteUp(pathname) {
    switch (pathname) {
      case '/':
        navigate('/request')
        break
      case '/request':
        navigate('/contact')
        break
      case '/contact':
        navigate('/believe')
        break
      case '/believe':
        navigate('/works')
        break
      case '/works':
        navigate('/')
        break
      default:
        navigate('/')
    }
  }

  function changeRouteDown(pathname) {
    switch (pathname) {
      case '/':
        navigate('/works')
        break
      case '/works':
        navigate('/believe')
        break
      case '/believe':
        navigate('/contact')
        break
      case '/contact':
        navigate('/request')
        break
      case '/request':
        navigate('/')
        break
      default:
        navigate('/')
    }
  }

  function onTouchRouting(e) {
    touchEndRef.current = e.changedTouches[0].clientY
    touchDirection.current = touchEndRef.current - touchStartRef.current

    if ((touchDirection.current <= 40) & (touchDirection.current >= -40)) {
      return
    } else if (touchDirection.current > 40) {
      changeRouteUp(pathname)
    } else {
      changeRouteDown(pathname)
    }
  }

  function onScrollRouting(e) {
    const delta = e.deltaY
    setIsAnimation(true)
    if (delta < 0) {
      changeRouteUp(pathname)
    } else {
      changeRouteDown(pathname)
    }
  }

  useEffect(() => {
    if (!isAnimation) {
      window.addEventListener('wheel', onScrollRouting)
      return () => {
        window.removeEventListener('wheel', onScrollRouting)
      }
    }
  }, [isAnimation])

  useEffect(() => {
    setTimeout(() => {
      setIsAnimation(false)
    }, 2000)
  }, [pathname])

  return (
    <div className="perspective">
      <div className={activeMenu ? 'app app_transform' : 'app'}>
        <div
          className="container"
          onTouchStart={(e) => onTouchStart(e)}
          onTouchEnd={(e) => onTouchRouting(e)}
        >
          <Header setActiveMenu={setActiveMenu} />
          <Nav />
          {children}
        </div>
      </div>
      {activeMenu ? <PerspectiveMenu setActiveMenu={setActiveMenu} /> : null}
    </div>
  )
}

export default Perspective

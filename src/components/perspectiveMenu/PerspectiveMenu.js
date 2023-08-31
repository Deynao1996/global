import { NavLink } from 'react-router-dom'
import { useTransition, animated, config } from 'react-spring'
import { ImCross } from 'react-icons/im'
import './_perspectiveMenu.scss'

const linkContent = [
  { title: 'Home', path: '/' },
  { title: 'Works', path: '/works' },
  { title: 'About', path: '/believe' },
  { title: 'Contact', path: '/contact' },
  { title: 'Hire us', path: '/request' }
]

const svgStyle = { width: '39px', height: '23px', color: 'white' }

function setActiveClass(isActive) {
  return isActive ? 'perspective__menu-item_active' : ''
}

const PerspectiveMenu = ({ setActiveMenu }) => {
  const perspectiveMenuContent = linkContent.map(({ title, path }, i) => {
    return (
      <NavLink
        className={({ isActive }) => setActiveClass(isActive)}
        to={path}
        key={i}
        onClick={() => setActiveMenu(false)}
      >
        {title}
      </NavLink>
    )
  })

  const transitions = useTransition(perspectiveMenuContent, {
    keys: (item) => item.key,
    from: { opacity: 0, right: '10%' },
    enter: { opacity: 1, right: '25%' },
    leave: { opacity: 0, right: '10%' },
    reverse: true,
    delay: (keys) => keys * 100,
    config: config.slow
  })

  return (
    <>
      <ul className="perspective__menu">
        {transitions((style, item, t, i) => (
          <animated.li className="perspective__menu-item" style={style}>
            {item}
          </animated.li>
        ))}
      </ul>
      <button
        className="perspective__menu-button"
        onClick={() => setActiveMenu(false)}
      >
        <ImCross style={svgStyle} role="button" />
      </button>
    </>
  )
}

export default PerspectiveMenu

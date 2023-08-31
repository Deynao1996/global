import { NavLink, useLocation } from 'react-router-dom'

import './_nav.scss'

const btnInfo = [
  { num: '01', label: 'Home', link: '/' },
  { num: '02', label: 'Works', link: '/works' },
  { num: '03', label: 'Believe', link: '/believe' },
  { num: '04', label: 'Contact', link: '/contact' },
  { num: '05', label: 'Request', link: '/request' }
]

const Nav = () => {
  const { pathname } = useLocation()

  const links = btnInfo.map(({ num, label, link, state }, i) => {
    return (
      <li className="nav__link" key={i}>
        <NavLink
          to={link}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <div>{pathname === link ? num : ''}</div>
          <span>{pathname === link ? label : num}</span>
        </NavLink>
      </li>
    )
  })

  return (
    <nav className="nav">
      <ul className="nav__links">{links}</ul>
    </nav>
  )
}

export default Nav

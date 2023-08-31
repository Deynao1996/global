import { NavLink } from 'react-router-dom'
import { useParallax } from '../../../hooks/hook.js'
import promoBg from '../../../resources/img/introduction-visual.png'

import './_promoPage.scss'

const PromoPage = () => {
  const { ParallaxContainer } = useParallax({
    className: 'promo',
    sensitivity: 420
  })

  return (
    <ParallaxContainer>
      <h1 className="promo__title">
        Your next <br />
        interactive <br />
        experience <br />
      </h1>
      <NavLink to="request" className="btn btn_hover btn_hover_promo">
        hire us
        <span>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 150 118"
            fill="white"
          >
            <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
              <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"></path>
            </g>
          </svg>
        </span>
      </NavLink>
      <div className="promo__items">
        <div className="promo__bg">
          <img src={promoBg} alt="bg" />
        </div>
        <div className="promo__item">
          <h2 className="promo__item-title">Web Design:</h2>
          <span>
            We create stunning and responsive websites that suit your needs and
            budget
          </span>
        </div>
        <div className="promo__item">
          <h3 className="promo__item-title">UX Design:</h3>
          <span>
            We optimize the user experience of your web products with research,
            testing, and feedback
          </span>
        </div>
        <div className="promo__item">
          <h3 className="promo__item-title">Graphic Design: </h3>
          <span>
            We craft beautiful and engaging graphics for your web pages, logos,
            banners, and more
          </span>
        </div>
      </div>
    </ParallaxContainer>
  )
}

export default PromoPage

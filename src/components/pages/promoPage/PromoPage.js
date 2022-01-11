import {NavLink} from 'react-router-dom';
import promoBg from '../../../resources/img/introduction-visual.png';

import './_promoPage.scss';

const PromoPage = () => {

  return (
    <div className="promo">
      <div className="promo__bg"><img src={promoBg} alt="bg"/></div>
      <h1 className="promo__title">Your next <br/>
        interactive <br/>
        experience <br/>
      </h1>
      <NavLink to="requestPage" className="btn btn_hover btn_hover_promo">hire us
        <span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 150 118" fill="white">
        <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
        <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"></path>
        </g>
        </svg>
        </span>
      </NavLink>
      <div className="promo__items">
          <div className="promo__item">
            <h2 className="promo__item-title">Metiew & Smith</h2>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</span>
          </div>
          <div className="promo__item">
            <h3 className="promo__item-title">Fantasy interactive</h3>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</span>
          </div>
          <div className="promo__item">
            <h3 className="promo__item-title">Paul & shark</h3>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</span>
          </div>
      </div>
    </div>
  )
};

export default PromoPage;

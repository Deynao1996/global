import aboutVisual from '../../../resources/img/about-visual.png';
import winners from '../../../resources/img/about-winners.jpg';
import philosophy from '../../../resources/img/about-philosophy.jpg';
import history from '../../../resources/img/about-history.jpg';

import './_belivePage.scss';

const BelivePage = () => {

  return (
    <div className="belive">
        <h5 className="belive__title">We <br/> believe in <br/>passionate<br/> people
          <span className="rhombus"></span>
          <span className="triangle"></span>
        </h5>
        <div className="belive__bg" data-animated><img src={aboutVisual} alt="bg"/></div>
        <a href="#" className="btn btn_hover btn_hover_belive">career
          <span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 150 118" fill="white">
          <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
          <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"></path>
          </g>
          </svg>
          </span>
        </a>
        <div className="belive__items">
          <div className="belive__item">
            <div className="belive__item-img">
              <img src={winners} alt="bilive"/>
            </div>
            <span>Winners</span>
          </div>
          <div className="belive__item">
            <div className="belive__item-img">
              <img src={philosophy} alt="bilive"/>
            </div>
            <span>Philosophy</span>
          </div>
          <div className="belive__item">
            <div className="belive__item-img">
              <img src={history} alt="bilive"/>
            </div>
            <span>History</span>
          </div>
        </div>
    </div>
  )
};

export default BelivePage;

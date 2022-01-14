import './_offer.scss';

import headerLogo from '../../resources/img/logo.png';

const Offer = () => {
  return (
    <div className="offer">
      <div className="offer__logo">
        <img src={headerLogo} alt="logo"/>
        <p>GLOBAL</p>
      </div>
      <div className="offer__descr">
        Global has so much to offer that we must request you orient your device to portrait or find a larger screen. You won't be disappointed.
      </div>
    </div>
  )
};

export default Offer;

import {Link} from 'react-router-dom';
import {useParallax} from '../../../hooks/hook';

import './_contactPage.scss';

const ContactPage = () => {

  const {ParallaxContainer} = useParallax({
    className: 'contact'
  });

  return (
    <ParallaxContainer>
      <Link to="/requestPage" className="btn btn_abs">hire us</Link>
      <div className="contact__info">
          <div className="contact__info-adress">Pawia 5,31-154 Kraków, Polanrd</div>
          <div className="contact__info-mail">ouremail@gmail.com</div>
          <div className="contact__info-tel">+48 12 628 75 60</div>
          <button className="btn btn__contact btn__contact_light">behanche</button>
          <button className="btn btn__contact btn__contact_pink">dribble</button>
          <button className="btn btn__contact">contact us</button>
      </div>
    </ParallaxContainer>
  )
};

export default ContactPage;

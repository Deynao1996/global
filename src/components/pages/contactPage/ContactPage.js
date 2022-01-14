import {useParallax} from '../../../hooks/hook';

import './_contactPage.scss';

const ContactPage = () => {

  const {ParallaxContainer} = useParallax({
    className: 'contact'
  });

  return (
    <div className="contact">
      <div className="contact__info">
          <div className="contact__info-adress">Pawia 5,31-154 Kraków, Polanrd</div>
          <div className="contact__info-mail">ouremail@gmail.com</div>
          <div className="contact__info-tel">+48 12 628 75 60</div>
          <button className="btn btn__contact btn__contact_light">behanche</button>
          <button className="btn btn__contact btn__contact_pink">dribble</button>
          <button className="btn btn__contact">contact us</button>
      </div>
    </div>
  )
};

export default ContactPage;

import {useState} from 'react';
import {useParallax} from '../../../hooks/hook';


import MainSlider from "../../mainSlider/MainSlider";

import './_worksPage.scss';

const WorksPage = () => {

  const [imageIndex, setImageIndex] = useState(0);
  const {ParallaxContainer} = useParallax({
    className: 'works'
  });

  return (
    <ParallaxContainer>
        <h3 className="works__title">Selected work</h3>
        <MainSlider
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}/>
    </ParallaxContainer>
  )
};

export default WorksPage;

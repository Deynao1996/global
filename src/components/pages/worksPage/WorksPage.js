import {useState} from 'react';
import {Link} from 'react-router-dom';

import MainSlider from "../../mainSlider/MainSlider";

import './_worksPage.scss';

const WorksPage = () => {

  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="works">
        <Link to="/requestPage" className="btn btn_abs">hire us</Link>
        <h3 className="works__title">Selected work</h3>
        <MainSlider
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}/>
    </div>
  )
};

export default WorksPage;

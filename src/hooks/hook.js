import {useState} from 'react';
import {useSpring, animated} from 'react-spring';

import {FiCheck} from "react-icons/fi";

const useCheckBox = (initial) => {
  const [checkbox, setCheckbox] = useState(initial);

  const onCheck = (setCheckbox, i) => {
    setCheckbox(checkbox => {
      return checkbox.map((item, k) => {
        return k === i ? {...item, isCheck: !item.isCheck} : item
      })
    })
  }

  function renderItems() {
    return checkbox.map(({title, id, isCheck}, i) => {
      return (
        <div
          key={i}
          style={{border: isCheck ? 'none' : '2px solid #ffffff'}}>
            <label
              className={isCheck ? 'request__form-label request__form-label_active' : 'request__form-label'}
              htmlFor={id}
              onClick={() => onCheck(setCheckbox, i)}>
                <FiCheck />{title}
            </label>
            <input className="request__form-checkbox"type="checkbox" id={id}/>
        </div>
      )
    })
  }

  return {renderItems}
}

const useParallax = ({className, sensivity}) => {
  const sens = sensivity ? sensivity : 100;
  const [propss, sets] = useSpring(() => ({xys: [0, 0, sens]}));

  const calc = (x, y, sens) => {
    return [-(y - window.innerHeight / 2) / sens, (x - window.innerWidth / 2) / sens, sens];
  }
  const trans = (x, y) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) translateZ(${x}px)`;
  // const trans = (x, y) => {
  //   console.log(x, y);
  //   return `matrix3d(0.994898, 0, -0.100883, 0, 0.00239437, 0.999718, 0.0236132, 0, 0.100854, -0.0237342, 0.994618, 0, 0, 0, 0, 1)`;
  // }

  const ParallaxContainer = ({children, ...props}) => (
    <animated.div
        {...props}
        className={className}
        onMouseMove={
          ({clientX: x, clientY: y}) => (sets.start({xys: calc(x, y, sens)}))}
        onMouseLeave={() => sets.start({xys:[0, 0, sens]})}
        style={{
            transform: propss.xys.to(trans)
          }}>
          {children}
    </animated.div>
  )

  return {ParallaxContainer}
}


export {useCheckBox, useParallax};

import React from 'react';
import { useLottie } from "lottie-react";
import animationData from '../Animation/animation_win.json'; 

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
    <div className='animation-style'>
      {View}
    </div>
    </>
  );
};

export default LottieAnimation;

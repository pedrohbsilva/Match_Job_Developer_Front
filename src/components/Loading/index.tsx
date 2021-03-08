import React from 'react';
import Lottie from 'react-lottie';
import { Container } from './styles';
import { LoadingProps } from '../../interfaces';

/**
 * @summary This component renders an animation using Lottie.
 * @param {Record<string, unknown>} animation - is a property that receives an animation in json to use.
 * @param {number} height - it is a property that receives a height to define the animation.
 * @param {number} width - is a property that is given a width to define the animation.
 * @return {ReturnValueDataTypeHere} Returns a screen loading animation.
 */

const Loading: React.FC<LoadingProps> = ({
  animation,
  height,
  width,
}: LoadingProps) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animation.default,
  };

  return (
    <Container>
      <Lottie options={options} width={width} height={height} />
    </Container>
  );
};

export default Loading;

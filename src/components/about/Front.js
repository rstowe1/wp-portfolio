import React from 'react';
import styled from 'styled-components';

import ImageArea from './ImageArea';
import MainArea from './MainArea';

const Fro = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: block;
  background: white;
  box-shadow: 10px 10px 5px rgb(95, 77, 99);
  padding: 10px;
  position: absolute;
  border-radius: 10px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: -webkit-transform ease 500ms;
  transition: transform ease 500ms;
  z-index: 2;
  transform: rotateY(0deg);
  /* front tile styles go here! */
`;

const Front = () => {
  return (
    <Fro className="front">
      <ImageArea />
      <MainArea />
    </Fro>
  )
}


export default Front;
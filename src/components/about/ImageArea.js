import React from 'react';
import styled from 'styled-components';

const ImageCont = styled.div`
 position: relative;
`;

const ImageCard = styled.img`
  width: 100%;
  height: 450px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 34px;
  position: absolute;
  margin-bottom: 10px;
  margin-left: 10px;
  bottom: 0;
  left: 0;
  color: white;
`;

const ImageArea = () => {

  return (
    <ImageCont className="image-container">
      <ImageCard className="card-image" src="https://media.licdn.com/dms/image/C4E03AQECnCWB0jnMmg/profile-displayphoto-shrink_200_200/0?e=1573084800&v=beta&t=WR2C0_LrM9YgBVeUGx0ZuKnX7hkEFJkIAOSe1ezR8R4"/>
      <Title className="title">Ryan W. Stowe</Title>
    </ImageCont>
  )
}

export default ImageArea;
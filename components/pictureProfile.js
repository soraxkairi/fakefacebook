import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 55%;
  align-items: left;
  bottom: 53px;
  border-radius:64px
`;

const Border = styled.View`
width: 30px; 
  height: 30px; 
  border-radius:100px;
  border:3px;
  bottom:85px;
  left: 100px;
  background:#07BB15;

`;

const CircularImage = styled.Image`
  width: 200px; 
  height: 200px; 
  border-radius:100px;
  border:5px;
  bottom:50px;
  color: #0F15F0;
  right: 45px;
`;

const ImageCircle = () => {
    return (
      <Container>
        <CircularImage source={require('../assets/28.jpg')} style={{ borderColor: "#3a86e9" }} />
        <Border/>
      </Container>
    );
  };

export default ImageCircle;
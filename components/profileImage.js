import React from "react";
import styled from "styled-components/native";
import ImageCircle from "./pictureProfile";

const Container = styled.View`
  width:100%;
  align-items: center;
  padding:0px;
`;

const Image = styled.Image`
  width: 700px;
  height: 250px;
`;

const ProfileImage = ({ source }) => {
  return (
    <Container>
      <Image source={source}/>
      <ImageCircle/>
    </Container>
  );
}

export default ProfileImage;
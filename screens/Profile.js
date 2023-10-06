import react from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import ProfileToolBar from "../components/profileToolBar";
import Avatar from "../components/Avatar";
import ProfileImage from "../components/profileImage";
import { ScrollView } from "react-native";
import ImageCircle from "../components/pictureProfile";
import fakeUsers from "../data/fakedata.js";

const Container = styled.View`
  align-items: center;
  height: 500px;
`;

const Name = styled.Text`
font-size: 40px;
color: #424040;
bottom: 100px;
`

const Separator = styled.View`
width: 1px;
height: 26px;
background: #F0F0F0;
`

const Profile = () => {
  return (
    <Container>
      <ProfileToolBar />
      <ScrollView>
     <Separator/>
      <ProfileImage source={require("../assets/profileImage.jpg")} />
      <Name> JACKY FROST</Name>
      </ScrollView>
    </Container>
  );
}

export default Profile;


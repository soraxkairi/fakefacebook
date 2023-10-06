import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import fakeStories from "../data/fakeStories";
import Avatar from "./Avatar";

const Container = styled.View`
  width: 100%;
  height: 33px;
`;

const Row = styled.View`
  flex-direction: row;
  background: #FFFFFF;
  width: 100%;
  padding: 0 30px;
  align-items: center;
`;

const InputContainer = styled.View`
  flex: 1;
  height: 40px;
  padding: 0 8px;
  border: 1px solid #DDD;
  margin: 10px;
  border-radius: 30px;
  background: #F0F0F0;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  padding-left: 10px;
  font-size: 16px;
  color: #000;
`;

const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background: #DDDDDD;
`;

const Menu = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
`;

const MenuText = styled.Text`
  padding-left: 11px;
  font-weight: 500;
  font-size: 12px;
`;

const Separator = styled.View`
  width: 1px;
  height: 26px;
  background: #F0F0F0;
`;

const Searching = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
`;

const ProfileToolBar = () => {
  return (
    <Container>
      <Searching>
        <Row>
          <MaterialCommunityIcons name="chevron-left" size={40} color={"#FFFFFF"} />
          <InputContainer>
            <MaterialCommunityIcons name="magnify" size={25} color={"#888888"} style={{ marginRight: 5 }} />
            <Input placeholder="Search people" />
          </InputContainer>
          <MaterialCommunityIcons name="account-box-multiple" size={35} color={"#FFFFFF"} />
        </Row>
      </Searching>
    </Container>
  );
};

export default ProfileToolBar;


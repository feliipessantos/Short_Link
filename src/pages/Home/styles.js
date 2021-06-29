import styled from "styled-components";
import { Platform, Text, TextInput } from "react-native";

export const ContainerLogo = styled.View`
align-items: center;
justify-content: center;
margin-top: ${Platform.OS === 'ios' ? 35+'px' : 15+'px'}
`;

export const Logo = styled.Image`
width: 150px;
height: 150px;
`;

export const ContainerContent = styled.View`
margin-top: ${Platform.OS === 'ios' ? 25+'%' : 15+'%'}

`;

export const Title = styled.Text`
font-size: 35px;
color: #fff;
font-weight: bold;
text-align: center;
`;

export const SubTitle = styled.Text`
font-size: 18px;
color: #fff;
text-align: center;
padding-bottom: 10%;
`;

export const ContainerInput = styled.View`
text-align: center;
width: 100%;
flex-direction: row;
border-radius: 7px;
margin: 15px 0;
padding-left: 15px;
padding-right: 15px;

`;

export const BoxIcon = styled.View`
align-items: center;
justify-content: center;
width: 10%;
height: 50px;
padding-left: 10px;
background-color: rgba(255, 255, 255, 0.15);
border-top-left-radius: 7px;
border-bottom-left-radius: 7px;
`;


export const Input = styled.TextInput`
align-items: center;
justify-content: center;
width: 90%;
height: 50px;
padding: 10px;
background-color: rgba(255, 255, 255, 0.15);
border-top-right-radius: 7px;
border-bottom-right-radius: 7px;
font-size: 17px;
`;

export const ButtonLink = styled.TouchableOpacity`
align-items: center;
justify-content: center;
height: 45px;
margin: 0 15px;
background-color: #fff;
border-radius: 7px;
margin-bottom: 15px;
`;

export const ButtonLinkText = styled.Text`
font-size: 18px;
`;
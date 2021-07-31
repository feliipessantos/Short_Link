import React from 'react';
import { View, Text } from 'react-native';

import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';
import StatusBarPage from '../../components/StatusBarPage';
import { Container, Title, ListLinks } from './styles';
  
export default function MyLinks(){
    return (
        <Container>
            <StatusBarPage 
            barStyle="light-content"
            backgroundColor="#132742"
        />
        

        <Title>Meus Links</Title>

        <ListLinks 
            data={[{id: 1, link: 'teste.com'}]}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <ListItem data={item}/>}
            contentContainerStyle={{paddingBottom: 22}}
            showsVerticalScrollIndicator={false}
        />

        </Container>
    )
}



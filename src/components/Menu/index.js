import React from 'react';

import { ButtonMenu } from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
  
export function Menu(){
    const navigation = useNavigation();

    return (
        <ButtonMenu onPress={() => navigation.openDrawer() } >
            <Feather name="menu" size={40} color="#fff" />
        </ButtonMenu>
    )
}
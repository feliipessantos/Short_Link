import React, { useState, useEffect } from 'react';


import { Menu } from '../../components/Menu';
import { ModalLink } from '../../components/ModalLink';
import ListItem from '../../components/ListItem';
import StatusBarPage from '../../components/StatusBarPage';
import { Container, Title, ListLinks, Warning, ContainerEmpty } from './styles';
import { useIsFocused } from '@react-navigation/core';
import { Modal, ActivityIndicator } from 'react-native';

import {getLinkSave, deleteLink} from '../../utils/storedLinks';
  
export default function MyLinks(){
    const isFucused = useIsFocused();

    const[links, setLinks] = useState([]);
    const[data, setData] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getLinks(){
            const result = await getLinkSave('links');
            setLinks(result);
            setLoading(false);
        }

        getLinks();
    }, [isFucused])

    function handleItem(item){
        setData(item);
        setModalVisible(true);
    }

    async function handleDelete(id){
        const result = await deleteLink(links, id);
        setLinks(result);
    }


    return (
        <Container>
            <StatusBarPage 
            barStyle="light-content"
            backgroundColor="#132742"
            />
        
            <Menu />   

            <Title>Meus Links</Title>

            { loading && (
                <ContainerEmpty>
                    <ActivityIndicator color="#FFF"size={25} />
                </ContainerEmpty>
            )}

            {!loading && links.length === 0 && (
                <ContainerEmpty>
                    <Warning>Você não possui nenhum link</Warning>
                </ContainerEmpty>
            )}

            <ListLinks 
                data={links}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <ListItem data={item} 
                selectedItem={handleItem} deleteItem={handleDelete} />}
                contentContainerStyle={{paddingBottom: 22}}
                showsVerticalScrollIndicator={false}
            />

            <Modal visible={modalVisible} transparent animationType='slide'>
                <ModalLink onClose={() => setModalVisible(false)}
                data={data}/>
            </Modal>  

        </Container>
    )
}



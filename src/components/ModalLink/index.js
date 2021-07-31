import React from 'react';
import { TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native';

import { ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl} from './styles';
import { Feather } from '@expo/vector-icons';
import  ClipBoard  from 'expo-clipboard';

export function ModalLink({ onClose, data }){
    function copyLink(){
        ClipBoard.setString(data.link);
        alert('Copiado')
    }

    async function handleShare(){
        try {
            const result = await Share.share({
                message: `Link: ${data.link}`
            });

            if(result.action === Share.sharedAction){
                if(result.activityType){
                    console.log('ActivityType');
                }else{
                    //compartilhou
                    console.log('Sucesso');
                }
            } else if (result.action === Share.dismissedAction){
                console.log('Modal fechado')
            }
        }catch(error){
            console.log(error.message);
        }
    }

    return (
        <ModalContainer>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={{flex: 1}}></View>
            </TouchableWithoutFeedback>
            <Container>
                <Header>
                    <TouchableOpacity onPress={onClose}>
                        <Feather name="x" color="#212743" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="share" color="#212743" size={30} onPress={handleShare}/>
                    </TouchableOpacity>
                </Header>

                <LinkArea>
                    <Title>Short Link</Title>
                        <LongUrl numberOfLines={1}>
                            {data.long_url}
                        </LongUrl>
                    <ShortLinkArea
                        activeOpacity={1}
                        onPress={copyLink}
                    >
                        <ShortLinkUrl numberOfLines={1}>{data.link}</ShortLinkUrl>
                        <TouchableOpacity onPress={copyLink}>
                            <Feather name="copy" color="#fff" size={25} />
                        </TouchableOpacity>
                    </ShortLinkArea>
                </LinkArea>
            </Container>
        </ModalContainer>
    );
}
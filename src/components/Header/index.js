import React from 'react';

import { Container, Logo, Top, Title } from './styles';
import logo from '../../assets/Nubank_Logo.png';
import arrowImg from '../../assets/arrow.png';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Header(){
    return(
        <Container>
            <Top>
                <Logo source={logo}/>
                <Title>Leonardo</Title>
            </Top>
           <Icon name='keyboard-arrow-down' size={20} color='#FFF'/>
        </Container>
    )
}
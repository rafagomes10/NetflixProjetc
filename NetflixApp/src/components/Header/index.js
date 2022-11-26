import React from "react";
import { TextoHeader, LogoIcone, ViewTeste } from './styles';
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import coneImage from "../../../assets/logo-compact.png";

export default function Header() {

    return (
        <LinearGradient
            colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}
            style={{
                position: 'absolute',
                alignItems: 'center',
                width: '100%',
                top: 0,
                zIndex: 999,
            
            }}>
            <ViewTeste >
                <LogoIcone source={coneImage}/>
                <TouchableOpacity onPress={() => console.log('Pressed')}>
                    <TextoHeader>
                        Séries
                    </TextoHeader>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Pressed')}>
                    <TextoHeader>
                        Filmes
                    </TextoHeader>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Pressed')}>
                    <TextoHeader>
                        Minha Lista
                    </TextoHeader>
                </TouchableOpacity>
            </ViewTeste>
        
        </LinearGradient>

    )

}
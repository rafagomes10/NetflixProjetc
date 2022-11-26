import React from 'react';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { TesteView, LogoIcone, Logo2 } from './styles';
export const CardPrevia = ({tCapa, logo}) => {
   
    return (
        <TouchableOpacity style={{ marginLeft: 20, marginRight: 10 }}>
            <TesteView>
                <LogoIcone source={tCapa} />
                <Logo2 source={logo} />
            </TesteView>
            <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: 60,
                    bottom: 0,
                    zIndex: 9,
                }}></LinearGradient>
        </TouchableOpacity>
    )

}
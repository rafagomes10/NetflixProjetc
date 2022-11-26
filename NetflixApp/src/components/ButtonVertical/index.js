import React from 'react';
import { TextoHome, TouchableOpacityMenus } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export const ButtonVertical = ({icon, text, onPress}) => {
    return (
        <TouchableOpacityMenus onPress={onPress}>
            <Icon name={icon} color="#FFF" size={30} />
            <TextoHome>{text}</TextoHome>
        </TouchableOpacityMenus>
    )
}
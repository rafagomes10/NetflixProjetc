import React, { useState } from 'react';
import { TouchableOpacity } from "react-native";
import { Container, Logo, InputLogin, InputPassword, BUTAO, Recover, Recover2 } from './styles';
import logo from '../../../assets/logo.png';
import { Text } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
export default function Login({ navigation }) {

    

    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: ''
    });

    return (
        <Container>
            <Logo source={logo} />

            <InputLogin
                placeholder={'  Email ou número de telefone'}
                placeholderTextColor={'gray'}
                
                value={credenciais.email}
                onChangeText={(text) => setCredenciais({ ...credenciais, email: text })}
            />

            <InputPassword
                placeholder={'  Senha'}
                placeholderTextColor={'gray'}
                
                secureTextEntry
                value={credenciais.senha}
                onChangeText={(text) => setCredenciais({ ...credenciais, senha: text })}
            />

            <BUTAO onPress={() => navigation.navigate("Home")}> 
                <Text>ENTRAR</Text>
            </BUTAO>

            <TouchableOpacity onPress={() => console.log('Pressed')}>
                <Recover>Recuperar Senha</Recover>
            </TouchableOpacity>
            <Recover2>
                O acesso está protegido pelo Google reCAPTCHA para
                garatir não é um robo. Saiba mais.


            </Recover2>

        </Container>
    )
};



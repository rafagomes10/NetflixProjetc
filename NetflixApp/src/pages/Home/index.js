import React from 'react';
import { Container, ViewButton, ViewPrevias } from './styles';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import { Button, Title } from 'react-native-paper';
import { ButtonVertical } from '../../components/ButtonVertical';
import { Previas } from '../../components/Previas';
import { Secao } from '../../components/Secao';

export default function Home() {
    return (
        <Container >
            <Header />
            <Hero />
            <ViewButton>
                <ButtonVertical icon="plus" text="Minha Lista" onPress={() => console.log('Pressed')} />
                <Button
                    icon="play"
                    mode="contained"
                    uppercase={false}
                    color="#FFF">Assistir</Button>
                <ButtonVertical icon="information-outline" text="Saiba Mais" onPress={() => console.log('Pressed')} />
            </ViewButton>

            <ViewPrevias>
                <Title style={{ marginLeft: 20 }}>Prévias</Title>
                <Previas />
            </ViewPrevias>
            <ViewPrevias>
                {[1,2,3,4,5,6].map((secao, index) => (
                <Secao key={index}/>
                ))}

            </ViewPrevias>
      
        </Container>
    )
}
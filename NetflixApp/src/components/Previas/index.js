import React from 'react';
import { Container } from './styles';
import { ScrollView } from 'react-native';
import { CardPrevia } from '../CardPrevia';
import tCapax from "../../../assets/tCapa.jpg";
import logox from "../../../assets/logoArcane.png";
import capaBad from "../../../assets/capaBad.jpg";
import brBad from "../../../assets/brBad.png";
import arcane1 from "../../../assets/arcane1.jpg";
import arcane2 from "../../../assets/arcane2.png";
import stranger1 from "../../../assets/stranger1.jpg";
import stranger2 from "../../../assets/stranger2.png";
export const Previas = () => {

    return (
       <Container>
        <ScrollView horizontal={true}>
            <CardPrevia tCapa={tCapax} logo={logox}/>
            <CardPrevia tCapa={arcane1} logo={arcane2}/>
            <CardPrevia tCapa={capaBad} logo={brBad}/>
            <CardPrevia tCapa={stranger1} logo={stranger2}/>
        </ScrollView>
       </Container>
    )
}
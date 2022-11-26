import React from "react";
import { ImageHero, ImageBrBAD, ImageTop10, ViewTop10, TextoHero } from './styles';
import capaBAD from "../../../assets/capaBad.jpg";
import brBAD from "../../../assets/brBad.png";
import top10 from "../../../assets/top10.png";
import { LinearGradient } from "expo-linear-gradient";
export default function Hero() {
    return(
        <ImageHero
        source={capaBAD}>

            <ImageBrBAD source={brBAD} />


            <ViewTop10>
                <ImageTop10 source={top10} />
                <TextoHero>Top 1 de hoje no Brasil</TextoHero>
            </ViewTop10>

            <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
            style={{
                position: 'absolute',
                alignItems: 'center',
                width: '100%',
                height: 150,
                bottom: 0,
                zIndex: 9,
            }}></LinearGradient>
        </ImageHero>



    )

}
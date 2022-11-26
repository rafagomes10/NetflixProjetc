import React from "react";
import { Texto, ViewSecao, ImageBackG,FlatListx, ImageLogo} from './styles';
import { FlatList, TouchableOpacity } from "react-native";
import tCapa from "../../../assets/tCapa.jpg";
import tCapa2 from "../../../assets/logoArcane.png";

export const Secao = () =>{
    return (
        <ViewSecao>
            <Texto>FILMES</Texto>

            <FlatListx
                horizontal
                data={[1,2,3,4,5]}
                renderItem={({item, index}) => (
                    <TouchableOpacity style={{ marginLeft: 20, marginRight: 10 }}>
                        <ImageBackG source={tCapa}></ImageBackG>
                        <ImageLogo source={tCapa2}></ImageLogo>
                    </TouchableOpacity>
                )}
            />
        </ViewSecao>
    )
}
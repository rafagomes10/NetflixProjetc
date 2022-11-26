import styled from 'styled-components/native';

export const TextoHero = styled.Text`
    color: #FFF;
    font-weight: 800;
    font-size: 15px;
    
`;

export const ImageHero  = styled.ImageBackground`
    width: 100%;
    height: 400px;
    top: 0%;
`;

export const ImageBrBAD  = styled.Image`
    width: 300px;
    height: 150px;
    position: absolute;
    align-self: center;
    margin-top: 200px;
    zIndex: 10;
    
`;

export const ImageTop10  = styled.Image`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    resize-mode: contain;  
`

export const ViewTop10 = styled.View`
    position: absolute;
    zIndex: 10;
    bottom: 20px;
    flexDirection: row;
    justify-content: center;
    width: 100%;
    align-items: center;
    
`

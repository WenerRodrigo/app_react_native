import React from 'react';
import Texto from '../../../components/Texto'
import { Image, View } from 'react-native';

export default function Itens({ titulo, lista }) {
    return <>
        <Texto style={estilos.titulo}>{ titulo }</Texto>
        { lista.map(({ nome, imagem}) => {
            return <View style={estilos.item} key={nome}>
                <Image style={estilos.imagem} source={ imagem }/>
                <Texto style={estilos.nome}>{ nome }</Texto>
            </View>
        })}
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: '#4646464',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32, 
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        alignItems: 'center',
    },
    imagem: {
        with: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646',
    }
    
})
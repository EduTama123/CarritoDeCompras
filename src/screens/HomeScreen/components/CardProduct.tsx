import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/constants';
import { ModalProduct } from './ModalProduct';

//interface para las propiedades
interface Props {
    item: Product
}


export const CardProduct = ({ item }: Props) => {
    //hook useState para manejar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    return (

        <View>
            <View style={style.container}>
                <Image source={{ uri: item.pathImage }} style={style.image} />
                <View>
                    <Text style={style.title}>{item.name}</Text>
                    <Text> Precio: ${item.price.toFixed(2)}</Text>
                </View>
                <View style={style.containerIcon}>
                    <Icon name='add-shopping-cart' 
                    size={30} 
                    color={PRIMARY_COLOR} 
                    onPress={()=> setShowModal(!showModal)}
                    />
                </View>
            </View>
            <ModalProduct visible={showModal} item={item} setShowModal={() => setShowModal(!showModal)}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        borderStyle: 'solid',
        marginBottom: 15
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    image: {
        width: 70,
        height: 70,

    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end',
    }
})
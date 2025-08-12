import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { PRIMARY_COLOR } from '../commons/constants'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'

//interface para el arreglo de objetos de productos
interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}


export const HomeScreen = () => {
    //arreglo con la lista de usuarios
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: 'https://i0.wp.com/mitienda.yuliethmarketing.com/wp-content/uploads/2021/05/RICOARROZFUNDA1LIBRA.png?fit=540%2C540&ssl=1' },
        { id: 2, name: 'Funda de azucar', price: 2.50, stock: 7, pathImage: 'https://tienda.propieta.ec/wp-content/uploads/2021/03/azucar-blanca.jpg' },
        { id: 3, name: 'Funda de papas', price: 1.50, stock: 10, pathImage: 'https://static.wixstatic.com/media/772915_24c8bb55e5c44c6cbdbf5b4996824f72.jpg/v1/fill/w_315,h_315,al_c,lg_1,q_80,enc_avif,quality_auto/772915_24c8bb55e5c44c6cbdbf5b4996824f72.jpg' },
        { id: 4, name: 'Funda de fideos', price: 2.00, stock: 4, pathImage: 'https://www.supermaxi.com/wp-content/uploads/2024/08/7802575204035-1-1.jpg.webp' },
        { id: 5, name: 'Funda de sal', price: 0.50, stock: 8, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg' }
    ];

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Productos' />
            <BodyComponent>
                <Text>Hola, soy un texto</Text>
            </BodyComponent>
        </View>
    )
}

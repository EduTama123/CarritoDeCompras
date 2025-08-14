import React from 'react'
import { FlatList, Modal, StyleSheet, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../../../theme/appTheme'
import { PRIMARY_COLOR, TERTIARY_COLOR } from '../../../commons/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Cart, Product } from '../HomeScreen';

interface Props {
    visible: boolean;
    setShowModal: () => void;
    cart: Cart[]
}

export const ModalCart = ({ visible, setShowModal, cart }: Props) => {

    const { width } = useWindowDimensions();

    //funcion para calcular el total a pagar
    const totalPay = (): number => {
        let total = 0;
        cart.forEach(product => {
            total += product.total;
        })
        return total;
    }

    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{ ...styles.modal, width: width * 0.80 }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>Mis productos</Text>
                        <View style={styles.containerIcon}>
                            <Icon name='cancel'
                                size={25}
                                color={TERTIARY_COLOR}
                                onPress={setShowModal}
                            />
                        </View>
                    </View>
                    {
                        (cart.length == 0)
                            ? <Text style={{...styles.textModal, marginTop: 5}}>Carrito vacío</Text>
                            :
                            <View>
                                <View>
                                    <View style={localStyles.headerTable}>
                                        <Text style={localStyles.textHeaderTable}>Producto</Text>
                                        <View style={localStyles.headerTableInfo}>
                                            <Text style={{ ...localStyles.textHeaderTable, marginHorizontal: 12 }}>Pre.</Text>
                                            <Text style={localStyles.textHeaderTable}>Cant.</Text>
                                            <Text style={{ ...localStyles.textHeaderTable, marginHorizontal: 7 }}>Total</Text>
                                        </View>
                                    </View>
                                    <FlatList
                                        data={cart}
                                        renderItem={({ item }) =>
                                            <View style={localStyles.headerTable}>
                                                <Text>{item.name}</Text>
                                                <View style={localStyles.headerTableInfo}>
                                                    <Text style={{ paddingHorizontal: 8 }}>$ {item.price.toFixed(2)}</Text>
                                                    <Text style={{ paddingHorizontal: 13 }}>{item.quantity}</Text>
                                                    <Text style={{ paddingHorizontal: 5 }}>$ {item.total.toFixed(2)}</Text>
                                                </View>
                                            </View>
                                        }
                                        keyExtractor={item => item.id.toString()} />
                                </View>
                                <View style={localStyles.containerTotalPay}>
                                    <Text style={localStyles.textTotalPay}>Total a pagar : ${totalPay().toFixed(2)}</Text>
                                </View>
                                <TouchableOpacity style={styles.buttonAddCart} onPress={setShowModal}>
                                    <Text style={styles.buttonAddCartText}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            </View>
        </Modal>
    )
}

const localStyles = StyleSheet.create({
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTableInfo: {
        flexDirection: 'row',
    },
    textHeaderTable: {
        fontSize: 15,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    },
    containerTotalPay: {
        alignItems: 'flex-end',
        marginTop: 10
    },
    textTotalPay: {
        fontSize: 15,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    }
})
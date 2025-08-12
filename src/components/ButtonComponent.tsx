import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SECONDARY_COLOR, TERTIARY_COLOR } from '../commons/constants'


//componente reutulizable
interface Props {    //recibe valores para las propiedades de los componentes
    text: string;
    onPress: ()=> void;
}
export const ButtonComponent = ({ text, onPress }: Props) => {
    return (
        <TouchableOpacity style={{ ...styles.button }}
            onPress={onPress}>
            <Text style={{ ...styles.buttonText }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: TERTIARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold',
        fontSize: 15
    }
})
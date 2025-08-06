import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SECONDARY_COLOR, TERTIARY_COLOR } from '../commons/constants'


//componente reutuliable
interface Props {    //recibe propiedades de los componentes
    text: string;
    handleLogin: ()=> void;
}
export const ButtonComponent = ({ text, handleLogin }: Props) => {
    return (
        <TouchableOpacity style={{ ...styles.button }}
            onPress={handleLogin}>
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
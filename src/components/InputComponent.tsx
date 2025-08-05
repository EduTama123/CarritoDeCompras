import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { INPUT_COLOR } from '../commons/constants'

export const InputComponent = () => {
    return (
        <TextInput
            placeholder='Usuario'
            keyboardType='default'
            style={styles.inputText}
        />
    )
}

const styles = StyleSheet.create({
    inputText:{
        backgroundColor: INPUT_COLOR,
        borderRadius: 5,
        paddingHorizontal: 20,
        borderWidth: 0.5
    }
})
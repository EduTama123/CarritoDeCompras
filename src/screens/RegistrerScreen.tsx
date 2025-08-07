import React from 'react'
import { StatusBar, View } from 'react-native'
import { Text } from 'react-native'
import { PRIMARY_COLOR } from '../commons/constants'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/appTheme'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import { TouchableOpacity } from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native'

export const RegistrerScreen = () => {

    //hook useNavigation para navegar entre pantallas
    const navigation = useNavigation();


    //funcion para modificar el estado del formulario
    const chanceFormLogin = (property: string, value: string): void => {

    }

    //funcion para iniciar sesion
    const handleLogin = (): void => {

    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Registrate' />
            <BodyComponent>
                <Text style={styles.titleWelcome}>
                    Estás muy cerca!
                </Text>
                <Text style={styles.textDescription}>
                    Realiza tus compras de manera rápida y segura
                </Text>
                <View style={styles.containerForm}>
                    <Text style={styles.margenTexto}>Ingrese su nombre:</Text>
                    <InputComponent placeholder='Nombre' KeyboardType='default' changeForm={chanceFormLogin} property='' />
                    <Text style={styles.margenTexto}>Ingrese su usuario:</Text>
                    <InputComponent placeholder='Usuario' KeyboardType='default' changeForm={chanceFormLogin} property='username' />
                    <Text style={styles.margenTexto}>Ingrese su contraseña:</Text>
                    <InputComponent placeholder='Contraseña' KeyboardType='default' changeForm={chanceFormLogin} property='password' />
                </View>
                <ButtonComponent text='Iniciar' handleLogin={handleLogin} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                    <Text style={styles.textRedirect}>Ya tienes una cuenta? Iniciar sesión ahora</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}

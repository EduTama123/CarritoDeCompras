import React, { useState } from 'react'
import { Alert, StatusBar, View } from 'react-native'
import { Text } from 'react-native'
import { PRIMARY_COLOR } from '../commons/constants'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/appTheme'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import { TouchableOpacity } from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { User } from '../navigator/StackNavigator';

//interface para las propiedades
interface Props {
    users: User[]; //arreglos con la lista de usuarios
    addUser: (user: User)=> void,
}


//interface para el formulario de registro
interface formRegister {
    name: string;
    username: string;
    password: string;
}

export const RegistrerScreen = ({users , addUser}: Props) => {

    //hook UseState para manejar el estado del formulario
    const [formRegister, setformRegister] = useState<formRegister>({
        name: '',
        username: '',
        password: ''
    });

    //hook useNavigation para navegar entre pantallas
    const navigation = useNavigation();


    //funcion para modificar el estado del formulario
    const chanceFormLogin = (property: string, value: string): void => {
        setformRegister({ ...formRegister, [property]: value })
    }

    //funcion para verificar si existe el usuario
    const verifyUsername = (): User | undefined => {
        const existUsername = users.find(user => user.username == formRegister.username);
        return existUsername;
    }

    //funcion para generar los ids de los nuevos usuarios
    const getIdUser = (): number => {
        const getId = users.length + 1; //length: devuelve el numero de elementos del arreglo
        return getId;
    }

    //funcion para validar el usuario y la contraseña
    const handleSingUp = (): void => {
        if (formRegister.name == '' || formRegister.username == '' || formRegister.password == '') {
            Alert.alert('Error', 'Por favor, complete todos los campos');
            return; //si falta algun campo, nos saca del flujo
        }

        //validar que no exista el usuario
        if (verifyUsername() != undefined) {
            Alert.alert('Error', 'El usuario ya existe');
            return;
        }

        //crear el nuevo usuario (objeto)
        const newUser: User = {
            id:getIdUser(),
            name: formRegister.name,
            username: formRegister.username,
            password: formRegister.password
        }

        //agregar el nuevo usuario al arreglo
        addUser(newUser);
        Alert.alert('Éxito', 'Usuario registrado correctamente');
        navigation.goBack();
        //console.log(formRegister);
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
                    <InputComponent placeholder='Nombre' KeyboardType='default' changeForm={chanceFormLogin} property='name' />
                    <Text style={styles.margenTexto}>Ingrese su usuario:</Text>
                    <InputComponent placeholder='Usuario' KeyboardType='default' changeForm={chanceFormLogin} property='username' />
                    <Text style={styles.margenTexto}>Ingrese su contraseña:</Text>
                    <InputComponent placeholder='Contraseña' KeyboardType='default' changeForm={chanceFormLogin} property='password' />
                </View>
                <ButtonComponent text='Registrar' onPress={handleSingUp} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                    <Text style={styles.textRedirect}>Ya tienes una cuenta? Iniciar sesión ahora</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}

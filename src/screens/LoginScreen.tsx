import React, { useState } from 'react'
import { Text, View, StatusBar, Alert, TouchableOpacity } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { PRIMARY_COLOR } from '../commons/constants'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native'
import { User } from '../navigator/StackNavigator'

//interface para las propiedades
interface Props{
  users: User[]; //arreglos con la lista de usuarios
}


//interface para el objeto del formulario
interface FormLogin {
  username: string;
  password: string;
}




export const LoginScreen = ({users}: Props) => {
  //hook useState para manejar el estado del formulario
  const [formLogin, setformLogin] = useState<FormLogin>({
    username: '',
    password: ''
  });

  //hook useState para manejar el estado de la visibilidad de la contraseña
  const [hiddenPassword, sethiddenPassword] = useState<boolean>(true);

  //hook useNavigation para navegar entre pantallas
  const navigation = useNavigation();

  //funcion para modificar el estado del formulario
  const chanceFormLogin = (property: string, value: string): void => {
    //console.log(property + ': ', value);
    setformLogin({ ...formLogin, [property]: value })
  }

  //funcion para validar el usuario y la contraseña
  const verifyUser = (): User | undefined => {
    const existUser = users.find(user => user.username == formLogin.username && user.password == formLogin.password)
    return existUser;
  }


  //funcion para iniciar sesion
  const handleLogin = (): void => {
    if (formLogin.username == '' || formLogin.password == '') {
      Alert.alert('Error', 'Por favor, complete todos los campos');
      return; //si falta algun campo, nos saca del flujo
    }

    //Verificar si el usuario existe
    if (!verifyUser()) {
      Alert.alert('Error', 'Usuario y/o contraseña incorrectos');
      return; //El retur impide que se ejecuten las demas lineas de codigo
    }
    //console.log(formLogin);
    navigation.dispatch(CommonActions.navigate({name : 'Home'}))
  }

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title='Iniciar sesión' />
      <BodyComponent>
        <Text style={styles.titleWelcome}>
          Bienvenido de nuevo!
        </Text>
        <Text style={styles.textDescription}>
          Realiza tus compras de manera rápida y segura
        </Text>
        <View style={styles.containerForm}>
          <Text style={styles.margenTexto}>Ingrese su usuario:</Text>
          <InputComponent placeholder='Usuario' KeyboardType='email-address' changeForm={chanceFormLogin} property='username' />
          <Text style={styles.margenTexto}>Ingrese su contraseña:</Text>
          <InputComponent placeholder='Contraseña' KeyboardType='default' changeForm={chanceFormLogin} property='password'
            isPassword={hiddenPassword} />
          <Icon
            name={hiddenPassword ? 'visibility' : 'visibility-off'}
            size={28}
            style={styles.iconForm}
            onPress={() => sethiddenPassword(!hiddenPassword)} />
        </View>
        <ButtonComponent text='Enviar' onPress={handleLogin} />
        <TouchableOpacity
        onPress={()=> navigation.dispatch(CommonActions.navigate({name: 'Registrer'}))}>
          <Text style={styles.textRedirect}>No tienes cuenta? Registrate ahora</Text>
        </TouchableOpacity>
      </BodyComponent>
    </View>
  )
}

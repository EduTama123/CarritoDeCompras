import React, { useState } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { PRIMARY_COLOR } from '../commons/constants'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/appTheme'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'


interface FormLogin {
  username: string;
  password: string;
}

export const LoginScreen = () => {
  //hook useState para manejar el estado del formulario
  const [formLogin, setformLogin] = useState<FormLogin>({
    username: '',
    password: ''
  });

  //funcion para modificar el estado del formulario
  const chanceFormLogin = (property: string, value: string): void => {
    //console.log(property + ': ', value);
    setformLogin({...formLogin, [property]: value})
  }

  //funcion para iniciar sesion
  const handleLogin = (): void =>{
    console.log(formLogin);
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
        <View>
          <Text style={styles.margenTexto}>Ingrese su usuario:</Text>
          <InputComponent placeholder='Usuario' KeyboardType='email-address' changeForm={chanceFormLogin} property='username'/>
          <Text style={styles.margenTexto}>Ingrese su contraseña:</Text>
          <InputComponent placeholder='Contraseña' KeyboardType='default' changeForm={chanceFormLogin} property='password' isPassword/>
        </View>
        <ButtonComponent text='Enviar' handleLogin={handleLogin}/>

      </BodyComponent>
    </View>
  )
}

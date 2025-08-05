import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { PRIMARY_COLOR } from '../commons/constants'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/appTheme'

export const LoginScreen = () => {
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
        
      </BodyComponent>
    </View>
  )
}

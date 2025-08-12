import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constants';
import { RegistrerScreen } from '../screens/RegistrerScreen';
import { use, useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';

//interface para los objetos de mi arreglo users
export interface User {
    id: number;
    name: string;
    username: string;
    password: string;
}

//arreglo con la lista de usuarios
const users: User[] = [
    { id: 1, name: 'Eduardo Tamayo', username: 'Tamayo', password: '123' },
    { id: 2, name: 'Erick Rodriguez', username: 'Erick', password: '12345' }
];

const Stack = createStackNavigator();

export const StackNavigator = () => {
    //hook useState para gestionar el estado del arreglo de usuarios
    const [listUsers, setlistUsers] = useState<User[]>(users);

    //fncion para agregar nuevos usuarios al arreglo (listUsers)
    const addUser = (user: User) => {
        //modificar el estado del arreglo
        setlistUsers([...listUsers, user]);
    }
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: PRIMARY_COLOR,
                }
            }}>
            <Stack.Screen name="Login" options={{ headerShown: false }} children={() => <LoginScreen users={listUsers} />} />
            <Stack.Screen name='Registrer' options={{ headerShown: false }} children={() => <RegistrerScreen users={listUsers} addUser={addUser}/>} />
            <Stack.Screen name= 'Home' options={{ headerShown: false }} component={HomeScreen}/>
        </Stack.Navigator>
    );
}
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import EsqueciSenha from '../screens/EsqueciSenha';
import CriarGrupo from '../screens/CriarGrupo';

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Home : undefined;
    Login : undefined;
    Cadastro: undefined;
    EsqueciSenha: undefined;
    CriarGrupo: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>


export default function StackComponent(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name="Login" component={Login}   options={{headerShown: false }}  />
                <Stack.Screen  name="Home" component={Home} options={{headerShown: false }}  />
                <Stack.Screen  name="Cadastro" component={Cadastro} options={{headerShown: false }}  />
                <Stack.Screen  name="EsqueciSenha" component={EsqueciSenha} options={{headerShown: false }}  />
                <Stack.Screen  name="CriarGrupo" component={CriarGrupo} options={{headerShown: false }}  />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
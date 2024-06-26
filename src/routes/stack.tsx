import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import EsqueciSenha from '../screens/EsqueciSenha';
import CriarGrupo from '../screens/CriarGrupo';
import Details from '../screens/Details';
import EditarGrupo from '../screens/EditarGrupo';
import AdicionarParticipante from '../screens/AdicionarParticipante';
//import ResultadosScreen from '../screens/ResultadosScreens';
import SortearScreen from '../screens/SortearScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Cadastro: undefined;
  EsqueciSenha: undefined;
  CriarGrupo: undefined;
  AdicionarParticipante: { grupoID: number | undefined };
  //Resultados: { resultados: string[] };
  SortearScreen: undefined;
  Details: { grupoID: number | undefined };
  EditarGrupo: { grupoID: number | undefined };
};

export type StackTypes = NativeStackNavigationProp<RootStackParamList>;

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: '' }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerTitle: '' }} />
        <Stack.Screen name="CriarGrupo" component={CriarGrupo} options={{ headerTitle: '' }} />
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} options={{ headerTitle: '' }} />
        <Stack.Screen name="AdicionarParticipante" component={AdicionarParticipante} options={{ headerTitle: '' }} />
        
        <Stack.Screen name="SortearScreen" component={SortearScreen} options={{ headerTitle: '' }} />
        <Stack.Screen name="Details" component={Details} options={{ headerTitle: '' }} />
        <Stack.Screen name="EditarGrupo" component={EditarGrupo} options={{ headerTitle: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

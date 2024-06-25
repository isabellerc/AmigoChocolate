import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import EsqueciSenha from '../screens/EsqueciSenha';
import CriarGrupo from '../screens/CriarGrupo';
import { RouteProp } from '@react-navigation/native';
import Details from '../screens/Details';
import EditarGrupo from '../screens/EditarGrupo';
import EnviarConvite from '../screens/AdicionarParticipante';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AdicionarParticipante from '../screens/AdicionarParticipante';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

type StackNavigation = {
  Home: undefined;
  Login: undefined;
  Cadastro: undefined;
  EsqueciSenha: undefined;
  Inicial: undefined;
  CriarGrupo: undefined;
  Perfil: undefined;
  AdicionarParticipante: { grupoID: number | undefined};
  Details: { grupoID: number | undefined};
  EditarGrupo: { grupoID: number | undefined};
};

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  CriarGrupo: undefined;
  // AdicionarParticipante: {grupoID: number}; 
  // Details: { grupoID: number }; // Certifique-se de que o tipo de grupoID está definido como number
  // EditarGrupo: { grupoID: number }; 
  AdicionarParticipante: { grupoID: number | undefined };
  Details: { grupoID: number | undefined };
  EditarGrupo: { grupoID: number | undefined };
  Cadastro: undefined;
};

type TabNavigation = {

};


export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export type StackNavigationProp<ScreenName extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, ScreenName>;
export type StackRouteProp<ScreenName extends keyof RootStackParamList> = RouteProp<RootStackParamList, ScreenName>;
// export type StackRouteProp<RouteName extends keyof RootStackParamList> = RouteProp<RootStackParamList, RouteName>;


export default function StackComponent(){
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen  name="Login" component={Login}   options={{headerShown: false }}  />
              <Stack.Screen  name="Home" component={Home} options={{headerTitle:''}} />
              <Stack.Screen  name="Cadastro" component={Cadastro} options={{headerTitle:''}}/>
              <Stack.Screen  name="CriarGrupo" component={CriarGrupo} options={{headerTitle:''}} />
              <Stack.Screen  name="EsqueciSenha" component={EsqueciSenha} options={{headerTitle:''}} />
              <Stack.Screen
                              name="AdicionarParticipante"
                              component={AdicionarParticipante}
                              options={{ headerTitle: 'Adicionar Participante' }}
                            />
              <Stack.Screen  name="Details" component={Details} options={{headerTitle:''}} />
              <Stack.Screen  name="EditarGrupo" component={EditarGrupo} options={{headerTitle:''}} />
          </Stack.Navigator>
      </NavigationContainer>

  );
}



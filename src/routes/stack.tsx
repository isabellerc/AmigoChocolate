import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import EsqueciSenha from '../screens/EsqueciSenha';
import CriarGrupo from '../screens/CriarGrupo';
import { RouteProp } from '@react-navigation/native';
import Details from '../screens/Details';
import EditarGrupo from '../screens/EditarGrupo';
import EnviarConvite from '../screens/EnviarConvite';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



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
  EnviarConvite: undefined;
  Details: { grupoID: number | undefined};
  EditarGrupo: { grupoID: number | undefined};
};

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  EnviarConvite: undefined;
  Details: { grupoID: number }; // Certifique-se de que o tipo de grupoID está definido como number
  EditarGrupo: { grupoID: number }; 
  CriarGrupo: undefined;
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
              <Stack.Screen name="EnviarConvite" component={EnviarConvite} options={{headerTitle:''}} />
              {/* <Stack.Screen  name="Details" initialParams={{ grupoID: 1 }} component={Details} />
              <Stack.Screen  name="EditarGrupo" initialParams={{ grupoID: 1 }} component={EditarGrupo} /> */}
              <Stack.Screen  name="Details" component={Details} options={{headerTitle:''}} />
              <Stack.Screen  name="EditarGrupo" component={EditarGrupo} options={{headerTitle:''}} />
          </Stack.Navigator>
      </NavigationContainer>

  );
}


//ultima coisa que comentei, foi daqui pra baixo:
// const StackComponent = () => (
//   <NavigationContainer>
//     <Stack.Navigator>

//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={({ route, navigation }) => ({
//           headerTitle: '',
//           //headerStyle personaliza a barra lá em cima
//           headerStyle: {
//             backgroundColor: 'white',
//             elevation: 0,
//             shadowOpacity: 0,
//             borderBottomWidth: 0,
//           },
//         })}
//       />
//       <Stack.Screen
//         name="Cadastro"
//         component={Cadastro}
//         options={({ route, navigation }) => ({
//           headerTitle: '',
//           headerStyle: {
//             backgroundColor: 'white',
//             elevation: 0,
//             shadowOpacity: 0,
//             borderBottomWidth: 0,
//           },
//         })}
//       />
//       <Stack.Screen
//         name="EsqueciSenha"
//         component={EsqueciSenha}
//         options={({ route, navigation }) => ({
//           headerTitle: '',
//           headerStyle: {
//             backgroundColor: 'white',
//             elevation: 0,
//             shadowOpacity: 0,
//             borderBottomWidth: 0,
//           },
//         })}
//       />
//       <Stack.Screen
//         name="Home"
//         component={Home} // Componente do TabNavigator
//         options={({ route, navigation }) => ({
//           headerTitle: '',
//           headerStyle: {
//             backgroundColor: 'white',
//             elevation: 0,
//             shadowOpacity: 0,
//             borderBottomWidth: 0,
//           },
//         })}
//         />
//          {/* <Stack.Screen 
//         name="Home" 
//         component={Home} 
//         options={({ route, navigation }) => ({
//           headerTitle: '',
//           headerStyle: {
//             backgroundColor: '#f2601d',
//             elevation: 0,
//             shadowOpacity: 0,
//             borderBottomWidth: 0,
//           },
//         })} />  */}
      
//       <Stack.Screen
//         name="CriarGrupo"
//         component={CriarGrupo}
//         options={({ route, navigation }) => ({
//           headerTitle: '',
//           headerStyle: {
//             backgroundColor: 'white',
//             elevation: 0,
//             shadowOpacity: 0,
//             borderBottomWidth: 0,
//           },
//         })}
//       />
//       <Stack.Screen
//         name="Details"
//         component={Details}
//         options={({ route, navigation }) => ({
//           headerTitle: '',
//           headerStyle: {
//             backgroundColor: 'white',
//             elevation: 0,
//             shadowOpacity: 0,
//             borderBottomWidth: 0,
//           },
//         })}
//       />
//       {/* <Stack.Screen
//         name="DetalhesGrupo"
//         component={DetalhesGrupo} 
//         options={({ route, navigation }) => ({
//           headerTitle: '',
//           headerStyle: {
//             backgroundColor: 'white',
//             elevation: 0,
//             shadowOpacity: 0,
//             borderBottomWidth: 0,
//           },
//         })}
//       /> */}
//       {/* <Stack.Screen
//         name="Perfil"
//         component={Perfil} 
//         options={({ route, navigation }) => ({
//           headerTitle: '',
//           headerStyle: {
//             backgroundColor: 'white',
//             elevation: 0,
//             shadowOpacity: 0,
//             borderBottomWidth: 0,
//           },
//         })}
//       /> */}
//     </Stack.Navigator>
//   </NavigationContainer>
// );

// // const TabNavigator = () => (
// //   <Tab.Navigator>
// //     <Tab.Screen name="Inicial" component={Inicial} />
// //     <Tab.Screen name="CriarGrupo" component={CriarGrupo} />
// //   </Tab.Navigator>
// // );

//export default StackComponent;
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { RouteProp } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../routes/stack';

// type ResultadosScreenProps = {
//   route: RouteProp<RootStackParamList, 'Resultados'>;
//   navigation: StackNavigationProp<RootStackParamList, 'Resultados'>;
// };

// const ResultadosScreen: React.FC<ResultadosScreenProps> = ({ route, navigation }) => {
//   const { resultado } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Resultado do Sorteio:</Text>
//       <Text style={styles.participant}>{resultado}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   participant: {
//     fontSize: 18,
//     marginBottom: 5,
//   },
// });

// export default ResultadosScreen;

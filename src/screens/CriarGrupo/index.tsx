// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react'; 
// import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
// import { StackTypes } from '../../routes/stack';
// import { TextInputMask } from 'react-native-masked-text';
// import { User } from '../../types/types';
// import GrupoService from '../../services/grupoService';
// import * as ImagePicker from 'expo-image-picker';
// import { FontAwesome5 } from '@expo/vector-icons';
// import {Grupo} from '../../types/types';


// const caixaPresente = require('../../../assets/images/caixaPresente.jpg');


// const CriarGrupo = () => {


//     const [NomeGrupo, setNome] = useState<string>('');
//     const [QuantidadeMaxima, setQtdeMax] = useState<string>(''); //verificar se essa declaração está correta
//     const [ValorChocolate, setValor] = useState<string>(''); //verificar se essa declaração está correta
//     const [DataRevelacao, setDataRevelacao] = useState<string>(''); //verificar se essa declaração está correta
//     const [Descricao, setDescricao] = useState<string>(''); //verificar se essa declaração está correta
//     const [Icone, setImage] = useState('');


//     const navigation = useNavigation<StackTypes>();
//     const handleLogin = () => {
//         navigation.navigate('Login');
//     };
    
   

//     const pickImage = async () => {
//       // No permissions request is necessary for launching the image library
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });
  
//       console.log(result);
  
//       if (!result.canceled) {

//         setImage(result.assets[0].fileName == null ?  "" :  result.assets[0].fileName.toString());
//         //setImage(result.assets[0].uri); **VOLTAR ESSA LINHA QUANDO FOR API DE BACK END PARA ARMAZENAR A IMAGEM
//       }
//     };

//     const grupoService = new GrupoService();

//     const handleUpload = async () => {
//         try {
//             const novoGrupo = {
//                 NomeGrupo: NomeGrupo,
//                 QuantidadeMaxima: parseInt(QuantidadeMaxima), // Converte para número inteiro
//                 ValorChocolate: parseFloat(ValorChocolate), // Converte para número de ponto flutuante
//                 DataRevelacao: DataRevelacao,
//                 Descricao: Descricao,
//                 Icone: Icone ? Icone : null // Define como null se não houver imagem
//             };
    
//             console.log("Dados do novo grupo:", JSON.stringify(novoGrupo));
    
//             const grupoAdicionado = await grupoService.criarGrupo(novoGrupo);
//             if (grupoAdicionado) {
//                 Alert.alert('Sucesso', 'Grupo criado com sucesso!', [
//                     { text: 'OK', onPress: () => navigation.navigate('Home') }
//                 ]);
//             } else {
//                 console.log('Erro ao adicionar grupo');
//             }
//         } catch (error) {
//             console.error('Erro ao fazer upload do grupo:', error);
//         }
//     };
    

//     // const handleUpload = async () => {
        
//     //     try {
//     //       const novoGrupo: Grupo = {
//     //         IDGrupo: 0,
//     //         NomeGrupo: NomeGrupo,
//     //         QuantidadeMaxima: parseInt(QuantidadeMaxima), // Converte para número inteiro
//     //         ValorChocolate: parseFloat(ValorChocolate), // Converte para número de ponto flutuante
//     //         DataRevelacao: DataRevelacao,
//     //         Descricao: Descricao,
//     //         Icone: Icone
//     //       };
      
//     //       const grupoAdicionado = await grupoService.criarGrupo(novoGrupo);
//     //       if (grupoAdicionado) {
//     //         Alert.alert('Sucesso', 'Grupo criado com sucesso!', [
//     //             { text: 'OK', onPress: () => navigation.navigate('Home') }
//     //         ]);
//     //       } else {
//     //         console.log('Erro ao adicionar grupo');
//     //       }
//     //     } catch (error) {
//     //       console.error('Erro ao fazer upload do grupo:', error);
//     //     }
//     //   };
      



// return (
//     <View style={styles.container}>
//         <Text style={styles.title}>Criar novo grupo</Text>

//             <View style={styles.imageContainer}>
//                 {Icone ? (
//                     <Image source={{ uri: Icone }} style={styles.image} />
//                 ) : (
//                     <TouchableOpacity onPress={pickImage} style={styles.imagePlaceholder}>
//                         <FontAwesome5 name="camera-retro" size={40} color="#df59aa" />
//                     </TouchableOpacity>
//                 )}
//             </View>

            
//             <Text style={styles.label}>Nome:</Text>
//             <TextInput
//                 style={styles.input}
//                 onChangeText={setNome}
//                 value={NomeGrupo}
//             />

//             <Text style={styles.label}>Quantidade máxima:</Text>
//             <TextInput
//                 style={styles.input}
//                 onChangeText={setQtdeMax}
//                 value={QuantidadeMaxima}
//             />

//             <Text style={styles.label}>Valor Chocolate:</Text>
//             <TextInput
//                 style={styles.input}
//                 onChangeText={setValor}
//                 value={ValorChocolate}
//             />

//             <Text style={styles.label}>Data Revelação:</Text>
//             <TextInput
//                 style={styles.input}
//                 // type={'datetime'}
//                 // options={{
//                 //     format: 'DD/MM/YYYY'
//                 // }}
//                 value={DataRevelacao}
//                 onChangeText={(text) => setDataRevelacao(text)}
//             />

//             <Text style={styles.label}>Descrição do grupo:</Text>
//             <TextInput
//                 style={styles.input}
//                 onChangeText={setDescricao}
//                 value={Descricao}
//             />

//             <TouchableOpacity onPress={handleUpload} style={styles.button} activeOpacity={0.1}>
//                 <Text style={styles.buttonText}>Criar</Text>
//             </TouchableOpacity>


//     </View>

// );

// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//     },
    
//     title: {
//         fontSize: 24,
//         marginBottom: 30,
//         color: '#df59aa',
//         fontWeight: 'bold',
//     },
//     input: {
//         width: '60%',
//         height: 40,
//         borderColor: '#dce0e6',
//         backgroundColor: '#FFCFEB',
//         borderWidth: 1,
//         borderRadius: 8,
//         marginBottom: 20,
//         paddingHorizontal: 10,
//     },
//     label: {
//         fontSize: 14,
//         alignSelf: 'center'
//     },

//     imageContainer: {
//         width: 100,
//         height: 100,
//         marginBottom: 10,
//         borderRadius: 100, // fazendo a borda circular
//         overflow: 'hidden', // garantindo que a imagem fique dentro do círculo
//     },
//     image: {
//         width: '100%',
//         height: '100%',
//     },

//     imagePlaceholder: {
//         width: 100, // ajuste conforme necessário
//         height: 100, // ajuste conforme necessário
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 100, // mantém o formato circular
//         backgroundColor: '#dce0e6', // define uma cor de fundo para o contêiner
//     },

//     datePicker: {
//         width: '80%',
//         height: 40,
//         marginBottom: 20,
//     },
    
//     button: {
//       width: '40%',
//       height: 40,
//       borderRadius: 20,
//       backgroundColor: '#df59aa',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderWidth: 1,
//       borderColor: '#df59aa',
//       marginBottom: 20,
//       marginTop: 20,
      
//   },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//     },
//     link: {
//         color: 'black',
//         marginBottom: 10,
        
//     }
// });

// export default CriarGrupo;

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'; 
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { StackTypes } from '../../routes/stack';
import GrupoService from '../../services/grupoService';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import { Grupo } from '../../types/types';

const CriarGrupo = () => {
  const [NomeGrupo, setNome] = useState<string>('');
  const [QuantidadeMaxima, setQtdeMax] = useState<string>(''); 
  const [ValorChocolate, setValor] = useState<string>(''); 
  const [DataRevelacao, setDataRevelacao] = useState<string>(''); 
  const [Descricao, setDescricao] = useState<string>(''); 
  const [Icone, setImage] = useState<string | null>(null);

  const navigation = useNavigation<StackTypes>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets[0].uri) {
      setImage(result.assets[0].uri);
    }
  };

  const grupoService = new GrupoService();

  const handleUpload = async () => {
    try {
      const novoGrupo: Grupo = {
        NomeGrupo: NomeGrupo,
        QuantidadeMaxima: parseInt(QuantidadeMaxima),
        ValorChocolate: parseFloat(ValorChocolate),
        DataRevelacao: DataRevelacao,
        Descricao: Descricao,
        // Icone: Icone ? Icone : null,
      };

      const grupoAdicionado = await grupoService.criarGrupo(novoGrupo);
      if (grupoAdicionado) {
        Alert.alert('Sucesso', 'Grupo criado com sucesso!', [
          { text: 'OK', onPress: () => navigation.navigate('Home') },
        ]);
      } else {
        console.log('Erro ao adicionar grupo');
      }
    } catch (error) {
      console.error('Erro ao fazer upload do grupo:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar novo grupo</Text>
      <View style={styles.imageContainer}>
        {Icone ? (
          <Image source={{ uri: Icone }} style={styles.image} />
        ) : (
          <TouchableOpacity onPress={pickImage} style={styles.imagePlaceholder}>
            <FontAwesome5 name="camera-retro" size={40} color="#df59aa" />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNome}
        value={NomeGrupo}
      />
      <Text style={styles.label}>Quantidade máxima:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setQtdeMax}
        value={QuantidadeMaxima}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Valor Chocolate:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setValor}
        value={ValorChocolate}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Data Revelação:</Text>
      <TextInput
        style={styles.input}
        value={DataRevelacao}
        onChangeText={(text) => setDataRevelacao(text)}
      />
      <Text style={styles.label}>Descrição do grupo:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDescricao}
        value={Descricao}
      />
      <TouchableOpacity onPress={handleUpload} style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    color: '#df59aa',
    fontWeight: 'bold',
  },
  input: {
    width: '60%',
    height: 40,
    borderColor: '#dce0e6',
    backgroundColor: '#FFCFEB',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 14,
    alignSelf: 'center'
  },
  imageContainer: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 100,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#dce0e6',
  },
  button: {
    width: '40%',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#df59aa',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#df59aa',
    marginBottom: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CriarGrupo;

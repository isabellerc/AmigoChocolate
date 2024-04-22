import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'; 
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { StackTypes } from '../../routes/stack';
import { TextInputMask } from 'react-native-masked-text';
import { User } from '../../types/types';
import GrupoService from '../../services/grupoService';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import {Grupo} from '../../types/types';


const caixaPresente = require('../../../assets/images/caixaPresente.png');


const CriarGrupo = () => {


    const [nome, setNome] = useState<string>('');
    const [qtdeMaxima, setQtdeMax] = useState<string>(''); //verificar se essa declaração está correta
    const [valor, setValor] = useState<string>(''); //verificar se essa declaração está correta
    const [dataRevelacao, setDataRevelacao] = useState<string>(''); //verificar se essa declaração está correta
    const [descricaoGrupo, setDescricao] = useState<string>(''); //verificar se essa declaração está correta
    const [image, setImage] = useState('');


    const navigation = useNavigation<StackTypes>();
    const handleLogin = () => {
        navigation.navigate('Login');
    };
    
   

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {

        setImage(result.assets[0].fileName == null ?  "" :  result.assets[0].fileName.toString());
        //setImage(result.assets[0].uri); **VOLTAR ESSA LINHA QUANDO FOR API DE BACK END PARA ARMAZENAR A IMAGEM
      }
    };

    const grupoService = new GrupoService();

    const handleUpload = async () => {
        
        try {
          const novoGrupo: Grupo = {
            nome: nome,
            qtdeMaxima: parseInt(qtdeMaxima), // Converte para número inteiro
            valor: parseFloat(valor), // Converte para número de ponto flutuante
            dataRevelacao: dataRevelacao,
            descricaoGrupo: descricaoGrupo,
            icone: image
          };
      
          const grupoAdicionado = await grupoService.addGrupo(novoGrupo);
          if (grupoAdicionado) {
            Alert.alert('Sucesso', 'Grupo criado com sucesso!', [
                { text: 'OK', onPress: () => navigation.navigate('Home') }
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
                {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <TouchableOpacity onPress={pickImage} style={styles.imagePlaceholder}>
                        <FontAwesome5 name="camera-retro" size={40} color="#df59aa" />
                    </TouchableOpacity>
                )}
            </View>

            
            <TextInput
                style={styles.input}
                placeholder="Nome"
                onChangeText={setNome}
                value={nome}
            />
            <TextInput
                style={styles.input}
                placeholder="Quantidade máxima"
                onChangeText={setQtdeMax}
                value={qtdeMaxima}
            />
            <TextInput
                style={styles.input}
                placeholder="Valor Chocolate"
                onChangeText={setValor}
                value={valor}
            />
            
            <TextInputMask
                style={styles.input}
                placeholder="Data Revelação"
                type={'datetime'}
                options={{
                    format: 'DD/MM/YYYY'
                }}

                value={dataRevelacao}
                onChangeText={(text) => setDataRevelacao(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Descrição do grupo"
                onChangeText={setDescricao}
                value={descricaoGrupo}
            />


            <TouchableOpacity onPress={handleUpload} style={styles.button} activeOpacity={0.1}>
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
        backgroundColor: '#white',
    },
    
    title: {
        fontSize: 24,
        marginBottom: 30,
        color: '#df59aa',
        fontWeight: 'bold',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#dce0e6',
        backgroundColor: '#dce0e6',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        paddingHorizontal: 10,
    },

    imageContainer: {
        width: 120,
        height: 120,
        marginBottom: 10,
        borderRadius: 100, // fazendo a borda circular
        overflow: 'hidden', // garantindo que a imagem fique dentro do círculo
    },
    image: {
        width: '100%',
        height: '100%',
    },

    imagePlaceholder: {
        width: 120, // ajuste conforme necessário
        height: 120, // ajuste conforme necessário
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100, // mantém o formato circular
        backgroundColor: '#dce0e6', // define uma cor de fundo para o contêiner
    },
    
    

    datePicker: {
        width: '80%',
        height: 40,
        marginBottom: 20,
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
    link: {
        color: 'black',
        marginBottom: 10,
        
    }
});

export default CriarGrupo;
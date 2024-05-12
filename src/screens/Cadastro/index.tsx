import { useNavigation } from '@react-navigation/native'; // Importa o hook useNavigation do pacote '@react-navigation/native' para navegação
import React, { useState } from 'react'; // Importa o pacote React e a função useState do pacote 'react' para gerenciamento de estado
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native'; // Importa componentes essenciais do React Native para construção da interface
import { StackTypes } from '../../routes/stack'; // Importa tipos específicos para navegação em pilha (Stack) do arquivo '../../routes/stack'
import * as ImagePicker from 'expo-image-picker'; // Importa o módulo ImagePicker do pacote 'expo-image-picker' para seleção de imagens
import { FontAwesome5 } from '@expo/vector-icons'; // Importa o ícone FontAwesome5 do pacote '@expo/vector-icons'
import UserService from '../../services/userService'; // Importa a classe UserService do arquivo '../../services/userService'
import { User } from '../../types/types'; // Importa o tipo User do arquivo '../../types/types'
import { Image } from 'react-native'; // Importa o componente Image do React Native para exibir imagens

const Cadastro = () => {
  // Estados para armazenar os dados do usuário e a imagem selecionada
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmaSenha, setConfirmaSenha] = useState<string>('');
  const [image, setImage] = useState('');

  // Navegação para a tela de login
  const navigation = useNavigation<StackTypes>();
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  // Função para selecionar uma imagem da biblioteca
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Instanciação do serviço de usuário
  const userService = new UserService();

  // Função para lidar com o upload dos dados do usuário
  const handleUpload = async () => {
    // Verifica se o e-mail fornecido tem um formato válido
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Por favor, insira um endereço de e-mail válido.');
      return;
    }
  
    try {
      const user: User = {
        id: 0,
        nome: nome,
        senha: senha,
        confirmaSenha: confirmaSenha,
        icone: image
      };
  
      const userAdded = await userService.addUser(user);
      if (userAdded) {
        console.log('Usuário adicionado com sucesso!');
      } else {
        console.log('Erro ao adicionar usuário');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar-se</Text>
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
      placeholder="Email"
      onChangeText={setEmail}
      value={email}
      keyboardType="email-address" // Adiciona esta linha para configurar o teclado para entrada de e-mail
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={setSenha}
        value={senha as string}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        secureTextEntry={true}
        onChangeText={setConfirmaSenha}
        value={confirmaSenha as string}
      />
      <TouchableOpacity onPress={handleUpload} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos CSS para os componentes da tela de cadastro
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
    borderRadius: 100,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
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

export default Cadastro;

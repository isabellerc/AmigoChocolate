import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackTypes } from '../../routes/stack';
import { HoverEffect } from 'react-native-gesture-handler';
import UserService   from '../../services/userService';

const Login = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>(''); // Aqui removi a conversão para String
    const [usernameError, setUsernameError] = useState(false);

    const userService = new UserService();
    
    const navigation = useNavigation<StackTypes>();

    
    const handleCadastro = () => {
        navigation.navigate('Cadastro'); // Direciona para a tela de Cadastro
    };

    const handleEsqueciSenha = () => {
      navigation.navigate('EsqueciSenha'); // Direciona para a tela de Esqueci minha senha
  };

    const handleLogin = async () => {

      if (!login) {
        setUsernameError(true);
        return;
      } else {
        setUsernameError(false);
      }

      const isValid = await userService.validateUser(login, password);
      alert(isValid);
      if (isValid) {
        alert('Usuário autenticado com sucesso'); 
        // Redireciona para a página "Home" após autenticação bem-sucedida
    navigation.navigate('Home');
    setLogin('');
    setPassword('');
      } else {
        alert('Usuário e/ou senha inválidos');
        //Alert.alert('Erro', 'Usuário e/ou senha inválidos');
      }
    };


    // const navigation = useNavigation<StackTypes>();

    // const handleLogin = () => {
    //     navigation.navigate('Home');
    // };


    return (
        <View style={styles.container}>
          {/* Adicionando a imagem centralizada acima do título */}
          <Image source={require('../../../assets/images/logoApp2.0.png')} style={styles.image} />

            <Text style={styles.title}>Bem-vindo!</Text>
            <TextInput
                style={styles.input}
                placeholder="Login"
                onChangeText={setLogin}
                value={login}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password as string}
            />
             
            <TouchableOpacity onPress={handleLogin} style={styles.button} activeOpacity={0.1}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleEsqueciSenha}>
                <Text style={styles.link}>Esqueci minha senha.</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCadastro}>
                <Text style={styles.link}>Não tem uma conta? Faça o cadastro.</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',
    },

    image: {
      width: 100,
      height: 100,
      marginBottom: 20,
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

export default Login;

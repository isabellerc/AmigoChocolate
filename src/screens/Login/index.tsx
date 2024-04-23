import axios, { AxiosResponse } from 'axios';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackTypes } from '../../routes/stack';
import UserService   from '../../services/userService';


const Login = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>(''); // Aqui removi a conversão para String
    const [usernameError, setUsernameError] = useState(false);

    const userService = new UserService();
    
    const navigation = useNavigation<StackTypes>();

    const handleLogin = async () => {
        navigation.navigate('Home'); //Direciona para a tela Home
        setLogin(''); //Limpa o campo login
        setPassword(''); //limpa o campo senha
        };
    
    const handleCadastro = () => {
        navigation.navigate('Cadastro'); // Direciona para a tela de Cadastro
    };

    const handleEsqueciSenha = () => {
      navigation.navigate('EsqueciSenha'); // Direciona para a tela de Esqueci minha senha
  };
   
 
    return (
        <View style={styles.container}>
          
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
        textDecorationLine: 'underline',
    }
});

export default Login;


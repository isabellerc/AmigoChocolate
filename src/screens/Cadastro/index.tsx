import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'; 
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { StackTypes } from '../../routes/stack';

const Cadastro = () => {

    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmaSenha, setConfirmaSenha] = useState<string>('');

    const navigation = useNavigation<StackTypes>();
    const handleLogin = () => {
        navigation.navigate('Login');
    };

return (
    <View style={styles.container}>
        <Text style={styles.title}>Cadastrar-se</Text>
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

export default Cadastro;
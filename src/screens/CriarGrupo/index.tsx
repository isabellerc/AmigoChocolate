import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'; 
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { StackTypes } from '../../routes/stack';
import { TextInputMask } from 'react-native-masked-text';



const CriarGrupo = () => {

    const [nome, setNome] = useState<string>('');
    const [qtdMax, setQtdeMax] = useState<string>(''); //verificar se essa declaração está correta
    const [valor, setValor] = useState<string>(''); //verificar se essa declaração está correta
    const [dataRevelacao, setDataRevelacao] = useState<string>(''); //verificar se essa declaração está correta
    const [descricao, setDescricao] = useState<string>(''); //verificar se essa declaração está correta


    const navigation = useNavigation<StackTypes>();
    const handleLogin = () => {
        navigation.navigate('Login');
    };

return (
    <View style={styles.container}>
        <Text style={styles.title}>Criar novo grupo</Text>
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
                value={qtdMax}
            />
            <TextInput
                style={styles.input}
                placeholder="Valor Chocolate"
                secureTextEntry={true}
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
                secureTextEntry={true}
                onChangeText={setDescricao}
                value={descricao}
            />

            <TouchableOpacity onPress={handleLogin} style={styles.button} activeOpacity={0.1}>
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
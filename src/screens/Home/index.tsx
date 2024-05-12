import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import UserService from '../../services/userService';
import GrupoService from '../../services/grupoService';
import { StackTypes } from '../../routes/stack';
import { Grupo } from '../../types/types';
import { Svg, Path } from 'react-native-svg';

const caixaPresente = require('../../../assets/images/caixaPresente.jpg');

const Home = () => {

    // Estado para armazenar os grupos
    const [grupos, setGrupos] = useState<Grupo[] | null >([]);

      
    // Função para lidar com a navegação para a tela de criar grupo
    const handleCriarGrupo = () => {
        navigation.navigate('CriarGrupo');
    };

    const renderItem = ({ item, index }: { item: Grupo, index: number }) => (        
        <View style={styles.item}>    
            <TouchableOpacity onPress={() => handleEdit(item.grupoID)}>
                <View style={styles.grupoInfo}>
                    <Image source={caixaPresente} style={styles.photo} resizeMode="contain" />
                    <Text style={styles.grupoInfoText}>{item.nome}</Text> {/* Nome do grupo clicável */}
                </View>
            </TouchableOpacity>
        </View>
    );
    

    const grupoService = new GrupoService();

    // Obtém o objeto de navegação
    const navigation = useNavigation<StackTypes>();

    // Efeito para buscar os grupos ao montar o componente
    useEffect(() => {
        const fetchGrupos = async () => {
            try {
                const fetchedGrupos = await grupoService.getAllGrupos();
                if (fetchedGrupos !== null) {
                    setGrupos(fetchedGrupos);
                } else {
                    console.error('A lista de grupos retornou nula.');
                }
            } catch (error) {
                console.error('Erro ao buscar grupos:', error);
            }
        };
    
        fetchGrupos(); // Chama a função para buscar os grupos quando o componente é montado
    }, []); 

    const handleDetails = (grupoID: number) => {
        navigation.navigate('Details', { grupoID: grupoID });
    }
    
    // Função para lidar com a edição do grupo
    const handleEdit = (grupoID: number) => {
        navigation.navigate('Details', { grupoID: grupoID });

    };

    return (
        <View style={styles.container}> 
            <Text style={styles.title}>Meus grupos</Text>
            <FlatList
                data={grupos} // Dados para a FlatList
                renderItem={renderItem} // Função para renderizar itens da lista
                keyExtractor={item => item.grupoID.toString()} // Função para extrair a chave única de cada item
            />

            <TouchableOpacity onPress={() => handleCriarGrupo()} style={styles.button}> 
                        <Text style={styles.buttonText}>Novo Grupo</Text>
            </TouchableOpacity>
        </View>
    );
}

// Estilos CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    item: {
        flexDirection: 'row',
        padding: 20,
        
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'space-between', // Alinhar elementos à esquerda e botão à direita
      },
      grupoInfo: {
        flexDirection: 'row',
        alignItems: 'center', // Alinhar itens verticalmente
      },
      grupoInfoText: {
        fontSize: 16,
        fontWeight: "bold"
      },
      photo: {
        width: 70,
        height: 70,
        borderRadius: 40,
        marginRight: 10,
      },
    
    title: {
        fontSize: 30,
        marginBottom: 30,
        marginTop: 20,
        color: '#df59aa',
        fontWeight: 'bold',
    },
    button: {
        width: '50%',
        height: 40,
        borderRadius: 20,
        backgroundColor: '#df59aa',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#df59aa',
        marginBottom: 10,
        // marginTop: 10,
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

export default Home;

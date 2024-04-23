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

const caixaPresente = require('../../../assets/images/caixaPresente.png');

const Home = () => {

    // Estado para armazenar os grupos
    const [grupos, setGrupos] = useState<Grupo[] | null >([]);

      
    // Função para lidar com a navegação para a tela de criar grupo
    const handleCriarGrupo = () => {
        navigation.navigate('CriarGrupo');
    };

   
    // Função para renderizar cada item da lista de grupos
    // const renderItem = ({ item, index }: { item: Grupo, index: number }) => (        
    //         <View style={styles.item}>    
    //             <View style={styles.grupoInfo}>
    //                 <Image source={caixaPresente} style={styles.photo} resizeMode="contain" /> {/* Exibe uma imagem */}
    //                 <Text style={styles.grupoInfoText}>{item.nome}</Text> {/* Exibe o nome do grupo */}
    //             </View>

    //             <TouchableOpacity onPress={() => handleEdit(item.grupoID)}>
    //                 <Svg
    //                     x="10px"
    //                     y="10px"
    //                     width="35"
    //                     height="35"
    //                     viewBox="0,0,40,40"
    //                     style={{marginLeft: 10}}
    //                 >
    //                     <Path
    //                         fill="#df59aa"
    //                         fillRule="nonzero"
    //                         d="M20.09375,0.25c-0.59375,-0.00391 -1.17578,0.20703 -1.625,0.65625l-1,1.03125l6.59375,6.625l1,-1.03125c0.90234,-0.90234 0.91016,-2.36719 0,-3.28125l-3.3125,-3.3125c-0.45703,-0.45703 -1.0625,-0.68359 -1.65625,-0.6875zM16.34375,2.84375l-1.5625,1.5l6.875,6.875l1.59375,-1.46875zM13.78125,5.4375l-10.8125,10.71875c-0.25,0.12891 -0.42969,0.35547 -0.5,0.625l-2.3125,7.84375c-0.10547,0.34375 -0.01172,0.72266 0.24219,0.97656c0.25391,0.25391 0.63281,0.34766 0.97656,0.24219l7.84375,-2.3125c0.36328,-0.05469 0.66406,-0.30859 0.78125,-0.65625l10.65625,-10.5625l-1.46875,-1.46875l-10.9375,10.96875l-4.40625,1.28125l-0.9375,-0.9375l1.34375,-4.59375l10.84375,-10.8125zM16.15625,7.84375l-10.96875,11l1.59375,0.34375l0.21875,1.46875l11,-10.96875z"
    //                     />
    //                 </Svg>
    //             </TouchableOpacity>

    //             <TouchableOpacity onPress= {() => handleDetails(item.grupoID)}>
    //                 <Text>Detalhes</Text>
    //             </TouchableOpacity>
                
            // </View>
    
    // );
    const renderItem = ({ item, index }: { item: Grupo, index: number }) => (        
        <View style={styles.item}>    
            <TouchableOpacity onPress={() => handleEdit(item.grupoID)}>
                <View style={styles.grupoInfo}>
                    <Image source={caixaPresente} style={styles.photo} resizeMode="contain" />
                    <Text style={styles.grupoInfoText}>{item.nome}</Text> {/* Nome do grupo clicável */}
                </View>
            </TouchableOpacity>
    
            {/* <TouchableOpacity onPress={() => handleDetails(item.grupoID)}>
                <Text>Detalhes</Text>
            </TouchableOpacity> */}
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
    }, []); // Executa apenas uma vez, quando o componente é montado

    const handleDetails = (grupoID: number) => {
        navigation.navigate('Details', { grupoID: grupoID });
    }
    
    // Função para lidar com a edição do grupo
    const handleEdit = (grupoID: number) => {
        // navigation.navigate('Details', { grupoID });
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
                        <Text style={styles.buttonText}>Criar Novo Grupo</Text>
            </TouchableOpacity>
        </View>
    );
}

// Estilos CSS
const styles = StyleSheet.create({
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
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#white',
    },
    title: {
        fontSize: 30,
        marginBottom: 30,
        marginTop: 20,
        color: '#df59aa',
        fontWeight: 'bold',
    },
    button: {
        width: '20%',
        height: 40,
        borderRadius: 20,
        backgroundColor: '#df59aa',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#df59aa',
        marginBottom: 10,
        marginTop: 10,
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

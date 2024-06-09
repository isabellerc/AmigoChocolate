// import React, { useEffect } from 'react';
// import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import * as ImagePicker from 'expo-image-picker';
// import { useState } from 'react';
// import UserService from '../../services/userService';
// import GrupoService from '../../services/grupoService';
// import { StackTypes } from '../../routes/stack';
// import { Grupo } from '../../types/types';
// import { Svg, Path } from 'react-native-svg';

// const caixaPresente = require('../../../assets/images/caixaPresente.jpg');

// const Home = () => {

//     // Estado para armazenar os grupos
//     const [grupos, setGrupos] = useState<Grupo[] | null >([]);

      
//     // Função para lidar com a navegação para a tela de criar grupo
//     const handleCriarGrupo = () => {
//         navigation.navigate('CriarGrupo');
//     };

//     const renderItem = ({ item, index }: { item: Grupo, index: number }) => (        
//         <View style={styles.item}>    
//             <TouchableOpacity onPress={() => handleEdit(item.IDGrupo)}>
//                 <View style={styles.grupoInfo}>
//                     <Image source={caixaPresente} style={styles.photo} resizeMode="contain" />
//                     <Text style={styles.grupoInfoText}>{item.NomeGrupo}</Text> {/* Nome do grupo clicável */}
//                 </View>
//             </TouchableOpacity>
//         </View>
//     );
    

//     const grupoService = new GrupoService();

//     // Obtém o objeto de navegação
//     const navigation = useNavigation<StackTypes>();

//     // Efeito para buscar os grupos ao montar o componente
    
//     useEffect(() => {
//         const fetchGrupos = async () => {
//             try {
//                 const fetchedGrupos = await grupoService.buscarGrupos();
//                 if (fetchedGrupos !== null) {
//                     setGrupos(fetchedGrupos);
//                 } else {
//                     console.error('A lista de grupos retornou nula.');
//                 }
//             } catch (error) {
//                 console.error('Erro ao buscar grupos:', error);
//             }
//         };
    
//         fetchGrupos(); // Chama a função para buscar os grupos quando o componente é montado
//     }, []); 

//     const handleDetails = (grupoID: number) => {
//         navigation.navigate('Details', { grupoID: grupoID });
//     }
    
//     // Função para lidar com a edição do grupo
//     const handleEdit = (grupoID: number) => {
//         navigation.navigate('Details', { grupoID: grupoID });

//     };

//     return (
//         <View style={styles.container}> 
//             <Text style={styles.title}>Meus grupos</Text>
//             {/* <FlatList
//                 data={grupos} // Dados para a FlatList
//                 renderItem={renderItem} // Função para renderizar itens da lista
//                 keyExtractor={item => item.IDGrupo.toString()} // Função para extrair a chave única de cada item
//             /> */}

//             <TouchableOpacity onPress={() => handleCriarGrupo()} style={styles.button}> 
//                         <Text style={styles.buttonText}>Novo Grupo</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

//2º vez comentando:


// import React, { useEffect } from 'react';
// import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useState } from 'react';
// import GrupoService from '../../services/grupoService';
// import { StackTypes } from '../../routes/stack';
// import { Grupo } from '../../types/types';

// const caixaPresente = require('../../../assets/images/caixaPresente.jpg');

// const Home = () => {
//     const [grupos, setGrupos] = useState<Grupo[] | null>([]);
//     const navigation = useNavigation<StackTypes>();
//     const grupoService = new GrupoService();

//     const handleCriarGrupo = () => {
//         navigation.navigate('CriarGrupo');
//     };

//     const renderItem = ({ item, index }: { item: Grupo, index: number }) => (
//         <View style={styles.item}>
//             <TouchableOpacity onPress={() => handleEdit(item.IDGrupo)}>
//                 <View style={styles.grupoInfo}>
//                     <Image source={caixaPresente} style={styles.photo} resizeMode="contain" />
//                     <Text style={styles.grupoInfoText}>{item.NomeGrupo}</Text>
//                 </View>
//             </TouchableOpacity>
//         </View>
//     );

//     useEffect(() => {
//         const fetchGrupos = async () => {
//             try {
//                 const fetchedGrupos = await grupoService.buscarGrupos();
//                 if (fetchedGrupos !== null) {
//                     setGrupos(fetchedGrupos);
//                 } else {
//                     console.error('A lista de grupos retornou nula.');
//                 }
//             } catch (error) {
//                 console.error('Erro ao buscar grupos:', error);
//             }
//         };

//         fetchGrupos();
//     }, []);

//     const handleDetails = (grupoID: number | undefined) => {
//         if (grupoID !== undefined) {
//             navigation.navigate('Details', { grupoID: grupoID });
//         } else {
//             console.error('grupoID is undefined');
//         }
//     };

//     const handleEdit = (grupoID: number | undefined) => {
//         if (grupoID !== undefined) {
//             navigation.navigate('Details', { grupoID: grupoID });
//         } else {
//             console.error('grupoID is undefined');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Meus grupos</Text>
//             <FlatList
//                 data={grupos}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.IDGrupo.toString()}
//             />
//             <TouchableOpacity onPress={handleCriarGrupo} style={styles.button}>
//                 <Text style={styles.buttonText}>Novo Grupo</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }


// // Estilos CSS
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//     },
//     item: {
//         flexDirection: 'row',
//         padding: 20,
        
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//         justifyContent: 'space-between', // Alinhar elementos à esquerda e botão à direita
//       },
//       grupoInfo: {
//         flexDirection: 'row',
//         alignItems: 'center', // Alinhar itens verticalmente
//       },
//       grupoInfoText: {
//         fontSize: 16,
//         fontWeight: "bold"
//       },
//       photo: {
//         width: 70,
//         height: 70,
//         borderRadius: 40,
//         marginRight: 10,
//       },
    
//     title: {
//         fontSize: 30,
//         marginBottom: 30,
//         marginTop: 20,
//         color: '#df59aa',
//         fontWeight: 'bold',
//     },
//     button: {
//         width: '50%',
//         height: 40,
//         borderRadius: 20,
//         backgroundColor: '#df59aa',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: '#df59aa',
//         marginBottom: 10,
//         // marginTop: 10,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//     },
//     link: {
//         color: 'black',
//         marginBottom: 10,
//     }
// });

// export default Home;

import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GrupoService from '../../services/grupoService';
import { StackTypes } from '../../routes/stack';
import { Grupo } from '../../types/types';

const caixaPresente = require('../../../assets/images/caixaPresente.jpg');

const Home = () => {
    const [grupos, setGrupos] = useState<Grupo[] | null>([]);
    const grupoService = new GrupoService();
    const navigation = useNavigation<StackTypes>();

    const fetchGrupos = async () => {
        try {
            const fetchedGrupos = await grupoService.buscarGrupos();
            if (fetchedGrupos !== null) {
                console.log('Fetched Grupos:', fetchedGrupos); // Adicionado para depuração
                setGrupos(fetchedGrupos);
            } else {
                console.error('A lista de grupos retornou nula.');
            }
        } catch (error) {
            console.error('Erro ao buscar grupos:', error);
        }
    };

    useEffect(() => {
        fetchGrupos();
    }, []);

    const handleCriarGrupo = () => {
        navigation.navigate('CriarGrupo');
    };

    const handleEdit = (grupoID: number) => {
        navigation.navigate('Details', { grupoID });
    };

    const renderItem = ({ item }: { item: Grupo }) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => item.IDGrupo !== undefined && handleEdit(item.IDGrupo)}>
                <View style={styles.grupoInfo}>
                    <Image source={caixaPresente} style={styles.photo} resizeMode="contain" />
                    <Text style={styles.grupoInfoText}>{item.NomeGrupo}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meus grupos</Text>
            <FlatList
                data={grupos}
                renderItem={renderItem}
                keyExtractor={item => item.IDGrupo?.toString() || Math.random().toString()}
            />
            <TouchableOpacity onPress={handleCriarGrupo} style={styles.button}>
                <Text style={styles.buttonText}>Novo Grupo</Text>
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
    item: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'space-between',
    },
    grupoInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    grupoInfoText: {
        fontSize: 16,
        fontWeight: 'bold',
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
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Home;

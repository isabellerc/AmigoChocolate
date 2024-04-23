// import React, { useState, useEffect } from 'react';
// import { View, Text , Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
// import UserService from '../../services/userService';
// import { Grupo } from '../../types/types';
// import { StackTypes } from '../../routes/stack';
// import { StackRouteProp } from '../../routes/stack';
// import GrupoService from '../../services/grupoService';
// import Svg, { Path } from 'react-native-svg';
// import { useNavigation } from '@react-navigation/native';




// const caixaPresente = require('../../../assets/images/caixaPresente.png');

// const Details = ({ route }: any) => {
    
//     const navigation = useNavigation<StackTypes>();
//     const [novoNome, setNovoNome] = useState<string>('');
//     const [novoQtdeMaxima, setNovoQtdeMaxima] = useState<string>('');
//     const [novoValor, setNovoValor] = useState<string>('');
//     const [novaDataRevelacao, setNovaDataRevelacao] = useState<string>('');
//     const [novaDescricaoGrupo, setNovaDescricaoGrupo] = useState<string>(''); // Estado para armazenar o novo nome do grupo
//     const [novaImage, setNovaImage] = useState<string>(''); // Estado para armazenar o novo nome do grupo
//     const [grupo, setGrupo] = useState<Grupo>(); // Estado para armazenar os dados do grupo
//     const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
//     const [error, setError] = useState<string | null>(null); // Estado para armazenar mensagens de erro

    
//     const grupoService = new GrupoService();

//     const handleEdit = (grupoID: number) => {
//     navigation.navigate('Details', { grupoID: grupoID });

//     const handleEdit = async (grupoID: number) => {
//         try {
//             const grupoAtualizado: Grupo = {
//                 grupoID: grupoID,
//                 nome: novoNome, // Substitua novoNome pelo novo nome do grupo
//                 qtdeMaxima: parseInt(novoQtdeMaxima), // Substitua novoQtdeMaxima pelo novo valor da quantidade máxima
//                 valor: parseFloat(novoValor), // Substitua novoValor pelo novo valor do grupo
//                 dataRevelacao: novaDataRevelacao, // Substitua novaDataRevelacao pela nova data de revelação
//                 descricaoGrupo: novaDescricaoGrupo, // Substitua novaDescricaoGrupo pela nova descrição do grupo
//                 icone: novaImage // Substitua novaImage pela nova imagem do grupo
//             };
            
    
//             const grupoAtualizadoComSucesso = await grupoService.updateGrupo(grupoID, grupoAtualizado);
//             if (grupoAtualizadoComSucesso) {
//                 Alert.alert('Sucesso', 'Grupo atualizado com sucesso!', [
//                     { text: 'OK', onPress: () => navigation.navigate('Details', { grupoID: grupoID }) }
//                 ]);
//             } else {
//                 console.log('Erro ao atualizar grupo');
//             }
//         } catch (error) {
//             console.error('Erro ao editar grupo:', error);
//         }
//     };

//     const renderItem = ({ item, index }: { item: Grupo, index: number }) => (        
//         <View style={styles.item}>    
//             <View style={styles.grupoInfo}>
//                 <Image source={caixaPresente} style={styles.photo} resizeMode="contain" /> {/* Exibe uma imagem */}
//                 <Text style={styles.grupoInfoText}>{item.nome}</Text> {/* Exibe o nome do grupo */}
//             </View>

//             <TouchableOpacity onPress={() => handleEdit(item.grupoID)}>
//                 <Text>EDITAR</Text>
//             </TouchableOpacity>
            
//         </View>
//     );
// }


//     useEffect(() => {
        
//         // Função assíncrona para buscar o grupo pelo ID
//         const fetchGrupo = async () => {
//             try {
//                 const fetchedGrupo : Grupo = await grupoService.getGrupoById(route.params.grupoID || 0); // Usamos o operador de coalescência nula para fornecer um valor padrão
//                 if (fetchedGrupo != null && Array.isArray(fetchedGrupo)) {                
//                     setGrupo(fetchedGrupo[0]);
//                 } else {
//                     setError('Grupo não encontrado ' + route.params.grupoID + '.');
//                 }
//             } catch (error) {
//                 console.error('Erro ao buscar grupo:', error);
//                 setError('Erro ao buscar grupo. Tente novamente mais tarde.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         // Chamada da função para buscar o usuário quando o componente for montado
//         fetchGrupo();
//     }, []); // Passamos um array vazio como segundo argumento para useEffect para garantir que esta função seja executada apenas uma vez, quando o componente for montado

//     return (
        
//         <View style={styles.container}>

//             {loading ? (
//                 <Text>Carregando...</Text>
//             ) : error ? (
//                 <Text>{error}</Text>
//             ) : (
//                 grupo && (
//                     <View>
//                       <Image style={styles.photo} source={caixaPresente} />
//                         <Text style={styles.input}>Id: {route.params.grupoID}</Text>
//                         <Text style={styles.input}>Nome: {grupo.nome == null ? "-" : grupo.nome}</Text>
//                         <Text style={styles.input}>Quantidade máxima: {grupo.qtdeMaxima}</Text>
//                         <Text style={styles.input}>Valor: {grupo.valor}</Text>
//                         <Text style={styles.input}>Data Revelação: {grupo.dataRevelacao}</Text>
//                         <Text style={styles.input}>Descrição Grupo: {grupo.descricaoGrupo}</Text>
//                     </View>

              
//                 )
                
//             )}
//         </View>
//     );
// };






// const styles = StyleSheet.create({

// dadosGrupo: {
//     // alignSelf: 'center',
//     // justifyContent: 'center' ,
//     // alignItems: 'center',
//     // borderColor: '#dce0e6',
//     // backgroundColor: '#dce0e6',
    
// },

// campoTexto: {
//     fontSize: 18 // Tamanho da fonte aumentado para 18
// },

// photo: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
// },
// item: {
//     flexDirection: 'row',
//     padding: 20,
    
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     justifyContent: 'space-between', // Alinhar elementos à esquerda e botão à direita
//   },
//   grupoInfo: {
//     flexDirection: 'row',
//     alignItems: 'center', // Alinhar itens verticalmente
//   },
//   grupoInfoText: {
//     fontSize: 16,
//     fontWeight: "bold"
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#white'
// },

// title: {
//     fontSize: 24,
//     marginBottom: 30,
//     color: '#df59aa',
//     fontWeight: 'bold',
// },
// input: {
//     width: '80%',
//     height: 50,
//     borderColor: '#dce0e6',
//     backgroundColor: '#dce0e6',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     textAlign: 'left', // Alinha o texto à esquerda
//     justifyContent: 'center',
//     textDecorationColor: 'red'
// }
    

        
// });

// export default Details;

import React, { useState, useEffect } from 'react';
import { View, Text , Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { Grupo } from '../../types/types';
import GrupoService from '../../services/grupoService';
import { useNavigation } from '@react-navigation/native';

const caixaPresente = require('../../../assets/images/caixaPresente.png');

const Details = ({ route }: any) => {
    
    const navigation = useNavigation();
    const [grupo, setGrupo] = useState<Grupo>(); // Estado para armazenar os dados do grupo
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
    const [error, setError] = useState<string | null>(null); // Estado para armazenar mensagens de erro
    
    const grupoService = new GrupoService();

    useEffect(() => {
        // Função assíncrona para buscar o grupo pelo ID
        const fetchGrupo = async () => {
            try {
                const fetchedGrupo: Grupo = await grupoService.getGrupoById(route.params.grupoID || 0); // Usamos o operador de coalescência nula para fornecer um valor padrão
                if (fetchedGrupo != null && Array.isArray(fetchedGrupo)) {                
                    setGrupo(fetchedGrupo[0]);
                } else {
                    setError('Grupo não encontrado ' + route.params.grupoID + '.');
                }
            } catch (error) {
                console.error('Erro ao buscar grupo:', error);
                setError('Erro ao buscar grupo. Tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        // Chamada da função para buscar o usuário quando o componente for montado
        fetchGrupo();
    }, [route.params.grupoID]); // Passamos route.params.grupoID como dependência para useEffect

    const handleEdit = (grupoID: number) => {
        navigation.navigate('EditarGrupo', {grupoID: grupoID});
    }
    
    
    
    
    

    return (
        <View style={styles.container}>
            {loading ? (
                <Text>Carregando...</Text>
            ) : error ? (
                <Text>{error}</Text>
            ) : (
                grupo && (
                    <View>
                        <Image style={styles.photo} source={caixaPresente} />
                        <Text style={styles.input}>Id: {grupo.grupoID}</Text>
                        <Text style={styles.input}>Nome: {grupo.nome || "-"}</Text>
                        <Text style={styles.input}>Quantidade máxima: {grupo.qtdeMaxima}</Text>
                        <Text style={styles.input}>Valor: {grupo.valor}</Text>
                        <Text style={styles.input}>Data Revelação: {grupo.dataRevelacao}</Text>
                        <Text style={styles.input}>Descrição Grupo: {grupo.descricaoGrupo}</Text>
                        
                        <TouchableOpacity onPress={() => grupo?.grupoID && handleEdit(grupo.grupoID)}>
                            <Text style={styles.editButton}>Editar</Text>
                        </TouchableOpacity>

                    </View>
                )
            )}
        </View>
    );
};

const styles = StyleSheet.create({
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
        backgroundColor: 'white'
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#dce0e6',
        backgroundColor: '#dce0e6',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        paddingHorizontal: 10,
        textAlign: 'left',
        justifyContent: 'center',
        textDecorationColor: 'red'
    },
    editButton: {
        width: '80%',
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 8,
        marginBottom: 20,
        textAlign: 'center',
        lineHeight: 50, // Para centralizar verticalmente o texto dentro do botão
        color: 'white',
        fontWeight: 'bold',
    }
});

export default Details;

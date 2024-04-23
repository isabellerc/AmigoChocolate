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

// const EditarGrupo = ({ route }: any) => {
    
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
//                 <Svg
//                     x="10px"
//                     y="10px"
//                     width="35"
//                     height="35"
//                     viewBox="0,0,40,40"
//                     style={{marginRight: 10}}
//                 >
//                     <Path
//                         fill="#df59aa"
//                         fillRule="nonzero"
//                         d="M20.09375,0.25c-0.59375,-0.00391 -1.17578,0.20703 -1.625,0.65625l-1,1.03125l6.59375,6.625l1,-1.03125c0.90234,-0.90234 0.91016,-2.36719 0,-3.28125l-3.3125,-3.3125c-0.45703,-0.45703 -1.0625,-0.68359 -1.65625,-0.6875zM16.34375,2.84375l-1.5625,1.5l6.875,6.875l1.59375,-1.46875zM13.78125,5.4375l-10.8125,10.71875c-0.25,0.12891 -0.42969,0.35547 -0.5,0.625l-2.3125,7.84375c-0.10547,0.34375 -0.01172,0.72266 0.24219,0.97656c0.25391,0.25391 0.63281,0.34766 0.97656,0.24219l7.84375,-2.3125c0.36328,-0.05469 0.66406,-0.30859 0.78125,-0.65625l10.65625,-10.5625l-1.46875,-1.46875l-10.9375,10.96875l-4.40625,1.28125l-0.9375,-0.9375l1.34375,-4.59375l10.84375,-10.8125zM16.15625,7.84375l-10.96875,11l1.59375,0.34375l0.21875,1.46875l11,-10.96875z"
//                     />
//                 </Svg>
//             </TouchableOpacity>
            
//         </View>
//     );
// }


// useEffect(() => {
//     const fetchGrupo = async () => {
//         try {
//             const fetchedGrupo: Grupo = await grupoService.getGrupoById(route.params.grupoID || 0);
//             if (fetchedGrupo != null && Array.isArray(fetchedGrupo)) {
//                 setGrupo(fetchedGrupo[0]);
//             } else {
//                 setError('Grupo não encontrado ' + route.params.grupoID + '.');
//             }
//         } catch (error) {
//             console.error('Erro ao buscar grupo:', error);
//             setError('Erro ao buscar grupo. Tente novamente mais tarde.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     fetchGrupo();
// }, []);

// return (
//     <View style={styles.container}>
//         {loading ? (
//             <Text>Carregando...</Text>
//         ) : error ? (
//             <Text>{error}</Text>
//         ) : (
//             grupo && (
//                 <View>
//                     <Image style={styles.photo} source={caixaPresente} />
//                     <Text style={styles.input}>Id: {route.params.grupoID}</Text>
//                     <Text style={styles.input}>Nome: {grupo.nome == null ? "-" : grupo.nome}</Text>
//                     <Text style={styles.input}>Quantidade máxima: {grupo.qtdeMaxima}</Text>
//                     <Text style={styles.input}>Valor: {grupo.valor}</Text>
//                     <Text style={styles.input}>Data Revelação: {grupo.dataRevelacao}</Text>
//                     <Text style={styles.input}>Descrição Grupo: {grupo.descricaoGrupo}</Text>
//                 </View>
//             )
//         )}
//     </View>
// );
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

// export default EditarGrupo;


import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Grupo } from '../../types/types';
import GrupoService from '../../services/grupoService';
import { useNavigation } from '@react-navigation/native';

const caixaPresente = require('../../../assets/images/caixaPresente.png');

const EditarGrupo = ({ route }: any) => {
    const navigation = useNavigation();
    const [grupoID, setGrupoID] = useState<number>(0);
    const [novoNome, setNovoNome] = useState<string>('');
    const [novaQuantidadeMaxima, setNovaQuantidadeMaxima] = useState<string>('');
    const [novoValor, setNovoValor] = useState<string>('');
    const [novaDataRevelacao, setNovaDataRevelacao] = useState<string>('');
    const [novaDescricaoGrupo, setNovaDescricaoGrupo] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const grupoService = new GrupoService();

    useEffect(() => {
        setGrupoID(route.params.grupoID);
        fetchGrupo(route.params.grupoID);
    }, [route.params.grupoID]);

    const fetchGrupo = async (grupoID: number) => {
        setLoading(true);
        try {
            const fetchedGrupo: Grupo = await grupoService.getGrupoById(grupoID);
            if (fetchedGrupo) {
                setNovoNome(fetchedGrupo.nome || '');
                setNovaQuantidadeMaxima(fetchedGrupo.qtdeMaxima.toString());
                setNovoValor(fetchedGrupo.valor.toString());
                setNovaDataRevelacao(fetchedGrupo.dataRevelacao);
                setNovaDescricaoGrupo(fetchedGrupo.descricaoGrupo || '');
            } else {
                setError('Grupo não encontrado.');
            }
        } catch (error) {
            console.error('Erro ao buscar grupo:', error);
            setError('Erro ao buscar grupo. Tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    };

    //const handleEdit = async ()
    const handleEdit = async (grupoID:number) => {
        try {
            const novoGrupo: Grupo = {
                grupoID: grupoID,
                nome: novoNome,
                qtdeMaxima: parseInt(novaQuantidadeMaxima),
                valor: parseFloat(novoValor),
                dataRevelacao: novaDataRevelacao,
                descricaoGrupo: novaDescricaoGrupo,
                icone: ''
            };

            const grupoAtualizadoComSucesso = await grupoService.updateGrupo(grupoID, novoGrupo);
            if (grupoAtualizadoComSucesso) {
                Alert.alert('Sucesso', 'Grupo atualizado com sucesso!', [
                    { text: 'OK', onPress: () => navigation.goBack() }
                ]);
            } else {
                Alert.alert('Erro', 'Erro ao atualizar grupo.');
            }
        } catch (error) {
            console.error('Erro ao editar grupo:', error);
            Alert.alert('Erro', 'Erro ao editar grupo. Tente novamente mais tarde.');
        }
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <Text>Carregando...</Text>
            ) : error ? (
                <Text>{error}</Text>
            ) : (
                <View>
                    <Image style={styles.photo} source={caixaPresente} />
                    <TextInput
                        style={styles.input}
                        value={novoNome}
                        onChangeText={setNovoNome}
                        placeholder="Nome"
                    />
                    <TextInput
                        style={styles.input}
                        value={novaQuantidadeMaxima}
                        onChangeText={setNovaQuantidadeMaxima}
                        placeholder="Quantidade máxima"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        value={novoValor}
                        onChangeText={setNovoValor}
                        placeholder="Valor"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        value={novaDataRevelacao}
                        onChangeText={setNovaDataRevelacao}
                        placeholder="Data de Revelação"
                    />
                    <TextInput
                        style={styles.input}
                        value={novaDescricaoGrupo}
                        onChangeText={setNovaDescricaoGrupo}
                        placeholder="Descrição"
                    />
                    <TouchableOpacity onPress={handleEdit}>
                        <Text style={styles.saveButton}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    photo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 20
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
        textAlign: 'left'
    },
    saveButton: {
        width: '80%',
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 8,
        marginBottom: 20,
        textAlign: 'center',
        lineHeight: 50,
        color: 'white',
        fontWeight: 'bold'
    }
});

export default EditarGrupo;

// // import React, { useState, useEffect } from 'react';
// // import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
// // import { Grupo } from '../../types/types';
// // import GrupoService from '../../services/grupoService';
// // import { useNavigation } from '@react-navigation/native';
// // import { ImageSourcePropType } from 'react-native';
// // import { StackTypes } from '../../routes/stack';

// // const caixaPresente = require('../../../assets/images/caixaPresente.jpg');

// // const EditarGrupo = ({ route }: any) => {
// //     const navigation = useNavigation<StackTypes>();
// //     const [grupo, setGrupo] = useState<Grupo>(); // Estado para armazenar os dados do grupo
// //     //const navigation = useNavigation();
// //     const [grupoID, setGrupoID] = useState<number>(0);
// //     const [novoNome, setNovoNome] = useState<string>('');
// //     const [novaQuantidadeMaxima, setNovaQuantidadeMaxima] = useState<string>('');
// //     const [novoValor, setNovoValor] = useState<string>('');
// //     const [novaDataRevelacao, setNovaDataRevelacao] = useState<string>('');
// //     const [novaDescricaoGrupo, setNovaDescricaoGrupo] = useState<string>('');
// //     const [loading, setLoading] = useState<boolean>(false);
// //     const [error, setError] = useState<string | null>(null);
    
// //     const grupoService = new GrupoService();
    
// //     const [edicaoHabilitada, setEdicaoHabilitada] = useState(true);
    
// //     // useEffect(() => {
// //     //     // Função assíncrona para buscar o grupo pelo ID
// //     //     const fetchGrupo = async () => {
// //     //         try {
// //     //             const fetchedGrupo: Grupo = await grupoService.getGrupoById(route.params.grupoID || 0); // Usamos o operador de coalescência nula para fornecer um valor padrão
// //     //             if (fetchedGrupo != null && Array.isArray(fetchedGrupo)) {                
// //     //                 setGrupo(fetchedGrupo[0]);
// //     //             } else {
// //     //                 setError('Grupo não encontrado ' + route.params.grupoID + '.');
// //     //             }
// //     //         } catch (error) {
// //     //             console.error('Erro ao buscar grupo:', error);
// //     //             setError('Erro ao buscar grupo. Tente novamente mais tarde.');
// //     //         } finally {
// //     //             setLoading(false);
// //     //         }
// //     //     };
// //     //     // Chamada da função para buscar o usuário quando o componente for montado
// //     //     fetchGrupo();
// //     // }, [route.params.grupoID]); // Passamos route.params.grupoID como dependência para useEffect

  
// //     useEffect(() => {
// //         if (route.params && route.params.grupoID) {
// //             fetchGrupo(route.params.grupoID);
// //         }
// //     }, [route.params.grupoID]);
    
    
// //     // const fetchGrupo = async (grupoID: number) => {
// //     //     setLoading(true);
// //     //     try {
// //     //         const fetchedGrupo: Grupo = await grupoService.getGrupoById(grupoID);
// //     //         if (fetchedGrupo) {
// //     //             setNovoNome(fetchedGrupo.nome || '');
// //     //             setNovaQuantidadeMaxima(fetchedGrupo.qtdeMaxima ? fetchedGrupo.qtdeMaxima.toString() : '');
// //     //             setNovoValor(fetchedGrupo.valor ? fetchedGrupo.valor.toString() : '');
// //     //             setNovaDataRevelacao(fetchedGrupo.dataRevelacao);
// //     //             setNovaDescricaoGrupo(fetchedGrupo.descricaoGrupo || '');
// //     //         } else {
// //     //             setError('Grupo não encontrado.');
// //     //         }
// //     //     } catch (error) {
// //     //         console.error('Erro ao buscar grupo:', error);
// //     //         setError('Erro ao buscar grupo. Tente novamente mais tarde.');
// //     //     } finally {
// //     //         setLoading(false);
// //     //     }
// //     // };

// //     const fetchGrupo = async (grupoID: number) => {
// //         setLoading(true);
// //         try {
// //             const fetchedGrupo: Grupo = await grupoService.getGrupoById(grupoID);
// //             if (fetchedGrupo) {
// //                 setGrupo(fetchedGrupo);
// //                 setNovoNome(fetchedGrupo.nome || '');
// //                 setNovaQuantidadeMaxima(fetchedGrupo.qtdeMaxima ? fetchedGrupo.qtdeMaxima.toString() : '');
// //                 setNovoValor(fetchedGrupo.valor ? fetchedGrupo.valor.toString() : '');
// //                 setNovaDataRevelacao(fetchedGrupo.dataRevelacao);
// //                 setNovaDescricaoGrupo(fetchedGrupo.descricaoGrupo || '');
// //             } else {
// //                 setError('Grupo não encontrado.');
// //             }
// //         } catch (error) {
// //             console.error('Erro ao buscar grupo:', error);
// //             setError('Erro ao buscar grupo. Tente novamente mais tarde.');
// //         } finally {
// //             setLoading(false);
// //         }
// //     };
    
   
    

    
   
// //     // const handleEdit = async () => {
// //     //     try {
// //     //         const novoGrupo: Grupo = {
// //     //             grupoID: grupoID,
// //     //             nome: novoNome,
// //     //             qtdeMaxima: parseInt(novaQuantidadeMaxima),
// //     //             valor: parseFloat(novoValor),
// //     //             dataRevelacao: novaDataRevelacao,
// //     //             descricaoGrupo: novaDescricaoGrupo,
// //     //             icone: ''
// //     //         };

// //     //         const grupoAtualizadoComSucesso = await grupoService.updateGrupo(grupoID, novoGrupo);
// //     //         if (grupoAtualizadoComSucesso) {
// //     //             Alert.alert('Sucesso', 'Grupo atualizado com sucesso!', [
// //     //                 { text: 'OK', onPress: () => navigation.goBack() }
// //     //             ]);
// //     //         } else {
// //     //             Alert.alert('Erro', 'Erro ao atualizar grupo.');
// //     //         }
// //     //     } catch (error) {
// //     //         console.error('Erro ao editar grupo:', error);
// //     //         Alert.alert('Erro', 'Erro ao editar grupo. Tente novamente mais tarde.');
// //     //     }
// //     // };

// //     const handleEdit = async () => {
// //         setEdicaoHabilitada(true); // Habilita a edição quando o usuário pressiona o botão de editar
// //     };

// //     const handleSave = async () => {
// //         try {
// //             const novoGrupo: Grupo = {
// //                 grupoID: grupoID,
// //                 nome: novoNome,
// //                 qtdeMaxima: parseInt(novaQuantidadeMaxima),
// //                 valor: parseFloat(novoValor),
// //                 dataRevelacao: novaDataRevelacao,
// //                 descricaoGrupo: novaDescricaoGrupo,
// //                 icone: ''
// //             };
    
// //             const grupoAtualizadoComSucesso = await grupoService.updateGrupo(grupoID, novoGrupo);
// //             if (grupoAtualizadoComSucesso) {
// //                 Alert.alert('Sucesso', 'Grupo atualizado com sucesso!', [
// //                     { text: 'OK', onPress: () => navigation.goBack() }
// //                 ]);
// //             } else {
// //                 Alert.alert('Erro', 'Erro ao atualizar grupo.');
// //             }
    
// //             setEdicaoHabilitada(false); // Desabilita a edição após salvar as alterações
// //         } catch (error) {
// //             console.error('Erro ao salvar grupo:', error);
// //             Alert.alert('Erro', 'Erro ao salvar grupo. Tente novamente mais tarde.');
// //         }
// //     };
    

// //     return (
// //         <View style={styles.container}>
// //             {loading ? (
// //                 <Text>Carregando...</Text>
// //             ) : error ? (
// //                 <Text>{error}</Text>
// //             ) : (
// //                 <View style={styles.container}>
// //                     <Image style={styles.photo} source={caixaPresente} />
// //                     <Text style={styles.label}>ID:</Text>
                    
// //                     <TextInput
// //                         style={styles.input}
// //                         value={grupo?.grupoID.toString()}
// //                         editable={edicaoHabilitada} // Define o campo como não editável
// //                     />





// //                     <Text style={styles.label}>Nome:</Text>
// //                     <TextInput
// //                         style={styles.input}
// //                         value={grupo?.nome || "-"}
// //                         onChangeText={setNovoNome}
// //                         editable={edicaoHabilitada}
// //                     />
// //                     <Text style={styles.label}>Quantidade Máxima:</Text>
// //                     <TextInput
// //                         style={styles.input}
// //                         value={novaQuantidadeMaxima}
// //                         onChangeText={setNovaQuantidadeMaxima}
// //                         keyboardType="numeric"
// //                         editable={edicaoHabilitada}
// //                     />
// //                     <Text style={styles.label}>Valor:</Text>
// //                     <TextInput
// //                         style={styles.input}
// //                         value={novoValor}
// //                         onChangeText={setNovoValor}
// //                         keyboardType="numeric"
// //                         editable={edicaoHabilitada}
// //                     />
// //                     <Text style={styles.label}>Data de Revelação:</Text>
// //                     <TextInput
// //                         style={styles.input}
// //                         value={novaDataRevelacao}
// //                         onChangeText={setNovaDataRevelacao}
// //                         editable={edicaoHabilitada}
// //                     />
// //                     <Text style={styles.label}>Descrição do Grupo:</Text>
// //                     <TextInput
// //                         style={styles.input}
// //                         value={novaDescricaoGrupo}
// //                         onChangeText={setNovaDescricaoGrupo}
// //                         editable={edicaoHabilitada}
// //                     />

// //                     {edicaoHabilitada ? (
// //                             <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
// //                                 <Text style={styles.buttonText}>Salvar</Text>
// //                             </TouchableOpacity>
// //                         ) : (
// //                             <TouchableOpacity onPress={handleEdit} style={styles.saveButton}>
// //                                 <Text style={styles.buttonText}>Editar</Text>
// //                             </TouchableOpacity>
// //                     )}
                   
// //                 </View>
// //             )}
// //         </View>
// //     );
// // };
// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         backgroundColor: 'white'
// //     },
// //     photo: {
// //         width: 70,
// //         height: 70,
// //         borderRadius: 40,
// //         marginBottom: 20
// //     },
// //     input: {
// //         width: '80%',
// //         height: 30,
// //         borderColor: '#dce0e6',
// //         backgroundColor: '#FFCFEB',
// //         borderWidth: 1,
// //         borderRadius: 8,
// //         marginBottom: 15,
// //         paddingHorizontal: 20,
// //         textAlignVertical: 'bottom',
// //         alignSelf: 'center'
// //     },
// //     label: {
// //         fontSize: 14,
// //         fontWeight: 'bold',
// //         alignSelf: 'center'
// //     },
// //     saveButton: {
// //         width: '80%',
// //         height: 40,
// //         borderRadius: 20,
// //         backgroundColor: '#df59aa',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         borderWidth: 1,
// //         borderColor: '#df59aa',
// //         marginBottom: 10,
// //         marginTop: 10,
// //     },
// //     buttonText: {
// //         color: 'white',
// //         fontSize: 16,
// //     }
// // });

// // export default EditarGrupo;

import React, { useState, useEffect } from 'react';
import { View, Text , Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { Grupo } from '../../types/types';
import GrupoService from '../../services/grupoService';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/stack';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const caixaPresente = require('../../../assets/images/caixaPresente.jpg');



const EditarGrupo = ({ route }: any) => {
    const navigation = useNavigation<StackTypes>();
    const [grupo, setGrupo] = useState<Grupo>(); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState<string | null>(null); 
    
    // Estado para controlar se a edição está habilitada ou não
    const [edicaoHabilitada, setEdicaoHabilitada] = useState(false);

    // Estados para armazenar os valores editados temporariamente
    const [nomeEditado, setNomeEditado] = useState('');
    const [qtdeMaximaEditada, setQtdeMaximaEditada] = useState('');
    const [valorEditado, setValorEditado] = useState('');
    const [dataRevelacaoEditada, setDataRevelacaoEditada] = useState('');
    const [descricaoGrupoEditada, setDescricaoGrupoEditada] = useState('');

    const grupoService = new GrupoService();
    
    useEffect(() => {
        const fetchGrupo = async () => {
            try {
                const fetchedGrupo: Grupo = await grupoService.getGrupoById(route.params.grupoID || 0);
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

        fetchGrupo();
    }, [route.params.grupoID]);

    const handleEdit = () => {
        setEdicaoHabilitada(true); // Habilita a edição dos campos quando o botão "Editar" é pressionado
    };
    

    const handleConvite = () => {
        navigation.navigate('EnviarConvite'); // Direciona para a tela de Cadastro
    };
    const handleSave = async () => {
        try {
            if (!grupo) {
                throw new Error('Grupo não encontrado.');
            }
    
            const novoGrupo: Grupo = {
                grupoID: grupo.grupoID,
                nome: nomeEditado,
                qtdeMaxima: parseInt(qtdeMaximaEditada),
                valor: parseFloat(valorEditado),
                dataRevelacao: dataRevelacaoEditada,
                descricaoGrupo: descricaoGrupoEditada,
                icone: grupo.icone
            };
    
            // Atualiza os dados do grupo com os valores editados
            await grupoService.updateGrupo(grupo.grupoID, novoGrupo);
    
            // Atualiza o estado do grupo com os novos dados
            setGrupo(novoGrupo);
    
            // Desabilita a edição após salvar
            setEdicaoHabilitada(false);
        } catch (error) {
            console.error('Erro ao salvar grupo:', error);
            Alert.alert('Erro ao salvar grupo. Tente novamente mais tarde.');
        }
    };
    
    

    return (
        <View style={styles.container}>
            {loading ? (
                <Text>Carregando...</Text>
            ) : error ? (
                <Text>{error}</Text>
            ) : (
                grupo && (
                    <View style={styles.container}>
                        <View style={styles.buttonContainer}>
                            {edicaoHabilitada ? (
                                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                                    <Ionicons name="save" size={20} color="white" />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={styles.editButton} onPress={() => handleEdit()}>
                                    <Ionicons name="pencil" size={20} color="white" />
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity style={styles.editButton} onPress={() => handleConvite()}>
                                <Ionicons name="paper-plane" size={20} color="white" />
                            </TouchableOpacity>
                        </View>

                        <Image style={styles.photo} source={caixaPresente} />
                        
                        <Text style={styles.label}>ID:</Text>
                        <TextInput
                            style={styles.input}
                            value={grupo?.grupoID.toString()}
                            editable={edicaoHabilitada}
                        />

                        <Text style={styles.label}>Nome:</Text>
                        <TextInput
                            style={styles.input}
                            value={grupo?.nome || "-"}
                            editable={edicaoHabilitada}
                            onChangeText={setNomeEditado} // Atualiza o estado do nome editado
                        />

                        <Text style={styles.label}>Quantidade Máxima:</Text>
                        <TextInput
                            style={styles.input}
                            value={grupo?.qtdeMaxima?.toString()}
                            editable={edicaoHabilitada}
                            onChangeText={setQtdeMaximaEditada} // Atualiza o estado da quantidade editada
                        />

                        <Text style={styles.label}>Valor:</Text>
                        <TextInput
                            style={styles.input}
                            value={grupo?.valor?.toString()}
                            editable={edicaoHabilitada}
                            onChangeText={setValorEditado} // Atualiza o estado do valor editado
                        />

                        <Text style={styles.label}>Data de Revelação:</Text>
                        <TextInput
                            style={styles.input}
                            value={grupo?.dataRevelacao || "-"}
                            editable={edicaoHabilitada}
                            onChangeText={setDataRevelacaoEditada} // Atualiza o estado da data editada
                        />

                        <Text style={styles.label}>Descrição do Grupo:</Text>
                        <TextInput
                            style={styles.input}
                            value={grupo?.descricaoGrupo || "-"}
                            editable={edicaoHabilitada}
                            onChangeText={setDescricaoGrupoEditada} // Atualiza o estado da descrição editada
                        />

                        

                    </View>
                )
            )}
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
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%', // Ocupa toda a largura disponível
            paddingLeft: 230, // Adiciona margem direita para afastar os botões da borda da tela
            marginBottom: 20, // Adiciona margem inferior entre os botões e o conteúdo abaixo
        },
        editButton: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#df59aa',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10, // Adiciona margem entre os botões
        },
    
    
    photo: {
        width: 80,
        height: 80,
        borderRadius: 35,
        marginRight: 10,
        alignSelf: 'center', // Adiciona esta propriedade para centralizar a foto horizontalmente
        marginBottom: 10,
        
    },
   
    input: {
        width: '80%',
        height: 30,
        borderColor: '#dce0e6',
        backgroundColor: '#FFCFEB',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 20,
        textAlignVertical: 'bottom',
        alignSelf: 'center'
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'white',
    // },
    saveButton: {
        borderRadius: 25,
        backgroundColor: '#df59aa',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#df59aa',
        marginBottom: 5,
        marginTop: 5,
        alignSelf: 'center',
        padding: 5, // Adicionando espaço interno para acomodar o ícone
    },

    // buttonContainer: {
    //     flexDirection: 'row',
    // justifyContent: 'flex-end', // Alinha o contêiner à direita
    // width: '38%',
    // alignSelf: 'center',
    // marginBottom: 20,
    // },
    
    
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
});

export default EditarGrupo;




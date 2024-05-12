import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Grupo } from '../../types/types';
import GrupoService from '../../services/grupoService';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/stack';
import { Ionicons } from '@expo/vector-icons';

const caixaPresente = require('../../../assets/images/caixaPresente.jpg');

const Details = ({ route }: any) => {
    const navigation = useNavigation<StackTypes>();
    const [grupo, setGrupo] = useState<Grupo>(); // Estado para armazenar os dados do grupo
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
    const [error, setError] = useState<string | null>(null); // Estado para armazenar mensagens de erro
    
    // Estado para controlar se a edição está habilitada ou não
const [edicaoHabilitada, setEdicaoHabilitada] = useState(false);
   

// Função para habilitar a edição
const habilitarEdicao = () => {
    setEdicaoHabilitada(true);
}


    // Estados para armazenar os valores editados temporariamente
    const [nomeEditado, setNomeEditado] = useState('');
    const [qtdeMaximaEditada, setQtdeMaximaEditada] = useState('');
    const [valorEditado, setValorEditado] = useState('');
    const [dataRevelacaoEditada, setDataRevelacaoEditada] = useState('');
    const [descricaoGrupoEditada, setDescricaoGrupoEditada] = useState('');

    const grupoService = new GrupoService();
    
    //busca grupo por ID
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
        // Inicializa os campos editados com os valores atuais do grupo
        setNomeEditado(grupo?.nome || '');
        setQtdeMaximaEditada(grupo?.qtdeMaxima?.toString() || '');
        setValorEditado(grupo?.valor?.toString() || '');
        setDataRevelacaoEditada(grupo?.dataRevelacao || '');
        setDescricaoGrupoEditada(grupo?.descricaoGrupo || '');
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
    

    const handleConvite = () => {
        navigation.navigate('EnviarConvite'); // Direciona para a tela de Cadastro
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
                                <TouchableOpacity style={styles.editButton} onPress={handleSave}>
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
                        <Text style={styles.label}>Nome do Grupo:</Text>
                        <TextInput
                            style={styles.input}
                            value={edicaoHabilitada ? nomeEditado : grupo?.nome || ''}
                            onChangeText={(text) => setNomeEditado(text)}
                            editable={edicaoHabilitada}
                        />
                        <Text style={styles.label}>Qtde Máxima:</Text>
                        <TextInput
                            style={styles.input}
                            value={edicaoHabilitada ? qtdeMaximaEditada : grupo?.qtdeMaxima?.toString() || ''}
                            onChangeText={(text) => setQtdeMaximaEditada(text)}
                            keyboardType="numeric"
                            editable={edicaoHabilitada}
                        />
                        <Text style={styles.label}>Valor R$: </Text>
                        <TextInput
                            style={styles.input}
                            value={edicaoHabilitada ? valorEditado : grupo?.valor?.toString() || ''}
                            onChangeText={(text) => setValorEditado(text)}
                            keyboardType="numeric"
                            editable={edicaoHabilitada}
                        />
                        <Text style={styles.label}>Data da Revelação:</Text>
                        <TextInput
                            style={styles.input}
                            value={edicaoHabilitada ? dataRevelacaoEditada : grupo?.dataRevelacao || ''}
                            onChangeText={(text) => setDataRevelacaoEditada(text)}
                            editable={edicaoHabilitada}
                        />
                        <Text style={styles.label}>Descrição do Grupo:</Text>
                        <TextInput
                            style={styles.input}
                            value={edicaoHabilitada ? descricaoGrupoEditada : grupo?.descricaoGrupo || ''}
                            onChangeText={(text) => setDescricaoGrupoEditada(text)}
                            editable={edicaoHabilitada}
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

export default Details;

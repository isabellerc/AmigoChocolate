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
    const [edicaoHabilitada, setEdicaoHabilitada] = useState(false); // Estado para controlar se a edição está habilitada ou não
    const [nomeEditado, setNomeEditado] = useState('');
    const [qtdeMaximaEditada, setQtdeMaximaEditada] = useState('');
    const [valorEditado, setValorEditado] = useState('');
    const [dataRevelacaoEditada, setDataRevelacaoEditada] = useState('');
    const [descricaoGrupoEditada, setDescricaoGrupoEditada] = useState('');

    const grupoService = new GrupoService();

    useEffect(() => {
        const fetchGrupo = async () => {
            try {
                const fetchedGrupo: Grupo | null = await grupoService.buscarGrupoPorID(route.params.grupoID || 0);
                if (fetchedGrupo != null) {
                    setGrupo(fetchedGrupo);
                } else {
                    setError('Grupo não encontrado ' + route.params.grupoID + '.');
                }
            } catch (error) {
                console.error('Erro ao buscar grupo:', error);
                setError('Erro ao buscar grupo. Tente novamente mais tarde.');
            } finally {
                setLoading(false); // Certifique-se de que setLoading(false) está dentro do bloco try-catch-finally
            }
        };

        fetchGrupo();
    }, [route.params.grupoID]);

    const handleEdit = () => {
        setEdicaoHabilitada(true);
        setNomeEditado(grupo?.NomeGrupo || '');
        setQtdeMaximaEditada(grupo?.QuantidadeMaxima?.toString() || '');
        setValorEditado(grupo?.ValorChocolate?.toString() || '');
        setDataRevelacaoEditada(grupo?.DataRevelacao || '');
        setDescricaoGrupoEditada(grupo?.Descricao || '');
    };

    const handleSave = async () => {
        try {
            if (!grupo) {
                throw new Error('Grupo não encontrado.');
            }
            const novoGrupo: Grupo = {
                NomeGrupo: nomeEditado,
                QuantidadeMaxima: parseInt(qtdeMaximaEditada),
                ValorChocolate: parseFloat(valorEditado),
                DataRevelacao: dataRevelacaoEditada,
                Descricao: descricaoGrupoEditada,
            };

            await grupoService.editarGrupo(grupo.IDGrupo ?? 0, novoGrupo);
            setGrupo(novoGrupo);
            setEdicaoHabilitada(false);
        } catch (error) {
            console.error('Erro ao salvar grupo:', error);
            Alert.alert('Erro ao salvar grupo. Tente novamente mais tarde.');
        }
    };

    const handleConvite = () => {
        console.log('Botão de convite pressionado');
        navigation.navigate('AdicionarParticipante', { grupoID: 1 }); 
    };

    const handleSortear = () => {
        console.log('Botão de sortear pressionado');
        navigation.navigate('SortearScreen');
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
                                <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                                    <Ionicons name="pencil" size={20} color="white" />
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity style={styles.editButton} onPress={() => handleConvite()}>
                                <Ionicons name="person-add" size={20} color="white" />
                            </TouchableOpacity>
                        </View>

                        <Image style={styles.photo} source={caixaPresente} />
                        
                        <Text style={styles.label}>ID:</Text>
                        <TextInput
                            style={styles.input}
                            value={grupo?.IDGrupo?.toString() || ''}
                            editable={false}
                        />
                        <Text style={styles.label}>Nome do Grupo:</Text>
                        <TextInput
                            style={styles.input}
                            value={edicaoHabilitada ? nomeEditado : grupo?.NomeGrupo || ''}
                            onChangeText={(text) => setNomeEditado(text)}
                            editable={edicaoHabilitada}
                        />
                        <Text style={styles.label}>Qtde Máxima:</Text>
                        <TextInput
                            style={styles.input}
                            value={edicaoHabilitada ? qtdeMaximaEditada : grupo?.QuantidadeMaxima?.toString() || ''}
                            onChangeText={(text) => setQtdeMaximaEditada(text)}
                            keyboardType="numeric"
                            editable={edicaoHabilitada}
                        />
                        <Text style={styles.label}>Valor R$: </Text>
                        <TextInput
                            style={styles.input}
                            value={edicaoHabilitada ? valorEditado : grupo?.ValorChocolate?.toString() || ''}
                            onChangeText={(text) => setValorEditado(text)}
                            keyboardType="numeric"
                            editable={edicaoHabilitada}
                        />
                        <Text style={styles.label}>Data da Revelação:</Text>
                        <TextInput
                            style={styles.input}
                            value={edicaoHabilitada ? dataRevelacaoEditada : grupo?.DataRevelacao || ''}
                            onChangeText={(text) => setDataRevelacaoEditada(text)}
                            editable={edicaoHabilitada}
                        />
                        <Text style={styles.label}>Descrição do Grupo:</Text>
                        <TextInput
                            style={styles.input}
                            value={edicaoHabilitada ? descricaoGrupoEditada : grupo?.Descricao || ''}
                            onChangeText={(text) => setDescricaoGrupoEditada(text)}
                            editable={edicaoHabilitada}
                        />
                        <TouchableOpacity style={styles.buttonSortear} onPress={handleSortear}>
                            <Text style={styles.buttonTextSortear}>Realizar Sorteio</Text>
                        </TouchableOpacity>
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

    buttonSortear: {
        width: '35%',
        height: 40,
        borderRadius: 20,
        backgroundColor: '#df59aa',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#df59aa',
        marginBottom: 10,
    },
    buttonTextSortear: {
        color: 'white',
        fontSize: 16,
    },
});

export default Details;

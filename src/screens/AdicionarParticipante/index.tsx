import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, StackTypes } from '../../routes/stack';
import GrupoService from '../../services/grupoService';
import GrupoParticipanteService from '../../services/grupoParticipanteService';
import { Grupo, Participante } from '../../types/types';

type AdicionarParticipanteScreenRouteProp = RouteProp<RootStackParamList, 'AdicionarParticipante'>;
type AdicionarParticipanteScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AdicionarParticipante'>;

const AdicionarParticipante = ({ route }: any) => {
    const navigation = useNavigation<StackTypes>();
    //const route = useRoute<AdicionarParticipanteScreenRouteProp>();

    const [grupo, setGrupo] = useState<Grupo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [nomeParticipante, setNomeParticipante] = useState('');

    const grupoService = new GrupoService();
    const grupoParticipanteService = new GrupoParticipanteService();

    useEffect(() => {
        const fetchGrupo = async () => {
            try {
                const grupoID = route.params?.grupoID;
                console.log('grupoID:', grupoID); // Adicionando log de depuração

                if (!grupoID) {
                    setError('ID do grupo não fornecido.');
                    setLoading(false);
                    return;
                }
                //const fetchedGrupo: await grupoParticipanteService.buscarParticipantesPorGrupo(Number(route.params?.grupoID));
                const fetchedGrupo = await grupoParticipanteService.buscarParticipantesPorGrupo(Number(grupoID));
                console.log('fetchedGrupo:', fetchedGrupo); // Adicionando log de depuração

                if (!fetchedGrupo) {
                    setError('Grupo não encontrado.');
                } else {
                    setGrupo(fetchedGrupo);
                }
            } catch (error) {
                console.error('Erro ao buscar grupo:', error); // Adicionando log de erro
                setError('Erro ao buscar grupo. Tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchGrupo();
    }, [route.params?.grupoID]);

    const handleAdicionarParticipante = async () => {
        if (!nomeParticipante.trim()) {
            Alert.alert('Erro', 'Por favor, preencha o nome do participante.');
            return;
        }

        try {
            if (!grupo) {
                Alert.alert('Erro', 'Grupo não encontrado.');
                return;
            }

            if (typeof grupo.IDGrupo === 'number') {
                const participantes = await grupoParticipanteService.buscarParticipantesPorGrupo(grupo.IDGrupo);
                console.log('participantes:', participantes); // Adicionando log de depuração

                const participanteExistente = participantes.find((p: Participante) => p.NomeParticipante === nomeParticipante);

                if (participanteExistente) {
                    Alert.alert('Erro', 'Participante já está no grupo.');
                    return;
                }

                const participanteID = await grupoParticipanteService.buscarParticipantePorNome(nomeParticipante);
                console.log('participanteID:', participanteID); // Adicionando log de depuração

                if (typeof participanteID === 'number') {
                    await grupoParticipanteService.adicionarParticipanteAoGrupo(grupo.IDGrupo, participanteID);
                    Alert.alert('Sucesso', 'Participante adicionado com sucesso.');
                    navigation.goBack();
                } else {
                    Alert.alert('Erro', 'Participante não encontrado.');
                }
            } else {
                Alert.alert('Erro', 'ID do grupo não está definido ou não é um número válido.');
            }
        } catch (error) {
            console.error('Erro ao adicionar participante:', error); // Adicionando log de erro
            Alert.alert('Erro', 'Não foi possível adicionar o participante. Tente novamente mais tarde.');
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
                    <View>
                        <Text style={styles.title}>Adicionar Participante ao Grupo {grupo.NomeGrupo}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome do Participante"
                            value={nomeParticipante}
                            onChangeText={setNomeParticipante}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleAdicionarParticipante}>
                            <Text style={styles.buttonText}>Adicionar</Text>
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
        padding: 16,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#df59aa',
        borderRadius: 8,
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default AdicionarParticipante;

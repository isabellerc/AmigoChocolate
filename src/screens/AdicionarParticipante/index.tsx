import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, StackTypes } from '../../routes/stack';
import { Participante } from '../../types/types'; // Exemplo de caminho e nome do arquivo podem variar

import GrupoService from '../../services/grupoService';
import GrupoParticipanteService from '../../services/grupoParticipanteService';
import ParticipanteService from '../../services/participanteService';
import { Grupo, GrupoParticipante } from '../../types/types';

type AdicionarParticipanteScreenRouteProp = RouteProp<RootStackParamList, 'AdicionarParticipante'>;
type AdicionarParticipanteScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AdicionarParticipante'>;

const AdicionarParticipante = ({ route }: any) => {
    const navigation = useNavigation<StackTypes>();

    const [grupo, setGrupo] = useState<Grupo | null>(null);
    const [participantes, setParticipantes] = useState<GrupoParticipante[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [nomeParticipante, setNomeParticipante] = useState('');
    const [allParticipants, setAllParticipants] = useState<Participante[]>([]); // New state for all participants

    const grupoService = new GrupoService();
    const grupoParticipanteService = new GrupoParticipanteService();
    const participanteService = new ParticipanteService();

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
                
                const fetchedGrupo = await grupoService.buscarGrupoPorID(Number(grupoID));
                const fetchedParticipantes = await grupoParticipanteService.buscarParticipantesPorGrupo(Number(grupoID));
                console.log('fetchedGrupo:', fetchedGrupo); // Adicionando log de depuração
                console.log('fetchedParticipantes:', fetchedParticipantes); // Adicionando log de depuração

                if (!fetchedGrupo) {
                    setError('Grupo não encontrado.');
                } else {
                    setGrupo(fetchedGrupo);
                    setParticipantes(fetchedParticipantes);
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
            const participantesExistente = await participanteService.buscarParticipantes();
            const participanteExistente = participantesExistente.find((p) => p.NomeParticipante === nomeParticipante);
            
            if(nomeParticipante != ''){
                console.log(participantesExistente);
                console.log(participanteExistente);
            }
            if (!participanteExistente) {
                Alert.alert('Erro', 'Participante não encontrado.');
                return;
            }
            
            
            // const participanteID = participanteExistente.IDParticipante;
    
            // const participanteNoGrupo = participantes.find((p) => p.participante?.idParticipante === participanteID);
    
            // if (participanteNoGrupo) {
            //     Alert.alert('Erro', 'Participante já está no grupo.');
            //     return;
            // }
    
            // if (grupo?.IDGrupo) {
            //     await grupoParticipanteService.adicionarParticipanteAoGrupo(grupo.IDGrupo, participanteID? participanteID:0);
            //     Alert.alert('Sucesso', 'Participante adicionado com sucesso.');
            //     navigation.goBack();
            // } else {
            //     Alert.alert('Erro', 'ID do grupo não está definido ou não é um número válido.');
            // }
        } catch (error) {
            console.error('Erro ao adicionar participante:', error);
            Alert.alert('Erro', 'Não foi possível adicionar o participante. Tente novamente mais tarde.');
        }
    };

    const renderParticipante = ({ item }: { item: GrupoParticipante }) => {
        console.log('Renderizando participante:', item); // Log para verificar o conteúdo do item
        return (
            <View style={styles.participanteItem}>
                <TextInput
                    style={styles.input}
                    value={item.participante?.nomeParticipante ?? ''}
                    editable={false}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicionar Participante</Text>
            <View style={styles.inputContainer}>
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
            <Text style={styles.Participantes}>Participantes: </Text>
            <FlatList
                style={styles.participantesList}
                data={participantes}
                keyExtractor={(item) => item.idGrupoParticipante?.toString() ?? `${Math.random()}`}
                renderItem={renderParticipante}
                ListEmptyComponent={<Text>Nenhum participante cadastrado.</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        width: '100%',
    },
    input: {
        flex: 1,
        height: 30,
        borderColor: '#dce0e6',
        backgroundColor: '#FFCFEB',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 20,
        textAlignVertical: 'bottom',
    },
    button: {
        backgroundColor: '#df59aa',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    Participantes: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center', // Alinha o texto "Participantes" ao centro
    },
    participantesList: {
        width: '100%',
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center', // Alinha o título "Adicionar Participante" ao centro
    },
    participanteItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
});

export default AdicionarParticipante;

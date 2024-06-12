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

    // const handleEdit = (grupoID: number) => {
    //     navigation.navigate('Details', { grupoID });
    // };

    // const handleEdit = (grupoID: number | undefined) => {
    //     if (grupoID !== undefined) {
    //         console.log('Navigating to Details for grupoID:', grupoID); // Adicionado para depuração
    //         navigation.navigate('Details', { grupoID });
    //     } else {
    //         console.error('grupoID is undefined');
    //     }
    // };

    const handleEdit = (grupoID: number) => {
        console.log('Navigating to Details for grupoID:', grupoID);
        navigation.navigate('Details', { grupoID });
    };
    
    
    // codigo sem os logs
    // const renderItem = ({ item }: { item: Grupo }) => (
    //     <View style={styles.item}>
    //         <TouchableOpacity onPress={() => item.IDGrupo !== undefined && handleEdit(item.IDGrupo)}>
    //             <View style={styles.grupoInfo}>
    //                 <Image source={caixaPresente} style={styles.photo} resizeMode="contain" />
    //                 <Text style={styles.grupoInfoText}>{item.NomeGrupo}</Text>
    //             </View>
    //         </TouchableOpacity>
    //     </View>
    // );
    const renderItem = ({ item }: { item: Grupo }) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => {
                console.log('Item clicado:', item); // Adicionado para depuração
                item.IDGrupo !== undefined && handleEdit(item.IDGrupo);
            }}>
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

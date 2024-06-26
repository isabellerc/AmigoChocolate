import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SortearScreen = () => {
  const [participantes, setParticipantes] = useState<string[]>([]);
  const [resultado, setResultado] = useState<string | null>(null);

  const realizarSorteio = () => {
    if (participantes.length === 0) {
      Alert.alert('Não há participantes suficientes para realizar o sorteio.');
      return;
    }

    const indiceAleatorio = Math.floor(Math.random() * participantes.length);
    const participanteSorteado = participantes[indiceAleatorio];
    setResultado(participanteSorteado);
  };

  useEffect(() => {
    setParticipantes(['Ana Carla', 'Humberto', 'Paulo', 'Viviane']);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sortear Amigo Chocolate</Text>
      {!resultado && (
        <TouchableOpacity style={styles.buttonSortear} onPress={realizarSorteio}>
          <Text style={styles.buttonSortearText}>SORTEAR</Text>
        </TouchableOpacity>
      )}
      {resultado && (
        <View>
          <Text style={styles.resultTitle}>Resultado do Sorteio:</Text>
          <Text style={styles.participant}>Você saiu com: </Text>
          <Text style={styles.participantTitle}>{resultado}</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#df59aa'
  },
  participantTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#df59aa'
  },
  buttonSortear: {
    width: '50%',
    height: 50,
    backgroundColor: '#df59aa',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonSortearText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  participant: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default SortearScreen;

import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { StackTypes } from '../../routes/stack';

const Home = () => {

    const navigation = useNavigation<StackTypes>();

    const handleCriarGrupo = () => {
        navigation.navigate('CriarGrupo');
    };

    // const [confirmaSenha, setConfirmaSenha] = useState<string>('');

return (
    <View style={styles.container}>
        <Text style={styles.title}>Home!</Text>

        <TouchableOpacity onPress={handleCriarGrupo} style={styles.button} activeOpacity={0.1}>
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
        backgroundColor: '#white',
    },
    
    title: {
        fontSize: 50,
        marginBottom: 30,
        color: '#df59aa',
        fontWeight: 'bold',
    },
    input: {
        width: '40%',
        height: 40,
        borderColor: '#dce0e6',
        backgroundColor: '#dce0e6',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
      width: '20%',
      height: 40,
      borderRadius: 20,
      backgroundColor: '#df59aa',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#df59aa',
      marginBottom: 20,
      marginTop: 20,
      
  },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    link: {
        color: 'black',
        marginBottom: 10,
        
    }
});

export default Home;
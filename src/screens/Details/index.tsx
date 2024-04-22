// import React, { useState, useEffect } from 'react';
// import { View, Text , Image} from 'react-native';
// import UserService from '../../services/userService';
// import { Grupo } from '../../types/types';
// import { StackTypes } from '../../routes/stack';
// // import { StackRouteProp } from '../../routes/stack';
// import GrupoService from '../../services/grupoService';



// const caixaPresente = require('../../assets/caixaPresente.png');

// // type DetailsScreenProps = {
// //     route: StackRouteProp<'Details'>; // Ajuste no tipo aqui
// // };


// type DetailsScreenProps = {
//     route: StackRouteProp<'Details',{ grupoID: number }>;
// };


// const Details = ({ route }: DetailsScreenProps) => {
    
//     const [grupo, setGrupo] = useState<Grupo>(); // Estado para armazenar os dados do grupo
//     const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
//     const [error, setError] = useState<string | null>(null); // Estado para armazenar mensagens de erro

//     const grupoService = new GrupoService();

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
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             {loading ? (
//                 <Text>Carregando...</Text>
//             ) : error ? (
//                 <Text>{error}</Text>
//             ) : (
                
//                 grupo && (
//                     <View>
//                         <Text>Id: {route.params.grupoID}</Text>
//                         <Text>Nome: {grupo.nome == null ? "-" : grupo.nome }</Text>
//                         <Text>Quantidade máxima: {grupo.qtdeMaxima}</Text>
//                         <Text>Valor: {grupo.valor}</Text>
//                         <Text>Data Revelação: {grupo.dataRevelacao}</Text>
//                         <Text>Descrição Grupo: {grupo.descricaoGrupo}</Text>
//                         <Image source={mascoteImage}   resizeMode="contain" />
//                     </View>
//                 )
//             )}
//         </View>
//     );
// };


// export default Details;
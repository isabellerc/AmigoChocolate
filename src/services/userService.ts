import axios, { AxiosResponse } from 'axios'; // Importa o módulo axios e o tipo AxiosResponse de 'axios'
import { Participante } from '../types/types'; // Importa o tipo User de '../types/types'

const BASE_URL = 'https://localhost:7146/api/Participantes'; 


class UserService { // Declaração da classe UserService

    constructor() {
        // Se necessário, adicione inicializações aqui
    }

    // async addUser(novoParticipante: Participante): Promise<boolean> {
    //     try {
    //       console.log('Dados do usuário:', novoParticipante);
    //       const formData = new FormData();
    //       formData.append('NomeParticipante', novoParticipante.NomeParticipante);
    //       formData.append('EmailParticipante', novoParticipante.EmailParticipante);
    //       formData.append('SenhaParticipante', novoParticipante.SenhaParticipante);
    //       // if (novoGrupo.Icone) {
    //       //   formData.append('Icone', {
    //       //     uri: novoGrupo.Icone,
    //       //     name: 'icone.jpg',
    //       //     type: 'image/jpeg'
    //       //   } as any); // A definição de tipo 'any' é para evitar problemas de tipo, mas ajuste conforme necessário
    //       // }
    
    //       //tirar a / qualquer coisa antes do post
    //       const response = await axios.post(BASE_URL + '/Post', formData, {
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //         },
    //       });
    
    //       return response.status === 201;
    //     } catch (error) {
    //       console.error('Erro ao adicionar grupo:', error);
    //       return false;
    //     }
    //   }
    async addUser(novoParticipante: Participante): Promise<boolean> { // Método assíncrono para adicionar um usuário
        try {
            const response = await axios.post(`${BASE_URL}`+ '/Post', novoParticipante);
            console.log('Dados do usuário:', novoParticipante);
            // const formData = new FormData(); // Cria um objeto FormData para enviar dados no formato de formulário
            // formData.append('nome', usuario.nome); // Adiciona o nome de usuário ao FormData
            // formData.append('senha', usuario.senha); // Adiciona a senha ao FormData
            // formData.append('confirmaSenha', usuario.confirmaSenha); // Adiciona a senha ao FormData
            // formData.append('icone', usuario.icone.toString());

            // const responsePhoto = await fetch(usuario.icone); // Faz uma requisição assíncrona para obter a foto do usuário

            // const blob = await responsePhoto.blob(); // Converte a foto em um blob

            // formData.append('photo', blob, 'photo.jpg'); // Adiciona a foto ao FormData

            // const uploadResponse = await axios.post(BASE_URL+'addUser', formData, { // Faz uma requisição POST para adicionar o usuário
            //     headers: {
            //         'Content-Type': 'multipart/form-data', // Define o tipo de conteúdo como 'multipart/form-data'
            //     },
            // });

            return response.status === 201; // Retorna true se o usuário foi adicionado com sucesso

        } catch (error) {
            console.error('Erro ao adicionar usuário:', error); // Exibe um erro caso ocorra algum problema
            return false; // Retorna false em caso de erro
        }
    }

    async validateUser(username: string, password: string): Promise<boolean> { // Método assíncrono para validar um usuário
        try {
            const response: AxiosResponse<Participante[]> = await axios.get(`${BASE_URL}/Get?username=${username}&password=${password}`);

            //na aplicação de vocês não retorna array não e o metodo sera um post que retorna um unico usuario.
            if (response.data.length === 0) { // Verifica se não há dados retornados
                return false; // Retorna false se não houver dados
            }

            return response.status === 200; // Retorna true se o status da resposta for 200 (OK)

        } catch (error) {
            console.error('Erro ao validar usuário:', error); // Exibe um erro caso ocorra algum problema
            return false; // Retorna false em caso de erro
        }
    }

    async getUserById(userId: number): Promise<Participante> { // Método assíncrono para obter um usuário por ID
        try {
            const response: AxiosResponse<Participante> = await axios.get(`${BASE_URL}?id=${userId}`); // Faz uma requisição GET para obter o usuário por ID
            return response.data; // Retorna os dados do usuário obtidos na resposta

        } catch (error) {
            console.error('Erro ao buscar usuário pelo ID:', error); // Exibe um erro caso ocorra algum problema

            //Depois inserir o icone no final icone: ''
            return { IDParticipante: 0, NomeParticipante: '', EmailParticipante: '', SenhaParticipante: ''}; // Retorna um objeto vazio em caso de erro
        }
    }

    async getAllUsers(): Promise<Participante[] | null> { // Método assíncrono para obter todos os usuários
        try {
            const response: AxiosResponse<Participante[]> = await axios.get(`${BASE_URL}`); // Faz uma requisição GET para obter todos os usuários
            return response.data; // Retorna os dados dos usuários obtidos na resposta

        } catch (error) {
            console.error('Erro ao buscar usuário pelo ID:', error); // Exibe um erro caso ocorra algum problema
            return null; // Retorna null em caso de erro
        }
    }
}

export default UserService; // Exporta a classe UserService

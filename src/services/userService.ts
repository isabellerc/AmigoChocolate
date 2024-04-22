import axios, { AxiosResponse } from 'axios'; // Importa o módulo axios e o tipo AxiosResponse de 'axios'
import { User } from '../types/types'; // Importa o tipo User de '../types/types'

const BASE_URL = 'http://localhost:3000/User/'; 


class UserService { // Declaração da classe UserService

    constructor() {
        // Se necessário, adicione inicializações aqui
    }

    async addUser(novoUsuario: User): Promise<boolean> { // Método assíncrono para adicionar um usuário
        try {
            const response = await axios.post(`${BASE_URL}`, novoUsuario);
            console.log('Dados do usuário:', novoUsuario);
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
            const response: AxiosResponse<User[]> = await axios.get(`${BASE_URL}?username=${username}&password=${password}`); // Faz uma requisição GET para validar o usuário
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

    async getUserById(userId: number): Promise<User> { // Método assíncrono para obter um usuário por ID
        try {
            const response: AxiosResponse<User> = await axios.get(`${BASE_URL}?id=${userId}`); // Faz uma requisição GET para obter o usuário por ID
            return response.data; // Retorna os dados do usuário obtidos na resposta

        } catch (error) {
            console.error('Erro ao buscar usuário pelo ID:', error); // Exibe um erro caso ocorra algum problema
            return { id: 0, nome: '', senha: '', confirmaSenha: '', icone: '' }; // Retorna um objeto vazio em caso de erro
        }
    }

    async getAllUsers(): Promise<User[] | null> { // Método assíncrono para obter todos os usuários
        try {
            const response: AxiosResponse<User[]> = await axios.get(`${BASE_URL}`); // Faz uma requisição GET para obter todos os usuários
            return response.data; // Retorna os dados dos usuários obtidos na resposta

        } catch (error) {
            console.error('Erro ao buscar usuário pelo ID:', error); // Exibe um erro caso ocorra algum problema
            return null; // Retorna null em caso de erro
        }
    }
}

export default UserService; // Exporta a classe UserService

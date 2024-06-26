import axios, { AxiosResponse } from 'axios';
import { Participante } from '../types/types';

const BASE_URL = 'https://localhost:7146/api';

export default class ParticipanteService {
    async criarParticipante(novoParticipante: Participante): Promise<boolean> {
        try {
            const formData = new FormData();
            formData.append('NomeParticipante', novoParticipante.NomeParticipante);
            formData.append('EmailParticipante', novoParticipante.EmailParticipante);
            formData.append('SenhaParticipante', novoParticipante.SenhaParticipante);

            // Descomente e ajuste se estiver lidando com ícones
            // if (novoParticipante.icone) {
            //     formData.append('Icone', {
            //         uri: novoParticipante.icone,
            //         name: 'icone.jpg',
            //         type: 'image/jpeg'
            //     } as any);
            // }

            const response = await axios.post(BASE_URL + '/Participantes/Post', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            return response.status === 201;
        } catch (error) {
            console.error('Erro ao adicionar participante:', error);
            return false;
        }
    }

    async buscarParticipantes(): Promise<Participante[]> {
        try {
            const response: AxiosResponse<Participante[]> = await axios.get(`${BASE_URL}/Participantes`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar participantes:', error);
            return [];
        }
    }

    async buscarParticipantePorID(id: number): Promise<Participante | null> {
        try {
            const response: AxiosResponse<Participante> = await axios.get(`${BASE_URL}/Participantes/BuscarParticipantePorID/${id}`);
            return response.status === 200 ? response.data : null;
        } catch (error) {
            console.error('Erro ao buscar participante por ID:', error);
            return null;
        }
    }

    async editarParticipante(id: number, participante: Participante): Promise<boolean> {
        try {
            const response: AxiosResponse = await axios.put(`${BASE_URL}/Participantes/${id}`, participante);
            return response.status === 200;
        } catch (error) {
            console.error('Erro ao editar participante:', error);
            return false;
        }
    }

    async excluirParticipante(id: number): Promise<boolean> {
        try {
            const response: AxiosResponse = await axios.delete(`${BASE_URL}/Participantes/${id}`);
            return response.status === 204;
        } catch (error) {
            console.error('Erro ao excluir participante:', error);
            return false;
        }
    }

    async buscarParticipantesPorGrupo(idGrupo: number): Promise<Participante[]> {
        try {
            const response: AxiosResponse<Participante[]> = await axios.get(`${BASE_URL}/GrupoParticipante/GetParticipantesPorGrupo/${idGrupo}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar participantes por grupo:', error);
            return [];
        }
    }
}

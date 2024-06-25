import axios from 'axios';

class GrupoParticipanteService {
    private baseURL = 'https://localhost:7146/api/GrupoParticipante';

    // Buscar participantes por grupo
    async buscarParticipantesPorGrupo(grupoID: number) {
        try {
            const response = await axios.get(`${this.baseURL}/BuscarParticipantesDoGrupo/${grupoID}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Buscar participante por nome
    async buscarParticipantePorNome(nomeParticipante: string) {
        try {
            const response = await axios.get(`${this.baseURL}/BuscarParticipantePorNome`, {
                params: {
                    nomeParticipante: nomeParticipante
                }
            });
            return response.data.id; // Supondo que a resposta contenha um campo 'id' com o ID do participante
        } catch (error) {
            throw error;
        }
    }

    // Adicionar participante ao grupo
    async adicionarParticipanteAoGrupo(grupoID: number, participanteID: number) {
        try {
            const response = await axios.post(`${this.baseURL}`, { // Endpoint correto
                IDGrupo: grupoID,
                IDParticipante: participanteID,
                IDGrupoParticipante: grupoID // Garante que IDGrupoParticipante seja igual a IDGrupo
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default GrupoParticipanteService;

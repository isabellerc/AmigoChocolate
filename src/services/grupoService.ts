// import axios, { AxiosResponse } from 'axios';
// import { Grupo, Participante } from '../types/types';

// const BASE_URL = 'https://localhost:7146/api/Grupo';

// const formatDate = (date: Date): string => {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const day = String(date.getDate()).padStart(2, '0');
//   const hours = String(date.getHours()).padStart(2, '0');
//   const minutes = String(date.getMinutes()).padStart(2, '0');
//   const seconds = String(date.getSeconds()).padStart(2, '0');
//   return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
// };

// export default class GrupoService {
//   async criarGrupo(novoGrupo: Grupo): Promise<boolean> {
//     try {
//       const formData = new FormData();
//       formData.append('NomeGrupo', novoGrupo.NomeGrupo);
//       formData.append('QuantidadeMaxima', novoGrupo.QuantidadeMaxima.toString());
//       formData.append('ValorChocolate', novoGrupo.ValorChocolate.toString());
//       formData.append('DataRevelacao', formatDate(new Date(novoGrupo.DataRevelacao)));
//       formData.append('Descricao', novoGrupo.Descricao);

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

//   async buscarGrupos(): Promise<Grupo[]> {
//     try {
//         const response = await fetch(`${BASE_URL}/buscarGrupos`);

//         // Verificar se a resposta HTTP foi bem-sucedida (status 200)
//         if (!response.ok) {
//             throw new Error(`Erro ao buscar grupos: ${response.status} - ${response.statusText}`);
//         }

//         // Converter a resposta para JSON
//         const data = await response.json();

//         // Verificar se os dados retornados são um array
//         if (!Array.isArray(data)) {
//             throw new Error(`Erro ao buscar grupos: os dados retornados não são um array`);
//         }

//         // Mapear os dados para objetos do tipo Grupo
//         const grupos: Grupo[] = data.map((grupo: any) => ({
//             IDGrupo: grupo.idGrupo,
//             NomeGrupo: grupo.nomeGrupo,
//             QuantidadeMaxima: grupo.quantidadeMaxima,
//             ValorChocolate: grupo.valorChocolate,
//             DataRevelacao: new Date(grupo.dataRevelacao).toISOString(), // Convertendo para ISO string
//             Descricao: grupo.descricao,
//             Icone: grupo.icone,
//         }));

//         return grupos;
//     } catch (error) {
//         console.error('Erro ao buscar grupos:', error);
//         return [];
//     }
// }

// async BuscarParticipantesPorGrupo(idGrupo: number): Promise<Participante[]> {
//   try {
//     const response = await axios.get<Participante[]>(`https://localhost:7146/api/GrupoParticipante/GetParticipantesPorGrupo/${idGrupo}`);
//     return response.data;
//   } catch (error) {
//     console.error('Erro ao buscar participantes:', error);
//     throw error;
//   }
// }



//   async BuscarGrupoPorID(grupoID: number): Promise<Grupo | null> {
//     try {
//         const response = await axios.get(`${BASE_URL}/BuscarGrupoPorID?id=${grupoID}`);
       
//         const auxGrupo: Grupo = {
//           NomeGrupo: response.data.nomeGrupo,
//           QuantidadeMaxima: response.data.quantidadeMaxima,
//           ValorChocolate: response.data.valorChocolate,
//           DataRevelacao: response.data.dataRevelacao,
//           //DataRevelacao: dataRevelacaoEditada || new Date(), // Garante que seja sempre uma data
//           Descricao: response.data.descricao,
//       };
//         return auxGrupo;
//     } catch (error) {
//         console.error('Erro ao buscar grupo por ID:', error);
//         return null;
//     }
// }


//   async editarGrupo(id: number, grupo: Grupo): Promise<boolean> {
//       try {
//           const response: AxiosResponse = await axios.put(`${BASE_URL}/${id}`, grupo);
//           return response.status === 200;
//       } catch (error) {
//           console.error('Erro ao editar grupo:', error);
//           return false;
//       }
//   }
    
//     async excluirGrupo(id: number): Promise<boolean> {
//       try {
//           const response = await axios.delete(`${BASE_URL}/api/Grupos/${id}`);
//           return response.status === 204; // Verifica se o status é 204 (No Content)
//       } catch (error) {
//           console.error('Erro ao excluir grupo:', error);
//           return false;
//       }
//     }
    
// }

// 2º codigo:
import axios, { AxiosResponse } from 'axios';
import { Grupo, Participante } from '../types/types';

const BASE_URL = 'https://localhost:7146/api/Grupos';

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

class GrupoService {
  async criarGrupo(novoGrupo: Grupo): Promise<boolean> {
    try {
      const formData = new FormData();
      formData.append('NomeGrupo', novoGrupo.NomeGrupo);
      formData.append('QuantidadeMaxima', novoGrupo.QuantidadeMaxima.toString());
      formData.append('ValorChocolate', novoGrupo.ValorChocolate.toString());
      formData.append('DataRevelacao', formatDate(new Date(novoGrupo.DataRevelacao)));
      formData.append('Descricao', novoGrupo.Descricao);

      const response = await axios.post(BASE_URL + '/Post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.status === 201;
    } catch (error) {
      console.error('Erro ao adicionar grupo:', error);
      return false;
    }
  }

  async buscarGrupos(): Promise<Grupo[]> {
    try {
      const response = await fetch(`${BASE_URL}/buscarGrupos`);

      if (!response.ok) {
        throw new Error(`Erro ao buscar grupos: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error(`Erro ao buscar grupos: os dados retornados não são um array`);
      }

      const grupos: Grupo[] = data.map((grupo: any) => ({
        IDGrupo: grupo.idGrupo,
        NomeGrupo: grupo.nomeGrupo,
        QuantidadeMaxima: grupo.quantidadeMaxima,
        ValorChocolate: grupo.valorChocolate,
        DataRevelacao: new Date(grupo.dataRevelacao).toISOString(),
        Descricao: grupo.descricao,
        Icone: grupo.icone,
      }));

      return grupos;
    } catch (error) {
      console.error('Erro ao buscar grupos:', error);
      return [];
    }
  }

  async buscarGrupoPorID(grupoID: number): Promise<Grupo | null> {
    try {
      const response = await axios.get(`${BASE_URL}/BuscarGrupoPorID?id=${grupoID}`);
      
      const auxGrupo: Grupo = {
        NomeGrupo: response.data.nomeGrupo,
        QuantidadeMaxima: response.data.quantidadeMaxima,
        ValorChocolate: response.data.valorChocolate,
        DataRevelacao: response.data.dataRevelacao,
        Descricao: response.data.descricao,
      };

      return auxGrupo;
    } catch (error) {
      console.error('Erro ao buscar grupo por ID:', error);
      return null;
    }
  }

  async editarGrupo(id: number, grupo: Grupo): Promise<boolean> {
    try {
      const response: AxiosResponse = await axios.put(`${BASE_URL}/${id}`, grupo);
      return response.status === 200;
    } catch (error) {
      console.error('Erro ao editar grupo:', error);
      return false;
    }
  }

  async excluirGrupo(id: number): Promise<boolean> {
    try {
      const response = await axios.delete(`${BASE_URL}/api/Grupos/${id}`);
      return response.status === 204;
    } catch (error) {
      console.error('Erro ao excluir grupo:', error);
      return false;
    }
  }

  


}

export default GrupoService;

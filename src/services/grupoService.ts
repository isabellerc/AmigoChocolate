import axios, { AxiosResponse } from 'axios';
import { Grupo} from '../types/types';

const BASE_URL = 'http://localhost:3000/Grupo/';
class GrupoService {

    constructor() {
        // Se necessário, adicione inicializações aqui
      }

  async addGrupo(novoGrupo: Grupo): Promise<boolean> { //newGroup nome da variavel : Group é o tipo (interface)
    try {
      //comentei 20/04
    const response = await axios.post(`${BASE_URL}`, novoGrupo);
    console.log('Dados do grupo:', novoGrupo);
    
      
   
//codigo novo:
    return response.status === 201; // Retorna true se o grupo foi adicionado com sucesso
    } catch (error) {
          console.error('Erro ao adicionar grupo:', error);
    return false; // Retorna false em caso de erro  
    
    // //tava comentado daqui:
    // const formData = new FormData();
    
    // // Adicione os dados do novo grupo ao FormData
    // formData.append('nome', novoGrupo.nome);
    // formData.append('qtdeMaxima', novoGrupo.qtdeMaxima.toString());
    // formData.append('valor', novoGrupo.valor.toString());
    // formData.append('dataRevelacao', novoGrupo.dataRevelacao.toString());
    // formData.append('descricaoGrupo', novoGrupo.descricaoGrupo.toString());
    // if (novoGrupo.icone) {
    //   // Aqui, `icone` não é nulo, então podemos continuar com o processamento
    //   const responsePhoto = await fetch(novoGrupo.icone);
    //   const blob = await responsePhoto.blob();
    //   formData.append('icone', blob, 'icone.jpg');
    // } else {
    //   // Aqui, `icone` é nulo, então você pode lidar com isso da maneira apropriada
    //   console.error('O caminho do ícone está vazio.');
    //   // Por exemplo, você pode definir um valor padrão para o ícone ou lançar um erro
    // }
    
    
    // if (novoGrupo.icone && typeof novoGrupo.icone === 'string') {
    //   // Verifica se `icone` não é nulo e é uma string válida
    //   const response = await fetch(novoGrupo.icone); // Corrigido para `response`
    //   const blob = await response.blob();
    //   formData.append('icone', blob, 'icone.jpg');
    // } else {
    //   console.error('O caminho do ícone não é uma string válida.');
    //   // Aqui você pode lidar com o caso em que `icone` é nulo ou não é uma string válida
    // }
    
    // const uploadResponse = await axios.post(BASE_URL + 'addGrupo', formData, {

    
    //     headers: {
    //         'Content-Type': 'multipart/form-data',
    //     },
    // });
    // //ate aqui acima
    
    //   return uploadResponse.status === 201; // Retorna true se o usuário foi adicionado com sucesso
    
    // } catch (error) {
    //   console.error('Erro ao adicionar grupo:', error);
    //   return false; // Retorna false em caso de erro
     }
  }

  async getUltimoGrupo(): Promise<Grupo | null> {
    try {
        const response: AxiosResponse<Grupo[]> = await axios.get(`${BASE_URL}`);
        const grupos = response.data;
        if (grupos.length > 0) {
            // Retorna o último grupo na lista de grupos
            return grupos[grupos.length - 1];
        } else {
            return null; // Retorna null se não houver nenhum grupo
        }
    } catch (error) {
        console.error('Erro ao buscar último grupo:', error);
        return null; // Retorna null em caso de erro
    }
}

    async getGrupoById(grupoID: number): Promise<Grupo> {
      try {
          const response: AxiosResponse<Grupo> = await axios.get(`${BASE_URL}?grupoID=${grupoID}`);      
          return response.data;
      } catch (error) {
          console.error('Erro ao buscar grupo pelo ID:', error);
          return { grupoID: 0, nome: '', qtdeMaxima: 0, valor: 0, dataRevelacao: '', descricaoGrupo: '', icone: ''};

      }

}

  async getAllGrupos(): Promise<Grupo[] | null> {
    try {
      const response: AxiosResponse<Grupo[]> = await axios.get(`${BASE_URL}`);
      return response.data;
      
    } catch (error) {
        console.error('Erro ao buscar groupo ', error);
        return null;
    }

  }

  async updateGrupo(grupoID: number, novoGrupo: Grupo): Promise<boolean> {
    try {
      // const response = await axios.put(`${BASE_URL}/Grupo/${grupoID}`, novoGrupo);


        const response = await axios.put(`${BASE_URL}${grupoID}`, novoGrupo);
        // const response = await axios.put(`${BASE_URL}?grupoID=${grupoID}`, novoGrupo);   
        console.log('Grupo atualizado:', response.data);
        return response.status === 200; // Retorna true se o grupo foi atualizado com sucesso
    } catch (error) {
        console.error('Erro ao atualizar grupo:', error);
        return false; // Retorna false em caso de erro
    }
}

}

export default  GrupoService;


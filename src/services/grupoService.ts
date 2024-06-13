// import axios, { AxiosResponse } from 'axios';
// import { Grupo} from '../types/types';



// const BASE_URL = 'https://localhost:7146';

// class GrupoService {

//     constructor() {
//         // Se necessário, adicione inicializações aqui
//       }


//       async criarGrupo(novoUsuario: Grupo): Promise<boolean> { // Método assíncrono para adicionar um usuário
//         try {
//             const response = await axios.post(`${BASE_URL}`, novoGrupo);
//             console.log('Dados do grupo:', novoGrupo);
//             const formData = new FormData(); // Cria um objeto FormData para enviar dados no formato de formulário
//             formData.append('NomeGrupo', grupo.NomeGrupo); // Adiciona o nome de usuário ao FormData
//             formData.append('senha', grupo.senha); // Adiciona a senha ao FormData
//             formData.append('confirmaSenha', usuario.confirmaSenha); // Adiciona a senha ao FormData
//             formData.append('icone', usuario.icone.toString());

//             const responsePhoto = await fetch(usuario.icone); // Faz uma requisição assíncrona para obter a foto do usuário

//             const blob = await responsePhoto.blob(); // Converte a foto em um blob

//             formData.append('photo', blob, 'photo.jpg'); // Adiciona a foto ao FormData

//             const uploadResponse = await axios.post(BASE_URL+'addUser', formData, { // Faz uma requisição POST para adicionar o usuário
//                 headers: {
//                     'Content-Type': 'multipart/form-data', // Define o tipo de conteúdo como 'multipart/form-data'
//                 },
//             });

//             return response.status === 201; // Retorna true se o usuário foi adicionado com sucesso

//         } catch (error) {
//             console.error('Erro ao adicionar usuário:', error); // Exibe um erro caso ocorra algum problema
//             return false; // Retorna false em caso de erro
//         }
//     }

// // async criarGrupo(grupo: Grupo): Promise<boolean> {
// //   try {
// //       console.log(grupo);
// //       const response = await axios.post(`${BASE_URL}/api/Grupos`, grupo);
// //       return response.status === 201; // Verifica se o status é 201 (Created)
// //   } catch (error) {
// //       console.error('Erro ao criar grupo:', error);
// //       return false;
// //   }
// // }

// async buscarGrupos(): Promise<Grupo[]> {
//   try {
//       const response: AxiosResponse<Grupo[]> = await axios.get(`${BASE_URL}/api/Grupos`);
//       return response.data;
//   } catch (error) {
//       console.error('Erro ao buscar grupos:', error);
//       return []; // Retorna um array vazio em caso de erro
//   }
// }

// async excluirGrupo(id: number): Promise<boolean> {
//   try {
//       const response = await axios.delete(`${BASE_URL}/api/Grupos/${id}`);
//       return response.status === 204; // Verifica se o status é 204 (No Content)
//   } catch (error) {
//       console.error('Erro ao excluir grupo:', error);
//       return false;
//   }
// }
// //alterar o metodo aqui pois só mudei o nome:
// async editarGrupo(id: number): Promise<boolean> {
//   try {
//       const response = await axios.delete(`${BASE_URL}/api/Grupos/${id}`);
//       return response.status === 204; // Verifica se o status é 204 (No Content)
//   } catch (error) {
//       console.error('Erro ao excluir grupo:', error);
//       return false;
//   }
// }

// }




// export default  GrupoService;

import axios, { AxiosResponse } from 'axios';
import { Grupo } from '../types/types';

// const BASE_URL = 'https://localhost:7146/api/Grupos';
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
//       //
//       // formData.append('NomeGrupo', novoGrupo.NomeGrupo);
//       // formData.append('QuantidadeMaxima', novoGrupo.QuantidadeMaxima.toString());
//       // formData.append('ValorChocolate', novoGrupo.ValorChocolate.toString());
//       // // formData.append('DataRevelacao', novoGrupo.DataRevelacao.toString());
//       // formData.append('DataRevelacao', formatDate(new Date(novoGrupo.DataRevelacao)));
//       // formData.append('Descricao', novoGrupo.Descricao);
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

  

//     async buscarGrupos(): Promise<Grupo[]> {
//       const response = await fetch('https://localhost:7146/api/Grupos/Get');
//       const data = await response.json();

//       // Mapear os campos retornados pela API para os campos esperados
//       const grupos: Grupo[] = data.map((grupo: any) => ({
//           IDGrupo: grupo.idGrupo,
//           NomeGrupo: grupo.nomeGrupo,
//           QuantidadeMaxima: grupo.quantidadeMaxima,
//           ValorChocolate: grupo.valorChocolate,
//           DataRevelacao: grupo.DataRevelacao.ToString("yyyy-MM-ddTHH:mm:ss"),
//           //DataRevelacao: grupo.dataRevelacao,
//           Descricao: grupo.descricao,
//           Icone: grupo.icone,
//       }));

//       return grupos;
//     }

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

export default class GrupoService {
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

        // Verificar se a resposta HTTP foi bem-sucedida (status 200)
        if (!response.ok) {
            throw new Error(`Erro ao buscar grupos: ${response.status} - ${response.statusText}`);
        }

        // Converter a resposta para JSON
        const data = await response.json();

        // Verificar se os dados retornados são um array
        if (!Array.isArray(data)) {
            throw new Error(`Erro ao buscar grupos: os dados retornados não são um array`);
        }

        // Mapear os dados para objetos do tipo Grupo
        const grupos: Grupo[] = data.map((grupo: any) => ({
            IDGrupo: grupo.idGrupo,
            NomeGrupo: grupo.nomeGrupo,
            QuantidadeMaxima: grupo.quantidadeMaxima,
            ValorChocolate: grupo.valorChocolate,
            DataRevelacao: new Date(grupo.dataRevelacao).toISOString(), // Convertendo para ISO string
            Descricao: grupo.descricao,
            Icone: grupo.icone,
        }));

        return grupos;
    } catch (error) {
        console.error('Erro ao buscar grupos:', error);
        return [];
    }
}






  //   async buscarGrupoPorID(id: number): Promise<Grupo | null> {
  //     try {
  //         const response: AxiosResponse<Grupo> = await axios.get(`${BASE_URL}/BuscarGrupoPorID/${id}`);
  //         if (response.status === 200) {
  //             return response.data;
  //         }
  //         return null;
  //     } catch (error) {
  //         console.error('Erro ao buscar grupo por ID:', error);
  //         return null;
  //     }
  // }

  async BuscarGrupoPorID(grupoID: number): Promise<Grupo | null> {
    try {
        const response = await axios.get(`${BASE_URL}/BuscarGrupoPorID?id=${grupoID}`);
       
        const auxGrupo: Grupo = {
          NomeGrupo: response.data.nomeGrupo,
          QuantidadeMaxima: response.data.quantidadeMaxima,
          ValorChocolate: response.data.valorChocolate,
          DataRevelacao: response.data.dataRevelacao,
          //DataRevelacao: dataRevelacaoEditada || new Date(), // Garante que seja sempre uma data
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
          return response.status === 204; // Verifica se o status é 204 (No Content)
      } catch (error) {
          console.error('Erro ao excluir grupo:', error);
          return false;
      }
    }
    //alterar o metodo aqui pois só mudei o nome:
    // async editarGrupo(id: number): Promise<boolean> {
    //   try {
    //       const response = await axios.delete(`${BASE_URL}/api/Grupos/${id}`);
    //       return response.status === 204; // Verifica se o status é 204 (No Content)
    //   } catch (error) {
    //       console.error('Erro ao excluir grupo:', error);
    //       return false;
    //   }
    // }
}

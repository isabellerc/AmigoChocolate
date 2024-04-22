import { ImageSourcePropType } from 'react-native';

export interface User {
    id: number;
    nome: string;
    senha: string;
    confirmaSenha: string;
    // icone: ImageSourcePropType;
    icone: string | null;
  }


  export interface Grupo {
    nome: string;
    qtdeMaxima: number;
    valor: number;
    dataRevelacao: string;
    descricaoGrupo: string;
    // icone: ImageSourcePropType;
    icone: string | null;
  }




  
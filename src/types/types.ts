import { ImageSourcePropType } from 'react-native';

export interface Participante {
    IDParticipante?: number;
    NomeParticipante: string;
    EmailParticipante: string;
    SenhaParticipante: string;
    // icone: ImageSourcePropType;
    //icone: string | null;
  }


  export interface Grupo {
    IDGrupo?: number;
    NomeGrupo: string;
    QuantidadeMaxima: number;
    ValorChocolate: number;
    //colocar date:
    DataRevelacao: string;
    Descricao: string;
    // icone: ImageSourcePropType;
    Icone?: string | null;
  }




  
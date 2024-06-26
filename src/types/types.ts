import { ImageSourcePropType } from 'react-native';

export interface Participante {
  IDParticipante?: number;
  NomeParticipante: string;
  EmailParticipante: string;
  SenhaParticipante: string;
  // Descomente e ajuste se estiver lidando com ícones
  // icone: ImageSourcePropType;
  // icone: string | null;
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

 // Atualize sua interface GrupoParticipante para refletir a estrutura correta
export interface GrupoParticipante {
  idGrupoParticipante: number;
  idGrupo: number;
  idParticipante: number;
  participante: {
      idParticipante: number;
      nomeParticipante: string;
      emailParticipante: string;
  };
  grupo: {
      idGrupo: number;
      nomeGrupo: string;
      descricao: string;
  };
}





  
import { TextInputProps } from 'react-native';
import { InputLogin, Title } from './style'; // Supondo que este seja o arquivo onde você definiu os componentes estilizados Input e Title

interface LoginProps  extends TextInputProps {
  
}

const LoginInput= ({ ...rest } : LoginProps) => {
  return (
      <InputLogin {...rest}     
      />
  );
};

export default LoginInput;
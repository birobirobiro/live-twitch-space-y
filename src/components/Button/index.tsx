import { ReactNode } from 'react';
import { ButtonComponent } from './styles'

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <>
      <ButtonComponent>
        {text}
      </ButtonComponent>
    </>
  );
}

export default Button;

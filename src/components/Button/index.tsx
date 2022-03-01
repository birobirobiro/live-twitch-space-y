import { ButtonComponent } from './styles'

export interface ButtonProps {
  text?: string;
  fullWidth?: boolean;
}

function Button({ text, fullWidth }: ButtonProps) {
  return (
    <>
      <ButtonComponent fullWidth={fullWidth}>
        {text}
      </ButtonComponent>
    </>
  );
}

export default Button;

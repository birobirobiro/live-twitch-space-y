import { FormComponent, Label, Input } from './styles'

export interface FormProps {
  text: string;
}

function Form({ text }: FormProps) {
  return (
    <>
      <FormComponent>
        <Label>
          {text}
        </Label>

        <Input />
      </FormComponent>
    </>
  );
}

export default Form;

import { FormComponent, Label, Input } from './styles'
import { motion } from "framer-motion"


export interface FormProps {
  text: string;
  type?: "text" | "email" | "number";
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

import { InputHTMLAttributes } from 'react';
import { InputStyle } from './Input.styled';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  required: boolean;
}

const Input = ({ name, label, required, ...inputProps }: IInput) => {
  return (
    <InputStyle>
      <label htmlFor={name}>
        {label} {required ? <span>*</span> : <></>}
      </label>
      <input id={name} {...inputProps} />
    </InputStyle>
  );
};

export default Input;

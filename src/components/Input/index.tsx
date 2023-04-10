import { InputHTMLAttributes } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { InputStyle } from './Input.styled';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  required: boolean;
  errorMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  rules?: RegisterOptions;
}

const Input = ({
  name,
  label,
  required,
  register,
  errorMessage,
  rules,
  ...inputProps
}: IInput) => {
  const registerResult = register && name ? register(name, rules) : null;

  return (
    <InputStyle>
      <label htmlFor={name}>
        {label} {required ? <span>*</span> : <></>}
      </label>
      <input id={name} {...registerResult} {...inputProps} />
      <p className="error">{errorMessage}</p>
    </InputStyle>
  );
};

export default Input;

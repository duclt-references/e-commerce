import { ButtonStyle } from './Button.styled';

interface IButton {
  label?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({ label, type = 'button' }: IButton) => {
  return (
    <ButtonStyle>
      <button type={type}>{label}</button>
    </ButtonStyle>
  );
};

export default Button;

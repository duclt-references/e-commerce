import { ButtonStyle } from './Button.styled';

interface IButton {
  label?: string;
}

const Button = ({ label }: IButton) => {
  return (
    <ButtonStyle>
      <button>{label}</button>
    </ButtonStyle>
  );
};

export default Button;

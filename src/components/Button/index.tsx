import { ButtonStyle } from './Button.styled';

interface IButton {
  label?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  classStyle?: string;
}

const Button = ({ label, classStyle, type = 'button' }: IButton) => {
  return (
    <ButtonStyle className={classStyle}>
      <button type={type}>{label}</button>
    </ButtonStyle>
  );
};

export default Button;

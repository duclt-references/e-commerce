import { GotoTopStyle } from './GotoTop.styled';

const GotoTop = () => {
  return (
    <GotoTopStyle className="animate__animated animate__fadeInDown">
      <i className="fas fa-angle-up"></i>
    </GotoTopStyle>
  );
};

export default GotoTop;

import styled from 'styled-components';

export const GotoTopStyle = styled.div.attrs({
  className: 'animate__animated animate__fadeInDown',
})`
  display: none;
  position: fixed;
  bottom: 100px;
  right: 15px;
  z-index: 10;
  background-color: #f72b3f;
  cursor: pointer;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 58px;
  border-radius: 50%;
  i {
    font-size: 25px;
    color: white;
  }
`;

import styled from 'styled-components';
import img from '../../images/logo.png';

export const Box = styled.header`
  max-width: 1280px;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

export const Logo = styled.div`
  width: 89px;
  height: 63px;
  background-image: url(${img});
  margin: 17px 44px 17px 0;
`;

export const Button = styled.button`
  width: 169px;
  height: 40px;

  background: #c4c4c4;
  border-radius: 3px;
  border: none;
  margin-right: 14px;

  &:hover {
    background: #ffffff;
  }
`;

export const ButtonPrice = styled.button`
  width: 169px;
  height: 40px;

  background: #c4c4c4;
  border-radius: 3px;
  border: none;

  &:hover {
    background: #ffffff;
  }
`;

export const ButtonText = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
`;

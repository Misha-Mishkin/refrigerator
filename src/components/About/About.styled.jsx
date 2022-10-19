import styled from 'styled-components';
import biglogo from '../../images/biglogo.png';

export const Header = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  margin-bottom: 40px;
`;

export const Buttons = styled.div`
  margin-bottom: 26px;
`;

export const Items = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: 8px;
  }
`;

export const Button = styled.button`
  width: 131px;
  height: 39px;
  border-radius: 3px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  &:hover {
    background: #ffffff;
  }
`;

export const Block = styled.div`
  width: 1200px;
  height: 461px;

  background: #ffffff;
  border-radius: 3px;
  margin-bottom: 73px;

  display: flex;
`;

export const BigLogo = styled.div`
  background-image: url(${biglogo});
  width: 198px;
  height: 139px;

  margin-top: 46px;
  margin-left: 50px;
`;

export const TextBlock = styled.div`
  width: 304.79px;
  height: 214px;
  margin-top: 247px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

export const Image = styled.div`
  width: 567px;
  height: 461px;

  background: #c4c4c4;
  border-radius: 3px;

  margin-left: auto;
`;

export const Wrapper = styled.div`
  width: 1120px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const AdvantageItems = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const AdvantageItem = styled.li``;

export const BlockItems = styled.div`
  display: flex;
`;

export const ImgBlock = styled.div`
  width: 91px;
  height: 94px;

  background: #ffffff;
  border-radius: 3px;

  margin-right: 21px;
`;

export const AdvantageWrapper = styled.div`
  width: 261px;
  height: 114px;
  display: flex;
  flex-direction: column;
`;

export const TitleAdvantage = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 10px;
`;

export const Advantage = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

export const ButtonPrice = styled.button`
  width: 256px;
  height: 55px;

  background: #c4c4c4;
  border-radius: 3px;
  border: none;

  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 106px;

  &:hover {
    background: #ffffff;
  }
`;

export const ButtonText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

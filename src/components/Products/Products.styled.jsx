import styled from 'styled-components';
import schtandart from '../../images/schtandart.png';

export const Header = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  margin-bottom: 42px;
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

export const GalleryBlock = styled.div`
  width: 1145px;

  background: #ffffff;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  margin-bottom: 55px;
`;

export const Image = styled.div`
  width: 567px;
  height: 461px;

  background: #c4c4c4;
  border-radius: 3px;
`;

export const Description = styled.div`
  padding: 74px 32px 52px 35px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 25px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 35px;
`;

export const ParamsItems = styled.ul`
  list-style: none;
`;
export const ParamsItem = styled.li`
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ProductDescription = styled.div`
  width: 1200px;
  height: 436px;
  background: #c4c4c4;
  border-radius: 3px;
  padding-top: 35px;
  margin-bottom: 56px;
`;

export const Logo = styled.div`
  width: 303px;
  height: 94px;
  background-image: url(${schtandart});
  background-repeat: no-repeat;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 48px;
`;

export const BlockWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BlockItems = styled.ul`
  list-style: none;
  display: flex;
`;

export const BlockItem = styled.li`
  :not(:last-child) {
    margin-right: 80px;
  }
`;

export const Wrapper = styled.div`
  width: 150px;
`;

export const Block = styled.div`
  width: 94px;
  height: 94px;
  border-radius: 3px;
  background: #ffffff;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 39px;
`;

export const BlockText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
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

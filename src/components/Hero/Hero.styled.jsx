import styled from 'styled-components';
// import hero from '../../images/hero.jpg';
import slide from '../../images/slide.jpg';
import measure from '../../images/measure.png';

export const Box = styled.div`
  /* width: 1920px; */
  height: 478px;
  background-image: url(${slide});
  margin-bottom: 83px;
  padding-top: 23px;
  position: relative;

`;

export const Form = styled.div`
  width: 406px;
  height: 428px;
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  /* margin-top: 23px; */
  margin-left: 870px;
`;

export const Img = styled.div`
  background-image: url(${measure});
  position: absolute;
  width: 406px;
  height: 50px;
  z-index: 100;
`;

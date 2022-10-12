import styled from 'styled-components';

export const Header = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 38px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;

export const Items = styled.ul`
  list-style: none;
  margin-top: -10px;
  margin-left: -10px;
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  flex-basis: calc(100% / 2 - 10px);
  margin-top: 10px;
  margin-left: 10px;
`;

export const Box = styled.div`
  width: 595px;
  height: 268px;

  background: #d9d9d9;
  border-radius: 3px;
`;

export const SubBox = styled.div`
    padding: 61px 0 61px 84px;
    width: 416px;
`

export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

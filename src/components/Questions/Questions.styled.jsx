import styled from 'styled-components';

export const Header = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  margin-bottom: 42px;
`;

export const Block = styled.div`
  margin-bottom: 110px;
`;

export const Question = styled.div`
  width: 998px;
  height: 20px;

  background: #ffffff;
  border-radius: 3px;

  margin-left: auto;
  margin-right: auto;

  padding: 31.5px 0px 31.5px 19px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

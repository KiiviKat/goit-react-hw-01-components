import styled from 'styled-components';

export const Item = styled.li`
  padding: 18px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-basis: 100%;
  color: white;
  font-weight: 500;
  background-color: pink;

  :nth-child(even) {
    background-color: purple;
  }
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;

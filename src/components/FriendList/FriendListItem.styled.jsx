import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 4px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Status = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => (props.variant ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  display: block;
  width: 48px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

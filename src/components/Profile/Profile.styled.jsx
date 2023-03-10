import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 320px;
  padding: 8px;
  margin: 40px auto;
  text-align: center;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Description = styled.div`
  font-weight: 500;
`;

export const Image = styled.img`
  display: block;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Name = styled.p`
  font-size: 24px;
  margin: 16px 0px;
`;

export const UserInfo = styled.p`
  font-size: 16px;
  color: gray;
  margin: 8px 0px;
`;

export const Stats = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  justify-content: space-around;
  background-color: purple;
  border-radius: 4px;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  width: 70px;
`;

export const Label = styled.span`
  font-size: 16px;
  color: white;
`;

export const Quantity = styled.span`
  font-weight: 500;
  font-size: 24px;
  color: white;
`;

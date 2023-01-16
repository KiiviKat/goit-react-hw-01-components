import styled from 'styled-components';

export const Table = styled.table`
  text-align: center;
  padding: 8px;
  margin: 40px auto;
  overflow: hidden;
  border-radius: 4px;
  border-spacing: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const TableHead = styled.thead`
  font-size: 16px;
  background-color: purple;
  text-transform: uppercase;
`;

export const TableHeadCell = styled.th`
  width: 160px;
  height: 40px;
  color: white;
  border: 1px solid white;
`;

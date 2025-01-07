import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 20px 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  background-color: var(--white, #fff);
  border: 1px solid var(--gray-2, #ccc);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.thead`
  background-color: var(--gray-3, #f5f5f5);
`;

export const TableRow = styled.tr`
  
    background-color: var(--white);
  
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border: 1px solid var(--gray-2, #ddd);
  font-size: 14px;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  font-size: 14px;
  border: 1px solid var(--gray-2, #ddd);
  background-color: var(--gray-3, #f5f5f5);
  color: var(--black, #333);
  font-weight: bold;
`;
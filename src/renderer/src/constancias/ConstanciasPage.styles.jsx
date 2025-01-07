import styled from 'styled-components'

export const PageContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 5px; 
`
export const TabsContainer = styled.div`
  
  display: flex;  
  gap: 15px; 
`

export const Module = styled.div`
  background-color: var(--gray-3);
  padding: 15px;
`
export const ModuleTab = styled.div`
  background-color: var(--gray-3);
  padding: 15px;
  width: 30%;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: var(--black); 
    color: var(--gray-3);

`
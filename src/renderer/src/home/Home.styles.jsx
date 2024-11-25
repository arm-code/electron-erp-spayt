import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos para el contenedor principal
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;  
  color: var(--black);
  text-align: center;
  padding: 20px;  
  
`;

// Estilos para el título
export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
`;

// Estilos para el subtítulo
export const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  line-height: 1.5;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

// Estilos para el botón
export const FancyButton = styled.div`
  background-color: #ff6f61;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 12px 30px;
  font-size: 1.2rem;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  
`;

// Nuevo contenedor de módulos
export const ModuleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

// Estilos para los botones de módulo
export const ModuleButton = styled(Link)`
  background-color: var(--green);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-decoration: none;

  &:hover {
    background-color: #2e8b57;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;
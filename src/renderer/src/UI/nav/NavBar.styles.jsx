import styled from 'styled-components'

export const Nav = styled.nav` 
  
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--black);
  width: 100%;
  height: 80px;   
  display: flex;
  align-items: center;  

  /* Estilos para los enlaces dentro de la lista */
  ul {
    list-style: none;
    display: flex;        
    gap: 15px;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: var(--white);
    font-size: var(--font-size-xl);
    font-weight:  var(--font-weight-medium);
    padding: 0.5rem 1rem;    
    transition:
      background-color 0.3s,
      transform 0.2s ease;
  }

  /* Efecto hover para los enlaces */
  a:hover {
    background-color: var(--blue);
    transform: scale(1.1);
    color: var(--white);
  }

  /* Estilos para el enlace activo */
  .active-link {
    background-color: var(--blue);
    color: var(--white);
    font-weight: bold;
  }

  /* Estilo para la línea horizontal */
  hr {
    margin-top: 1rem;
    border: 0;
    border-top: 1px solid #444;
  }
`

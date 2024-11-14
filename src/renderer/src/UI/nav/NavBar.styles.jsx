import styled from 'styled-components'

export const Nav = styled.nav`
  padding: 0.1rem 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;

  /* Estilos para los enlaces dentro de la lista */
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition:
      background-color 0.3s,
      transform 0.2s ease;
  }

  /* Efecto hover para los enlaces */
  a:hover {
    background-color: #4caf50;
    transform: scale(1.1);
  }

  /* Estilos para el enlace activo */
  .active-link {
    background-color: #4caf50;
    font-weight: bold;
  }

  /* Estilo para la línea horizontal */
  hr {
    margin-top: 1rem;
    border: 0;
    border-top: 1px solid #444;
  }
`

import styled from 'styled-components'

export const Nav = styled.nav`
  width: 100%;  
  
  ul {
    display: flex;
    flex-direction: row;
    gap: 15px;    
    padding: 0;
  }

  ul li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: white;
  }
`

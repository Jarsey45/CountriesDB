import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Bar = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10%;
  box-shadow: 0px 2px 5px #111111;

`;

const Title = styled.h1`
  cursor:pointer;
  flex:2;
  margin: 0;
  padding:0;
  
  & a {
    font-family: 'Oxygen', sans-serif;
    font-size: 3vmax;
    font-weight: 700;
    text-decoration: none;
    color: #A2A2A2;
    transition: color 0.3s ease-out;
  }

  & a:hover{
    color: teal;
    transition: color 0.3s ease;
  }
  
`;

const LinkMenu = styled.ul`
  list-style: none;
  flex:2;

  & li {
    flex:1;
    display: inline-block;
    padding: 0px 20px;
  
  }

  & li a {
    font-family: 'Oxygen', sans-serif;
    font-weight: 500;
    font-size: 1.5vmax;
    color: teal;
    text-decoration: none;
    transition: color 0.3s ease-out;

    &:hover, &focus{
      color:#a1a1a1;
      transition: color 0.3s ease;
    }
  }



`



function NavbarView() {
  return (
    <Bar>
      <Title>
        <Link to="/">
          CountriesDB
        </Link>
      </Title>
      <nav>
        <LinkMenu>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/about"> About </Link></li>
          <li><Link to="#"> Github </Link></li>
        </LinkMenu>
      </nav>

    </Bar>
  )
}

export default NavbarView

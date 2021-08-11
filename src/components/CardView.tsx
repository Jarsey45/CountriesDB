import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CountryObject } from '../features/interfaces';

const Box = styled.div`
  overflow:hidden;
  width: 250px;
  height: auto;
  margin: 10px;
  padding:10px;
  background: ${props => props.color || "#24252A"};
  border-radius: 5px;
  border: 1px solid #212227;
  transition: all 0.3s ease-out;

  &:hover{
    & .paragraph{
      color: #000;
      transition: all 0.2s ease;
    }
    background: teal;
    transition: all 0.2s ease;
  }
`;

const Flag = styled.img`
  padding: 12px 0px 0px 0px;
  height:50%;
  width:100%;
`

const Info = styled.div`
  color: #a1a1a1;
  height:50%;
  font-family: 'Oxygen', sans-serif;
  text-align: center;

  & .paragraph {
    font-size: 16px;
    margin: 10px;
  }
`

const Button = styled.button`
  font-family: 'Oxygen';
  border: none;
  background: none;
  color: #a1a1a1;
  width: 100%;
  font-size: 0.9em;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  border-radius: 3px;
  
  &:hover {
    background: #260A0A;
    font-weight: 600;
    font-size:1em;
    transition: all 0.2s ease;
  }
`
const HR = styled.div`
  font-weight: 300;
  float:left;
  padding-bottom: 10px;
  width:75%;
  word-wrap:break-word;
  
`

const HL = styled(HR)`
  font-weight: 800;
  width:25%;
  color: #EA526F;
  `




function CardView(Country: CountryObject) {
  return (
    <Box >
      <Flag src={Country.flag} />
      <Info>
        <div className="paragraph"><HL>Name </HL> <HR>{Country.name} </HR></div>
        {Country.capital ? <div className="paragraph"><HL>Capital </HL> <HR>{Country.capital} </HR></div> : null}
        {Country.region ? <div className="paragraph"> <HL>Region </HL> <HR>{Country.region}</HR> </div> : null}
        <Link to="/about">
          <Button > View details </Button>
        </Link>
      </Info>
    </Box>
  )
}

export default CardView

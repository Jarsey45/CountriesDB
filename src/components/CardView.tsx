import styled from 'styled-components';
import { CountryObject } from '../features/interfaces';

const Box = styled.div`
  overflow:hidden;
  width: 250px;
  height:300px;
  margin: 10px;
  background: ${props => props.color || "#24252A"};
  border-radius: 5px;
  border: 1px solid #212227;
`;

const Flag = styled.img`
  padding: 12px 0px 0px 12px;
  height:50%;
`

const Info = styled.div`
  color: #a1a1a1;
  height:50%;
  margin-left: 12px;
  font-family: 'Oxygen', sans-serif;
  text-align: center;

  & p {
    font-size: 16px;
    margin: 10px;
  }
`

const Button = styled.button`

`


function CardView(Country: CountryObject) {
  return (
    <Box >
      <Flag src={Country.flag} />
      <Info>
        <p>Name: {Country.name}</p>
        <p>Capital: {Country.capital}</p>
        <p>Region: {Country.region}</p>
        <Button> View details </Button>
      </Info>
    </Box>
  )
}

export default CardView

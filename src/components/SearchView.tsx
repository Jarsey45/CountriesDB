import styled from 'styled-components';
import CardView from './CardView';


const Box = styled.div`
  padding: 20px;
  display:flex;
  align-items:center;
  justify-content:center;
  
`;


const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
  padding:20px 10%;
`

const Input = styled.input`
  font-family: 'Oxygen',sans-serif;
  font-size: 25px;
  color: #a1a1a1;
  background: none;
  border:1px solid #313131;
  width: 50%;
  height: 2em;
  text-align: center;

  &:hover, &:focus{
    border: 1px solid teal;
    outline:none;
  }
  
`

function SearchView() {
  return (
    <>
      <Box>
        <Input onChange={() => { }} placeholder="Type name of country" type="text" />
      </Box>
      <Container>
        <CardView
          name="Afganistan"
          flag="https://restcountries.eu/data/afg.svg"
          id={0}
          capital="Kabul"
          region="Asia" />
        <CardView
          name="Afganistan"
          flag="https://restcountries.eu/data/afg.svg"
          id={0}
          capital="Kabul"
          region="Asia" />
        <CardView
          name="Afganistan"
          flag="https://restcountries.eu/data/afg.svg"
          id={0}
          capital="Kabul"
          region="Asia" />
        <CardView
          name="Afganistan"
          flag="https://restcountries.eu/data/afg.svg"
          id={0}
          capital="Kabul"
          region="Asia" />
        <CardView
          name="Afganistan"
          flag="https://restcountries.eu/data/afg.svg"
          id={0}
          capital="Kabul"
          region="Asia" />
        <CardView
          name="Afganistan"
          flag="https://restcountries.eu/data/afg.svg"
          id={0}
          capital="Kabul"
          region="Asia" />
        <CardView
          name="Afganistan"
          flag="https://restcountries.eu/data/afg.svg"
          id={0}
          capital="Kabul"
          region="Asia" />
      </Container>
    </>
  )
}

export default SearchView

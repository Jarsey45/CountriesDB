import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { GET_COUNTRIES } from '../features/queries';
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
  const [text, setText] = useState('');
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    variables: { countryName: text }
  })

  useEffect(() => {
    console.log(data);
  }, [data])




  //Yeah it's ugly,  welp
  if (loading) return (<>
    <Box>
      <Input onChange={(e) => { setText(e.target.value) }} placeholder="Type name of country" type="text" />
    </Box>
    <Container>

      loading...

    </Container>
  </>)


  if (error) return (<>
    <Box>
      <Input onChange={(e) => { setText(e.target.value) }} placeholder="Type name of country" type="text" />
    </Box>
    <Container>

      error

    </Container>
  </>)

  return (
    <>
      <Box>
        <Input onChange={(e) => { setText(e.target.value) }} placeholder="Type name of country" type="text" />
      </Box>
      <Container>

        {data.countries.edges ? data.countries.edges.map((country: any, index: number) => {
          const { node } = country;
          return <CardView
            name={node.name}
            flag={node.flag}
            id={node.numericCode}
            capital={node.capital}
            region={node.region} />;

        }) : "No countries matches the query"}

      </Container>
    </>
  )
}

export default SearchView;

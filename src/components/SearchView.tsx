import { useState } from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { GET_COUNTRIES } from '../features/queries';
import CardView from './CardView';
import '../scss/loading.scss';


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
  font-size: 1.5vmax;
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

const Empty = styled.div`
  font-size: 3em;
  color:teal;
  cursor: pointer;
  margin: 15% 0;
  text-align:center;
`

function SearchView() {
  const [text, setText] = useState('');
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    variables: { countryName: text }
  })






  //Yeah it's ugly,  welp
  if (loading) return (<>
    <Box>
      <Input onChange={(e) => { setText(e.target.value) }} placeholder="Type name of country" type="text" />
    </Box>
    <Container>
      <div className="loader"></div>
    </Container>
  </>)


  if (error) return (<>
    <Box>
      <Input onChange={(e) => { setText(e.target.value) }} placeholder="Type name of country" type="text" />
    </Box>
    <Container>
      Some error occured &gt; {error.message}
    </Container>
  </>)

  return (
    <>
      <Box>
        <Input value={text} onChange={(e) => { setText(e.target.value) }} placeholder="Type name of country" type="text" />
      </Box>
      <Container>

        {data.countries.edges.length > 0 ? data.countries.edges.map((country: any, index: number) => {
          const { node } = country;
          return <CardView
            name={node.name}
            flag={node.flag}
            id={node.numericCode}
            capital={node.capital}
            region={node.region} />;

        }) : <Empty onClick={() => setText('')}> No countries matches your query, please try again. </Empty>}

      </Container>
    </>
  )
}

export default SearchView;

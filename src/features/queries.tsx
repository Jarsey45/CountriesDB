import { gql } from '@apollo/client'

export const GET_COUNTRIES = gql`
  query GetCountries($countryName: String!){
    countries(name_Icontains: $countryName, first: 59){
      edges{
        node{
          name
          capital
          region
          flag
          numericCode
        }
      }
    }
  }
`
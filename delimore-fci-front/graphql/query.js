import gql from 'graphql-tag'

export const dogsQuery = gql`
    query dogsQuery{
        latestDogs: dogs(limit:6, sort: "created_at:desc"){
            name
            birthDate
            gender
            mainPhoto{
                formats
            }
        }
    }
`
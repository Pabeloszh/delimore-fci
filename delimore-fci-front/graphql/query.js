import gql from 'graphql-tag'

export const latestDogsQuery = gql`
    query latestDogsQuery{
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

export const femaleDogsQuery = gql`
    query femaleDogsQuery{
        femaleDogs: dogs(sort: "created_at:desc", where: { type:"females" }){
            name
            birthDate
            gender
            mainPhoto{
                formats
            }
        }
    }
`

export const maleDogsQuery = gql`
    query maleDogsQuery{
        maleDogs: dogs(sort: "created_at:desc", where: { type:"males" }){
            name
            birthDate
            gender
            mainPhoto{
                formats
            }
        }
    }
`

export const memorianDogsQuery = gql`
    query memorianDogsQuery{
        memorianDogs: dogs(sort: "created_at:desc", where: { type:"inmemorian" }){
            name
            birthDate
            gender
            mainPhoto{
                formats
            }
        }
    }
`

export const nonShowDogsQuery = gql`
    query nonShowDogsQuery{
        nonShowDogs: dogs(sort: "created_at:desc", where: { type:"nonshow" }){
            name
            birthDate
            gender
            mainPhoto{
                formats
            }
        }
    }
`
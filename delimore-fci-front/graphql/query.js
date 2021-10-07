import gql from 'graphql-tag'

export const latestDogsQuery = gql`
    query latestDogsQuery{
        latestDogs: dogs(limit:6, sort: "created_at:desc"){
            slug
            name
            birthDate
            gender
            type
            mainPhoto{
                formats
            }
        }
    }
`

export const femaleDogsQuery = gql`
    query femaleDogsQuery{
        femaleDogs: dogs(sort: "created_at:desc", where: { type:"females" }){
            slug
            name
            birthDate
            gender
            type
            mainPhoto{
                formats
            }
        }
    }
`

export const maleDogsQuery = gql`
    query maleDogsQuery{
        maleDogs: dogs(sort: "created_at:desc", where: { type:"males" }){
            slug
            name
            birthDate
            gender
            type
            mainPhoto{
                formats
            }
        }
    }
`

export const memorianDogsQuery = gql`
    query memorianDogsQuery{
        memorianDogs: dogs(sort: "created_at:desc", where: { type:"inmemorian" }){
            slug
            name
            birthDate
            gender
            type
            mainPhoto{
                formats
            }
        }
    }
`

export const nonShowDogsQuery = gql`
    query nonShowDogsQuery{
        nonShowDogs: dogs(sort: "created_at:desc", where: { type:"nonshow" }){
            slug
            name
            birthDate
            gender
            type
            mainPhoto{
                formats
            }
        }
    }
`

export const dogQuery = gql`
query dogQuery($name: String!){
    dog: dogs(sort: "created_at:desc", where: { slug: $name }){
        name
        bredBy
        birthDate
        gender
        type
        slug
        awards{
            awardName
        }
        mainPhoto{
            formats
            url
        }
        galleryPhotos{
            formats
            url
        }
    }
}
`
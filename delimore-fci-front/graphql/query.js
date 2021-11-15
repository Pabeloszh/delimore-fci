import gql from 'graphql-tag'

export const statsQuery = gql`
    query statsQuery{
        stats: stat {
            stats{
                number
                title
                type
            }
        }
    }
`

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
        femaleDogs: dogs(sort: "name:asc", where: { type:"females" }){
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
        maleDogs: dogs(sort: "name:asc", where: { type:"males" }){
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
        memorianDogs: dogs(sort: "name:asc", where: { type:"inmemorian" }){
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
        nonShowDogs: dogs(sort: "name:asc", where: { type:"nonshow" }){
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
        dog: dogs(sort: "name:asc", where: { slug: $name }){
            name
            pedigree
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

export const littersQuery = gql`
    query littersQuery{
        littersData: litters{
            name
            slug
            mainPhoto{
                width
                height
                url
                formats
            },
            galleryPhotos{
                url
                formats
            }
        }
    }
`

export const singleLitterQuery = gql`
    query singleLitterQuery($name: String!){
        litter: litters(where: { slug: $name }){
            name
            slug
            mainPhoto{
                url
                formats
            },
            galleryPhotos{
                url
                formats
            }
        }
    }
`

export const galleryQuery = gql`
    query galleryQuery{
        gallery: gallery {
            photos{
                formats
                url
            }
        }
    }
`
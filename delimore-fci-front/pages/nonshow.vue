<template>
    <div>
        <Header :section="'kennel'" :title="'Non-Show'" :subtitle="'Our dogs that do not compete'"/>
        <CardsContainer :dogs="nonShowDogs"/>
    </div>
</template>
<script>
import { nonShowDogsQuery } from "~/graphql/query"

export default {
    data(){
        return{
            nonShowDogs: []
        }
    },
    apollo: {
        nonShowDogs:{
            prefetch: true,
            query: nonShowDogsQuery
        }
    },
}
</script>
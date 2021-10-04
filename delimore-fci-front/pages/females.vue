<template>
    <div>
        <Header :section="'kennel'" :title="'Females'" :subtitle="'Our wonderful female champions'"/>
        <CardsContainer :dogs="femaleDogs"/>
    </div>
</template>
<script>
import { femaleDogsQuery } from "~/graphql/query"

export default {
    data(){
        return{
            femaleDogs: []
        }
    },
    apollo: {
        femaleDogs:{
            prefetch: true,
            query: femaleDogsQuery
        }
    },
}
</script>
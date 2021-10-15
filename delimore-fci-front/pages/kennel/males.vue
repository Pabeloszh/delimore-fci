<template>
    <div>
        <Header :section="'kennel'" :title="'Males'" :subtitle="'Our wonderful male champions'" :img="'/images/males.jpg'"/>
        <CardsContainer :dogs="maleDogs"/>
    </div>
</template>
<script>
import { maleDogsQuery } from "~/graphql/query"

export default {
    data(){
        return{
            maleDogs: []
        }
    },
    apollo: {
        maleDogs:{
            prefetch: true,
            query: maleDogsQuery
        }
    },
}
</script>
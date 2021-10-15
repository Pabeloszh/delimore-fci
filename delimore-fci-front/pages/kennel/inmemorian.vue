
<template>
    <div>
        <Header :section="'kennel'" :title="'In Memorian'" :subtitle="'Our beloved dogs who will always remain in our memory'" :img="'/images/inmemorian.jpg'"/>
        <CardsContainer :dogs="memorianDogs"/>
    </div>
</template>
<script>
import { memorianDogsQuery } from "~/graphql/query"

export default {
    data(){
        return{
            memorianDogs: []
        }
    },
    apollo: {
        memorianDogs:{
            prefetch: true,
            query: memorianDogsQuery
        }
    },
}
</script>
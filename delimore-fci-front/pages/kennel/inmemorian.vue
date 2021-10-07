
<template>
    <div>
        <Header :section="'kennel'" :title="'In Memorian'" :subtitle="'Our beloved dogs who will always remain in our memory'" :img="{ 
          backgroundImage: `url(http://localhost:1337/uploads/IMG_4813w_2_716f2629a6.jpg)`
        }"/>
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
<template>
    <div>
        <Header :section="'kennel'" :title="'Males'" :subtitle="'Our wonderful male champions'" :img="{ 
          backgroundImage: `url(http://localhost:1337/uploads/IMG_4820w_1_56f92d243b.jpg)`
        }"/>
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
<template>
    <div>
        <Header :section="'kennel'" :title="'Females'" :subtitle="'Our wonderful female champions'" :img="{ 
          backgroundImage: `url(${$config.apiUrl}/uploads/IMG_4886w_2943ed746c.jpg)`
        }"/>
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
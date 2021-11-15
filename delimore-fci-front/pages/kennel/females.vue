<template>
    <div>
        <Header :section="'kennel'" :title="'Females'" :subtitle="'Our wonderful females'" :img="'/images/females.jpg'"/>
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
    head() {
        return{
            title: 'Delimore FCI - Females',
            meta: [
                { hid: 'description', name: 'description', content: 'Our wonderful females' },
                { hid: 'og:title', name: 'og:title', content: 'Delimore FCI - Females' },
                { hid: 'og:image', property: 'og:image', content: '/og-img/meta-img-females.png' },
                { hid: 'og:description', property: 'og:description', content: 'Our wonderful females' },
                { hid: 'og:url', property: 'og:url', content: `https://delimore-fci/kennel/females` },
            ],

        }
    }
}
</script>
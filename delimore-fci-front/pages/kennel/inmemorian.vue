
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
    head() {
        return{
            title: 'Delimore FCI - In Memorian',
            meta: [
                { hid: 'description', name: 'description', content: 'Our beloved dogs who will always remain in our memory' },
                { hid: 'og:title', name: 'og:title', content: 'Delimore FCI - In Memorian' },
                { hid: 'og:image', property: 'og:image', content: '/og-img/meta-img-inmemorian.png' },
                { hid: 'og:description', property: 'og:description', content: 'Our beloved dogs who will always remain in our memory' },
                { hid: 'og:url', property: 'og:url', content: `https://delimore-fci/kennel/inmemorian` },
            ],

        }
    }
}
</script>
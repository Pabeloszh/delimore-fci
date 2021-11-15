<template>
    <div>
        <Header :section="'kennel'" :title="'Non-Show'" :subtitle="'Our dogs that do not compete'" :img="'/images/nonshow.jpg'"/>
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
    head() {
        return{
            title: 'Delimore FCI - Non-Show',
            meta: [
                { hid: 'description', name: 'description', content: 'Our dogs that do not compete' },
                { hid: 'og:title', name: 'og:title', content: 'Delimore FCI - Non-Show' },
                { hid: 'og:image', property: 'og:image', content: '/og-img/meta-img-nonshow.png' },
                { hid: 'og:description', property: 'og:description', content: 'Our dogs that do not compete' },
                { hid: 'og:url', property: 'og:url', content: `https://delimore-fci/kennel/nonshow` },
            ],
        }
    }
}
</script>
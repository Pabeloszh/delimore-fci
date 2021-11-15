<template>
    <div>
        <Header :section="'kennel'" :title="'Males'" :subtitle="'Our wonderful males'" :img="'/images/males.jpg'"/>
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
    head() {
        return{
            title: 'Delimore FCI - Males',
            meta: [
                { hid: 'description', name: 'description', content: 'Our wonderful males' },
                { hid: 'og:title', name: 'og:title', content: 'Delimore FCI - Males' },
                { hid: 'og:image', property: 'og:image', content: '/og-img/meta-img-males.png' },
                { hid: 'og:description', property: 'og:description', content: 'Our wonderful males' },
                { hid: 'og:url', property: 'og:url', content: `https://delimore-fci/kennel/males` },
            ],
        }
    }
}
</script>
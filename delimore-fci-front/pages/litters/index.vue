<template>
    <div>
        <Header :section="'our'" :title="'Litters'" :subtitle="'Check them out below'" :img="'/images/litters.jpg'"/>
        <LittersContainer :littersData="littersData"/>
    </div>
</template>

<script>
    import { littersQuery } from "~/graphql/query"
    export default {
        data(){
            return {
                littersData: []
            }
        },
        apollo: {
            littersData:{
                prefetch: true,
                query: littersQuery
            }
        },
        head() {
            return{
                title: 'Delimore FCI - Litters',
                meta: [
                    { hid: 'description', name: 'description', content: '' },
                    { hid: 'og:title', name: 'og:title', content: 'Delimore FCI - Litters' },
                    { hid: 'og:image', property: 'og:image', content: '/og-img/meta-img-litters.png' },
                    { hid: 'og:description', property: 'og:description', content: 'Our puppies during their stay with us have constant contact with people and learn to love them same as we love them' },
                    { hid: 'og:url', property: 'og:url', content: `https://delimore-fci/kennel/litters` },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
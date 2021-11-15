<template>
    <div>
        <Header :section="'gallery'" :title="'Check our favourite photos'" :subtitle="''" :img="'/images/gallery.jpg'"/>
        <Gallery v-if="gallery.photos" :photos="gallery.photos"/>
    </div>
</template>

<script>
    import { galleryQuery } from "~/graphql/query"
    export default {
        layout: 'no-gallery',
        data(){
            return{
                gallery: {}
            }
        },
        apollo: {
            gallery:{
                prefetch: true,
                query: galleryQuery
            }
        },
        head() {
            return{
                title: 'Delimore FCI - Gallery',
                meta: [
                    { hid: 'description', name: 'description', content: 'Check our favourite photos' },
                    { hid: 'og:title', name: 'og:title', content: 'Delimore FCI - Gallery' },
                    { hid: 'og:image', property: 'og:image', content: '/og-img/meta-img-gallery.png' },
                    { hid: 'og:description', property: 'og:description', content: 'Check our favourite photos' },
                    { hid: 'og:url', property: 'og:url', content: `https://delimore-fci/gallery` },
                ],

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
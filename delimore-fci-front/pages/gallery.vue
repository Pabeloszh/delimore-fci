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
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <Header v-if="dog[0]" :section="dog[0].type" :title="dog[0].name" :subtitle="''" :img="`${$config.apiUrl}${dog[0].mainPhoto.url}`"/>
        <DogDesc v-if="dog[0]" :dog="dog[0]"/>
        <DogGallery v-if="dog[0] && dog[0].galleryPhotos[0]" :title="true" :photos="dog[0].galleryPhotos"/>
    </div>
</template>

<script>
    import { dogQuery } from "~/graphql/query"
    export default {
        data(){
            return{
                dog: [],
            }
        },
        apollo: {
            dog:{
                prefetch: true,
                query: dogQuery,
                 variables (){
                     return{
                         name: this.$route.params.name,
                     }
                },
            }
        },
        head() {
            return{
                title: `Kennel - ${this.dog[0] ? this.dog[0].name : "..."}`,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'One of our lovely dogs',
                    },
                    {
                        hid: 'og:title',
                        name: 'og:title',
                        content: `Kennel - ${this.dog[0] && this.dog[0].name}`,
                    },
                    {
                        hid: 'og:image',
                        property: 'og:image',
                        content: `${this.$config.apiUrl}${this.dog[0] && this.dog[0].mainPhoto.formats.medium.url}`,
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: 'One of our lovely dogs',
                    },
                    {
                        hid: 'og:url',
                        property: 'og:url',
                        content: `https://delimore-fci/kennel/${this.dog[0] && this.dog[0].slug}`,
                    },
                ],

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
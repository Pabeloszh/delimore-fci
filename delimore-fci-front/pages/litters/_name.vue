<template>
    <div>
        <Header v-if="litter[0]" :section="'litters'" :title="litter[0].name" :subtitle="''" :img="{ 
          backgroundImage: `url(${$config.apiUrl}${litter[0].mainPhoto.url})`
        }"/>
        <DogGallery v-if="litter[0] && litter[0].galleryPhotos[0]" :title="false" :photos="litter[0].galleryPhotos"/>
    </div>
</template>

<script>
    import { singleLitterQuery } from "~/graphql/query"
    export default {
        data(){
            return{
                litter: [],
            }
        },
        apollo: {
            litter:{
                prefetch: true,
                query: singleLitterQuery,
                 variables (){
                     return{
                         name: this.$route.params.name,
                     }
                },
            }
        },
        head() {
            return{
                title: `Litter - ${this.litter[0] ? this.litter[0].name : "..."}`,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'One of our litters',
                    },
                    {
                        hid: 'og:title',
                        name: 'og:title',
                        content: `Litter - ${this.litter[0] && this.litter[0].name}`,
                    },
                    {
                        hid: 'og:image',
                        property: 'og:image',
                        content: `${this.$config.apiUrl}${this.litter[0] && this.litter[0].mainPhoto.url}`,
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: 'One of our litters',
                    },
                    {
                        hid: 'og:url',
                        property: 'og:url',
                        content: `https://delimore-fci/litters/${this.litter[0] && this.litter[0].slug}`,
                    },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
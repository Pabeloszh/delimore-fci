<template>
    <div class="dog-gallery">
        <div class="container">
            <Title :section="'dog gallery'" :title="'Photos'"/>
            <div class="photos">
                <img v-for="photo in photos" :key="photo.formats.medium.name" :src="`http://localhost:1337${photo.formats.medium.url}`" :alt="photo.formats.medium.name" @click="toggleModal(photo)">
            </div>
        </div>
        <PhotoModal v-if="toggledPhoto" :photo="toggledPhoto" @next-photo="nextPhoto" @prev-photo="prevPhoto" @close-modal="closeModal"/>
    </div>
</template>

<script>
    import photoModal from "~/mixins/photoModal"
    export default {
        props: ['photos'],
        mixins: [photoModal]
    }
</script>

<style lang="scss" scoped>
    .dog-gallery{
        background-color: $primary-color;
        .container{
            margin: 80px auto;
            max-width: 1024px;
            .photos{
                display:grid;
                grid-template-columns: repeat(3, calc(33.3% - 7px));
                gap:10px;
                img{
                    transition: transform 150ms linear;
                    width:100%;
                    height:223px;
                    object-fit: cover;
                    cursor:pointer;
                }
                img:hover{
                    transform: scale(1.1)
                }
            }
        }
    }
    @media only screen and (max-width:1024px){
        .dog-gallery{
            .container{
                margin: 45px 25px;
                .photos{
                    grid-template-columns: 100%;
                    img{
                        height:auto;
                    }
                    img:hover{
                        transform: unset;
                    }
                }
            }
        }
    }
</style>
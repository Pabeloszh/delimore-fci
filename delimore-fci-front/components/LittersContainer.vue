<template>
    <div class="litters-container">
        <img v-for="litter in littersData" :key="litter.slug" :src="`${$config.apiUrl}${litter.mainPhoto.url}`" alt="litter-photo" :class="`img-${litter.mainPhoto.width < litter.mainPhoto.height ? 'sm' : 'lg'}`" @click="$router.push(`/litters/${litter.slug}`)"/>
    </div>
</template>
<script>
export default {
    props: ['littersData'],
}
</script>
<style lang="scss" scoped>
    .litters-container{
        display:grid;
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(auto, 400px);
        grid-auto-flow: row dense;
        gap: 15px;
        background-color:$primary-color;
        max-width: 1024px;
        margin: 0 auto 45px;
        img{
            transition: transform 150ms linear;
            height:100%;
            width:calc(100% - 15px);
            object-fit: cover;
            cursor:pointer;
        }
        img:hover{
            transform: scale(1.05)
        }
        .img-lg{
            grid-column: 1 / 3;
        }
    }
    @media only screen and (max-width: 1024px){
        .litters-container{
            display:grid;
            grid-template-columns: 100%;
            grid-template-rows: repeat(auto, 600px);
            img{
                justify-self: center;
                padding: 12.5px 25px;
                height:auto;
                width:100%;
            }
            .img-lg{
                grid-column: unset;
            }
        }
    }
</style>

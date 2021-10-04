<template>
    <div class="cards-container">
        <DogCard v-for="dog in dogs" :key="dog.name" :dog="dog"/>
    </div>
</template>

<script>
    export default {
        props: ['dogs']
    }
</script>

<style lang="scss" scoped>
    .cards-container{
        margin: 0 auto;
        width:100%;
        max-width:1024px;
        display:grid;
        grid-template-columns: repeat(3, calc(33.3% - 15px));
        grid-gap:20px;
        margin-bottom:45px;
    }
    @media only screen and (max-width: 1024px){
        .cards-container{
            width:280px;
            grid-template-columns: repeat(1, 280px);
        }
    }
</style>
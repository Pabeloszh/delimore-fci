<template>
    <div class="cards-container">
        <DogCard/>
        <DogCard/>
        <DogCard/>
        <DogCard/>
        <DogCard/>
        <DogCard/>
        <DogCard/>
        <DogCard/>
        <DogCard/>
        <DogCard/>
    </div>
</template>

<script>
    export default {
        
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
<template>
    <section class="latest">
        <Title :section="'dogs'" :title="'Latest Dogs'"/>
        <div class="cards-container">
            <DogCard/>
            <DogCard/>
            <DogCard/>
            <DogCard/>
            <DogCard/>
            <DogCard/>
        </div>
        <ButtonLink :value="'See More'" :to="'/females'"/>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .latest{
        position:relative;
        margin: 0 auto;
        width:100%;
        max-width:1024px;
        padding: 80px 0;
        .cards-container{
            display:grid;
            grid-template-columns: repeat(3, calc(33.3% - 15px));
            grid-gap:20px;
            margin-bottom:45px;
        }
        a{
            position:absolute;
            left:50%;
            transform: translateX(-50%)
        }
    }
    @media only screen and (max-width:1024px){
        .latest{
            padding:80px 25px;
            .cards-container{
                margin: 0 auto 45px;
                width:280px;
                grid-template-columns: repeat(1, 280px);
            }
        }
    }
</style>
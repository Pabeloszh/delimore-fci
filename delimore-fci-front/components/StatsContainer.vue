<template>
    <section class="stats">
        <StatsCard/>
        <StatsCard/>
        <StatsCard/>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .stats{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width:100%;
        max-width:1024px;
    }
    @media only screen and (max-width:1024px){
        .stats{
            flex-direction: column;
            padding: 0 25px;
        }
    }
</style>
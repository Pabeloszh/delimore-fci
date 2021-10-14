<template>
    <section class="stats">
        <StatsCard v-for="(stat, index) in stats.stats" :key="index" :stat="stat"/>
    </section>
</template>

<script>
    import { statsQuery } from "~/graphql/query"

    export default {
        data(){
            return{
                stats: []
            }
        },
        apollo: {
            stats:{
                prefetch: true,
                query: statsQuery
            }
        },
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
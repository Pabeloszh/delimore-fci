<template>
    <div>
        <Header :section="'our'" :title="'Litters'" :subtitle="'Check them out below'" :img="{ 
          backgroundImage: `url(${$config.apiUrl}/uploads/IMG_4886w_2943ed746c.jpg)`
        }"/>
        <LittersContainer :littersData="littersData"/>
    </div>
</template>

<script>
    import { littersQuery } from "~/graphql/query"
    export default {
        data(){
            return {
                littersData: []
            }
        },
        apollo: {
            littersData:{
                prefetch: true,
                query: littersQuery
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
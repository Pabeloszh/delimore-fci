<template>
    <NuxtLink :to="to">
        {{value}}
    </NuxtLink>
</template>

<script>
    export default {
        props: ['value', 'to'],
    }
</script>

<style lang="scss" scoped>
    a{
        padding:16px 27px;
        background-color: $additional-color;
        font-size:16px;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        text-decoration: none;
        color:$primary-color;
    }
    a:hover{
        background-color: $additional-hover-color;
    }
</style>
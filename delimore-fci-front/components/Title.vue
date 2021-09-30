<template>
    <div class="title">
        <p>{{section}}</p>
        <h2 :style="{color: section === 'gallery' ? '#fff' : '#0A0808'}">{{title}}</h2>
    </div>
</template>

<script>
    export default {
        props: ['section', 'title'],
    }
</script>

<style lang="scss" scoped>
    .title{
        margin-bottom:35px;
        p{
            margin-bottom:25px;
            font-family: 'Raleway', sans-serif;
            font-size:16px;
            font-weight: 700;
            text-transform: uppercase;
            color:$additional-color;
        }
        h2{
            width:490px;
            font-size: 48px;
            font-family: 'DM Serif Display', serif;
            font-weight: 400;
            color: $secondary-color
        }
    }
    @media only screen and (max-width:1024px){
        .title{
            p{
                margin-bottom:10px;
                font-size:12px;
            }
            h2{
                width:270px;
                font-size:36px;
            }
        }
    }
</style>
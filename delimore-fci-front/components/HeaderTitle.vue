<template>
    <div class="title">
        <p>{{section}}</p>
        <h2>{{title}}</h2>
        <h3>{{subtitle}}</h3>
        <p>Scroll down</p>
    </div>
</template>

<script>
    export default {
        props: ['section', 'title', 'subtitle'],
    }
</script>

<style lang="scss" scoped>
    .title{
        margin-bottom:35px;
        p{
            font-size:16px;
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            color:$additional-color;
        }
        h2{
            width:490px;
            font-size: 72px;
            font-family: 'DM Serif Display', serif;
            font-weight: 400;
            color: $secondary-color
        }
        h3{
            max-width:650px;
            font-size: 36px;
            font-family: 'Raleway', sans-serif;
            font-weight: 400;

        }
        p:last-of-type{
            margin: 80px 0;
            text-transform: unset;
            color: $secondary-color;
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
                font-size:42px;
            }
            h3{
                font-size: 16px;
            }
        }
    }
</style>
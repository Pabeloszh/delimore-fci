<template>
    <section class="main-header">
        <HeaderTitle :section="section" :title="title" :subtitle="subtitle"/>
        <img class="parallax" :src="img" alt="header image"/>
    </section>
</template>

<script>
    export default {
        props: ['section', 'title', 'subtitle', 'img'],
    }
</script>

<style lang="scss" scoped>
    .main-header{
        margin: 0 auto;
        width:100%;
        max-width: 1024px;
        min-height: 850px;
        max-height: 900px;
        padding:280px 15px 0px;
        .title{
            h1{
                font-size: 72px;
                font-family: 'DM Serif Display', serif;
                font-weight: 400;
                color: $secondary-color
            }
            h3{
                margin-bottom:65px;
                font-size:36px;
                font-family: 'Raleway', sans-serif;
                font-weight: 400;
                text-transform: uppercase;
                color: $secondary-color
            }
        }
        img{
            position:absolute;
            z-index:-1;
            top:220px;
            right:0;
            height:570px;
            width:700px;
            object-fit: cover;
        }
    }
    @media only screen and (max-width: 1024px){
        .main-header{
            height:90vh;
            min-height: 500px;
            max-height: 600px;
            padding:145px 25px 0;
            .title{
                h1{
                    font-size: 42px;
                }
                h3{
                    font-size: 16px;
                }
            }
            img{
                top:250px;
                width:275px;
                height:350px;
            }
        }
    }
</style>
<template>
    <section class="main-header">
        <div class="title">
            <h1>Delimore FCI</h1>
            <h3>Golder Retriever & SWD Kennel</h3>
            <ButtonLink :value="'Contact Us'" :to="'/contact'"/>
        </div>
        <div class="parallax"></div>
        <!-- <img src="http://localhost:1337/uploads/IMG_4880_2_b0d6b8ea81.jpg" alt=""> -->
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .main-header{
        margin: 0 auto;
        width:100%;
        height:90vh;
        max-width: 1024px;
        min-height: 750px;
        max-height: 800px;
        padding:280px 15px 0;
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
        .parallax{
            position:absolute;
            z-index:-1;
            top:220px;
            right:0;
            height:570px;
            width:700px;
            background-image: url('http://localhost:1337/uploads/IMG_4880_2_b0d6b8ea81.jpg');
            background-position: center 30%;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
    @media only screen and (max-width: 1024px){
        .main-header{
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
            .parallax{
                top:250px;
                width:275px;
                height:350px;
                background-position: center 30%;
            }
        }
    }
</style>
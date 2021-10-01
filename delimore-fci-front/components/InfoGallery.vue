<template>
    <section>
        <div class="overlay"></div>
        <div class="container">
            <Title :section="'gallery'" :title="'Still want to see more pictures of our wonderful dogs?'"/>
            <p>Just check out our gallery with many photos of them</p>
            <ButtonLink :value="'More Photos'" :to="'/gallery'"/>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    section{
        position:relative;
        padding:140px 0;
        background-image: url('http://localhost:1337/uploads/IMG_4895w_1_aba0e67ba6.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        .overlay{
            position:absolute;
            z-index:1;
            top:0;
            right:0;
            bottom:0;
            left:0;
            opacity:0.7;
            background-color:$secondary-color;

        }
        .container{
            position:relative;
            z-index: 2;
            margin: 0 auto;
            width:100%;
            max-width:1024px;
            p{
                margin-bottom:120px;
                font-family: 'Raleway', sans-serif;
                font-size:16px;
                font-weight: 400;
                color:$primary-color;
            }
        }
    }
    @media only screen and (max-width:1024px){
        section{
            padding:120px 25px;
            .container{
                p{
                    width:235px;
                }
            }
        }

    }
</style>
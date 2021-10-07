<template>
    <section>
        <div class="container">
            <div class="info">
                <slot></slot>
            </div>
        </div>
        <div class="image" :style="img"></div>
    </section>
</template>

<script>
    export default {
        props: ['img'],
    }
</script>

<style lang="scss" scoped>
    section{
        position: relative;
        width:100%;
        min-height:820px;
        padding:180px 0 0 0;
        .container{
            display:flex;
            justify-content: flex-end;
            margin: 0 auto;
            width:100%;
            max-width:1024px;
            .info{
                > p{
                    width:375px;
                    margin-bottom: 25px;
                    font-family: 'Raleway', sans-serif;
                    font-size:16px;
                    font-weight: 400;
                    span{
                        font-family: 'Roboto', sans-serif;
                        font-weight: 300;
                    }
                }
                p:last-of-type{
                    margin-bottom: 65px;
                }
                h5{
                    margin: 8px 0;
                    font-family: 'Raleway', sans-serif;
                    font-size:24px;
                    font-weight: 400;
                    a{
                        font-family: 'Roboto', sans-serif;
                        font-weight: 300;
                        color:$additional-color;
                        text-decoration: none;
                    }
                }
                h5:last-of-type{
                    margin-bottom: 20px;
                }
            }
        }
        .image{
            position:absolute;
            top:90px;
            left:0;
            margin-right:75px;
            height:660px;
            width:100%;
            max-width:45vw;
            background-position: center 30%;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
    @media only screen and (max-width:1024px){
        section{
            min-height:initial;
            padding-top:45px;
            .container{
                padding: 0 25px;
                flex-direction: column;
                justify-content: flex-start;
                .info{
                    p{
                        width:100%;
                        max-width:375px;
                    }
                }
            }
            .image{
                position:static;
                margin-top:45px;
                max-width: 100vw;
                height:335px;
            }

        }
    }
</style>
<template>
    <div class="photo-modal">
        <div class="photo-nav">
            <font-awesome-icon :icon="['fas', 'chevron-left']" @click="$emit('prev-photo', photo)"/>
            <font-awesome-icon :icon="['fas', 'chevron-right']" @click="$emit('next-photo', photo)"/>
        </div>
        <div class="overlay" @click="$emit('close-modal')"></div>
        <div class="modal-container">
            <img :src="`http://localhost:1337${photo.url}`" alt="">
        </div>
        <font-awesome-icon :icon="['fas', 'times']" @click="$emit('close-modal')"/>
    </div>
</template>

<script>
    export default {
        props: ['photo']
    }
</script>

<style lang="scss" scoped>
    .photo-modal{
        position:fixed;
        z-index:2000;
        top:0;
        right:0;
        bottom:0;
        left:0;
        .overlay{
            width:100%;
            height:100%;
            background-color:$secondary-color;
            opacity:0.8;
        }
        .modal-container{
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            max-width:1024px;
            img{
                max-width:1024px;
                height:auto;
            }
        }
        .photo-nav{
            position:absolute;
            top:0;
            right:0;
            bottom:0;
            left:0;
            svg{
                z-index: 2001;
                position:absolute;
                top:50%;
                transform:translateY(-50%);
                font-size:64px;
                color:$primary-color;
                padding:5px;
                cursor:pointer;
            }
            svg:first-child{
                left:5%;
            }
            svg:last-child{
                right:5%;
            }
        }
        >svg{
            position:absolute;
            top:40px;
            right:50px;
            width:30px;
            height:30px;
            color:$primary-color;
            cursor:pointer;
        }
    }
    @media only screen and (max-width:1024px){
        .photo-modal{
            .modal-container{
                width:100%;
                text-align: center;
                img{
                    width:calc(100% - 25px);
                    max-width:initial;
                }
            }
            >svg{
                top:20px;
                right:22.5px;
            }
        }
    }
    @media only screen and (max-width:1024px) and (orientation: landscape){
        .photo-modal{
            .modal-container{
                width:100%;
                text-align: center;
                img{
                    /* width:20px; */
                    width:auto;
                    max-width:initial;
                    max-height:calc(100vh - 25px)
                }
            }
        }
    }
</style>
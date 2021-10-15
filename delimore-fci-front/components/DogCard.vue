<template>
    <div class="dog-card" @click="$router.push(`/kennel/${dog.slug}`)">
        <img :src="`${$config.apiUrl}${dog.mainPhoto.formats.medium.url}`" alt="dog main photo">
        <div class="desc">
            <h4>{{dog.name}}</h4>
            <div class="birth">
                <p>Birth year:</p>
                <p>{{dog.birthDate.substring(0,4)}}</p>
            </div>
            <div class="gender">
                <p>Gender</p>
                <p>{{dog.gender}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['dog'],
    }
</script>

<style lang="scss" scoped>
    .dog-card{
        width:330px;
        padding:20px;
        transition: transform 150ms linear;
        box-shadow: 0px 11px 15px 4px #00000040;
        background: $primary-color;
        cursor:pointer;
        img{
            width:100%;
            height:230px;
            object-fit: cover;
        }
        .desc{
            h4{
                margin:10px 0 15px;
                width: 230px;
                height:100px;
                font-size: 24px;
                font-family: 'DM Serif Display', serif;
                font-weight: 400;
                color: $secondary-color
            }
            div{
                display:flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-size:16px;
                    font-family: 'Raleway', sans-serif;
                    font-weight: 500;
                }
                p:last-of-type{
                    color:$additional-color;
                }
            }
            div:first-of-type{
                margin-bottom:10px;
                p:last-of-type{
                    font-family: 'Roboto', sans-serif;
                    font-weight: 400;
                }
            }
        }
    }
    .dog-card:hover{
        transform: scale(1.05)
    }
    @media only screen and (max-width: 1024px){
        .dog-card{
            width:280px;
            .desc{
                h4{
                    height:initial;
                }
            }
        }
    }
</style>
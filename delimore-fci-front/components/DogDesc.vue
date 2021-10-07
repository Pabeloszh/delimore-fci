<template>
    <div class="dog-desc">
        <div class="container">
            <h3>{{dog.name}}<span><a href="#">Pedigree</a></span></h3>
            <h4>Bred by: {{dog.bredBy}}</h4>
            <p>Date of birth: <span>{{dog.birthDate}}</span></p>
            <p>Gender: <span>{{dog.gender}}</span></p>
            <ul>
                <li v-for="award in dog.awards" :key="award.awardName">{{award.awardName}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['dog']
    }
</script>

<style lang="scss" scoped>
    .dog-desc{
        padding: 80px 0;
        background-color: $secondary-color;
        color:$primary-color;
        .container{
            margin: 0 auto;
            max-width:992px;
            h3{
                font-size:36px;
                font-family: 'DM Serif Display', serif;
                font-weight: 400;
                span{
                    margin-left:10px;
                    a{
                        font-size: 14px;
                        font-family: 'Raleway', sans-serif;
                        color: $additional-color;
                    }
                }
            }
            h4{
                margin: 20px 0;
                font-size:24px;
                font-family: 'Raleway', sans-serif;
                font-weight: 500;
            }
            p{
                margin: 8px 0;
                font-size:16px;
                font-family: 'Raleway', sans-serif;
                span{
                    color:$additional-color;
                }
            }
            p:first-of-type{
                span{
                    font-weight: 300;
                    font-family: 'Roboto', sans-serif;
                }
            }
            ul{
                max-width: 450px;
                column-count: 2;
                margin: 20px 0;
                padding-left:20px;
                li{
                    margin: 8px 0;
                    font-weight: 300;
                    font-family: 'Roboto', sans-serif;
                }
            }
        }
    }
    @media only screen and (max-width:1024px){
        .dog-desc{
            padding:80px 25px;
            .container{
                h4{
                    margin: 15px 0 30px;
                }
                ul{
                    margin: 40px 0 20px;
                    width: auto;
                    column-count: 2;
                }
            }
        }
    }
    @media only screen and (max-width:576px){
        .dog-desc{
            .container{
                ul{
                    column-count: 1;
                }
            }
        }
    }
</style>
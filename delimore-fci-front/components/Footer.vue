<template>
    <footer>
        <div class="container">
            <div class="info">
                <h3>Delimore FCI</h3>
                <p>Golder Retriever & SWD Kennel</p>
                <div class="social-media">
                    <a href="/">
                        <font-awesome-icon :icon="['fab', 'facebook-f']"/>
                    </a>
                    <a href="/">
                        <font-awesome-icon :icon="['fab', 'instagram']"/>
                    </a>
                </div>
            </div>
            <div class="links">
                <div class="pages">
                    <p>Pages</p>
                    <ul>
                        <li>
                            <NuxtLink to="/">
                                Home
                            </NuxtLink>

                        </li>
                        <li>
                            <NuxtLink to="/litters">
                                Litters
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contact">
                                Contact us
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="kennel">
                    <p>Kennel</p>
                    <ul>
                        <li>
                            <NuxtLink to="/">
                                Females
                            </NuxtLink>

                        </li>
                        <li>
                            <NuxtLink to="/">
                                Males
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">
                                Non-Show Dogs
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">
                                In Memorian
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="contact">
                    <p>Contact</p>
                    <ul>
                        <li>
                            <a href="/">
                                ul. Fiołkowa 41 46-073 Opole
                            </a>

                        </li>
                        <li>
                            <a href="/litters">
                                delimorefci@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                +48 123 456 789
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright &copy; Paweł Mielech</p>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    footer{
        width:100%;
        padding: 60px 0 0;
        background-color: $secondary-color;
        .container{
            display:flex;
            justify-content: space-between;
            margin: 0 auto;
            width:100%;
            max-width:1024px;
            color: $primary-color;
            .info{
                h3{
                    font-size: 36px;
                    font-family: 'DM Serif Display', serif;
                    font-weight: 400;
                }
                p{
                    margin-bottom:30px;
                    font-size:12px;
                    font-family: 'Raleway', sans-serif;
                    font-weight: 400;
                }
                a{
                    transition:background-color 150ms linear;
                    margin-right:5px;
                    border:1px solid $primary-color;
                    width:30px;
                    height:30px;
                    padding:10px;
                    border-radius: 50%;
                    svg{
                        transition:color 150ms linear;
                        width:15px;
                        height: 15px;
                    }
                    color:$primary-color;
                }
                a:hover{
                    background-color:$primary-color;
                    svg{
                        color:$secondary-color;;
                    }
                }
            }
            .links{
                display:flex;
                justify-content: space-between;
                div{
                    margin-bottom: 60px;
                    p{
                        margin-bottom:15px;
                        font-size:16px;
                        font-family: 'Raleway', sans-serif;
                        font-weight: 600;
                        color:$additional-color;
                    }
                    ul{
                        padding:0;
                        list-style: none;
                        li{
                            margin: 5px 0;
                            a{
                                font-size:12px;
                                font-family: 'Raleway', sans-serif;
                                font-weight: 400;
                                text-decoration: none;
                                color:$primary-color;
                            }
                            a:hover{
                                opacity:0.7;
                            }
                        }
                    }
                }
            }
        }
        .copyright{
            margin: 45px auto 0;
            padding: 15px 0;
            width:100%;
            max-width:1024px;
            border-top: 1px solid $primary-color;
            p{
                width:100%;
                text-align: center;
                font-size:10px;
                font-family: 'Raleway', sans-serif;
                font-weight: 400;
                color:$additional-color;
            }
        }
    }
    @media only screen and (max-width: 1024px){
        footer{
            padding: 60px 25px 0;
            .container{
                flex-direction: column;
                .links{
                    margin-top:45px;
                    justify-content: flex-start;
                    div{
                        margin: 0;
                    }
                    .pages{
                        margin-right:45px;
                    }
                    .kennel{
                        display:none;
                    }
                }
            }
        }
    }
</style>
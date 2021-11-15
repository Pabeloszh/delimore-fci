<template>
    <footer>
        <div class="container">
            <div class="info">
                <h3>Delimore FCI</h3>
                <p>Golder Retriever & SWD Kennel</p>
                <div class="social-media">
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/Delimore-FCI-107824330729254">
                        <font-awesome-icon :icon="['fab', 'facebook-f']"/>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.instagram.com/delimore_fci/">
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
                            <NuxtLink to="/kennel/females">
                                Females
                            </NuxtLink>

                        </li>
                        <li>
                            <NuxtLink to="/kennel/males">
                                Males
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/kennel/nonshow">
                                Non-Show Dogs
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/kennel/inmemorian">
                                In Memorian
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="contact">
                    <p>Contact</p>
                    <ul>
                        <li>
                            <a target="_blank" rel="noopener" href="https://www.google.pl/maps/place/%C5%9Awi%C4%99tokrzyska+13,+46-020+Opole/@50.6254061,17.9885273,18.5z/data=!4m18!1m12!4m11!1m3!2m2!1d17.9892501!2d50.6256829!1m6!1m2!1s0x471054cc07142881:0xe8abcbc2f7280ad3!2s%C5%9Awi%C4%99tokrzyska+13,+46-020+Opole!2m2!1d17.9892501!2d50.6255604!3m4!1s0x471054cc07142881:0xe8abcbc2f7280ad3!8m2!3d50.6255604!4d17.9892501">
                                ul. Świętokrzyska <span>13, 45-679</span> Opole
                            </a>

                        </li>
                        <li>
                            <a href="mailto:hadrian@interia.pl">
                                hadrian@interia.pl 
                            </a>
                        </li>
                        <li>
                            <a href="tel:+48730851547">
                                <span>+48 730 851 547</span>
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
                        color:$primary-color;
                    }
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
                    margin-left: 60px;
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
                            padding: 5px 0;
                            a{
                                font-size:12px;
                                font-family: 'Raleway', sans-serif;
                                font-weight: 400;
                                text-decoration: none;
                                color:$primary-color;
                                span{
                                    font-family: 'Roboto', sans-serif;
                                    font-weight: 300;
                                }
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
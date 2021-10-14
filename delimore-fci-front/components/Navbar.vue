<template>
    <div>
        <nav class="navbar" ref="nav" >
            <img :src="`${$config.apiUrl}/uploads/image_2_1_4093d417f5.png`" alt="fci-logo">
            <ul class="links">
                <li @click="closeMenu">
                    <NuxtLink to="/" class="home">Home</NuxtLink>
                </li>
                <li class="dropdown">
                    <NuxtLink to="/kennel" :event="''">Kennel</NuxtLink>
                    <ul>
                        <li @click="closeMenu">
                            <NuxtLink to="/kennel/females">Females</NuxtLink>
                        </li>
                        <li @click="closeMenu">
                            <NuxtLink to="/kennel/males">Males</NuxtLink>
                        </li>
                        <li @click="closeMenu">
                            <NuxtLink to="/kennel/nonshow">Non-Show</NuxtLink>
                        </li>
                        <li @click="closeMenu">
                            <NuxtLink to="/kennel/inmemorian">In Memorian</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li @click="closeMenu">
                    <NuxtLink to="/litters">Litters</NuxtLink>
                </li>
                <li @click="closeMenu">
                    <NuxtLink to="/gallery" >Gallery</NuxtLink>
                </li>
                <li @click="closeMenu">
                    <NuxtLink to="/contact">CONTACT US</NuxtLink>
                </li>
            </ul>
            <div class="menu" @click="toggleMenu" ref="menu">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
        <div class="overlay" ref="overlay" @click="closeMenu"></div>
    </div>
</template>

<script>
    export default {
        methods: {
            onScroll(){
                if(window.scrollY > 0){
                    this.$refs.nav?.classList.add('scrolled')
                } else {
                    this.$refs.nav?.classList.remove('scrolled')
                }
            },
            toggleMenu(){
                this.$refs.menu?.classList.toggle('menu-open')
                this.$refs.nav?.classList.toggle('toggled')
                this.$refs.overlay?.classList.toggle('active')
            },
            closeMenu(){
                this.$refs.menu?.classList.remove('menu-open')
                this.$refs.nav?.classList.remove('toggled')
                this.$refs.overlay?.classList.remove('active')
            }
        },
        beforeMount () {
            window.addEventListener('scroll', this.onScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.onScroll);
        }
    }
</script>

<style lang="scss" scoped>
    $color-animation: 250ms linear 150ms;
    .overlay{
        position:fixed;
        z-index: 900;
        top:0;
        right:0;
        bottom:0;
        left:0;
        display:none;
    }
    .navbar{
        position:fixed;
        left: 50%;
        z-index: 1000;
        transform: translateX(-50%);
        display:flex;
        justify-content: space-between;
        align-items: center;
        transition: background-color $color-animation;
        margin: 0 auto;
        width: 100%;
        max-width: 1024px;
        padding: 0 15px;
        font-family: 'Raleway', sans-serif;
        img{
            height: 50px;
            transition: filter $color-animation;
        }
        .links{
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding:0;
            list-style-type: none;
            >li{
                transition: padding 150ms linear;
                margin:0 20px;
                padding: 60px 0;
                a, p{
                    transition: color $color-animation;
                    font-weight: 700;
                    text-transform: uppercase;
                    text-decoration: none;
                    color:$secondary-color;
                    cursor:pointer;
                }
                .home.nuxt-link-active{
                    color:$secondary-color;
                }
                .home.nuxt-link-active.nuxt-link-exact-active, .nuxt-link-active{
                    color:$additional-color;
                }
            }
            li:hover{
                a, p{
                    color:$additional-color;
                }
            }
            .dropdown{
                position:relative;
                ul{
                    visibility: hidden;
                    position:absolute;
                    top:99px;
                    right:0;
                    display:flex;
                    flex-direction: column;
                    align-items: flex-end;
                    border-top: 2px solid $additional-color;
                    width:200px;
                    padding:10px;
                    background-color:$secondary-color;
                    list-style-type: none;
                    li{
                        margin: 6px 0;
                        a{
                            text-align: right;
                            font-weight: 500;
                            color:$primary-color;
                        }
                    }
                    li:hover{
                        a{
                            color:$additional-color;
                        }
                    }
                    .nuxt-link-active{
                        color:$additional-color;
                    }
                }
            }
            .dropdown:hover{
                ul{
                    visibility: visible;
                }
            }
        }
        .menu, .menu-open{
            display:none;
        }
        .menu{
            position: relative;
            transform: rotate(0deg);
            transition: .5s ease-in-out;
            width: 25px;
            height: 14px;
            cursor: pointer;
            span{
                display: block;
                opacity: 1;
                position: absolute;
                left: 0;
                transform: rotate(0deg);
                transition: .25s ease-in-out;
                width: 100%;
                height: 2px;
                background: $secondary-color;
            }
            span:nth-child(1){
                top: 0px;

            }
            span:nth-child(2), span:nth-child(3){
                top: 6px;

            }
            span:nth-child(4) {
                top: 12px;
            }
        }
        .menu-open {
            span:nth-child(1) {
                top: 6px;
                width: 0%;
                left: 50%;
            }
            span:nth-child(2) {
                transform: rotate(45deg);
            }
            span:nth-child(3) {
                transform: rotate(-45deg);
            }
            span:nth-child(4) {
                top: 6px;
                width: 0%;
                left: 50%;
            }
        }
    }
    .scrolled{
        background-color:$secondary-color;
        img{
            filter:invert(1);
        }
        .links{
            >li{
                padding: 40px 0;
                a, p, .home.nuxt-link-active:not(.nuxt-link-exact-active){
                    color:$primary-color;
                }
                
            }
        }
        .menu{
            span{
                background: $primary-color;
            }
        }
    }
    @media only screen and (max-width: 1024px){
        .overlay.active{
            display:block;
        }
        .navbar{
            padding:20px 25px;
            img{
                height:30px;
            }
            .links{
                visibility: hidden;
                opacity:0;
                position:absolute;
                top:70px;
                left:0;
                flex-direction: column;
                align-items: flex-start;
                transition: background-color 250ms linear 150ms, visibility 150ms linear 250ms, opacity 150ms linear 250ms;
                width:100%;
                padding: 0 0 15px 25px;
                >li{
                    margin:8px 0px;
                    padding: 0;
                }
                .dropdown{
                    ul{
                        display:none;
                        position:static;
                        align-items: start;
                        border-top:none;
                        li{
                            margin: 8px 0;
                            a{
                                font-size:14px;
                            }
                        }
                    }
                }
                .dropdown:hover{
                    ul{
                        display:block;
                    }
                }

            }
            .menu, .menu-open{
                display:block;
            }
        }
        .scrolled{
            .links{
                transition: none;
            }
        }
        .toggled{
            background-color:$secondary-color;
            img{
                filter:invert(1);
            }
            .links{
                visibility: visible;
                opacity:1;
                transition: background-color 250ms linear 150ms, visibility 150ms linear, opacity 150ms linear;
                background-color: $secondary-color;
                >li{
                    a, p, .home.nuxt-link-active:not(.nuxt-link-exact-active){
                        color:$primary-color;
                    }
                }
            }
            .menu{
                span{
                    background: $primary-color;
                }
            }
        }
        .toggled.scrolled{
            .links{
                transition: opacity 150ms linear;
            }
        }
    }
</style>
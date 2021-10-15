<template>
    <div class="litters-container">
        <div class="space-holder" ref="spaceHolder">
        <div class="sticky" ref="sticky">
        <div class="horizontal" ref="horizontal">
            <section role="feed" class="cards">
                <img v-for="litter in littersData" :key="litter.slug" :src="`${$config.apiUrl}${litter.mainPhoto.url}`" alt="litter photo" @click="$router.push(`/litters/${litter.slug}`)"/>
            </section>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props: ['littersData'],
     methods: {
        onScroll(){
            console.log(this.$refs.spaceHolder.style.height)
            this.$refs.horizontal.style.transform = `translateX(-${this.$refs.sticky.offsetTop}px)`;
        },
        onResize(){
            console.log(321)
            this.$refs.spaceHolder.style.height = `${this.calcDynamicHeight(this.$refs.horizontal) - 150}px`;
            if(window.innerWidth < 992){
                this.$refs.spaceHolder.style.height = `auto`;
                window.removeEventListener('scroll', () => {
                    this.$refs.horizontal.style.transform = `translateX(-${this.$refs.sticky.offsetTop}px)`;
                });
            }
        },
        calcDynamicHeight(payload) {
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const objectWidth = payload.scrollWidth;
            return objectWidth - vw + vh + 150; 
        }
    },
    beforeMount(){
        window.addEventListener('scroll', this.onScroll);
        window.addEventListener('resize', this.onResize);
    },
    mounted() {
        console.log('mounted - ', window.innerWidth)
        console.log('mounted - ', window.innerHeight)
        console.log('mounted - ', this.$refs.horizontal.scrollWidth)
        console.log('mounted - ', this.calcDynamicHeight(this.$refs.horizontal) - 150)
        this.$refs.spaceHolder.style.height = `${this.$refs.horizontal.scrollWidth - window.innerWidth + window.innerHeight}px`;
        console.log('mounted - ', this.$refs.spaceHolder.style.height)
        window.addEventListener('scroll', this.onScroll);
        window.addEventListener('resize', this.onResize);
    },
    beforeDestroy() {
        console.log('beforedestroy')
        window.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('resize', this.onResize);
    },
   
    
}
</script>
<style lang="scss" scoped>
    .litters-container{
        padding: 80px 0;
        background-color:$secondary-color;
        position: relative;
        width: 100%;
        min-height: 800px;
        .space-holder {
            position: relative;
            width: 100%;
        }
        
        .sticky {
            position: sticky;
            top: 0;
            height: 100vh;
            width: 100%;
            overflow-x: hidden;
        }
        
        .horizontal {
            position: absolute;
            height: 100%;
            will-change: transform;
        }
        
        .cards{
            padding: 0 150px;
            position: relative;
            height: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            img{
                transition: transform 150ms linear;
                margin: 0 15px;
                height:600px;
                width:auto;
                cursor:pointer;
            }
            img:hover{
                transform: scale(1.05)
            }
        }
    }
    @media only screen and (max-width: 1024px){
        .litters-container{
            .space-holder {
                position: static;
                width: 100%;
            }
            .sticky {
                position: static;
                height: auto;
                width: 100%;
            }      
            .horizontal {
                position: static;
                height: auto;
                transform: translateX(0) !important;
            }
            .cards {
                position: static;
                height: 100%;
                padding: 0;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                img{
                    padding: 12.5px 25px;
                    height:auto;
                    width:100%;
                }
            }
        }
    }
</style>

<template>
    <div class="stats-card">
        <div class="icon">
            <font-awesome-icon :icon="['fas', renderIcon(stat.type)]"/>
        </div>
        <h3>{{stat.number}}</h3>
        <p>{{stat.title}}</p>
    </div>
</template>

<script>
    export default {
        props: ['stat'],
        methods: {
            renderIcon(payload){
                switch(payload){
                    case 'dogs':
                        return 'dog'
                    case 'awards':
                        return 'award'
                    case 'raised':
                        return 'paw'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .stats-card{
        display:flex;
        flex-direction: column;
        align-items: center;
        transition: transform 150ms linear;
        width:330px;
        padding:20px;
        box-shadow: 0px 11px 15px 4px #00000040;
        background: $primary-color;
        .icon{
            position:relative;
            margin-bottom:20px;
            border-radius: 50%;
            width:80px;
            height:80px;
            background-color:$additional-color;
            svg{
                position:absolute;
                top:50%;
                left:50%;
                transform:translate(-50%, -50%);
                font-size:40px;
                color:$primary-color;
            }
        }
        h3{
            margin-bottom:10px;
            font-size:36px;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            color:$secondary-color;
        }
        p{
            font-size:16px;
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
        }
    }
    .stats-card:hover{
        transform: scale(1.05)
    }
    @media only screen and (max-width:1024px){
        .stats-card{
            width:320px;
            margin-bottom:20px;
        }
    }
</style>
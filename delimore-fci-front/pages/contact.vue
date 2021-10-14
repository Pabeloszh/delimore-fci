<template>
    <div>
        <Header :section="'Contact us'" :title="'Want more informations?'" :subtitle="''" :img="{ 
          backgroundImage: `url(${$config.apiUrl}/uploads/IMG_4895w_1_aba0e67ba6.jpg)`
        }"/>
        <InfoSection :img="{ 
          backgroundImage: `url(${$config.apiUrl}/uploads/IMG_4741_2_2f07aff2d8.jpg)`
        }">
            <Title :section="'contact details'" :title="'Then contact us the way you want'"/>
            <h5>Phone: <a href="tel:+48730851547">+48 730 851 547</a></h5>
            <h5>Email: <a href="mailto:hadrian@interia.pl">hadrian@interia.pl </a></h5>
            <p>We are available Monday through Friday from <span>8:00</span> a.m. to <span>4:00</span> p.m.</p>
        </InfoSection>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
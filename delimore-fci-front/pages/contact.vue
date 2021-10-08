<template>
    <div>
        <Header :section="'Contact us'" :title="'Want more informations?'" :subtitle="''" :img="{ 
          backgroundImage: `url(${$config.apiUrl}/uploads/IMG_4895w_1_aba0e67ba6.jpg)`
        }"/>
        <InfoSection :img="{ 
          backgroundImage: `url(${$config.apiUrl}/uploads/IMG_4741_2_2f07aff2d8.jpg)`
        }">
            <Title :section="'our contact details'" :title="'Then contact us'"/>
            <h5>Our phone number: <a href="tel:+481234567">+48 123 456 789</a></h5>
            <h5>Our email: <a href="email:delimorefci@gmail.com">delimorefci@gmail.com</a></h5>
            <h5>Our phone number: <a href="#">ul. Fiołkowa 41 46-073 Opole</a></h5>
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
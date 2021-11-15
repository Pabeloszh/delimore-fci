<template>
    <div>
        <Header :section="'Contact us'" :title="'Want more informations?'" :subtitle="''" :img="'/images/main.jpg'"/>
        <InfoSection :img="'/images/inmemorian.jpg'">
            <Title :section="'contact details'" :title="'Then contact us the way you want'"/>
            <h5><a href="tel:+48730851547">+48 730 851 547</a></h5>
            <h5><a href="mailto:hadrian@interia.pl">hadrian@interia.pl </a></h5>
            <div class="social-media">
              <a target="_blank" rel="noopener" href="https://www.facebook.com/Delimore-FCI-107824330729254">
                  <font-awesome-icon :icon="['fab', 'facebook-f']"/>
              </a>
              <a target="_blank" rel="noopener" href="https://www.instagram.com/delimore_fci/">
                  <font-awesome-icon :icon="['fab', 'instagram']"/>
              </a>
            </div>
        </InfoSection>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
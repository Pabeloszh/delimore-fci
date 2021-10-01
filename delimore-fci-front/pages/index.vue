<template>
  <div>
    <MainHeader/>
    <StatsContainer/>
    <InfoSection :img="about.img">
        <Title :section="about.titleData.subtitle" :title="about.titleData.title"/>
        <p v-for="text in about.paragraphs" :key="text">{{text}}</p>
    </InfoSection>
    <Latest/>
    <InfoGallery/>
    <InfoSection :img="litters.img">
        <Title :section="litters.titleData.subtitle" :title="litters.titleData.title"/>
        <p v-for="text in litters.paragraphs" :key="text">{{text}}</p>
        <ButtonLink :value="'See Litters'" :to="'/litters'"/>
    </InfoSection>
  </div>
</template>

<script>
export default {
  layout: 'no-gallery',
  data(){
    return{
      about: {
        img: { 
          backgroundImage: `url(http://localhost:1337/uploads/IMG_4813w_2_716f2629a6.jpg)`
        },
        titleData: {
          subtitle: 'about us',
          title: 'We have a huge passion and love for our dogs'
        },
        paragraphs: ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.']
      },
      litters: {
        img: { 
          backgroundImage: "url(http://localhost:1337/uploads/IMG_4786w_3de76be502.jpg)"
        },
        titleData: {
          subtitle: 'litters',
          title: 'Find out about our litters'
        },
        paragraphs: ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.']
      }
    }
  },
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  *{
    box-sizing: border-box;
    margin:0;
  }
</style>

<template>
  <div>
    <MainHeader/>
    <StatsContainer/>
    <InfoSection :img="about.img">
        <Title :section="about.titleData.subtitle" :title="about.titleData.title"/>
        <p v-for="text in about.paragraphs" :key="text">{{text}}</p>
    </InfoSection>
    <Latest :latestDogs="latestDogs"/>
    <InfoGallery/>
    <InfoSection :img="litters.img">
        <Title :section="litters.titleData.subtitle" :title="litters.titleData.title"/>
        <p v-for="text in litters.paragraphs" :key="text">{{text}}</p>
        <ButtonLink :value="'See Litters'" :to="'/litters'"/>
    </InfoSection>
  </div>
</template>

<script>
import { latestDogsQuery } from "~/graphql/query"
export default {
  layout: 'no-gallery',
  data(){
    return{
      about: {
        img: '/images/about.jpg',
        titleData: {
          subtitle: 'about us',
          title: 'We have a huge passion and love for our dogs'
        },
        paragraphs: ['Dogs in our house have always been there, but we started going to shows by accident, after our friends suggested the idea. We met many amazing people who persuaded us to try to start breeding.', 'As soon as we started, we knew that this is what we want to do in life.  Our kennel is fully home.  We love dogs and we want the best for them, so it is very important for us to find good homes for our puppies, and to share knowledge with new owners who are starting their adventure with dogs.']
      },
      litters: {
        img: '/images/litters.jpg',
        titleData: {
          subtitle: 'litters',
          title: 'Find out about our litters'
        },
        paragraphs: [`Our puppies are loved by us from the very first moments and socialized with various toys and sounds.  We think this is a very important part of a dog's life and we try to do it the best we can.`]
      },
      latestDogs: []
    }
  },
  apollo: {
    latestDogs:{
      prefetch: true,
      query: latestDogsQuery
    }
  },
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
  *{
    box-sizing: border-box;
    margin:0;
  }
</style>

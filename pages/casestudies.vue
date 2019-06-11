<template>
  <div class="casestudies">
    <Banner :title="$t('menu.caseStudies')" img="/banner/about-us-banner.png"/>
    <div class="container pt-5">
      <h2 class="text-center">{{$t('innerPage.caseStudies.heading')}}</h2>
      <div class="row">
        <div class="col-12 col-md-4" v-for="(item, index) in casestudies" :key="index">
          <b-card
            :title="item.title"
            :img-src="item.logo"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              <p><b>{{$t('innerPage.caseStudies.software')}}:</b> {{item.software}} <br>

              </p>
              <p><b>{{$t('innerPage.caseStudies.solution')}}:</b>
              {{$t('innerPage.caseStudies.solutions.'+item.solution)}} </p>
            </b-card-text>
          </b-card>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import Banner from '@/components/home/Banner'
export default {
  components: { Banner },
  data () {
    return {
      casestudies: [
        {
          title: 'Lotte Properties',
          logo: '/casestudies/lotte-property.png',
          software: 'SAP',
          solution: 'si',
        },
        {
          title: 'Lotte Mart',
          logo: '/casestudies/lotte-mart.jpg',
          software: 'Opera',
          solution: 'si',
        },
        {
          title: 'Lotte Hotels',
          logo: '/casestudies/lotte-hotel.png',
          software: 'SAP',
          solution: 'ms',
        }
      ]
    }
  },
  nuxtI18n: {
    paths: {
      en: '/case-studies',
      kr: '/salye-yeongu',
      vi: '/giai-phap'
    }
  }
}
</script>

<style lang="scss" scoped>
.casestudies {
  padding-bottom: 40px;
  h2 {
    margin-bottom: 40px;
  }
  .card {
    margin: 0 auto;
    img {
      border-bottom: 1px solid #ccc;
    }
    .card-body {
      padding-bottom: 0;
    }
  }
}
</style>

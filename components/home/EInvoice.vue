<template>
  <div class="e-invoice">
    <div class="container">
      <div class="intro text-center">
        <h2>{{$t('home.feature.heading')}}</h2>
        <!-- <p>{{$t('home.feature.subheading')}}</p> -->
        <img v-if="!showVideo" src="/intro/home_vedio190517.png" alt="" @click="showVideo = true">
        <iframe v-else width="560" height="315" src="https://www.youtube.com/embed/EcG9aemH_QM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="features text-center">
        <div class="row">
          <div class="col-6 col-md-4">
            <div class="feature">
              <div class="feature-thumb">
                <img src="/features/icons8-facebook-messenger-500.png" alt="">
              </div>
              <h3>{{$t('home.feature.feature1')}}</h3>
              <p>{{$t('home.feature.desc1')}}</p>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="feature">
              <div class="feature-thumb">
                <img src="/features/icons8-receive-cash-500.png" alt="">
              </div>
              <h3>{{$t('home.feature.feature2')}}</h3>
              <p>{{$t('home.feature.desc2')}}</p>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="feature">
              <div class="feature-thumb">
                <img src="/features/icons8-business-100 (1).png" alt="">
              </div>
              <h3>{{$t('home.feature.feature3')}}</h3>
              <p>{{$t('home.feature.desc3')}}</p>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="feature">
              <div class="feature-thumb">
                <img src="/features/icons8-support-100.png" alt="">
              </div>
              <h3>{{$t('home.feature.feature4')}}</h3>
              <p>{{$t('home.feature.desc4')}}</p>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="feature">
              <div class="feature-thumb">
                <img src="/features/icons8-box-100.png" alt="">
              </div>
              <h3>{{$t('home.feature.feature5')}}</h3>
              <p>{{$t('home.feature.desc5')}}</p>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="feature">
              <div class="feature-thumb">
                <img src="/features/icons8-online-support-100.png" alt="">
              </div>
              <h3>{{$t('home.feature.feature6')}}</h3>
              <p>{{$t('home.feature.desc6')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showVideo: false
    }
  },
  methods: {
    openVideo () {

    }
  }
}
</script>

<style lang="scss" scoped>
  .e-invoice {
    padding: 80px 0;
    .intro {
      h2 {
        font-size: 35px;
      }
      p {
        font-size: 20px;
      }
      img {
        &:hover {
          cursor: pointer;
        }
      }
    }
    .features {
      padding-top: 40px;
      .feature {
        margin-bottom: 40px;
        h3 {
          font-size: 20px;
        }
        img {
          width: 100px;
          // padding: 20px;
          // border: 1px solid #000;
          margin-bottom: 20px;
          // border-radius: 100%;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
</style>


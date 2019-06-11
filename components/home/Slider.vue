<template>
  <div class="slider">
    <VideoBackground :sources="['/videos/zip_Working-Space/MP4/Working-Space.mp4']" img="/videos/zip_Working-Space/snapshots/Working-Space.jpg">
    <!-- <VideoBg :sources="['/videos/zip_Typing/Typing.mp4']" img="/videos/zip_Working-Space/snapshots/Working-Space.jpg"> -->
      <div class="container ">
        <div class="content-text text-center">
          <div>
          <h1 v-html="$t('home.slider.heading')"></h1>
          <p>{{$t('home.slider.subheading')}}</p>
          <a href="#" @click.prevent="showModal" class="btn btn-request">{{$t('home.slider.btn')}}</a>
          </div>
        </div>
      </div>
    </VideoBackground>
    <b-modal ref="my-modal" centered hide-footer title="Request a free demo">
      <div class="d-block">
        <b-form>
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Phone number:" label-for="input-2">
            <b-form-input
              id="input-2"
              required
              placeholder="Enter phone number"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Field:" label-for="input-3">
            <b-form-select
              id="input-3"
              :options="fields"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox-group id="checkboxes-4">
              <b-form-checkbox value="me">Yes, I agree to the Terms of service & privacy policy.</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </b-form>
      </div>
      <b-button class="mt-3" variant="outline-success" block @click="hideModal">Send request</b-button>

    </b-modal>
  </div>
</template>
<script>
import VideoBackground from '~/components/VideoBackground.vue'

export default {
  data () {
    return {
      fields: ['Restaurant', 'Market', 'Hospital', 'Other']
    }
  },
  components: { VideoBackground },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    }
  }
}
</script>


<style lang="scss">

.slider {
  // padding: 200px 0 150px;
  // background: url('/slider/bannerindexN.jpg');

  color: #fff;
  h1 {
    font-size: 74px;
    font-weight: bold;
    margin-bottom: 20px;
    letter-spacing: -1.5px;
    span {
      color: $red;
    }
  }
  p {
    font-size: 29px;
  }
  .VideoBg__content {
    // background: rgba(0, 0, 0, 0.4);
    .container {
      height: 100%;
      .content-text {
        display: flex;
        align-items: center;
        align-self: center;
        justify-content: center;
        height: 100%;
      }
    }
  }
}
</style>

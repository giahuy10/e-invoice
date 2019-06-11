
<template>
  <div class="login">
    <VideoBackground :sources="['/videos/zip_Working-Space/MP4/Working-Space.mp4']" img="/videos/zip_Working-Space/snapshots/Working-Space.jpg">
    <!-- <VideoBg :sources="['/videos/zip_Typing/Typing.mp4']" img="/videos/zip_Working-Space/snapshots/Working-Space.jpg"> -->
      <div class="container ">
        <div class="form-login d-flex justify-content-center align-items-center">
          <b-form @submit.prevent="onSubmit">
            <div class="text-center login-logo">
              <img src="/logo.png" alt="">
            </div>
            <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.password"
                required
                placeholder="Enter password"
                type="password"
              ></b-form-input>
            </b-form-group>



            <b-form-group id="input-group-4">
              <b-form-checkbox-group v-model="form.remember" id="checkboxes-4">
                <b-form-checkbox value="me">Remember login</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Login</b-button>
          </b-form>
        </div>
      </div>
    </VideoBackground>
  </div>
</template>

<script>
import VideoBackground from '~/components/VideoBackground.vue'
export default {
  layout: 'login',
  components: { VideoBackground },
  data () {
    return {
      form: {
        email: '',
        password: '',
        remember: false
      }
    }
  },
  methods: {
    onSubmit () {

    }
  }
}
</script>

<style lang="scss" scoped>
.form-login {
  height: 100vh;
  form {
    background: rgba(255,255,255, 0.6);
    padding: 40px;
    .login-logo {
      img {
        width: 200px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>

<template>
  <div class="homepage">
    <Slider />
    <Client />
    <EInvoice />
    <Testimonial/>
  </div>
</template>

<script>
import Slider from '~/components/home/Slider.vue'
import Client from '~/components/home/Client.vue'
import EInvoice from '~/components/home/EInvoice.vue'
import Testimonial from '~/components/home/Testimonial.vue'
export default {
  components: {
    Slider, Client, EInvoice, Testimonial
  }
}
</script>

<style>

</style>

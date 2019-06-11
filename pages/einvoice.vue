<template>
  <div class="einvoice">
    <Banner :title="$t('menu.eInvoice')" img="/banner/about-us-banner.png"/>
    <div class="container pt-5">

    </div>
  </div>
</template>
<script>
import Banner from '@/components/home/Banner'
export default {
  components: { Banner },
  nuxtI18n: {
    paths: {
      en: '/e-invoice',
      kr: '/jeonja-inboiseu',
      vi: '/hoa-don-dien-tu'
    }
  }
}
</script>

<template>
  <div class="faq">
    <Banner :title="$t('menu.qnA')" img="/banner/about-us-banner.png"/>
    <div class="container pt-5">
      <h2>CÂU HỎI TỪ DOANH NGHIỆP SỬ DỤNG PHẦN MỀM</h2>
      <div role="tablist">
        <b-card no-body class="mb-1" v-for="(item, index) in q1" :key="index">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-1 variant="info">{{item.title}}</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
            <b-card-body>

              <b-card-text v-html="item.text"></b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <h2>CÂU HỎI TỪ KHÁCH HÀNG NHẬN HÓA ĐƠN ĐIỆN TỬ</h2>
    </div>
  </div>
</template>
<script>
import Banner from '@/components/home/Banner'
export default {
  components: { Banner },
  data () {
    return {
      q1: [
        {
          title: 'Các thủ tục gì để phát hành HĐĐT',
          text: ''
        }
      ]
    }
  },
  nuxtI18n: {
    paths: {
      en: '/faq',
      kr: '/jaju-mudneun-jilmun',
      vi: '/cau-hoi-thuong-gap'
    }
  }
}
</script>

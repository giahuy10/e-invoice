<template>
  <div class="about">
    <Banner :title="$t('menu.about')" img="/banner/about-us-banner.png"/>
    <div class="container pt-5">
      <h3>Công ty TNHH Truyền số liệu LOTTE Việt Nam: </h3>
      <p>Thành lập pháp nhân tại Việt nam vào năm 2009, Chúng tôi tự hào cung cấp hầu hết các giải pháp và dịch vụ IT cho các công ty con thuộc Tập đoàn LOTTE tại Việt Nam. </p>
      <p>Với đội ngũ chuyên gia đến từ Hàn Quốc cùng với những Kỹ sư nhiều kinh nghiệm trong nước, Công ty TNHH Truyền số liệu LOTTE Việt Nam luôn được tin cậy bởi các đối tác và khách hàng. Kế thừa kinh doanh tất cả các Giải pháp Công nghệ sở hữu bởi Công ty mẹ, chúng tôi cam kết sẽ mang đến cho khách hàng những sản phẩm và dịch vụ tốt nhất.</p>

      <p>Các sản phẩm chính của chúng tôi: Tòa nhà thông minh, Đỗ xe thông minh, Giải pháp y tế L-Hospital, Thu phí tự động, Định vị trong nhà, Core Banking, Retail, Giải pháp Chứng khoán T- Solution v.v…</p>


      <p>Với những nỗ lực của mình, sau 10 năm có mặt tại Việt Nam, chúng tôi dần dần tìm hiểu mong muốn của khách hàng bản địa, LDCC VN đã và đang cung cấp Dịch vụ và Giải pháp cho 50 Khách hàng Doanh nghiệp, 1500 users gián tiếp sử dụng các dịch vụ LOTTE Cloud Service,  gần 45 Kỹ sư Onsite phục vụ khách hàng, hợp tác thành công với nhiều đối tác lớn. Hiện tại Công ty đã có 02 chi nhánh tại Hà Nội và TP. Hồ Chí Minh với quy mô lên đến gần 300 nhân sự. </p>

      <p>Chúng tôi tự hào là đối tác Hàn Quốc được VNPT lựa chọn làm Đại lý tại Việt Nam. VNPT là doanh nghiệp hàng đầu trong lĩnh vực bưu chính viễn thông & dịch vụ số tại Việt Nam. Cùng với thế mạnh về các giải pháp công nghệ và chất lượng dịch vụ mang thương hiệu Hàn Quốc của tập đoàn Lotte, chúng tôi tin rằng dịch vụ hóa đơn điện tử E invoice mà chúng tôi cung cấp sẽ là giải pháp tối ưu nhất dành cho tất cả các quý khách hàng.</p>

    </div>
  </div>
</template>

<script>
import Banner from '@/components/home/Banner'
export default {
  components: { Banner },
  nuxtI18n: {
    paths: {
      en: '/about-us',
      kr: '/ulie-daehae',
      vi: '/gioi-thieu'
    }
  }
}
</script>

<style lang="scss" scoped>
.about {

}
</style>


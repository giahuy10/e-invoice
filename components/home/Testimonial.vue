<template>
  <div class="invoiceraList">
    <div class="container">
      <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center wow rotateInDownLeft animated" data-wow-delay=".1s">
              <div class="invoiceraList_innerTop">
                <img src="/testimonial/icons8-user-groups-100.png" alt="">
                  <h4 class="invoiceraListIcon1">{{$t('home.testimonial.heading1')}}</h4>
                  <p>{{$t('home.testimonial.subheading1')}}</p>
              </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center wow rotateInDownLeft animated" data-wow-delay=".1s">
              <div class="invoiceraList_innerTop">
                  <img src="/testimonial/icons8-company-100.png" alt="">
                  <h4 class="invoiceraListIcon2">{{$t('home.testimonial.heading2')}}</h4>
                  <p>{{$t('home.testimonial.subheading2')}}</p>
              </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center wow rotateInDownLeft animated" data-wow-delay=".1s">
              <div class="invoiceraList_innerTop">
                  <img src="/testimonial/icons8-globe-100.png" alt="">
                  <h4 class="invoiceraListIcon3">{{$t('home.testimonial.heading3')}}</h4>
                  <p>{{$t('home.testimonial.subheading3')}}</p>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <div class="invoiceraList_inner">
                  <div class="requestAF_demoAnchr">
                   <a href="https://invoicera.acuityscheduling.com/schedule.php" title="REQUEST A FREE DEMO" rel="nofollow" class="btn btn-request"> {{$t('home.slider.btn')}} </a>
                  </div>
              </div>
          </div>
      </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.invoiceraList {
  background: url('/bg/bannerlist.jpg');
  padding: 80px 0 60px;
  color: #fff;
}
</style>

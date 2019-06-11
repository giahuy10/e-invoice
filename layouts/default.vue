<template>
  <div>
    <header class="fixed-top">
      <div class="container">
        <b-navbar toggleable="lg" type="light"  sticky>
          <b-navbar-brand :to="localePath('index')">
            <img src="/logo.png" alt="">
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item :to="localePath('einvoice')">{{$t('menu.eInvoice')}}</b-nav-item>
              <b-nav-item :to="localePath('pricing')">{{$t('menu.pricing')}}</b-nav-item>
              <b-nav-item :to="localePath('casestudies')">{{$t('menu.caseStudies')}}</b-nav-item>
              <b-nav-item :to="localePath('about')">{{$t('menu.about')}}</b-nav-item>

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template slot="button-content"><em>{{$t('menu.support')}}</em></template>
                <b-dropdown-item href="http://tracuunnt.gdt.gov.vn/tcnnt/mstdn.jsp" target="_blank">{{$t('menu.checkTaxNumber')}}</b-dropdown-item>
                <b-dropdown-item href="#">{{$t('menu.checkRisk')}}</b-dropdown-item>
                <b-dropdown-item :to="localePath('news')">{{$t('menu.news')}}</b-dropdown-item>
                <b-dropdown-item :to="localePath('faq')">{{$t('menu.qnA')}}</b-dropdown-item>
              </b-nav-item-dropdown>

            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown :text="$t('menu.language')" right>
                <b-dropdown-item :to="switchLocalePath('vi')">{{$t('menu.langVi')}}</b-dropdown-item>
                <b-dropdown-item :to="switchLocalePath('en')">{{$t('menu.langEn')}}</b-dropdown-item>
                <b-dropdown-item :to="switchLocalePath('kr')">{{$t('menu.langKr')}}</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" :placeholder="$t('menu.searchPlaceholder')"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">{{$t('menu.searchBtn')}}</b-button>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    <nuxt />
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <b>Lotte data communication Vietnam</b> <br>
            Add: Floor 31, LOTTE Center, 54 Lieu Giai, Ba Dinh District, Hanoi <br>
            Phone: 024 3333 6607 - Email: info@ldcc.vn
          </div>
          <div class="col-12 col-md-6">
            <p class="text-right">
              <a href="">{{$t('footer.privacy')}}</a> |
              <a href="">{{$t('footer.term')}}</a> |
              <a href="">{{$t('footer.data')}}</a> |
              <a href="">{{$t('footer.feedback')}}</a> <br>
              Copyright © 2019 LDCC VN. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
header.fixed-top {
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  .navbar-light .navbar-nav .nav-link {
    color: #fff;
  }
  .navbar-brand {
    img {
      width: 120px;
    }
  }
}
footer {
  padding: 40px 0 20px;
  background: #d0d0d0;
  a {
    color: #676767;
  }
}
</style>


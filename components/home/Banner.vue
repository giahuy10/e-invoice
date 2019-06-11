<template>
  <div class="banner">
    <div class="inner-banner">
      <img :src="img" :alt="title">
      <div class="banner-title">
        <h1>{{title}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img', 'title']
}
</script>
<style lang="scss" scoped>
.banner {
  .inner-banner {
    position: relative;
    .banner-title {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      text-transform: uppercase;
      background: rgba(0, 0, 0, 0.47843137254901963);
      font-weight: bold;
    }
  }
}
</style>

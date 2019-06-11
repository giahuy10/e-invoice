<template>
  <div>
    <div class="wrap">
      <div class="sidebar float-left" :style="`width: ${sideWidth}px`">
        <div class="logo">
          <img v-if="menuIsOpen" src="/logo.png" alt="">
          <img v-else src="/logo-small.png" alt="">
        </div>
        <b-list-group :class="menuIsOpen ? 'menu-on' : 'menu-off'">
          <b-list-group-item variant="secondary" href="#some-link"> <fa icon="users"/> <span>Clients manager</span></b-list-group-item>
          <b-list-group-item variant="secondary" href="#"><fa icon="shopping-bag"/> <span>Orders manager</span></b-list-group-item>
          <b-list-group-item variant="secondary" href="#"><fa icon="comment"/> <span>Request for demo</span></b-list-group-item>
          <b-list-group-item variant="secondary" to="/admin/news"><fa icon="newspaper"/> <span>News</span></b-list-group-item>
          <b-list-group-item variant="secondary" href="#"><fa icon="question"/> <span>QnA</span></b-list-group-item>
        </b-list-group>
      </div>
      <div class="main-content float-right" :style="`width: ${mainWidth}px`">
         <div class="top-bar">
           <div class="menu-button" @click="menuIsOpen = !menuIsOpen">
             <fa icon="align-justify"/>
           </div>
         </div>
        <main>
          <nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.getWidth())
  },
  data () {
    return {
      screenWidth: this.getWidth(),
      menuIsOpen: true
    }
  },
  computed: {
    mainWidth () {
      if (this.menuIsOpen) {
        return this.getWidth() - 300
      } else {
        return this.getWidth()  - 70
      }
    },
    sideWidth () {
      if (this.menuIsOpen) {
        return 300
      } else {
        return 70
      }
    }
  },
  watch: {
    menuIsOpen (newStatus, oldStatus) {
      console.log(newStatus)
    }
  },
  methods: {
    getWidth() {
      if (process.client) {
        return Math.max(
          document.body.scrollWidth,
          document.documentElement.scrollWidth,
          document.body.offsetWidth,
          document.documentElement.offsetWidth,
          document.documentElement.clientWidth
        )
      }
    }
  }
}
</script>


<style lang="scss">
.wrap {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.5s;
    background: #393836;
    height: 100vh;
    width: 300px;
    .logo {
      padding: 10px;
      background: #292929;
      img {
        height: 50px;
        width: auto;
      }
    }
    .menu-off {
      text-align: center;
      a {
        span {
          display: none;
        }
      }
    }
  }
  .main-content {
    transition: all 0.5s;
    .top-bar {
      background: #292929;
      border-left: 1px solid #ccc;
      padding: 20px;
      color: #fff;
      .menu-button {
        font-size: 20px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  main {
    padding: 20px;
  }
}
</style>



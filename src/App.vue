<template>
  <div id="app">
    <div class="container header">
      <div class="row">
<!--        <div class="col-md-7">-->
<!--          <div class="m-1 logo">-->
<!--            <img src="../assets/logo_3nurka.png" alt="logo_3nurka" class="header-logo">-->
<!--          </div>-->
<!--        </div>-->
        <div v-if="displayWithLogin" class="col d-inline-block h4">
          <nav>
            <router-link to="/">Esileht</router-link>
            |
            <router-link to="/pricelist">Hinnakiri</router-link>
            |
            <router-link to="/login">Logi sisse</router-link>
          </nav>

        </div>

        <div v-else class="col d-inline-block h4">
          <nav>

            <router-link to="/">Esileht</router-link>
            |
            <router-link to="/pricelist">Hinnakiri</router-link>
            |
            <button v-on:click="logout" type="button" class="btn btn-success">Logi välja</button>
          </nav>
        </div>
      </div>
    </div>
<!--    <HeaderRow2 :display-with-login="displayWithLogin"/>-->
    <router-view @updateStatusEvent="updateStatus"/>
    <FooterRow/>
  </div>

</template>

<script>
import FooterRow from "@/components/FooterRow";
// import HeaderRow2 from "@/components/HeaderRow2";


export default {
  components: { FooterRow},
  data: function () {
    return {
      displayWithLogin: true,
      userId: sessionStorage.getItem('userId')
    }
  },
  methods: {
    updateStatus: function () {
      this.userId = sessionStorage.getItem('userId')
      this.displayWithLogin = this.userId == null
    },
    logout: function () {
      sessionStorage.clear()
      this.$router.push({
        path: '/'
      })
      this.updateStatus()
    }
  },
  mounted() {
    this.updateStatus()
  }
}
</script>
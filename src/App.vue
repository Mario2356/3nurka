<template>
  <div id="app">
    <HeaderRow :display-with-login="displayWithLogin" :logout="logout"/>
<!--    <HeaderRow2 :display-with-login="displayWithLogin"/>-->
    <router-view @updateStatusEvent="updateStatus"/>
    <FooterRow/>
  </div>

</template>

<script>
import FooterRow from "@/components/FooterRow";
import HeaderRow from "@/components/HeaderRow";


export default {
  components: {HeaderRow, FooterRow},
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
<template>
  <div class="container header">
    <div class="row">
              <div class="col-md-6">
                <div class="m-1 logo">
                  <img src="../assets/logo_3nurka.png" alt="logo_3nurka" class="header-logo">
                </div>
              </div>
      <div v-if="displayWithLogin" class="col d-inline-block h4">
        <nav>
          <router-link to="/">Esileht</router-link>
          |
          <router-link to="/pricelist">Hinnakiri</router-link>
          |
          <router-link to="/login">Logi sisse</router-link>
        </nav>

      </div>

      <div v-else class="col-6 d-inline-block h4">
        <nav>

          <router-link to="/">Esileht</router-link>
          |
          <router-link to="/pricelist">Hinnakiri</router-link>
          |
          <router-link to="/customer/profile">Minu profiil</router-link>
          |
          <router-link to="/order">Telli teenus</router-link>
          |
          <button v-on:click="logout" type="button" class="btn btn-success">Logi välja</button>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderRow',
  props: {
    displayWithLogin: {},
    logout: {}
  }
}
</script>
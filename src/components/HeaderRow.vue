<template>
  <div class="container header">
    <div class="row">
      <div class="col-md-7">
        <div class="m-1 logo">
          <img src="../assets/logo_3nurka.png" alt="logo_3nurka" class="header-logo">
        </div>

      </div>
      <div class="col d-inline-block h4">
        <nav>

          <router-link to="/">Esileht</router-link>
          |
          <router-link to="/pricelist">Hinnakiri</router-link>
          |
          <router-link to="/login">Logi sisse</router-link>

        </nav>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'HeaderRow',

  data: function () {

  }
}


</script>

<template>
  <div class="container header">
    <div class="row">
    <div class="col-md-7">
      <div class="m-1" style="width: 260px;">
        <img src="logo_3nurka.png" alt="logo_3nurka" style="width:60%">
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

}
</script>
<style>

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
.header {

}

</style>
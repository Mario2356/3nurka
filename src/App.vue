<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-2">

          <div class="m-lg-2" style="width: 260px;">
            <img src="logo_3nurka.png" alt="logo_3nurka" style="width:60%">
          </div>

        </div>


        <div class="col d-inline-block">
          <div id="app">
            <nav>
              <router-link to="/">Home</router-link>
              |
              <router-link to="/about">About</router-link>
              |
              <router-link to="/login">Logi sisse</router-link>
              |
              <router-link to="/register">Loo konto</router-link>
            </nav>
          </div>

          <div class="row"></div>

          <router-view/>
        </div>

      </div>
    </div>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

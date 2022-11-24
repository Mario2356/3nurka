<template>
  <div>
    <div class="container upper">
      <div class="row">
        <div class="col-2">
          <img
              src="https://media.4rgos.it/i/Argos/0920-m0014-m007-m050-asym-m008-m022-adultbikeguide-7603802?maxW=768&qlt=75&fmt.jpeg.interlaced=true"
              style="width:60%"
              alt="jalgratas">
        </div>
        <div class="col-6">
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
        </div>
      </div>
      <div class="row">
      </div>
      <div class="row">
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

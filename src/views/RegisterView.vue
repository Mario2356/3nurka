<template>


  <div class="container mt-5">
    <div class="row justify-content-around">
      <div class="col-4">
        <div class="input-group mb-4">
          <span class="input-group-text" id="inputGroup-sizing-default">Eesnimi*</span>
          <input v-model="registerRequest.firstName" type="text" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group mb-4">
          <span class="input-group-text" id="inputGroup-sizing-default">Perekonnanimi*</span>
          <input v-model="registerRequest.lastName" type="text" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group mb-4">
          <span class="input-group-text" id="inputGroup-sizing-default">e-posti aadress*</span>
          <input v-model="registerRequest.email" type="text" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group mb-4">
          <span class="input-group-text" id="inputGroup-sizing-default">Salasõna*</span>
          <input v-model="registerRequest.password" type="password" class="form-control"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group mb-4">
          <span class="input-group-text" id="inputGroup-sizing-default">Korda salasõna*</span>

          <!--          todo:Korda salasõnale tuleb ka muutuja määrata, kontrollida eelmisega klappimist-->

          <input v-model="repeatPassword" type="password" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="row">*kohustuslikud väljad</div>
        <div class="col-5">
          <div class="row input-group mb-3">
            <button v-on:click="addCustomer" type="button" class="btn btn-success">Loo konto</button>
          </div>

        </div>
      </div>
      <div class="col-6">
        <img
            src="../assets/image_1.jpg"
            alt="jalgratas" class="register-image">
      </div>

    </div>
    <div class="row">

    </div>
  </div>

</template>

<script>
export default {
  name: "RegisterView",
  data: function () {
    return {
      registerRequest: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },

      registerResponse: {
        userId: 0,
      },

      errorResponse: {
        message: '',
        errorCode: 0
      },
      repeatPassword: ''
    }
  },
  methods: {
    addCustomer: function () {
      this.$http.post("/register/new", this.registerRequest
      ).then(response => {
        this.registerResponse = response.data
        sessionStorage.setItem('userId', this.registerResponse.userId)
        // push edasi

      }).catch(error => {
        console.log(error)
      })
    },
  }
}
</script>

<style scoped>

</style>
<template>


  <div class="container mt-4">
    <div class="row justify-content-around">
      <div class="col-md-4">
        <div class="input-group ms-3 mt-5 pt-5 mb-4">
          <span class="input-group-text input-width" id="inputGroup-sizing-default">Eesnimi*</span>
          <input v-model="registerRequest.firstName" type="text" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group ms-3 mb-4">
          <span class="input-group-text input-width" id="inputGroup-sizing-default">Perekonnanimi*</span>
          <input v-model="registerRequest.lastName" type="text" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group ms-3 mb-4">
          <span class="input-group-text input-width" id="inputGroup-sizing-default">e-posti aadress*</span>
          <input v-model="registerRequest.email" type="text" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group ms-3 mb-4">
          <span class="input-group-text input-width" id="inputGroup-sizing-default">Salasõna*</span>
          <input v-model="registerRequest.password" type="password" class="form-control"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group ms-3 mb-4">
          <span class="input-group-text" id="inputGroup-sizing-default">Korda salasõna*</span>

          <!--          todo:Korda salasõnale tuleb ka muutuja määrata, kontrollida eelmisega klappimist-->

          <input v-model="repeatPassword" type="password" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="row ms-2">*kohustuslikud väljad</div>
        <div class="col-8 ps-5 ms-5">
          <div class="row input-group mt-4">
            <button v-on:click="addCustomer()" type="button" class="btn btn-success">Loo konto</button>
          </div>
          <div v-if="errorResponse.message.length > 0" class="alert alert-danger mt-3 align-items-center" role="alert">
            {{ errorResponse.message }}
          </div>

        </div>
      </div>

      <div class="col-sm-6 pt-5 pb-5 ms-1">
        <img src="../assets/image_1.jpg" alt="image_1" class="register-image">
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
      this.errorResponse.message = ''
      if (this.registerRequest.firstName.length == 0 || this.registerRequest.lastName.length == 0 ||
          this.registerRequest.email.length == 0 || this.registerRequest.password.length == 0) {
        this.errorResponse.message = 'Täida kõik väljad';
      } else {
        this.$http.post("/register/new", this.registerRequest
        ).then(response => {
          this.registerResponse = response.data
          sessionStorage.setItem('userId', this.registerResponse.userId)
          this.$emit('updateStatusEvent')
          this.$router.push({name: 'orderRoute'})

        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
}

</script>

<style scoped>

</style>
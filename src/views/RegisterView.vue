<template>


  <div class="container mt-5">
    <div class="row justify-content-around">
      <div class="col-4">
        <div class="input-group mb-4">
          <span class="input-group-text" id="inputGroup-sizing-default">Eesnimi*</span>
          <input v-model="registerCustomerInfo.firstName" type="text" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group mb-4">
          <span class="input-group-text" id="inputGroup-sizing-default">Perekonnanimi*</span>
          <input v-model="registerCustomerInfo.lastName" type="text" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group mb-4">
          <span class="input-group-text" id="inputGroup-sizing-default">e-posti aadress*</span>
          <input v-model="registerCustomerInfo.user.email" type="text" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group mb-4">
          <span class="input-group-text" id="inputGroup-sizing-default">Salasõna*</span>
          <input v-model="registerCustomerInfo.user.password" type="password" class="form-control" aria-label="Sizing example input"
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
      <div class="col-8">
        <img
            src="https://media.4rgos.it/i/Argos/0920-m0014-m007-m050-asym-m008-m022-adultbikeguide-7603802?maxW=768&qlt=75&fmt.jpeg.interlaced=true"
            alt="jalgratas">
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
      registerCustomerInfo: {
        firstName: '',
        lastName: '',
        user: [
          {
            roleId: 2,
            email: '',
            password:'',
          }
        ]
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
        this.$http.post("/register", this.registerCustomerInfo
        ).then(response => {
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
      }
    }
}
</script>

<style scoped>

</style>
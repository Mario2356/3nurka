<template>
  <div>

    <div class="container mt-4">
      <div class="row justify-content-around">
        <div class="col-md-4">

          <div class="input-group ms-3 mt-5 pt-5 mb-4">
            <span class="input-group-text input-width" id="inputGroup-sizing-default">e-posti aadress</span>
            <input v-model="email" type="text" class="form-control" aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-default">
          </div>


          <div class="input-group ms-3">
            <span class="input-group-text input-width" id="inputGroup-sizing-default w-75">Parool</span>
            <input v-model="password" type="password" class="form-control" aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-default">
          </div>

          <div class="col-7 ps-5 mt-5">
            <div class="row input-group ms-5 mb-3">
              <button v-on:click="login" type="button" class="btn btn-success">Logi sisse</button>
            </div>

            <div class="row input-group ms-5 mb-3">
              <button v-on:click="goToRegister" type="button" class="btn btn-success">Loo uus konto</button>
            </div>

          </div>


          <div v-if="errorResponse.message.length > 0" class="alert alert-danger mb-5 align-items-center" role="alert">
            {{ errorResponse.message }}

          </div>


        </div>


        <div class="col-sm-6 pt-5 pb-5 ms-1">
          <img src="../assets/image_1.jpg" alt="image_1" class="register-image">
        </div>

      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "LoginView",
  data: function () {
    return {
      email: '',
      password: '',

      loginResponse: {
        userId: 0,
        roleId: 0,
        roleType: ''
      },
      errorResponse: {
        message: '',
        errorCode: 0
      }

    }

  },
  methods: {


    login: function () {

      this.errorResponse.message = ''
      if (this.email.length == 0 || this.password.length == 0) {
        this.errorResponse.message = 'Täida kõik väljad';
      } else {

        this.$http.get("/login", {
              params: {
                email: this.email,
                password: this.password
              }
            }
        ).then(response => {
          this.loginResponse = response.data
          if (this.loginResponse.roleType === 'admin') {
            sessionStorage.setItem('userId', this.loginResponse.userId);
            this.$emit('updateStatusEvent')
            this.$router.push({
              name: 'adminHomeRoute'
            });

          } else {
            sessionStorage.setItem('userId', this.loginResponse.userId);
            this.$emit('updateStatusEvent')
            this.$router.push({
              name: 'orderRoute'
            })
          }
        }).catch(error => {
          this.errorResponse = error.response.data
        })
      }
    },
    goToRegister: function () {
      this.$router.push({name: 'registerRoute'})

    }

  },


}
</script>

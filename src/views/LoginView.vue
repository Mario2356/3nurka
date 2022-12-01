<template>
  <div>

    <div class="container mt-5">
      <div class="row justify-content-start align-items-center">

        <div class="col-4">
          <div class="row input-group mb-4">
            <span class="input-group-text" id="inputGroup-sizing-default">e-posti aadress</span>
            <input v-model="email" type="text" class="form-control" aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-default">
          </div>

          <div class="row input-group align-items-center mb-4">
            <span class="input-group-text" id="inputGroup-sizing-default">Parool</span>
            <input v-model="password" type="text" class="form-control" aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-default">
          </div>


          <div class="col-5">
            <div class="row input-group mb-3">
              <button v-on:click="login" type="button" class="btn btn-success">Logi sisse</button>
            </div>

            <div class="row input-group mb-3">
              <button v-on:click="goToRegister" type="button" class="btn btn-success">Loo uus konto</button>
            </div>

          </div>


          <div v-if="errorResponse.message.length > 0" class="alert alert-danger d-flex align-items-center" role="alert">
            {{ errorResponse.message }}

          </div>


        </div>


        <div class="col-7">
          <div class="thumbnail">
            <img class="img-responsive login-image" src="../assets/image_1.jpg" alt="image_1">
            <div class="caption">
            </div>
          </div>
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
            this.$router.push({
              name: 'adminHomeRoute'
            });

          } else {
            this.$router.push({
              name: 'orderRoute', query: {
                userId: this.loginResponse.userId,
                roleName: this.loginResponse.roleType
              }
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

<template>
  <div>

    <div class="container m-5">
      <h3 class="p-5">TELLIMUSE LISAINFO</h3>
      <div class="row col-md-2mt-5 mb-5">
        <div class="col">
          <button v-on:click="navigateToAdminView" type="button" class="btn btn-outline-dark float-end ">Tagasi</button>
          <h5 class="pt-4 float-start ms-5 ps-5">TELLIMUSE NUMBER: {{}}</h5>
        </div>
      </div>

      <table class=" table table-hover m-5">
        <thead class="m-5">
        <tr>
          <th scope="col">Teenus</th>
          <th scope="col">Ratta mark</th>
          <th scope="col">Ratta mudel/kirjeldus</th>
          <th scope="col">Pakett</th>
          <th scope="col">Probleemi kirjeldus</th>
          <th scope="col">Tehniku kommentaar</th>
          <th scope="col">Hind</th>
        </tr>
        </thead>

        <tbody>
        <tr>
          <th scope="row">tekst</th>
          <td>tekst</td>
          <td>tekst</td>
          <td>tekst</td>
          <td>tekst</td>
          <td>tekst</td>
        </tr>

        </tbody>
      </table>
    </div>


  </div>
</template>

<script>
export default {
  name: "AdminFurtherDetailsView",

  data: function () {
    return {
      adminDetailsOrderRequest:
          {
            orderNumber: '',
            bikeOrders: [{
              bikeOrderId: 0,
              bikeBrandName: '',
              bikeModel: '',
              workTypeName: '',
              packageFieldName: '',
              packageFieldPrice: 0,
              customerComment: '',
              techComment: ''
            }]
          }
    }
  },

  methods: {
    adminDetailOrders: function () {
      this.$http.get("/some/path")
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
    navigateToAdminView: function () {
      this.$router.push({
        name: 'adminHomeRoute'
      });
    },
    
  }


}


</script>


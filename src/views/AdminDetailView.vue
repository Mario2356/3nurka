<template>
  <div>

    <div class="container m-5 justify-content-center">
      <h3 class="p-5">TELLIMUSE LISAINFO</h3>
      <div class="row col-md-2mt-5 mb-5">
        <div class="col">
          <button v-on:click="navigateToAdminView" type="button" class="btn btn-outline-dark float-end ">Tagasi</button>
          <h5 class="pt-4 float-start ms-5 ps-5">TELLIMUSE NUMBER: {{ adminDetailOrderRequest.orderNumber }}</h5>
        </div>
      </div>

      <table class=" table table-success table-striped">
        <thead class="m-5">
        <tr>
          <th scope="col">Teenus</th>
          <th scope="col">Ratta mark</th>
          <th scope="col">Ratta mudel/kirjeldus</th>
          <th scope="col">Pakett</th>
          <th scope="col">Hind</th>
          <th scope="col">Probleemi kirjeldus</th>
          <th scope="col">Tehniku kommentaar</th>

          <th scope="col"></th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="bikeOrder in adminDetailOrderRequest.bikeOrders"
            :key="adminDetailOrderRequest.bikeOrders.bikeOrderId">
          <td>{{ bikeOrder.workTypeName }}</td>
          <td>{{ bikeOrder.bikeBrandName }}</td>
          <td>{{ bikeOrder.bikeModel }}</td>
          <td>{{ bikeOrder.packageFieldName }}</td>
          <td>{{ bikeOrder.packageFieldPrice }}</td>
          <td>{{ bikeOrder.customerComment }}</td>
          <td><input type="text" v-model="bikeOrder.techComment">
            <button v-on:click="updateTechComment(bikeOrder.bikeOrderId, bikeOrder.techComment)" type="button"
                    class="btn btn-outline-dark float-end me-3">Uuenda
            </button>
          </td>

          <td><i v-if="errorResponse.message.length > 0" class="fa-regular fa-2x bg-success bg-opacity-50 fa-thumbs-up"></i></td>
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
      orderId: sessionStorage.getItem('orderId'),
      adminDetailOrderRequest:
          [{
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
          }],
      errorResponse: {
        message: '',
        errorCode: 0

      }
    }
  },

  methods: {
    getBikeOrderInfo: function () {
      // if (this.orderId !== null) {
      this.$http.get("/admin/detail", {
            params: {
              orderId: this.orderId,
            }
          }
      ).then(response => {
        this.adminDetailOrderRequest = response.data
      }).catch(error => {
        console.log(error)
      })
    }
    ,

    updateTechComment: function (bikeOrderId, techComment) {
      this.$http.put("/admin/submit/tech-comment", null, {
            params: {
              bikeOrderId: bikeOrderId,
              techComment: techComment
            }
          }
      ).then(response => {
        this.errorResponse.message = 'Uuendatud';

        //todo mingi success alert

        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }
    ,


    navigateToAdminView: function () {
      this.$router.push({
        name: 'adminHomeRoute'
      });
    }

  }
  ,
  beforeMount() {
    this.getBikeOrderInfo()

  }


}


</script>


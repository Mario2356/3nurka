<template>

  <div>
    <div class="container m-5">
      <h3 class="pt-5">TELLIMUSED</h3>
      <table class="table table-hover table-sm m-5">
            <thead>
              <tr>
                <th class="th-sm" scope="col">Tellimuse number</th>
                <th scope="col">Tellimuse kuupäev</th>
                <th scope="col">Tellimuse staatus</th>
                <th scope="col">Kliendi nimi</th>
                <th scope="col">Lisainfo</th>
              </tr>
              </thead>

              <tbody>
              <tr v-for="bikeOrder in adminOrderRequest" :key="bikeOrder.orderId">
                <th scope="row">{{ bikeOrder.orderNumber }}</th>
                <td>{{ bikeOrder.orderDateFrom }}</td>
                <td>{{ bikeOrder.orderStatusName }}</td>
                <td> {{ bikeOrder.firstName }} {{ bikeOrder.lastName }}</td>
                <td>
                  <button type="button" v-on:click="navigateToAdminDetailRoute(bikeOrder.orderId)"
                          class="btn btn-outline-dark">Lisainfo
                  </button>
                </td>
              </tr>
              </tbody>
            </table>

    </div>

  </div>


</template>

<script>


export default {
  name: "AdminHomeView",

  data: function () {
    return {

      adminOrderRequest: [{
        id: 0,
        orderId: 0,
        orderUserEmail: '',
        orderStatusId: 0,
        orderStatusName: '',
        firstName: '',
        lastName: '',
        orderAddressDistrictName: '',
        orderAddressStreetName: '',
        orderAddressPhone: '',
        orderNumber: 0,
        orderDateFrom: '',
        orderDateTo: '',
        orderPrice: 0,
        bikeBrandName: '',
        bikeModel: '',
        workTypeName: '',
        bikeStatusName: '',
        packageFieldName: '',
        packageFieldPrice: 0,
        dateFrom: '',
        dateTo: '',
        techComment: '',
        customerComment: '',
      }]
    }
  },

  methods: {
    adminAllOrders: function () {
      this.$http.get("/admin/order")
          .then(response => {
            this.adminOrderRequest = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
    navigateToAdminDetailRoute: function (orderId) {
      sessionStorage.setItem('orderId', orderId)
      this.$router.push({
        name: 'adminDetailRoute'
      })
    },


  },
  beforeMount() {
    this.adminAllOrders()

  }

};



</script>


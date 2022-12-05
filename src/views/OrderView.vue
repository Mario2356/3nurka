<template>
  <div class="container">

    <div class="row align-content-around mt-5 align-text-bottom">
      <div class="col-md-9 btn-group-vertical align-content-lg-start col-lg-2 mt-5 d-inline">
        <button type="button" class="btn btn-success mb-3">Minu teenused</button>
        <button type="button" class="btn btn-success mb-3">Minu profiil</button>
        <button v-on:click="logout" type="button" class="btn btn-success">Logi välja</button>
      </div>
      <div class="row col-lg-8 align-items-center background-dark ms-2 mt-5 pt-5">
        <p><h4>TELLIMUSE VORMISTAMINE</h4>
        <p><h6>Vali rippmenüüst ratta mark ja märgi ära ratta mudel või kirjeldus</h6>
      </div>

    </div>


    <div class="row align-items-end justify-content-center">
      <div class="col-3">
        <select v-on:change="clickSelectBrandEvent" v-model="selectedBrandId" class="form-select"
                aria-label="Default select example">
          <option selected disabled value="0">--Ratta mark--</option>
          <option v-for="brand in brands" :key="brand.brandId" :value="brand.brandId">
            {{ brand.brandName }}
          </option>
        </select>
      </div>
      <div class="col-3">
        <label for="Input"></label>
        <input v-model="bikeRequest.bikeModel" placeholder="Ratta mudel/kirjeldus">
      </div>
    </div>


    <div class="m-5">
      <button v-on:click="addBike" class="btn btn-outline-dark">Lisa ratas valikusse</button>
    </div>


    <div class="row justify-content-center m-5">
      <div class="col-lg-5">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th scope="col">Ratas</th>
            <th scope="col">Ratta mudel/kirjeldus</th>
            <th scope="col">Kustuta valikust</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="bike in bikeResponse">
            <th scope="row">{{ bike.brandName }}</th>
            <td>{{ bike.bikeModel }}</td>


            <td><i v-on:click="deleteBikeInfo(bike.bikeId)" class="fa-solid fa-flag fa-trash-can"></i></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row justify-content-center m-5">
      <div class="col-lg-5">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th scope="col">Teenus</th>
            <th scope="col">Ratta mark</th>
            <th scope="col">Ratta mudel</th>
            <th scope="col">Probleemi kirjeldus</th>
            <th scope="col">Hoiustamise lõpukuupäev</th>
            <th scope="col">Valitud pakett</th>
            <th scope="col">Teenuse hind</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="bikeOrder in bikeOrderResponse" :key="bikeOrder.bikeOrderId">
            <td>{{ bikeOrder.bikeModel }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ALERT MESSAGE - HETKEL EI TÖÖTA -->

    <!--    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">-->
    <!--      <div class="modal-dialog">-->
    <!--        <div class="modal-content">-->
    <!--          <div class="modal-header">-->
    <!--            <h1 class="modal-title fs-5" id="exampleModalLabel">Kas soovid selle ratta kustutada?</h1>-->
    <!--            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
    <!--          </div>-->
    <!--          <div class="modal-fullscreen-sm-down">-->
    <!--          </div>-->
    <!--          <div class="modal-footer">-->
    <!--            <button v-on:click="deleteBikeInfo(bike.bikeId)" class="btn btn-success" type="button">Jah</button>-->
    <!--            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Ei</button>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->


    <div class="justify-content-center">
      <button v-on:click="clickToRepairEvent" class=" btn btn-outline-success btn-lg m-5">REMONT</button>
      <button v-on:click="navigateToMaintenance" class="btn btn-outline-primary btn-lg m-5">HOOLDUS</button>
      <button v-on:click="navigateToStorage" class="btn btn-outline-warning btn-lg m-5">HOIUSTAMINE</button>
    </div>

  </div>

</template>

<script>
export default {
  name: 'OrderView',
  components: {},


  data: function () {
    return {
      orderId: sessionStorage.getItem('orderId'),
      selectedBrandId: 0,
      userId: Number(sessionStorage.getItem('userId')),
      workTypeId: sessionStorage.getItem('workTypeId'),
      selectedAddress: 0,
      address: [
        {
          districtId: 0,
          districtName: '',
          streetName: '',
          phone: ''
        }
      ],
      brands: [
        {
          brandId: 0,
          brandName: '',
          brandIsOther: false,
        }
      ],

      bikeRequest: {
        userId: 0,
        bikeModel: '',
        brandId: 0
      },

      bikeResponse: {
        bikeId: 0,
        brandId: 0,
        brandName: '',
        bikeModel: '',
      },

      orderResponse: {
        orderId: 0,
        userId: 0,
        orderStatusId: 0,
        orderStatusName: '',
        addressId: 0,
        addressStreetName: '',
        number: '',
        dateFrom: '',
        dateTo: '',
        price: 0

      }

    }
  },

  methods: {

    showProfileAddress: function () {
      this.selectedAddress = 1;
      this.$http.get("https://stoplight.io/mocks/mario25/myproject/113962141/repair/address", {
            params: {
              address: this.address,
            }
          }
      ).then(response => {
        this.address = response.data
      }).catch(error => {
        console.log(error)
      })
    },

    showCustomAddress: function () {
      this.selectedAddress = 2;
      this.address = '';
    },


    deleteBikeInfo: function (bikeId) {
      this.$http.delete("/order/bike", {
            params: {
              bikeId: bikeId,
            }
          }
      ).then(response => {
        this.getBike()
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    getBrandsSelectBoxInfo: function () {
      this.$http.get("/order/brand")
          .then(response => {
            this.brands = response.data
          })
          .catch(error => {
            console.log(error)
          });
    },

    clickSelectBrandEvent: function () {
      this.$emit('clickSelectBrandEvent', this.selectedBrandId)
    },

    addBike: function () {
      this.bikeRequest.userId = this.userId
      this.bikeRequest.brandId = this.selectedBrandId
      this.$http.post("/order/bike", this.bikeRequest
      ).then(response => {
        //Todo vaja käivitada teenus getAllUserBikes
        this.getBike();
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    getBike: function () {
      this.$http.get("/order/bike", {
        params: {
          userId: this.userId
        }
      }).then(response => {
        this.bikeResponse = response.data
      })
          .catch(error => {
            console.log(error)
          })
    },

    clickToRepairEvent: function () {
      if (this.orderId === null) {

        this.$http.post("/order/start", null, {
              params: {
                userId: this.userId,
              }
            }
        ).then(response => {
          this.orderResponse = response.data
          sessionStorage.setItem('orderId', this.orderResponse.orderId)
          sessionStorage.setItem('workTypeId', '1')

          console.log(response.data)
          this.$router.push({
            name: 'repairRoute'
          })


        }).catch(error => {
          console.log(error)
        })
      }
    },

    navigateToMaintenance: function () {
      this.$router.push({
        name: 'maintenanceRoute'
      });
    },

    navigateToStorage: function () {
      this.$router.push({
        name: 'storageRoute'
      })
    },

    logout: function () {
      sessionStorage.clear()
      this.$router.push({
        path: '/'
      })
    }

  },

  beforeMount() {
    this.getBrandsSelectBoxInfo()
    this.getBike()
  }

}

</script>


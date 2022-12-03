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
        <input v-model="bikeRequest.bikeModel" class="form-control" placeholder="Ratta mudel/kirjeldus">
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

            <td><i v-on:click="deleteBikeInfo(bike.bikeId)"
                   class="fa-solid fa-flag fa-trash-can"></i></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>


    <div class="justify-content-center">
      <button v-on:click="navigateToRepair" class=" btn btn-outline-success btn-lg m-5">REMONT</button>
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
      selectedBrandId: 0,
      userId: Number(sessionStorage.getItem('userId')),
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
      }
    }
  },

  methods: {
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


    // deleteBikeInfo: function (bikeId) {
    //   this.$http.put("/order/bike", null, {
    //         params: {
    //           bikeId: bikeId
    //         }
    //       }
    //   ).then(response => {
    //     this.getBike()
    //     console.log(response.data)
    //   }).catch(error => {
    //     console.log(error)
    //   })
    // },

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

    navigateToRepair: function () {
      this.$router.push({
        name: 'repairRoute'
      });
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


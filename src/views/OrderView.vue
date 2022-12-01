<template>
  <div class="row justify-content-center">

    <div class="row align-items-start ms-3 mt-5">
      <div class="col btn-group-vertical align-content-lg-start col-lg-2 mt-5">
       <button type="button" class="btn btn-success mb-3">Minu teenused</button>
       <button type="button" class="btn btn-success">Minu profiil</button>
      </div>
    </div>

    <div class="col-lg-6 justify-content-center">
      <h5>Vali rippmenüüst ratta mark, märgi ka ratta mudel või kirjeldus</h5>
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
          </tr>
          </thead>
          <tbody>
          <tr v-for="bike in bikeResponse">
            <th scope="row">{{ bike.brandName }}</th>
            <td>{{ bike.bikeModel }}</td>
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
      userId: sessionStorage.getItem('userId'),
      brands: [
        {
          brandId: 0,
          brandName: '',
          brandIsOther: false,
        }
      ],

      bikeRequest: {
        userId: 0,
        brandName: '',
        bikeModel: '',
        brandId: 0
      },

      bikeResponse: {
        bikeId: 0,
        brandId: 0,
        brandName: '',
        bikeModel: '',
      },

      bikeInfo: {

      }

    }
  },

  methods: {

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
      this.$http.post("/order/brand", this.bikeRequest


      ).then(response => {
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
    }
  },

  beforeMount() {
    this.getBrandsSelectBoxInfo()
  }
}

</script>


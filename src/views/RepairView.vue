<template>
  <div class="container">

    <div class="row align-items-start ps-5 ms-5 mt-5">
      <div class="col btn-group-vertical align-content-lg-start col-lg-2 mt-5">
        <button type="button" class="btn btn-success mb-3">Minu teenused</button>
        <button type="button" class="btn btn-success mb-3">Minu profiil</button>
        <button v-on:click="logout" type="button" class="btn btn-success">Logi välja</button>
      </div>
    </div>

    <div class="row m-4">
      <h5>Telli jalgrattale remont</h5>
    </div>


    <div class="row align-items-end justify-content-center m-3">
      <div class="col-3">
        <select v-model="bikeOrderRequest.bikeId" class="form-select"
                aria-label="Default select example">
          <option selected disabled value="0">Minu ratas*</option>
          <option v-for="bike in bikes" :key="bike.bikeId" :value="bike.bikeId">
            {{ bike.brandName + "-" + bike.bikeModel}}
          </option>
        </select>
      </div>
      <div class="col-3">
        <label for="exampleFormControlInput1"></label>
        <input type="date" v-model="bikeOrderRequest.dateFrom" class="form-control" placeholder="Soovitud kohaletulemise kuupäev*">
      </div>
    </div>


    <div class="row m-3 justify-content-center">

      <div class="col-4">

        <div class="row m-3">
          <label for="floatingTextArea">Kirjelda remondi vajaduse põhjust</label>
          <textarea v-model="bikeOrderRequest.customerComment" class="form-control" placeholder="Probleemi kirjeldus" id="floatingTextArea"></textarea>
        </div>


      </div>
    </div>

    <div class="row justify-content-center">

      <div class="col-2">
        <button v-on:click="addBikeOrder" class="btn btn-outline-primary btn-lg m-4">Salvesta</button>
        <button class="btn btn-outline-primary btn-lg m-1">Muuda</button>
      </div>

      <div class="col-2">
        <button v-on:click="clickNavigateToOrderView" class=" btn btn-outline-success btn-lg m-4">Tagasi tellimislehele</button>
      </div>

    </div>
  </div>


</template>

<script>

export default {
  name: "RepairView",
  data: function () {
    return {
      userId: Number(sessionStorage.getItem('userId')),
      selectedBikeId: 0,
      bikes: [
        {
          bikeId: 0,
          brandId: 0,
          brandName: '',
          bikeModel: ''
        }
      ],
      bikeOrderRequest: {
        orderId: sessionStorage.getItem('orderId'),
        bikeId: '0',
        workTypeId: sessionStorage.getItem('workTypeId'),
        packageFieldId: 0,
        dateFrom: '',
        dateTo: '',
        customerComment: '',
      },
    }
  },
  methods: {

    addBikeOrder: function () {
      this.$http.post("/repair/bikeorder", this.bikeOrderRequest
      ).then(response => {
        this.bikeOrderRequest = response.data
      }).catch(error => {
        console.log(error)
      })
    },

    clickNavigateToOrderView: function () {
      this.$router.push({name: 'orderRoute'})
    },

    getBikesByUserId: function () {
      this.$http.get("/order/bike", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.bikes = response.data
      }).catch(error => {
        console.log(error)
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
    this.getBikesByUserId()
  }
}
</script>


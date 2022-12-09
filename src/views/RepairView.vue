<template>
  <div class="container">

    <div class="row m-4">
      <h5>Telli jalgrattale remont</h5>
    </div>


    <SelectBikeAndTime :bike-order-request="bikeOrderRequest" :bikes="bikes"/>


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
        <button v-on:click="addRepairBikeOrder" class="btn btn-outline-primary btn-lg m-4">Salvesta</button>
      </div>

      <div class="col-2 mb-5 pb-5">
        <button v-on:click="clickNavigateToOrderView" class=" btn btn-outline-success btn-lg mb-5  m-4">Tagasi tellimislehele</button>
      </div>

    </div>
  </div>


</template>

<script>

import SelectBikeAndTime from "@/components/SelectBikeAndTime";

export default {
  name: "RepairView",
  components: {SelectBikeAndTime},
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
        techComment:''
      },
    }
  },
  methods: {

    addRepairBikeOrder: function () {
      this.$http.post("/repair/bikeorder", this.bikeOrderRequest
      ).then(response => {
        this.bikeOrderRequest = response.data
        this.$router.push({name: 'orderRoute'})
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


<template>
  <div class="container">

    <div class="row m-4">
      <h5>Telli jalgrattale hooldus</h5>
    </div>

    <SelectBikeAndTime :bike-order-request="bikeOrderRequest" :bikes="bikes"/>

    <div class="row justify-content-center">
      <div class="col-3">
        <div v-for="packageField in packageFields" class="form-check">
          <input  v-on:change="setPackageFieldId(packageField.id)" v-model="isSelected" class="form-check-input" type="radio"
                  name="flexRadioDefault" id="flexRadioDefault1">
          <label class="form-check-label" for="flexRadioDefault1">
            {{ packageField.name + " hind: " + packageField.price + " eurot "}}
          </label>
        </div>
      </div>
    </div>


    <div class="row justify-content-center">

      <div class="col-2">
        <button v-on:click="addStorageBikeOrder" class="btn btn-outline-primary btn-lg m-4">Salvesta</button>
      </div>

      <div class="col-2 mb-5 pb-5">
        <button v-on:click="clickNavigateToOrderView" class=" btn btn-outline-success btn-lg m-4">Tagasi
          tellimislehele
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import SelectBikeAndTime from "@/components/SelectBikeAndTime";

export default {
  name: "MaintenanceView",
  components: {SelectBikeAndTime},
  data: function () {
    return {
      workTypeId: sessionStorage.getItem('workTypeId'),
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
        techComment: ''
      },
      isSelected: false,
      packageFields: {
        id:0,
        name:'',
        price: 0,

      }
    }
  },
  methods: {

    setPackageFieldId: function (packageFieldId) {
      this.bikeOrderRequest.packageFieldId = packageFieldId
      console.log("olen siin " + packageFieldId)
    } ,

    getPackageFields: function () {
      this.$http.get("/storage/packages", {
            params: {
              workTypeId: this.workTypeId,
            }
          }
      ).then(response => {
        this.packageFields = response.data
      }).catch(error => {
        console.log(error)
      })
    },

    addStorageBikeOrder: function () {
      this.$http.post("/storage/bikeorder", this.bikeOrderRequest
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
    }
  },
  beforeMount() {
    this.getBikesByUserId()
    this.getPackageFields()
  }
}
</script>


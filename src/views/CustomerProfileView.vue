<template>
  <div>
    <div class="container">
      <div class="row align-content-around mt-5 align-text-bottom">
        <div class="col-md-4 btn-group-vertical align-content-lg-start col-lg-2 mt-5 d-inline">
          <button type="button" v-on:click="clickNavigateToOrderView" class="btn btn-success">Tagasi teenuste juurde
          </button>
        </div>
      </div>
    </div>

    <div class="container row me-5">
      <form class="form-horizontal text-end me-5">
        <div class="form-group align-content-end">
          <label class="control-label d-sm-inline-block me-3 mb-4" for="telefon">Telefon:</label>
          <div class="col-sm-6 d-inline-block">
            <input v-model="locationRequest.phone" class="form-control" id="email" placeholder="Telefon" name="email">
          </div>
        </div>

        <div class="form-group">
          <label class="control-label d-sm-inline-block me-3" for="pwd">Tänava nimi ja maja/korteri number:</label>
          <div class="col-sm-6 d-inline-block">
            <input v-model="locationRequest.streetName" class="form-control"
                   placeholder="Tänava nimi ja maja/korteri number"
                   name="pwd">
          </div>
        </div>

        <div class="col-sm-6 d-inline-block ">
          <select v-on:change="clickSelectedDistrictEvent" v-model="selectedDistrictId" class="form-select"
                  aria-label="Default select example">
            <option selected disabled value="0">Tallinna linnaosa*</option>
            <option v-for="district in districts" :key="district.districtId" :value="district.districtId">
              {{ district.districtName }}
            </option>
          </select>
        </div>

        <div class="form-group mt-5 pt-3">
          <div class="col-sm-offset-8 col-sm-10">
            <button v-on:click="submitProfileAddress" type="button" class="btn btn-outline-success">Kinnita muudetud
              andmed
            </button>
          </div>
        </div>
      </form>
    </div>


  </div>


</template>

<script>
export default {
  name: "CustomerProfileView",

  data: function () {
    return {
      userId: Number(sessionStorage.getItem('userId')),
      selectedDistrictId: 0,
      locationRequest: {
        useDefaultAddress: true,
        userId: 0,
        districtId: 0,
        streetName: '',
        phone: '',
        districtName: '',
      },
      districts: {
        districtId: 0,
        districtName: '',
      },
    }
  },
  methods: {

    submitProfileAddress: function () {
      this.locationRequest.districtId = this.selectedDistrictId
      this.locationRequest.userId = this.userId
      this.$http.post("/profile/address", this.locationRequest
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    getDistrictSelectBoxInfo: function () {
      this.$http.get("/order/districts")
          .then(response => {
            this.districts = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },

    clickNavigateToOrderView: function () {
      this.$router.push({name: 'orderRoute'})
    },
    clickSelectedDistrictEvent: function () {
      this.$emit('clickSelectedDistrictEvent', this.selectedDistrictId)
    },
  },
  beforeMount() {
    this.getDistrictSelectBoxInfo()
  }

}


</script>


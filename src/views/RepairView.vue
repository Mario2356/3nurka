<template>
  <div class="container">

    <div class="row align-items-start ps-5 mt-5">
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
        <input  v-model="bikeOrderRequest.dateFrom" class="form-control" placeholder="Soovitud kohaletulemise kuupäev*">
      </div>
    </div>


    <div class="row m-3 justify-content-center">

      <div class="col-4">

        <div class="row m-3">
          <label for="floatingTextArea">Kirjelda remondi vajaduse põhjust</label>
          <textarea v-model="bikeOrderRequest.customerComment" class="form-control" placeholder="Probleemi kirjeldus" id="floatingTextArea"></textarea>
        </div>


        <div class="row m-3 mt-5">
          <div class="form-check">
            <input v-on:click="showProfileAddress" class="form-check-input" type="radio"
                   name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              Kasuta profiiliaadressi
            </label>
          </div>
        </div>


        <div class="row m-3">
          <div class="form-check">
            <input v-on:click="showCustomAddress" class="form-check-input" type="radio"
                   name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              Kasuta teist aadressi
            </label>
          </div>
        </div>

        <div v-if="selectedAddress == 1">

          <div class="row">
            <label for="exampleFormControlInput1"></label>
            <input selected disabled value v-model="address.streetName" class="form-control"
                   placeholder="Tänava nimi ja maja/maja ja korteri number*">
          </div>

          <div class="row">
            <label for="exampleFormControlInput1"></label>
            <input selected disabled value v-model="address.districtName" class="form-control"
                   placeholder="Linnaosa nimi">
          </div>

          <div class="row">
            <label for="exampleFormControlInput1"></label>
            <input selected disabled value v-model="address.phone" class="form-control" placeholder="Telefoninumber*">
          </div>

        </div>

        <div v-if="selectedAddress == 2">

          <div class="row">
            <label for="exampleFormControlInput1"></label>
            <input class="form-control" placeholder="Tänava nimi ja maja/maja ja korteri number*">
          </div>

          <div class="row">
            <select class="form-select" aria-label="Default select example">
              <option selected>Tallinna linnaosa*</option>
              <option value="Lasnamäe">
                Linnaosa nimi
              </option>
            </select>
          </div>

          <div class="row">
            <label for="exampleFormControlInput1"></label>
            <input class="form-control" placeholder="Telefoninumber*">
          </div>

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
import {hide} from "@popperjs/core";

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
        bikeId: '',
        workTypeId: sessionStorage.getItem('workTypeId'),
        // todo: data tüüp?
        bikeStatusId: 0,
        packageFieldId: 0,
        dateFrom: '',
        dateTo: '',
        customerComment: '',
      },

      selectedAddress: 0,
      address: [
        {
          districtId: 0,
          districtName: '',
          streetName: '',
          phone: ''
        }
      ]
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


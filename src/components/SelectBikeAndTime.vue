<template>
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
      <input type="date" v-model="bikeOrderRequest.dateFrom" class="form-control"
             placeholder="Soovitud kohaletulemise kuupäev*">
    </div>
  </div>
</template>
<script>
export default {
  name: 'SelectBikeAndTime',
  props: {
    bikeOrderRequest: {},
    bikes: {}
  }
}
</script>
<template>
  <div>

    <div class="row m-5">
      <h5>Vali rippmenüüst ratta mark, kirjuta ratta mudel või kirjeldus ning seejärel vali teenus</h5>
    </div>

    <div class="row align-items-end justify-content-center">
      <div class="col-3">
        <select v-on:change="clickSelectBrandEvent" v-model="selectedBrandId" class="form-select"
                aria-label="Default select example">
          <option selected disabled value="0">--Ratta mark--</option>
          <option v-for="brand in brands" :key="brand.brandNameId" :value="brand.brandNameId">
            {{ brand.brandName }}
          </option>
        </select>
      </div>
      <div class="col-3">
        <label for="exampleFormControlInput1"></label>
        <input class="form-control" placeholder="Ratta mudel/kirjeldus">
      </div>
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
          <tr>
            <th scope="row"> Trek</th>
            <td>KHT234</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>


    <div class="justify-content-center">
      <button @click="disabled " type="button" class="btn btn-success btn-lg m-5" :disabled="clickable">REMONT</button>
      <button type="button" class="btn btn-primary btn-lg m-5">HOOLDUS</button>
      <button type="button" class="btn btn-warning btn-lg m-5">HOIUSTAMINE</button>
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
      brands: [
        {
          brandNameId: 0,
          brandName: '',
          brandIsOther: false,
        }
      ]
    }
  },

  methods: {
    clickable() {

    },


    getBrandsSelectBoxInfo: function () {
      this.$http.get("https://stoplight.io/mocks/toots/myproject/112994102/order/brand")
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


  },
  beforeMount() {
    this.getBrandsSelectBoxInfo()
  }
}

</script>


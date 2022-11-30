<template>
  <div>

    <div class="row m-5">
      <h3>Vali teenus</h3>
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
  </div>




</template>

<script>
export default {
  name: 'OrderView',

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
    }

  },
  beforeMount() {
    this.getBrandsSelectBoxInfo()
  }
}

</script>


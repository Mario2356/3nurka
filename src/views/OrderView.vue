<template>
  <div>

    <div class="col-3 mx-auto m-5">
      <h3>Vali teenus</h3>

      <div class="row col-lg-7 m-5">
        <select v-on:change="clickSelectBrandEvent" v-model="selectedBrandId" class="form-select"
                aria-label="Default select example">
          <option selected disabled value="0">--Ratta mark--</option>
          <option v-for="brand in brands" :key="brand.brandNameId" :value="brand.brandNameId">
            {{ brand.brandName }}
          </option>
        </select>
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
    }

  },
  beforeMount() {
    this.getBrandsSelectBoxInfo()
  }
}

</script>


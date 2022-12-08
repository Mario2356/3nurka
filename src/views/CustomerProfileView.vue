<template>
  <div>
    <div class="container">
      <div class="row align-content-around mt-5 align-text-bottom">
        <div class="col-md-4 btn-group-vertical align-content-lg-start col-lg-2 mt-5 d-inline">
          <button type="button" v-on:click="clickNavigateToOrderView" class="btn btn-success">Tagasi teenuste juurde</button>
        </div>
      </div>
    </div>

    <div class="container row me-5">
      <form class="form-horizontal text-end me-5">
        <div class="form-group align-content-end">
          <label class="control-label d-sm-inline-block me-3 mb-4" for="telefon">Telefon:</label>
          <div class="col-sm-6 d-inline-block">
            <input class="form-control" id="email" placeholder="Telefon" name="email">
          </div>
        </div>

        <div class="form-group">
          <label class="control-label d-sm-inline-block me-3" for="pwd">Tänava nimi ja maja/korteri number:</label>
          <div class="col-sm-6 d-inline-block">
            <input type="password" class="form-control" id="pwd" placeholder="Tänava nimi ja maja/korteri number"
                   name="pwd">
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-3 col-sm-9 mt-3 d-sm-inline-block">
            <div class="form-group"> <!-- nested form-group acting like row -->
              <label class="control-label d-sm-inline-block me-3" for="pwd">Linnaosa:</label>
              <div class="col-sm-4 me-5 d-sm-inline-block">
                <input type="text" class="form-control" placeholder="Linnaosa">
              </div><!-- /col-sm-4 -->
              <div class="col-sm-2 d-sm-inline-block ">
                <div class="row me-1">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Tallinna linnaosa</option>
                    <option value="Lasnamäe">
                      Linnaosa nimi
                    </option>
                  </select>
                </div>
              </div><!-- /col-sm-2 -->
            </div> <!-- /nested form-group acting like row -->
          </div><!-- /col-sm-offset-3 col-sm-9 -->
        </div><!-- /form-group -->

        <div class="form-group mt-5 pt-3">
          <div class="col-sm-offset-8 col-sm-10">
            <button type="button" class="btn btn-outline-success">Kinnita muudetud andmed</button>
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
      selectedAddress: 0,
      address: [
        {
          addressId: 0,
          districtId: 0,
          districtName: '',
          streetName: '',
          phone: '',
        }
      ],
    }
  },
  methods: {

    showProfileAddress: function () {
      this.selectedAddress = 1;
      this.$http.get("/order/profile", {
            params: {
              userId: this.userId,
            }
          }
      ).then(response => {
        this.address = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    clickNavigateToOrderView: function () {
      this.$router.push({name: 'orderRoute'})
    }
  }

}


</script>


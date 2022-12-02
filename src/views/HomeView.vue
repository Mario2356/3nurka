<template>

  <div class="container p-4 pb-5">
    <div class="row justify-content-center">
      <div class="col-11">

        <div class="card overflow-hidden border-0 rounded-0 text-start mb-5">
          <img src="../assets/header_image.jpg" alt="homepage_header">

          <div class="card-img-overlay d-flex card-style">
            <div class="mt-auto text-left bg-dark bg-opacity-25">
              <h4 class="display-4">JALGRATASTE </h4>
              <h4 class="display-4">REMONT,</h4>
              <h4 class="display-4">HOOLDUS JA</h4>
              <h4 class="display-4">HOIUSTAMINE</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center m-3">
      <div class="col-9">
        <u><h3>MEIE TEENUSED</h3></u>
      </div>
    </div>



    <div class="row row-cols-1 row-cols-md-3 m-b card-deck">
      <div class="col justify-content-center">
        <div class="card h-100 ">
          <img src="../assets/image_2.jpg" class="card-img-top" alt="image_2">
          <div class="card-body">
            <h4 class="card-title pt-5 mb-4">REMONT</h4>
            <p class="card-text">Saad enda kaherattalise sõbra kiirelt korda, ilma ratast pikalt hoiule andmata.
              Meie mehaanik tuleb Tallinna piires millal ja kuhu soovid.</p>
            <p>Remonditud saavad ükskõik, mis tüüpi jalgrattad! Olgu selleks
              siis laste, linna, maastiku, võistluste, mäestlaskumis, elektri, tõukeratas. </p>
          </div>
          <div class="p-3">
            <a v-on:click="clickNavigateToNextPage" class="btn col-lg-6 btn-success">Telli remont</a>
          </div>
        </div>

      </div>
      <div class="col">
        <div class="card h-100">
          <img src="../assets/image_4.jpg" class="card-img-top" alt="image_4">
          <div class="card-body">
            <h4 class="card-title pt-5 mb-4">HOOLDUS</h4>
            <p class="card-text">Jalgratast on mõistlik kontrollida ja hooldada enne sõiduhooaja algust ning sõiduhooaja lõpus.
              Enne ratta talvepuhkusele saatmist tuleks ratas korralikult puhastada.</p>
            <p>Ratta kasutuselevõtt on palju kergem kevadel, kui sügisene hooldus on tehtud õigel ajal. Ratast hooldades
              pikeneb selle eluiga vähemalt 5 korda!</p>
          </div>
          <div class="p-3">
            <a v-on:click="clickNavigateToNextPage" class="btn col-lg-6 btn-success">Telli hooldus</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="../assets/image_3.jpg" class="card-img-top" alt="image_3">
          <div class="card-body">
            <h4 class="card-title pt-5 mb-4 ">HOIUSTAMINE</h4>
            <p class="card-text"> Kuhu panna pere rattad külmaperioodiks hoiule?</p>
            <p>Saada jalgrattad ja kogu varustus talveperioodiks
              turvalisse lattu.</p><p> Tasuta transport lattu ja tagasi 1 kord aastas Tallinnas.</p>
          </div>
          <div class="p-3">
            <a v-on:click="clickNavigateToNextPage" class="btn col-lg-6 btn-success">Telli hoiustamine</a>
          </div>
        </div>

      </div>

    </div>


  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data: function () {
    return {
      userId: sessionStorage.getItem('userId')
    }

  },
  methods: {
    clickNavigateToNextPage: function () {
      if (this.userId == null) {
        this.$router.push({name:'loginRoute'})
      } else {
        this.$router.push({name:'orderRoute'})
      }

    }
  }
}
</script>

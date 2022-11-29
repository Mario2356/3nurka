<template>

  <div class="container p-2 pb-5">
    <div class="row justify-content-center">
      <div class="col-11">

        <div class="card overflow-hidden border-0 rounded-0 text-start">
          <img src="/header_image.jpg" alt="homepage_header">

          <div class="card-img-overlay d-flex" style="color: white">
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

    <div class="row justify-content-center m-5">
      <div class="col-9">
        <u><h3>Pakume järgnevaid teenuseid</h3></u>
      </div>
    </div>



    <div class="row row-cols-1 row-cols-md-3 m-5 card-deck">
      <div class="col justify-content-center">
        <div class="card h-100">
          <img src="/image_1.jpg" class="card-img-top" alt="image_1">
          <div class="card-body">
            <h4 class="card-title pt-5">REMONT</h4>
            <p class="card-text">Saad enda kaherattalise sõbra kiirelt korda, ilma ratast pikalt hoiule andmata.
              Meie mehaanik tuleb Tallinnas millal ja kuhu soovid. Remonditud saavad ükskõik, mis tüüpi jalgrattad! Olgu selleks
              siis laste, linna, maastiku, võistluste, mäestlaskumis, elektri, tõukeratas. </p>
          </div>
        </div>
        <div class="p-3">
        <a href="#" class="btn btn-success">Telli remont</a>
          </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="/image_1.jpg" class="card-img-top" alt="image_1">
          <div class="card-body">
            <h4 class="card-title pt-5">HOOLDUS</h4>
            <p class="card-text">Jalgratast on mõistlik kontrollida ja hooldada enne sõiduhooaja algust ning sõiduhooaja lõpus.
              Enne ratta talvepuhkusele saatmist tuleks ratas korralikult puhastada, sest rattale kinnitunud tolm ja pori
              kivistuvad pika seismise ajal.
              Ratta kasutuselevõtt on palju kergem kevadel, kui sügisene hooldus on tehtud õigel ajal. Ratast hooldades
              pikeneb selle eluiga vähemalt 5 korda!</p>
          </div>
        </div>
        <div class="p-3">
          <a href="#" class="btn btn-success text color: ">Telli hooldus</a>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="/image_1.jpg" class="card-img-top" alt="image_1">
          <div class="card-body">
            <h4 class="card-title pt-5">HOIUSTAMINE</h4>
            <p class="card-text"> Hoiusta enda rattaid ja varustust turvalises laos.
              Tasuta transport lattu ja tagasi 1 kord aastas Tallinnas.</p>
          </div>
        </div>
        <div class="p-3">
          <a href="#" class="btn btn-success">Telli hoiustamine</a>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-11">

        <div class="card overflow-hidden border-0 rounded-0 text-start">
          <img src="/header_image.jpg" alt="homepage_header">

          <div class="card-img-overlay d-flex" style="color: white">
            <div class="mt-auto text-left bg-dark bg-opacity-25">
              <h3 class="display-3">JALGRATASTE </h3>
              <h3 class="display-3">REMONT,</h3>
              <h3 class="display-3">HOOLDUS JA</h3>
              <h3 class="display-3">HOIUSTAMINE</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center m-5">
      <div class="col-11">
        <h3 class="display-3">Pakume järgnevaid teenuseid</h3>
      </div>
    </div>



    <div class="row row-cols-1 row-cols-md-3 m-5">
      <div class="col justify-content-center">
        <div class="card h-100">
          <img src="/image_1.jpg" class="card-img-top" alt="image_1">
          <div class="card-body">
            <h5 class="card-title">REMONT</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"></small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="/image_1.jpg" class="card-img-top" alt="image_1">
          <div class="card-body">
            <h5 class="card-title">HOOLDUS</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"></small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="/image_1.jpg" class="card-img-top" alt="image_1">
          <div class="card-body">
            <h5 class="card-title">HOIUSTAMINE</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"></small>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

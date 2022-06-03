<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CANCUN MAPAS </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Pricing</a>
            <a class="nav-link disabled">Disabled</a>
          </div>
        </div>
      </div>
    </nav>

    <div class="container">
      <h1>Encuentra el lugar que necesitas</h1>

      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Que estas buscando ?"
        />
        <button class="btn btn-outline-secondary" type="button">Buscar</button>
      </div>
    </div>

  <br>
    <div class="container">
      <div class="row">
        <div class="col-4" >
          <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span class="badge bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span class="badge bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span class="badge bg-primary rounded-pill">14</span>
            </li>
          </ol>
        </div>
        <div class="col-8">
          <div>
            <GMapMap
              :center="center"
              :zoom="12"
              map-type-id="terrain"
              style="width: 100%; height: 500px; border-radius: 10px"
            >
              <!-- <GMapPolygon       :paths="paths"    /> -->

              <GMapPolyline :path="path" :editable="false" ref="polyline" />

              <!-- <GMapCircle
                :key="city.id"
                v-for="city in repetidores"
                :radius="30000"
                :center="{ lat: city.position.lat, lng: city.position.lng }"
              /> -->

              <GMapCluster>
                <GMapMarker
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  :clickable="true"
                  :draggable="true"
                  @click="center = m.position"
                />
              </GMapCluster>
            </GMapMap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      places:[
        {
          nombre:"Dona piedad",
          tipo:"Puesto de comida",
          coor: "21.157734, -86.820298",
          img: "src/img/1.png"
        }
      ],
      markers: [
        {
          position: {
            lat: 21.1581518,
            lng: -86.8211679
          }
        } // Along list of clusters
      ],
      center: { lat: 21.1589645, lng: -86.8216224 },
      path: [
        { lat: 21.158883, lng: -86.819353 },
        { lat: 21.157906, lng: -86.819457 },
        { lat: 21.157906, lng: -86.82039 }
      ],
      repetidores: [
        {
          id: "ZOna Operacion",
          radio: 30000,
          position: {
            lat: 21.173581,
            lng: -86.847976
          }
        },
        {
          id: "Valladolid Nuevo",
          radio: 30000,
          position: {
            lat: 20.940196,
            lng: -87.326932
          }
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

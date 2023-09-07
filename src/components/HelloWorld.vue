<template>
  <div id="mapid">
    <l-map ref="map" :zoom="zoom" :center="coordinates" @click="addMarker">
      <l-tile-layer
        :url="url"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker v-for="marker, index in markers" :lat-lng="marker" @click="removeMarker(index)" :key="index"></l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      zoom: 5,
      coordinates : [48.858560644769824, 2.294481307987543],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      markers: []
    };
  },
  methods: {
    addMarker(event) {
      this.markers.push(event.latlng);
    },
    removeMarker(index) {
      this.markers.splice(index, 1);
    },
  }
};
</script>

<style>
#mapid {
  height:100%;
  width:100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

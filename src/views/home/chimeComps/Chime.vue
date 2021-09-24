<template>
  <div class="Chime">
    <div
      v-for="index in 6"
      @click="playing(index)"
      :style="{ width: setWidth(index) + '%' , height: setWidth(index) + '%'}"
    >
      <audio :src="['~assets/audio/' + index + '.mp3']" :id="['event' + index]"></audio>
      <img src="~assets/img/home/chime.png" />
    </div>

  </div>
</template>

<script>

export default {
  name: "Chime",
  methods: {
    playing(index) {
      const music = document.getElementById("event"+index);
      music.play();
    }
  },
  computed: {
    setWidth() {},
    setHeight() {}
  }
};
</script>

<style>
.Chime {
  width: 100%;
}
</style>

<template>
  <div class="Group">
    <button
      :class="{ white: whites.indexOf(n) > -1, black: blacks.indexOf(n) > -1 }"
      v-for="n in 12"
      :style="{ left: calcLeft(n) + '%' }"
      data-note="{start+n}"
      @click="play(start + n)"
    ></button>
  </div>
</template>

<script>
import { notes } from "./notes.js";
const prefix = "data:audio/mpeg;base64,";
const base = 3;
const keys = 12;
export default {
  name: "Group",
  props: {
    group: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      blacks: [1, 3, 6, 8, 10],
      whites: [0, 2, 4, 5, 7, 9, 11]
    };
  },
  computed: {
    start() {
      return this.group * keys;
    }
  },
  methods: {
    play(index) {
      var audio = new Audio(prefix + notes[index + base]);
      console.log(index);
      audio.play();
    },
    calcLeft(index) {
      var i = this.blacks.indexOf(index);

      if (i < 2) {
        return 8.568 + i * 14.28;
      }
      return 8.568 + (i+1) * 14.28;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.Group {
  font-size: 0;
  position: relative;
  display: flex;
  flex-grow: 1;
}
.Group button {
  width: 4%;
  flex: 1;
  height: 28rem;
  display: inline-block;
  border: 1px solid #ccc;
  outline: 0;
  padding: 0;
  box-sizing: border-box;
  background: #fff;
}
/* .white:active,
.white.active {
  background: #ececec;
} */
/* .Group .white {
  background: #fff;
} */
.Group .black {
  z-index:999;
  width: 11.42%;
  background: #000;
  border-color: #000;
  height: 50%;
  position: absolute;
}
</style>

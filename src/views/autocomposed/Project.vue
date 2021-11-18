<template>
  <div class="Project">
    <div class="music-block">
      <div class="music-block1">
        <div class="music-title">20211028_199229</div>
        <div class="music-date">2021/10/28</div>
      </div>
      <div class="music-block2">
        <div class="music-time">00:00:24</div>
        <div class="music-img">
          <img :src="imgPlay" @click="play($event)" />
        </div>
      </div>
    </div>

    <div class="music-block">
      <div class="music-block1">
        <div class="music-title">20211028_199230</div>
        <div class="music-date">2021/10/28</div>
      </div>
      <div class="music-block2">
        <div class="music-time">00:00:12</div>
        <div class="music-img">
          <img :src="imgPlay" @click="play($event)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgPlay from "@/assets/img/autocomposed/play.png";
import imgStop from "@/assets/img/autocomposed/stop.png";
export default {
  name: "project",
  data() {
    return {
      imgPlay,
      imgStop
    };
  },
  methods: {
    play(event) {
      var obj = event.srcElement;
      if (obj.src === imgPlay) {
        obj.src = imgStop;
      } else {
        obj.src = imgPlay;
      }
    }
  }
};
</script>

<style>
.Project {
  height: calc(100vh - 80px);
}
.Project .music-block {
  background-color: white;
  border-radius: 10px;
  margin: 15px 10px 0 10px;
  display: flex;
  justify-content: space-between;
}
.Project .music-block .music-title {
  font-size: large;
  color: black;
  padding-top: 8px;
  padding-left: 15px;
}
.Project .music-block .music-date {
  padding-left: 15px;
  padding-bottom: 8px;
}
.Project .music-block .music-block2 {
  display: flex;
}
.Project .music-block .music-time {
  padding-left: 84px;
  padding-top: 20px;
}
.Project .music-block .music-img {
  padding-left: 4px;
  padding-top: 16.5px;
  padding-right: 15px;
}
.Project .music-block img {
  width: 28px;
  height: 28px;
}
</style>

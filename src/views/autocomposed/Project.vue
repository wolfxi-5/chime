<template>
  <div class="Project">
    <van-swipe-cell>
      <van-cell center title="20211028_199229" label="00:00:24">
        <img :src="imgPlay" @click="play($event)" />
      </van-cell>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>

    <van-swipe-cell>
      <van-cell center title="20211028_199230" label="00:00:12">
        <img :src="imgPlay" @click="play($event)" />
      </van-cell>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>

    <van-swipe-cell>
      <van-cell center title="20211028_199231" label="00:00:17">
        <img :src="imgPlay" @click="play($event)" />
      </van-cell>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
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
  width: 100%;
  height: calc(100vh - 80px);
}

.Project .delete-button {
  height: 100%;
}
.Project img {
  width: 28px;
  height: 28px;
}
</style>

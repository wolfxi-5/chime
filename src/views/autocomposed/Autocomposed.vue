<template>
  <div class="Autocomposed">
    <div class="autocomposed-stick">
      <nav-bar class="autocomposed-navbar">
        <div slot="center">曲库</div>
      </nav-bar>
    </div>

  <div class="button">
    <circle-menu type="middle-around" :number="4" animate="animated jello" mask='white' circle :colors="['#3481B8','#87CEFA', '#87CEFA',  '#87CEFA' ,'#87CEFA']">
      <button type="button" slot="item_btn" style="background-color:#3481B8" class="add-button">
        +
      </button>
      <a slot="item_1" class="fa fa-twitter fa-lg"></a>
      <a slot="item_2" class="fa fa-weixin fa-lg"></a>
      <a slot="item_3" class="fa fa-weixin fa-lg">识谱</a>
      <a slot="item_4" class="fa fa-weixin fa-lg">作曲</a>
    </circle-menu>
  </div>

    <project></project>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Project from "./Project.vue";

export default {
  name: "Autocomposed",
  components: {
    NavBar,
    Project
  }
};
</script>

<style>
.Autocomposed {
  width: 100%;
  background-color: rgb(246, 246, 246);
}
/* 固定头 */
.Autocomposed .autocomposed-stick {
  height: 44px;
}
.Autocomposed .autocomposed-stick .autocomposed-navbar {
  font-family: "宋体";
  font-size: 120%;
  color: black;
  font-weight: bold;
  position: fixed;
  top: 0px;
  background-color: white;
}

/* 添加歌曲 */
.Autocomposed .add-button {
  font-size:6.5vh;
  color: white;
  border: none;
  width: 100%;
  height: 100%;
  border-radius:50%;
  text-align:center;
}
.Autocomposed .button {
  position: fixed;
  bottom: 44px;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* 每个项目格式 */
.Autocomposed .music {
  height: calc(100vh - 80px);
}
.Autocomposed .music-block {
  background-color: white;
  border-radius: 15px;
  margin: 15px 10px 0 10px;
  display: flex;
  justify-content: space-between;
}
.Autocomposed .music-block .music-title {
  font-size: large;
  color: black;
  padding-top: 8px;
  padding-left: 15px;
}
.Autocomposed .music-block .music-date {
  padding-left: 15px;
  padding-bottom: 8px;
}
.Autocomposed .music-block .music-block2 {
  display: flex;
}
.Autocomposed .music-block .music-time {
  padding-left: 84px;
  padding-top: 20px;
}
.Autocomposed .music-block .music-img {
  padding-left: 4px;
  padding-top: 16.5px;
  padding-right: 15px;
}
.Autocomposed .music-block img {
  width: 28px;
  height: 28px;
}
</style>

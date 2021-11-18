<template>
  <div class="Forum">
    <div class="forum-stick">
      <nav-bar class="forum-navbar">
        <div slot="center">论坛</div>
      </nav-bar>

      <div class="change">
        <div class="col-xs-2" @click="changeModeA">
          <p :class="{ active: isActive, unactive: !isActive }">推荐</p>
        </div>
        <div class="col-xs-2  col-xs-offset-1" @click="changeModeB">
          <p :class="{ active: !isActive, unactive: isActive }">收藏</p>
        </div>
      </div>
    </div>

    <div class="forum-content">
      <div v-if="isActive">
        <commend></commend>
      </div>
      <div v-else>
        <collect></collect>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import Commend from "./childcomps/Commend";
import Collect from "./childcomps/Collect";

export default {
  name: "Forum",
  components: {
    NavBar,
    Commend,
    Collect
  },
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    changeModeA() {
      this.isActive = true;
    },
    changeModeB() {
      this.isActive = false;
    }
  }
};
</script>

<style>
.Forum {
  width: 100%;
  background-color: rgb(246, 246, 246);
}
.Forum .forum-stick {
  height: 74px;
}
.Forum .forum-stick .forum-navbar {
  font-family: "宋体";
  font-size: 120%;
  /* color: rgb(105, 105, 105); */
  color: black;
  font-weight: bold;
  /* background-image: radial-gradient(circle, #eee9e9, #fffafa); */
  position: fixed;
  top: 0px;
  background-color: white;
}
.Forum .forum-stick .change {
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  height: 30px;
  position: fixed;
  top: 30px;
  background-color: white;
}
.Forum .forum-stick .change .active {
  padding-bottom: 1rem;
  font-weight: bolder;
  border-color: transparent;
  border-bottom: 2.5px solid black !important;
  background-color: transparent;
  width: 60px;
}
.Forum .forum-stick .change .unactive {
  margin-bottom: 1rem;
  width: 60px;
}

.Forum .forum-content {
  padding: 0.5rem 0 0 0;
  background-color: rgb(246, 246, 246);
}
</style>

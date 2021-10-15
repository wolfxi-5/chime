<template>
  <div class="Forum">
    <nav-bar class="profile-navbar">
      <div slot="center">论坛</div>
    </nav-bar>

    <div class="change">
      <div class="col-xs-4 col-xs-offset-2" @click="changeModeA">
        <p :class="{ active: isActive, unactive: !isActive }">推荐</p>
      </div>
      <div class="col-xs-4" @click="changeModeB">
        <p :class="{ active: !isActive, unactive: isActive }">收藏</p>
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
import NavBar from "components/common/navbar/NavBar"

import Commend from './childcomps/commend/Commend'
import Collect from './childcomps/collect/Collect'

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
.Forum .profile-navbar {
  font-family: "宋体";
  font-size: 140%;
  color: rgb(105, 105, 105);
  font-weight: bold;
  background-image: radial-gradient(circle, #eee9e9, #fffafa);
}

.Forum .change {
  text-align: center;
}
.Forum .change .active {
  padding-bottom: 1rem;
  color: #4c82ff;
  border-color: transparent;
  border-bottom: 2px solid #4c82ff !important;
  background-color: transparent;
}
.Forum .change .unactive {
  margin-bottom: 1rem;
}
.Forum .forum-content {
  padding: 2.5rem;
}
</style>

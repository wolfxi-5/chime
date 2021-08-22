<template>
  <div class="profile">
    <nav-bar class="profile-navbar">
      <div slot="center">个人中心</div>
    </nav-bar>

  
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {getProfileInitdata} from "network/profile";

export default {
  name: "Profile",
  components: {
    NavBar
  },
  data() {
    return {
      initdata:null,
    }
  },
  created () {
    getProfileInitdata().then(res => {
      // this.initdata = res.data;
    })
  }
};
</script>

<style>
.profile-navbar {
  color: black;
}
</style>

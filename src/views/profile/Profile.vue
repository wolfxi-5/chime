<template>
  <div class="profile">
    <nav-bar class="profile-navbar">
      <div slot="center">个人中心</div>
    </nav-bar>
    <profile-head></profile-head>
    <profile-list></profile-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

import ProfileHead from "./childcomps/ProfileHead"
import ProfileList from './childcomps/ProfileList';

import {getProfileInitdata} from "network/profile"

export default {
  name: "Profile",
  components: {
    NavBar,
    ProfileHead,
    ProfileList
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

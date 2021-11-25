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
  created() {
    this.getData();
    this.getOneData();
  },

  methods: {

    //axios测试
    getOneData() {
      let data = {
        userId:2
      }
      this.$axios.test(data)
        .then((res) => {
          console.log(res);
        })
    },
     getData() {
      let data = {}
      this.$axios.test(data)
        .then((res) => {
          console.log(res);
        })
    },
    //axios测试
  }
};
</script>

<style>
.profile .profile-navbar {
  color: black;
}
</style>

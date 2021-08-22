<template>
  <div class="profile">
    <nav-bar class="profile-navbar">
      <div slot="center">我的</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Profile",
  components: {
    NavBar
  }
};
</script>

<style>
.profile-navbar {
  background-color: rgb(236, 206, 149);
  color: black;
}
</style>

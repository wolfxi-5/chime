<template>
  <div class="ProfileHead">
    <div class="head-back"><img src="~assets/img/profile/text-bck.png" /></div>
    <div class="mui-tus">
      <div class="pRegister">
        <img src="~assets/img/profile/touxiang.png"/>
        <a
          class="content"
          style="font-size: 1.5rem; color: #fff;display: block;"
          @click="loginClick"
        >
          登录/注册
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileHead",
  methods: {
    loginClick() {
      this.$router.push('/log')
    }
  }
};
</script>

<style>
.ProfileHead {
  background-color: #fcfcfc;
  position: relative;
  width: 100%;
}
.ProfileHead .head-back img {
  width: 95%;
  height: 90%;
  display: block;
  margin: 0 auto;
}
.mui-tus {
  position: absolute;
  bottom: 77px;
  padding: 0 0.6rem;
}
.pRegister {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.ProfileHead img {
  margin-left: 20%;
  width: 30%;
}
.ProfileHead .content {
  width: 60%;
  margin-left: 5px;
  padding-top: 20px;
}
</style>

<template>
  <div class="Log">
    <div class="login-top" style="margin: 0;">
      <div class="login-back">
        <img src="~assets/img/profile/login-back.png" />
      </div>
      <div class="login-imgs">
        <img src="~assets/img/profile/login-pic.png" />
      </div>
    </div>

    <div class="block"></div>

    <div class="change">
      <div class="col-xs-4 col-xs-offset-2" @click="changeModeA">
        <div :class="{ active: isActive, unactive: !isActive }">登录</div>
      </div>
      <div class="col-xs-4" @click="changeModeB">
        <div :class="{ active: !isActive, unactive: isActive }">注册</div>
      </div>
    </div>

    <div class="log-content">
      <div v-if="isActive">
        <log-enter></log-enter>
      </div>
      <div v-else>
        <log-enroll></log-enroll>
      </div>
    </div>

  </div>
</template>

<script>
import LogEnter from "./LogEnter";
import LogEnroll from "./LogEnroll";

export default {
  name: "Log",
  components: {
    LogEnter,
    LogEnroll
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
.Log {
  width: 100%;
}
.Log .login-back img {
  width: 100%;
  height: 40%;
  display: block;
  margin: 0 auto;
}
.Log .login-imgs {
  position: fixed;
  left: 36%;
  top: 27%;
  width: 10rem;
  height: 10rem;
  text-align: center;
  background: #fff;
  border-radius: 16px;
  -moz-box-shadow: 2px 2px 5px rgba(76, 130, 255, 0.4);
  -webkit-box-shadow: 2px 2px 5px rgba(76, 130, 255, 0.4);
  box-shadow: 2px 2px 5px rgba(76, 130, 255, 0.4);
}
.Log .login-imgs img {
  width: 8rem;
  height: 8rem;
  margin: 1rem 0.4rem;
}

.Log .block {
  background: #fff;
  padding: 0;
  margin-top: 4rem;
}
.Log .change {
  text-align: center;
}
.Log .change .active {
  padding-bottom: 1rem;
  color: #4c82ff;
  border-color: transparent;
  border-bottom: 2px solid #4c82ff !important;
  background-color: transparent;
}
.Log .change .unactive {
  margin-bottom: 1rem;
}
.Log .log-content {
  padding: 5rem;
}
</style>

<template>
  <div class="LogEnroll">
    <div class="row underline">
      <div class="col-xs-1">
        <img src="~assets/img/profile/icon-phone.png" alt="" />
      </div>
      <div class="col-xs-8">
        <input type="text" id="phoneNumber" placeholder="输入电话号" />
      </div>
    </div>

    <div class="row underline">
      <div class="col-xs-1">
        <img src="~assets/img/profile/icon-verify.png" alt="" />
      </div>
      <div class="col-xs-5">
        <input type="text" id="text" placeholder="输入验证码" />
      </div>
      <a href="">获取验证码</a>
    </div>

    <div class="row underline">
      <div class="col-xs-1">
        <img src="~assets/img/profile/icon-lock.png" alt="" />
      </div>
      <div class="col-xs-9">
        <input type="password" id="password" placeholder="输入密码" />
      </div>
    </div>

    <div class="submit">
      <button>注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogEnrol"
};
</script>

<style>
.LogEnroll .row {
  padding-top: 1.25rem;
}
.LogEnroll .underline {
  padding-top: 2rem;
  padding-bottom: 1rem;
  color: #dddddd;
  border-color: transparent;
  border-bottom: 1px solid #dddddd !important;
  background-color: transparent;
}
.LogEnroll .row a {
  float: right;
}
.LogEnroll .row img {
  padding-left: 0;
  float: left;
}
.LogEnroll .row:nth-child(1) img {
  width: 1.7rem;
  height: 2.4rem;
}
.LogEnroll .row:nth-child(2) img {
  width: 1.7rem;
  height: 2rem;
}
.LogEnroll .row:nth-child(3) img {
  width: 1.7rem;
  height: 2rem;
}
.LogEnroll .row input {
  padding-left: 1rem;
  border: transparent;
}
.LogEnroll .submit {
  width: 100%;
  padding: 1.7rem;
  padding-bottom: 0.3rem;
}
.LogEnroll .submit button {
  width: 100%;
  height: 4rem;
  background: linear-gradient(to right, #6a77f7, #8eb9fe);
  font-size: 1.6rem;
  color: white;
  letter-spacing: 0.3rem;
  border-radius: 2.3rem;
}
</style>

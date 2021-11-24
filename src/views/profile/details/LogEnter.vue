<template>
  <div class="LogEnter">
    <div class="row underline">
      <div class="col-xs-1">
        <img src="~assets/img/profile/icon-phone.png" alt="" />
      </div>
      <div class="col-xs-8">
        <input type="text" id="phoneNumber" placeholder="输入电话号" style="color: black"/>
      </div>
    </div>

    <div class="row underline">
      <div class="col-xs-1">
        <img src="~assets/img/profile/icon-lock.png" alt="" />
      </div>
      <div class="col-xs-9">
        <input type="password" id="password" placeholder="输入密码" style="color: black"/>
      </div>
    </div>

    <div class="row enter-else">
      <div class="col-xs-6">
        <span>
          <div style="display: inline-block;margin-left:3px;margin-top:1px;">
            <input
              name="form-field-checkbox"
              id="saveid"
              type="checkbox"
              onclick=" "
              style="padding-top:0px;"
            />
          </div>
          <div
            style="display: inline-block;margin-top:-3px;margin-right:2px;margin-left: 2px;font-size:14px !important"
          >
            <font>记住密码</font>
          </div>
        </span>
      </div>

      <div>
        <a>忘记密码？</a>
      </div>
    </div>

    <div class="submit">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogEnter"
};
</script>

<style>
.LogEnter .row {
  padding-top: 1.25rem;
}
.LogEnter .underline {
  padding-top: 2rem;
  padding-bottom: 1rem;
  color: #dddddd;
  border-color: transparent;
  border-bottom: 1px solid #dddddd !important;
  background-color: transparent;
}
.LogEnter .enter-else a{
  float:right;
}
.LogEnter .row img {
  padding-left: 0;
}
.LogEnter .row:nth-child(1) img {
  width: 1.7rem;
  height: 2.4rem;
}
.LogEnter .row:nth-child(2) img {
  width: 1.7rem;
  height: 2rem;
}
.LogEnter .row input {
  padding-left: 1rem;
  border: transparent;
}
.LogEnter .submit {
  width: 100%;
  padding: 1.7rem;
  padding-bottom: 0.3rem;
}
.LogEnter .submit button {
  width: 100%;
  height: 4rem;
  background: linear-gradient(to right, #6a77f7, #8eb9fe);
  font-size: 1.6rem;
  color: white;
  letter-spacing: 0.3rem;
  border-radius: 2.3rem;
}
</style>

<template>
  <div class="ProfileList container-fluid">
    <div class="row">
      <div class="col-xs-1 imag">
        <img src="~assets/img/profile/account.png" alt="" />
      </div>
      <div class="col-xs-8">
        <p>账号管理</p>
      </div>
      <div class="col-xs-2 next-right imag">
        <img src="~assets/img/profile/return-right.png" alt="" />
      </div>
    </div>

    <div class="row" @click="feedback">
      <div class="col-xs-1 imag">
        <img src="~assets/img/profile/feedback.png" alt="" />
      </div>
      <div class="col-xs-8">
        <p>帮助与反馈</p>
      </div>
      <div class="col-xs-2 next-right imag">
        <img src="~assets/img/profile/return-right.png" alt="" />
      </div>
    </div>
    <van-dialog v-model="show" title="吐槽一下" show-cancel-button>
      <van-field
        v-model="message"
        rows="2"
        autosize
        label=""
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
      />
    </van-dialog>

    <div class="row" @click="showShare = true">
      <div class="col-xs-1 imag">
        <img src="~assets/img/profile/share.png" alt="" />
      </div>
      <div class="col-xs-8">
        <p>分享</p>
      </div>
      <div class="col-xs-2 next-right imag">
        <img src="~assets/img/profile/return-right.png" alt="" />
      </div>
    </div>
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="share"
    />

    <div class="row" @click="about">
      <div class="col-xs-1 imag">
        <img src="~assets/img/profile/about.png" alt="" />
      </div>
      <div class="col-xs-8">
        <p>关于本应用</p>
      </div>
      <div class="col-xs-2 next-right imag">
        <img src="~assets/img/profile/return-right.png" alt="" />
      </div>
    </div>

    <button type="button" class="btn return">退出登录</button>
  </div>
</template>

<script>
// import { poplayer } from "./js/prompt-box";

import { Dialog } from "vant";
import { ShareSheet } from "vant";
import { Toast } from "vant";

export default {
  name: "ProfileList",
  data() {
    return {
      message:'',
      show: false,
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "朋友圈", icon: "wechat-moments" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" }
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" }
        ]
      ]
    };
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
    [ShareSheet.name]: ShareSheet
  },
  methods: {
    feedback() {
      this.show = true;
    },
    share(options) {
      Toast(options.name);
      this.showShare = false;
    },
    about() {
      Dialog.alert({
        message: "这就是一个平平无奇的APP"
      }).then(() => {
        // on close
      });
    }
  }
};
</script>

<style>
.ProfileList {
  width: 100%;
  background-color: #fff;
}
.ProfileList .row {
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.ProfileList .next-right {
  padding-left: 4rem;
}
.ProfileList .imag img {
  float: left;
  padding-left: 5%;
  width: 2rem;
  height: 2rem;
}
.ProfileList p {
  float: left;
  font-size: 1.6rem;
  color: #696974;
}
.ProfileList .return {
  width: 90%;
  margin: 2.5rem auto;
  text-align: center;
  height: 3rem;
  line-height: 2rem;
  background-color: #4c82ff;
  color: #fff;
  font-size: 1.7rem;
}
</style>

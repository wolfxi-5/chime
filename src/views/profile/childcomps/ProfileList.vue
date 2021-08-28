<template>
  <div class="ProfileList container-fluid">
    <div class="row">
      <div class="col-xs-1">
        <img src="~assets/img/profile/account.png" alt="" />
      </div>
      <div class="col-xs-8">
        <p>账号管理</p>
      </div>
      <div class="col-xs-2 next-right">
        <img src="~assets/img/profile/return-right.png" alt="" />
      </div>
    </div>

    <div class="row" @click="feedback">
      <div class="col-xs-1">
        <img src="~assets/img/profile/feedback.png" alt="" />
      </div>
      <div class="col-xs-8">
        <p>帮助与反馈</p>
      </div>
      <div class="col-xs-2 next-right">
        <img src="~assets/img/profile/return-right.png" alt="" />
      </div>
    </div>

    <div class="row" @click="share">
      <div class="col-xs-1">
        <img src="~assets/img/profile/share.png" alt="" />
      </div>
      <div class="col-xs-8">
        <p>分享</p>
      </div>
      <div class="col-xs-2 next-right">
        <img src="~assets/img/profile/return-right.png" alt="" />
      </div>
    </div>

    <div class="row" @click="about">
      <div class="col-xs-1">
        <img src="~assets/img/profile/about.png" alt="" />
      </div>
      <div class="col-xs-8">
        <p>关于本应用</p>
      </div>
      <div class="col-xs-2 next-right">
        <img src="~assets/img/profile/return-right.png" alt="" />
      </div>
    </div>

    <button type="button" class="btn return">退出登录</button>
  </div>
</template>

<script>
import { poplayer } from "./js/prompt-box";

export default {
  name: "ProfileList",
  methods: {
    feedback() {
      poplayer.prompt1('','确定','取消','请输入反馈信息',true,function(data){
				document.body.removeChild(document.getElementById("pop_tip")); // 关闭上一个弹层
				poplayer.msg('感谢你的建议');
			});
    },
    share() {
      poplayer.confirm('分享一下','确定','取消',window.location.href);
    },
    about() {
      poplayer.alert('这就是一个平平无奇的app');
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
.ProfileList img {
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

/* .cashlist {
	width: 100%;
	margin-bottom: 4%;
	background-color: #fff;
}

.cashlist ul li {
	width: 100%;
	height: 1.4rem;
	line-height: 1.4rem;
	padding: 0 0.4rem;
	border-bottom: 1px solid #EEEEF1;
}

.cashlist ul li a {
	display: flex;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	justify-content: space-between;
	height: 100%;
	width: 100%;
}
.cashlist ul li a p i{
	margin-right: 0.15rem;
	}
.cashlist ul li p {
	font-size: .48rem;
	color: #696974;
}

.cashlist ul li i {
	color: #696974;
	font-size: 0.45rem;
} */
</style>

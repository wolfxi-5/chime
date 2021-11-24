<template>
  <div class="Commend">
    <div class="commend-block">
      <div @click="goInDetailOne">
        <div class="title">编钟——古代乐器</div>
        <div class="content">
          <img src="~/assets/img/forum/imag1.jpg" />
          <p>
            编钟，是中国汉民族古代重要的打击乐器，是钟的一种。编钟兴起于周朝，盛于春秋战国直至秦汉。编钟由若干个大小不同的钟有次序地悬挂在木架上编成一组或几组，每个钟敲击的音高各不相同。
          </p>
        </div>
      </div>
      <div class="function">
        <ul>
          <li>
            <img :src="imgCommend" @click="commend($event)" /><span>0</span>
          </li>
          <li>
            <img :src="imgReview" @click="review($event)" /><span>0</span>
          </li>
          <li>
            <img :src="imgTransmit" @click="transmit($event)" /><span>0</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="commend-block">
      <div @click="goInDetailTwo">
        <div class="title">编钟——有德之音</div>
        <div class="content">
          <p>
            《史记•乐书》载：乐者，德之华；金石丝竹，乐之器。诗，言其志；歌，咏其声；舞，动其容。三者本乎心，然后乐其从之，是故情深而文明，气盛而化神，和顺积中而英华发外，唯乐不可以为伪。
          </p>
        </div>
      </div>
      <div class="function">
        <ul>
          <li>
            <img :src="imgCommend" @click="commend($event)" /><span>0</span>
          </li>
          <li>
            <img :src="imgReview" @click="review($event)" /><span>0</span>
          </li>
          <li>
            <img :src="imgTransmit" @click="transmit($event)" /><span>0</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="commend-block">
      <div @click="goInDetailThree">
        <div class="title">编钟——象征和代表</div>
        <div class="content">
          <img src="~/assets/img/forum/imag3.jpg" />
          <p>
            在中国古代，编钟是上层社会专用的乐器，是等级和权力的象征。曾侯乙编钟上还标有和乐律有关的铭文2800多字，记录了许多音乐术语，显示了中国古代音乐文化的先进水平。编钟音乐清脆明亮，悠扬动听，能奏出歌唱一样的旋律，又有歌钟之称。
          </p>
        </div>
      </div>
      <div class="function">
        <ul>
          <li>
            <img :src="imgCommend" @click="commend($event)" /><span>0</span>
          </li>
          <li>
            <img :src="imgReview" @click="review($event)" /><span>0</span>
            <van-popup
              v-model="show"
              closeable
              close-icon="close"
              position="bottom"
              :style="{ height: '70%' }"
            >
              <div class="review-content">
                暂无评论
              </div>
              <div class="review-input">
                <van-search
                  v-model="value"
                  show-action
                  placeholder="请输入评论内容"
                  @search="onSearch"
                  @cancel="onCancel"
                />
              </div>
            </van-popup>
          </li>
          <li>
            <img :src="imgTransmit" @click="transmit($event)" /><span>0</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="else"></div>
  </div>
</template>

<script>
import imgCommend from "@/assets/img/forum/commend.png";
import imgReview from "@/assets/img/forum/review.png";
import imgTransmit from "@/assets/img/forum/transmit.png";
import imgCommendRed from "@/assets/img/forum/commendRed.png";
import imgTransmitRed from "@/assets/img/forum/transmitRed.png";

import { Toast } from "vant";

export default {
  name: "Commend",
  data() {
    return {
      imgCommend,
      imgReview,
      imgTransmit,
      imgCommendRed,
      imgTransmitRed,
      show: false,
      value: ""
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
    // 点击进入详情页面
    goInDetailOne() {
      this.$router.push("/detailone");
    },
    goInDetailTwo() {
      this.$router.push("/detailtwo");
    },
    goInDetailThree() {
      this.$router.push("/detailthree");
    },
    // 点赞，收藏，评论
    commend(event) {
      let obj = event.srcElement;
      let obj2 = event.currentTarget.nextElementSibling;
      let number = obj2.innerHTML;
      if (obj.src === imgCommend) {
        obj.src = imgCommendRed;
        obj2.innerHTML = ++number;
      } else {
        obj.src = imgCommend;
        obj2.innerHTML = --number;
      }
    },
    review(event) {
      this.show = true;
    },
    transmit(event) {
      let obj = event.srcElement;
      let obj2 = event.currentTarget.nextElementSibling;
      let number = obj2.innerHTML;
      if (obj.src.indexOf(imgTransmit) != -1) {
        obj.src = imgTransmitRed;
        obj2.innerHTML = ++number;
      } else {
        obj.src = imgTransmit;
        obj2.innerHTML = --number;
      }
    }
  }
};
</script>

<style>
.Commend {
  width: 100%;
}
.Commend .commend-block {
  margin: 1.2rem 0 0 0;
  background-color: white;
  border-bottom: 1.2px solid#DCDCDC;
  color: black;
  padding: 0 5%;
}
.Commend .commend-block .title {
  font-size: large;
  font-weight: 550;
  padding-top: 7px;
}
.Commend .commend-block .content {
}
.Commend .commend-block .content p {
  /* 设置多余三行省略 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  /* 其他设置 */
  line-height: 23px;
}
.Commend .commend-block .content img {
  width: 70px;
  height: 69px;
  float: right;
  border-radius: 4px;
}
.Commend .commend-block .function ul {
  display: flex;
  text-align: center;
  margin-top: 7px;
}
.Commend .commend-block .function li {
  flex: 1;
}
.Commend .commend-block .function li .review-content {
  padding: 40% 40%;
}
.Commend .commend-block .function li .review-input {
  width: 100%;
  position: fixed;
  bottom: 0px;
}
.Commend .commend-block .function li img {
  width: 20px;
  height: 20px;
}
.Commend .commend-block .function li span {
  color: rgb(116, 116, 116);
  margin-left: 3px;
}
.Commend .else {
  height: 900px;
  background-color: rgb(246, 246, 246);
}
</style>

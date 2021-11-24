<template>
  <div class="Details">
    <div class="header">
      <div class="stick">
        <img src="~assets/img/forum/return.png" @click="goBack" />
      </div>
    </div>

    <div class="content">
      <div class="content-header">
        编钟——古代乐器
      </div>
      <div class="content-block">&nbsp;</div>
      <div class="content-text">
        <p>
          编钟，是中国汉民族古代重要的打击乐器，是钟的一种。兴起于周朝，盛于春秋战国直至秦汉。中国是制造和使用乐钟最早的国家。它用青铜铸成，由大小不同的扁圆钟按照音调高低的次序排列起来，悬挂在一个巨大的钟架上，用丁字形的木锤和长形的棒分别敲打铜钟，能发出不同的乐音，因为每个钟的音调不同，按照音谱敲打，可以演奏出美妙的乐曲。引在木架上悬挂一组音调高低不同的铜钟，由侍女用小木槌敲打奏乐。
        </p>
      </div>
      <div class="content-img">
        <img src="~/assets/img/forum/imag1.jpg" />
      </div>
      <div class="content-img">
        <img src="~/assets/img/forum/imag1-1.jpg" />
      </div>
      <div class="content-text">
        <p>
          早在3500年前的商代，中国就有了编钟，不过那时的编钟多为三枚一套。后来随着时代的发展，每套编钟的个数也不断增加。古代的编钟多用于宫廷的演奏，在民间很少流传，每逢征战、朝见或祭祀等活动时，都要演奏编钟。
        </p>
        <p>
          根据文献记载和出土文物，发现中国在西周时期就有了编钟，那时候的编钟一般是由大小3枚组合起来的。春秋末期到战国时期的编钟数目就逐渐增多了，有9枚一组的和13枚一组的等等。1957年，在我国河南信阳城阳城址出土的第一套编钟13枚演奏的东方红乐曲随着我国第一颗人造卫星唱响太空。
        </p>
      </div>
    </div>

    <div class="bottom">
      <div class="stick-bottom">
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

    <div class="commend">
      <div class="myCommend">
        <input type="text" id="mycommend" placeholder="写下你的评论..." />
        <button type="submit" class="btn btn-default">发表</button>
      </div>
    </div>
  </div>
</template>

<script>
import imgCommend from "@/assets/img/forum/commend.png";
import imgReview from "@/assets/img/forum/review.png";
import imgTransmit from "@/assets/img/forum/transmit.png";
import imgCommendRed from "@/assets/img/forum/commendRed.png";
import imgTransmitRed from "@/assets/img/forum/transmitRed.png";

export default {
  name: "DetailOne",
  data() {
    return {
      imgCommend,
      imgReview,
      imgTransmit,
      imgCommendRed,
      imgTransmitRed
    };
  },
  methods: {
    //返回
    goBack() {
      this.$router.go(-1);
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
    review(event) {},
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
.Details {
  background-color: rgb(246, 246, 246);
}
/* header */
.Details .header {
  height: 40px;
}
.Details .header .stick {
  width: 100%;
  position: fixed;
  top: 0px;
  background-color: white;
  box-sizing: content-box;
  border-bottom: 0.1px solid rgb(231, 231, 231);
  box-shadow: 0px 0px 1px #e0e0e0;
}
.Details .header .stick img {
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  width: 30px;
}

.Details .content {
  padding: 0 20px;
  margin-top: 7px;
}
.Details .content .content-header {
  font-size: x-large;
  font-weight: 550;
}
.Details .block .content-block {
  width: 100%;
  height: 20px;
}
.Details .content .content-img {
  padding: 10px 0;
}
.Details .content .content-img img {
  width: 100%;
  height: 80%;
}
.Details .content .content-text p {
  text-indent: 2em;
  line-height: 27px;
}

.Details .bottom {
  height: 40px;
}
.Details .bottom .stick-bottom {
  width: 100%;
  position: fixed;
  bottom: 0px;
  background-color: white;
}
.Details .bottom .stick-bottom ul {
  padding-top: 10px;
  display: flex;
  text-align: center;
}
.Details .bottom .stick-bottom li {
  flex: 1;
}
.Details .bottom .stick-bottom li img {
  width: 20px;
  height: 20px;
}
.Details .bottom .stick-bottom li span {
  color: rgb(116, 116, 116);
  margin-left: 3px;
}

.Details .commend {
  padding: 0 20px;
}
.Details .commend .myCommend {
  width: 70%;
  height: 20px;
}
</style>

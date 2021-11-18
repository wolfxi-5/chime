<template>
  <div class="Details">
    <div class="header">
      <div class="stick">
        <img src="~assets/img/forum/return.png" @click="goBack" />
      </div>
    </div>

    <div class="content">
      <div class="content-header">
        编钟——象征和代表
      </div>
      <div class="content-block">&nbsp;</div>
      <div class="content-text">
        <p>
          在中国古代，编钟是上层社会专用的乐器，是等级和权力的象征。曾侯乙编钟上还标有和乐律有关的铭文2800多字，记录了许多音乐术语，显示了中国古代音乐文化的先进水平。编钟音乐清脆明亮，悠扬动听，能奏出歌唱一样的旋律，又有歌钟之称。
        </p>
      </div>
      <div class="content-img">
        <img src="~/assets/img/forum/imag3.jpg" />
      </div>
      <div class="content-text">
        <p>
          曾侯乙是“编钟”的代表之一，为战国早期文物，1978年在湖北随县（今随州市）成功发掘。这套编钟的钟架高大，由长短不同的两堵立面垂直相交，呈曲尺形7根彩绘木梁两端以蟠龙纹铜套加固，由6个佩剑武士形铜柱和8根圆柱承托，构成上、中、下三层。钟架及挂钩(含可以拆装的构件)达246个。短架(左)长335、高273、长架(中、右)长748、高265厘米编钟是古代打击乐器，也是象征拥有者权位的礼器。主要流行于商周和春秋战国时期。
        </p>
      </div>
      <div class="content-img">
        <img src="~/assets/img/forum/imag3-1.jpg" />
      </div>
      <div class="content-text">
        <p>
          曾侯乙编钟共65件，分为八组：上层3组为钮钟，19件；中层3组为南钟，33件，分短枚、无枚、长枚三式；下层为两组大型长枚甫钟，12件，另有搏l件。最大的1件通高152．3厘米，重203．6公斤；最小的l件通高20．2厘米，重2．4公斤。钟体总重2，567公斤，加上钟架(含挂钩)铜质部分，合计4，421．48公斤。编钟的悬挂有三种方式：下层钟用环挂式，挂钩为爬虎套环和双杆套环两种中层钟用钩挂式，挂钩为框架钩和焊钩两种；上层钟用插挂式，是以插销入挥、串钩钟钮。钟及架、钩上共有铭文3，755字，内容为编号、记事、标音及乐律理论。铭文多数错金。全部甬钟的记事铭文均为“曾候乙作持”5字，标明钟的制作和享用者是曾侯乙。
        </p>
        <p>
          搏钟的铭文则记载楚王熊章为曾侯乙铸宗彝一事。标音明文标示了钟的悬技位置或敲击部位及其所发音的名称，它们构成了十二半音称谓体系。乐律理论记述了曾国与楚、晋、齐、申、周等国的律名对应关系。钟铭所见律名28个、阶名66个，绝大多数都是前所未知的新材料。这套编钟的铭文，是一部重要的中国古代乐律理论专著。全套编钟音域宽广，音列充实，音色优美。每件钟均有呈三度音程的两个乐音，可以分别击发而互不干扰，亦可同时击发构成悦耳的和声，证实了中国古编钟每钟双音的规律。全套编钟具有深沉浑厚的低音、圆润淳朴的中音和清脆明快的高音。其音域自C2至D7，中心音域内具十二半音，可以旋宫转调，演奏七声音阶的多种乐曲。钟及钟架铜构件是铜、锡、铅合金，合金比例因用途而异。用挥铸、分铸、锡焊、铜焊、铸镶、错金、磨砺制作而成，工艺精湛。
        </p>
      </div>
      <div class="content-img">
        <img src="~/assets/img/forum/imag3-2.jpg" />
      </div>
      <div class="content-text">
        <p>
          编钟的装配、布局，从力学、美学、实际操作上，都显得十分合理。全套钟的装饰，有人、兽、龙、花和几何形纹，采用了圆雕、浮雕、阴刻、彩绘等多种技法，以赤、黑、黄色与青铜本色相映衬，显得庄重肃穆，精美壮观。有6个丁字形彩绘木极和2根彩绘撞钟木棒与钟同出。据此并经实验判定，这套钟的使用共需5人：3人双手执小模，掌奏中、上层钟；2人各持撞钟木棒，掌奏下层钟。（木架和部分挂钩系复制，其余均为原件）。1978年出土于湖北省随县（今随州市）擂鼓墩曾侯乙墓。
        </p>
      </div>
    </div>

    <div class="bottom">
      <div class="stick-bottom">
        <ul>
          <li><img src="~/assets/img/forum/commend.png" /><span>120</span></li>
          <li><img src="~/assets/img/forum/review.png" /><span>32</span></li>
          <li><img src="~/assets/img/forum/transmit.png" /><span>12</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailThree",
  methods: {
    goBack() {
      this.$router.go(-1);
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
</style>

<template>
  <div class="Chime">
    <div class="chime-block">
      <audio src="~/assets/audio/1.mp3" id="event1"></audio>
      <audio src="~/assets/audio/11.mp3" id="event11"></audio>

      <div class="chime-piece">
        <img src="~assets/img/home/chime1.png" @click="playing(1)" />
      </div>
      <div class="chime-piece">
        <img src="~assets/img/home/chime2.png" @click="playing(11)" />
      </div>
      <div class="chime-piece">
        <img src="~assets/img/home/chime3.png" @click="playing(1)" /> 
      </div>
    </div>

    <div class="chime-block">
      <audio src="~/assets/audio/2.mp3" id="event2"></audio>
      <audio src="~/assets/audio/22.mp3" id="event22"></audio>

      <div class="chime-piece">
        <img src="~assets/img/home/chime1.png" @click="playing(2)" />
      </div>
      <div class="chime-piece">
        <img src="~assets/img/home/chime2.png" @click="playing(22)" />
      </div>
      <div class="chime-piece">
        <img src="~assets/img/home/chime3.png" @click="playing(2)" />
      </div>
    </div>

    <div class="chime-block">
      <audio src="~/assets/audio/3.mp3" id="event3"></audio>
      <audio src="~/assets/audio/33.mp3" id="event33"></audio>

      <div class="chime-piece">
        <img src="~assets/img/home/chime1.png" @click="playing(3)" />
      </div>
      <div class="chime-piece">
        <img src="~assets/img/home/chime2.png" @click="playing(33)" />
      </div>
      <div class="chime-piece">
        <img src="~assets/img/home/chime3.png" @click="playing(3)" />
      </div>
    </div>

    <div class="chime-block">
      <audio src="~/assets/audio/4.mp3" id="event4"></audio>
      <audio src="~/assets/audio/44.mp3" id="event44"></audio>

      <div class="chime-piece">
        <img src="~assets/img/home/chime1.png" @click="playing(4)" />
      </div>
      <div class="chime-piece">
        <img src="~assets/img/home/chime2.png" @click="playing(44)" />
      </div>
      <div class="chime-piece">
        <img src="~assets/img/home/chime3.png" @click="playing(4)" />
      </div>
    </div>

    <div class="chime-block">
      <audio src="~/assets/audio/5.mp3" id="event5"></audio>
      <audio src="~/assets/audio/55.mp3" id="event55"></audio>

      <div class="chime-piece">
        <img src="~assets/img/home/chime1.png" @click="playing(5)" />
      </div>
      <div class="chime-piece">
        <img src="~assets/img/home/chime2.png" @click="playing(55)" />
      </div>
      <div class="chime-piece">
        <img src="~assets/img/home/chime3.png" @click="playing(5)" />
      </div>
    </div>

    <div class="chime-block">
      <audio src="~/assets/audio/6.mp3" id="event6"></audio>
      <audio src="~/assets/audio/66.mp3" id="event66"></audio>

      <div class="chime-piece">
        <img src="~assets/img/home/chime1.png" @click="playing(6)" />
      </div>
      <div class="chime-piece">
        <img src="~assets/img/home/chime2.png" @click="playing(66)" />
      </div>
      <div class="chime-piece">
        <img src="~assets/img/home/chime3.png" @click="playing(6)" />
      </div>
    </div>

    <div class="chime-block">
      <audio src="~/assets/audio/7.mp3" id="event7"></audio>
      <audio src="~/assets/audio/77.mp3" id="event77"></audio>

      <div class="chime-piece">
        <img src="~assets/img/home/chime1.png" @click="playing(7)" />
      </div>
      <div class="chime-piece">
        <img src="~assets/img/home/chime2.png" @click="playing(77)" />
      </div>
      <div class="chime-piece">
        <img src="~assets/img/home/chime3.png" @click="playing(7)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chime",
  data() {
    return {
      musicEvent: Object
    };
  },
  methods: {
    playing(index) {
      console.log(index);
      this.musicEvent = document.getElementById("event" + index);
      console.log(this.musicEvent);
      this.musicEvent.currentTime = 0;
      let playPromiss = this.musicEvent.play();
      // this.$refs.music.src = require("assets/audio/"+ index +".mp3"),
      // console.log(this.$refs.music.src);
      // this.musicEvent = document.getElementById("event" + index);
      // this.musicEvent.currentTime = 0;

      // let playPromise = this.musicEvent.play();
      // if (playPromise !== undefined) {
      //   playPromise
      //     .then(() => {
      //       this.musicEvent.play();
      //     })
      //     .catch(() => {
      //       console.log("error");
      //     });
      // }
    }
  }
};
</script>

<style>
.Chime {
  width: 100%;
  height: 100%;
}
.Chime .chime-block {
  display: inline-block;
}
.Chime .chime-block .chime-piece {
  display: inline-block;
}

.Chime .chime-block:nth-of-type(1) .chime-piece img {
  height: 30vw;
}
.Chime .chime-block:nth-of-type(2) .chime-piece img {
  height: 28vw;
}
.Chime .chime-block:nth-of-type(3) .chime-piece img {
  height: 26vw;
}
.Chime .chime-block:nth-of-type(4) .chime-piece img {
  height: 24vw;
}
.Chime .chime-block:nth-of-type(5) .chime-piece img {
  height: 22vw;
}
.Chime .chime-block:nth-of-type(6) .chime-piece img {
  height: 20vw;
}
.Chime .chime-block:nth-of-type(7) .chime-piece img {
  height: 18vw;
}
</style>

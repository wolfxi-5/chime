<template>
  <div>
      <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="../../assets/img/tabbar/play.png" alt="" />
        <img slot="item-icon-active" src="../../assets/img/tabbar/play_active.png" alt="" />
        <div slot="item-text">演奏</div>
      </tab-bar-item>
      <tab-bar-item path="/autocomposed">
        <img slot="item-icon" src="../../assets/img/tabbar/music.png" alt="" />
        <img slot="item-icon-active" src="../../assets/img/tabbar/music_active.png" alt="" />
        <div slot="item-text">自动作曲</div>
      </tab-bar-item>
      <tab-bar-item  path="/forum">
        <img slot="item-icon" src="../../assets/img/tabbar/forum.png" alt="" />
        <img slot="item-icon-active" src="../../assets/img/tabbar/forum_active.png" alt="" />
        <div slot="item-text">论坛</div>
        </tab-bar-item>
      <tab-bar-item  path="/profile">
        <img slot="item-icon" src="../../assets/img/tabbar/profile.png" alt="" />
        <img slot="item-icon-active" src="../../assets/img/tabbar/profile_active.png" alt="" />
        <div slot="item-text">我的</div></tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";

export default {
 name:'MainTabBar',
 components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<style>

</style>
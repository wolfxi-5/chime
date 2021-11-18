<template>
  <div class="Collect">
    <div class="collect-none">

      <p>暂无收藏的内容</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collect"
};
</script>

<style>
.Collect {
  width: 100%;
}
.Collect .collect-none {
  height: calc(100vh - 120px);
}
.Collect .collect-none p {
  padding-top: 40% ;
  text-align: center;
  color: black;
}
</style>

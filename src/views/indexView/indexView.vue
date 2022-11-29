<template>
  <div id="indexView">
    <div class="cancel" @click="calcel()">取消请求</div>
    <div class="cancel" @click="start()">开始</div>
    <div>{{ txt }}</div>
    <div class="anim"></div>
    <ChildView
      :style="
        'margin-top:' +
        len +
        'px;margin-left:200px;background-color: ' +
        color +
        ';'
      "
    ></ChildView>
  </div>
</template>

<script src="./js/indexView.js"></script>
<style lang="less" scoped>
@import "./css/indexView.css";
</style>

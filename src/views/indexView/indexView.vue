<template>
  <div id="indexView">
    <div class="cancel" @click="calcel()">取消请求</div>
    <ChildView :style="'margin-left:' + len + 'px;'"></ChildView>
  </div>
</template>

<script src="./js/indexView.js"></script>
<style lang="less" scoped>
@import "./css/indexView.css";
</style>

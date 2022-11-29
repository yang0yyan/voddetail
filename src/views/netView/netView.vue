<template>
  <div id="netView">
    <myButton class="btn" @click="send()">发送</myButton>
    <myButton class="btn" @click="cancel()">取消</myButton>
  </div>
</template>

<script src="./js/netView.js"></script>
<style lang="less" scoped>
@import "./css/netView.css";
</style>

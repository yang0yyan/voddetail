<template>
  <div id="myToast" role="alert" :style="style">
    <img :src="this.bg" alt="" />
    <div class="message">{{ message }}</div>
  </div>
</template>

<script src="./js/myToast.js"></script>
<style lang="less" scoped>
@import "./css/myToast.css";
</style>

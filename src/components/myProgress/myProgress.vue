<template>
  <div id="myProgress">
    <el-progress
      :percentage="item.progress"
      v-for="(item, index) in fileList"
      :key="index"
    ></el-progress>
  </div>
</template>

<script src="./js/myProgress.js"></script>
<style lang="less" scoped>
@import "./css/myProgress.css";
</style>

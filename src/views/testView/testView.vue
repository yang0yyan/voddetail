<template>
  <div id="testView">
    <myButton
      lable
      type="primary"
      style="width: 76px; margin-left: 20px"
      @click="tableToExcel"
    >
      查询
    </myButton>
  </div>
</template>

<script src="./js/testView.js"></script>
<style lang="less" scoped>
@import "./css/testView.css";
</style>

<template>
  <div id="animView">
    <div style="display: flex">
      <div class="square" :class="className" @click="className = 'anim'"></div>
      <div class="square2" :style="square2Style" @click="square2Click()"></div>
    </div>
    <div class="list" ref="list" @click="listClick()">
      <div class="item" v-for="(item, i) in 30" :key="i">{{ item }}</div>
    </div>
  </div>
</template>

<script src="./js/animView.js"></script>
<style lang="less" scoped>
@import "./css/animView.css";
</style>

<template>
  <div id="myButton" @click="onClick()">
    <div
      class="myButton"
      :class="{
        myButtonSmall: size === 'small',
        myPrimaryButtom: !disabled && type === 'primary',
        myIconButtom: !disabled && type === 'icon',
        myWarningButtom: !disabled && type === 'warning',
        myDisabledButtom: disabled,
        myNormalButtom: !disabled,
      }"
    >
      <span v-if="lable">{{ lable }}</span>
      <slot v-else></slot>
    </div>
  </div>
</template>

<script src="./js/myButton.js"></script>
<style lang="less" scoped>
@import "./css/myButton.css";
</style>

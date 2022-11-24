<template>
  <div id="childView">
    <div class="g-wrap">
      <div class="g-aurora"></div>
    </div>
    <svg>
      <filter id="wave">
        <feTurbulence
          baseFrequency="0.003 0.003"
          id="turbulence"
          numOctaves="3"
          result="noise"
          seed="10"
        />
        <feDisplacementMap
          id="displacement"
          in2="noise"
          in="SourceGraphic"
          scale="96"
        ></feDisplacementMap>
      </filter>
    </svg>
  </div>
</template>

<script src="./js/childView.js"></script>
<style lang="less" scoped>
@import "./css/childView.min.css";
</style>

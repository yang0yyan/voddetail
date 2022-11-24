<template>
  <div id="tableView">
    <div class="myTable">
      <div class="myTableTitle otherItem">
        <div style="flex-grow: 1" class="cell div2">
          <el-checkbox v-model="checked" label=""></el-checkbox>
        </div>
        <div style="flex-grow: 4" class="cell">操作人</div>
        <div style="flex-grow: 4" class="cell">操作IP</div>
        <div style="flex-grow: 4" class="cell">操作类型</div>
        <div style="flex-grow: 4" class="cell">操作表</div>
        <div style="flex-grow: 4" class="cell">操作值</div>
        <div style="flex-grow: 4" class="cell">操作时间</div>
      </div>
      <div class="myTableContent">
        <div
          class="myTableContentItem"
          :class="{ otherItem: index % 2 == 1 }"
          v-for="(item, index) in dataList"
          :key="index"
        >
          <div style="flex-grow: 1" class="cell div2">
            <el-checkbox v-model="checked" label=""></el-checkbox>
          </div>
          <div style="flex-grow: 4" class="cell">
            <p v-if="item.name">{{ item.name }}</p>
            <p v-else>--</p>
          </div>
          <div style="flex-grow: 4" class="cell">
            <p v-if="item.attr1">{{ item.attr1 }}</p>
            <p v-else>--</p>
          </div>
          <div style="flex-grow: 4" class="cell">
            <p v-if="item.attr2">{{ item.attr2 }}</p>
            <p v-else>--</p>
          </div>
          <div style="flex-grow: 4" class="cell">
            <p v-if="item.attr3">{{ item.attr3 }}</p>
            <p v-else>--</p>
          </div>
          <div style="flex-grow: 4" class="cell">
            <p v-if="item.attr4">{{ item.attr4 }}</p>
            <p v-else>--</p>
          </div>
          <div style="flex-grow: 4" class="cell">
            <p v-if="item.attr5">{{ item.attr5 }}</p>
            <p v-else>--</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/tableView.js"></script>
<style lang="less" scoped>
@import "./css/tableView.css";
</style>

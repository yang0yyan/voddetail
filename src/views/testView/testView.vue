<template>
  <div id="testView">
    <el-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</el-button
    >

    <el-dialog
      custom-class="addMgtcDialog my_el-dialog"
      title="选择报道媒体"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div class="filterView">
        <el-input
          v-model="filterInput"
          size="small"
          placeholder="请输入内容"
          @input="nameFilter"
        ></el-input>
        <div class="btn"></div>
      </div>
      <div class="tipView">规范媒体名称</div>
      <div class="listView">
        <div
          class="item"
          :class="{ itemChoose: !(index % 16) }"
          v-for="(item, index) in filterList1"
          :key="index"
        >
          <div class="txt">{{ item }}</div>
        </div>
      </div>
      <div class="tipView">
        规范媒体名称
        <div style="flex-grow: 1"></div>
        <div class="delete" v-if="status === 0" @click="deleteBtn()">删除</div>
        <div class="positive" v-if="status === 0" @click="addBtn()">添加</div>
        <div
          class="negative"
          v-if="status === 1 || status === -1"
          @click="negativeBtn()"
        >
          取消
        </div>
        <div
          class="positive"
          v-if="status === 1 || status === -1"
          @click="positiveBtn()"
        >
          确定
        </div>
      </div>
      <div class="listView2" ref="scrollView">
        <div
          class="item"
          :class="{ itemChoose: !(index % 3) }"
          v-for="(item, index) in filterList2"
          :key="index"
        >
          <div class="txt">{{ item }}</div>
          <div class="delete" @click="deleteOption(index)" v-if="status === -1">
            ×
          </div>
        </div>
        <el-input
          v-if="status === 1"
          class="item"
          v-model="typeInput"
          size="small"
          placeholder="请输入内容"
          @blur="onBlur"
        ></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="negative" @click="handleClose()">取消</div>
        <div class="positive" style="margin-left: 16px" @click="handleClose()">
          确定
        </div>
        <!-- <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false" size="small"
          >确 定</el-button
        > -->
      </span>
    </el-dialog>
  </div>
</template>

<script src="./js/testView.js"></script>
<style lang="less" scoped>
@import "./css/testView.css";
</style>

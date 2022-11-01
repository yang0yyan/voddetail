import { Type } from "./Type";

export default {
  name: "testView",
  data() {
    return {
      // dialog
      dialogVisible: false,
      status: 0,
      list1: [],
      list2: [],
      filterList1: [],
      filterList2: [],
      list2Copy: [],

      filterInput: "",
      typeInput: "",
    };
  },
  // computed: {
  //   filterList1: function () {
  //     // `this` 指向 vm 实例
  //     return this.list1.filter((item) =>
  //       this.input ? item.indexOf(this.input) > -1 : true
  //     );
  //   },
  //   filterList2: function () {
  //     // `this` 指向 vm 实例
  //     return this.list2.filter((item) =>
  //       this.input ? item === this.input : true
  //     );
  //   },
  // },
  mounted() {
    this.nameFilter("");
  },
  created() {
    let t = new Type();
    this.list1 = t.getMediaNameForType("纸媒");
  },
  methods: {
    reset() {
      this.filterInput = "";
      this.negativeBtn();
    },
    deleteBtn() {
      this.status = -1;
      // 保存状态，用于还原
      this.list2Copy = JSON.parse(JSON.stringify(this.list2));
    },
    addBtn() {
      this.status = 1;
      // 保存状态，用于还原
      this.list2Copy = JSON.parse(JSON.stringify(this.list2));
    },
    positiveBtn() {
      this.status = 0;
      // 备份状态
      this.list2Copy = this.list2;
    },
    negativeBtn() {
      this.status = 0;
      // 还原状态
      this.list2 = this.list2Copy;
      this.nameFilter(this.filterInput);
    },
    deleteOption(index) {
      let name = this.filterList2[index];
      this.filterList2.splice(index, 1);
      let index2 = this.list2.indexOf(name);
      if (index2 > -1) {
        this.list2.splice(index2, 1);
      }
    },
    handleClose(done) {
      if (done instanceof Function) {
        done();
      } else {
        this.dialogVisible = !this.dialogVisible;
      }
      this.reset();
    },
    nameFilter(val) {
      this.filterList1 = this.list1.filter((item) =>
        val ? item.indexOf(val) > -1 : true
      );
      this.filterList2 = this.list2.filter((item) =>
        val ? item.indexOf(val) > -1 : true
      );
    },
    onBlur() {
      if (!this.typeInput) return;
      let existence = false;
      existence = this.list1.indexOf(this.typeInput) > -1;
      if (!existence) existence = this.list2.indexOf(this.typeInput) > -1;
      if (!existence) {
        this.list2.push(this.typeInput);
        this.filterList2.push(this.typeInput);
        this.typeInput = "";
      }
      setTimeout(() => {
        this.$refs.scrollView.scrollTop = 999999999999;
      }, 100);
    },
  },
};

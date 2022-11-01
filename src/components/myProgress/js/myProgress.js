export default {
  name: "myProgress",
  data() {
    return {
      fileList: [],
    };
  },
  mounted() {
    this.add(1);
    this.add(1);
    this.add(2);
    this.add(3);
    this.add(4);

    setTimeout(() => {
      this.change(20, 1);
      this.change(40, 2);
      this.change(60, 3);
      this.change(80, 4);
    }, 1000);
  },
  created() {},
  methods: {
    add(id) {
      let index = this.indexOf(this.fileList, id);
      if (index === -1)
        this.fileList.push({
          id,
          progress: 0,
        });
    },
    remove(id) {
      let index = this.indexOf(this.fileList, id);
      if (index > -1) this.fileList.splice(index, 1);
    },
    change(progress, id) {
      let index = this.indexOf(this.fileList, id);
      if (index > -1) this.fileList[index].progress = progress;
    },
    indexOf(arr, value) {
      let index = -1;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === value) {
          index = i;
        }
      }
      return index;
    },
  },
};

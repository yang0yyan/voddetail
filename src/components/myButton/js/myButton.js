export default {
  name: "myButton",
  data() {
    return {};
  },
  props: {
    lable: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "normal",
    },
    size: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {},
  created() {},
  methods: {
    onClick() {
      if (this.disabled === true) return;
      this.$emit("click", "");
    },
  },
};

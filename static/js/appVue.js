//根组件 vue app
var app = new Vue({
  el: "#appVue",
  router: router,
  components: {
    "input-vue": inputVue,
  },
  data: {
    headTitle: "首页!!!",
    outContext: "",
    activeIndex: "/home",
  },
  methods: {
    handleSelect(key, keyPath) {
      // this.activeIndex=keyPath
      // console.log(key, keyPath)
      if (key=="/home"){
        this.headTitle="首页"
      }
      if (key=="/menu"){
        this.headTitle="目录"
      }
      if (key=="/context"){
        this.headTitle="详情"
      }
      document.title = this.headTitle
    },
  }
});

//根组件 vue app
var app = new Vue({
  el: "#appVue",
  router: router,
  components: {
    "input-vue": inputVue,
  },
  data: {
    headTitle: "helloworld!!!",
    outContext: "",
    activeIndex: "/home",
  },
  methods: {
    handleSelect(key, keyPath) {
      // this.activeIndex=keyPath
      // console.log(key, keyPath)
    },
    checkout(){
      this.activeIndex="/context"
    }
  }
});

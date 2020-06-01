var inputVue = {
  template: "#inputTemplate",
  data: function () {
    return {
      filename: "",
    };
  },
  methods: {
    chooseFile() {
      var input = document.getElementById("file");
      var reader = new FileReader();
      var file = input.files[0];
      reader.readAsText(file);
      reader.onload = function () {
        document.getElementById("input").value = this.result;
      };
      this.filename = input.files[0].path;
    },
  },
};
var Home =new Vue (
  {
    el: "#home",
    data: function () {
      return {};
    },
  }
);

//根组件 vue app
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [{ path: "/home", component: Home },{ path: "/bar", component: Bar }];
const router = new VueRouter({
  routes,
});

var app = new Vue({
  el: "#appVue",
  router:router,
  components: {
    "input-vue": inputVue,
  },
  data: {
    headTitle: "helloworld!!!",
    outContext: "",
  },
});

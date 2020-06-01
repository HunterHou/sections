
var homeHtml = '<div>'
    + ' <el-form label-width="100px">'
    + ' <input-vue></input-vue>'
    + '</el-form>'
    + '</div>'

var homeVue = {
    template: homeHtml,
    components: {
        "input-vue": inputVue,
    },
    data: function () {
        return {}
    },
    methods:{
    }
}



var menuhtml = '<div><h1>目录</h1>'
    + '<ul>'
    + '<li v-for="(item,index) in datas" :key="datas.index">'
    + '<el-link @click="open(item)">{{ item }}</el-link> '
    + '<hr v-if="(index+1)%3 ==0" >'
    + '</li>'
    + '</ul>'
    + '</div>'

var menu = {

    template: menuhtml,
    data: function () {
        return {
            datas: ""
        }
    },
    mounted: function () {
        document.title = "目录"
        this.datas = dataLib
    },
    methods: {
        open(filename) {
            var self = this
            console.log(filename)
            self.$router.push("/context/" + filename)


        }
    }

}
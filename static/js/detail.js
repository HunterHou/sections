var detailHtml = '<div>'
    + '<el-page-header @back="goBack"  title="返回" v-bind:content="title"></el-page-header>'
    + '<div v-if="title">'
    + '<h1>{{title}}</h1>'
    + '<el-button style="float: left; left:0px;" @click="lastPage" class="floatButton" icon="el-icon-back"></el-button>'
    + '<el-button style="float: right; right:0px;" @click="nextPage" class="floatButton" icon="el-icon-right"></el-button>'
    + '<br>'
    + '<p v-html="context"></p>'
    // + '<el-button style="float: left; " @click="lastPage" class="floatButton" icon="el-icon-back">上一页</el-button>'
    // + '<el-button style="float: right; " @click="nextPage" class="floatButton" icon="el-icon-right">下一页</el-button>'
    + '</div></div>'
var detail = {
    template: detailHtml,
    data: function () {
        return {
            title: "",
            context: ""
        }
    },
    mounted: function () {
        var self = this
        var filename = self.$route.params.id
        var data = { "Code": FindOne, "Message": filename }
        astilectron.sendMessage(JSON.stringify(data), function (message) {
            console.log("send callback: " + message.Code)
            curData = message.Data
            document.title = curData.Title
            self.title = curData.Title
            self.context = curData.Context

        });
    },
    methods: {
        load(filename) {

        },
        goBack() {
            history.back()
        },
        lastPage() {
            var self = this
            var index = dataLib.indexOf(this.title)
            index = index > 1 ? index - 1 : index
            var filename = dataLib[index]
            console.log(filename)
            var data = { "Code": FindOne, "Message": filename }
            astilectron.sendMessage(JSON.stringify(data), function (message) {
                console.log("send callback: " + message.Code)
                curData = message.Data
                document.title = curData.Title
                self.title = curData.Title
                self.context = curData.Context

            });
        },
        nextPage() {
            var self = this
            var index = dataLib.indexOf(this.title)
            index = index < dataLib.length - 1 ? index + 1 : index
            var filename = dataLib[index]
            console.log(filename)
            var data = { "Code": FindOne, "Message": filename }
            astilectron.sendMessage(JSON.stringify(data), function (message) {
                console.log("send callback: " + message.Code)
                curData = message.Data
                document.title = curData.Title
                self.title = curData.Title
                self.context = curData.Context

            });
        }
    }
}
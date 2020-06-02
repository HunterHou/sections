var detailHtml = '<div>'
    + '<el-page-header @back="goBack"  title="返回" v-bind:content="title"></el-page-header>'
    + '<h1>{{title}}</h1>'
    + '<p v-html="context"></p>'
    + '</div>'
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
        var data = {"Code": FindOne, "Message": filename}
        astilectron.sendMessage(JSON.stringify(data), function (message) {
            console.log("send callback: " + message.Code)
            curData = message.Data
            document.title = curData.Title
            self.title = curData.Title
            self.context = curData.Context

        });
    },
    methods: {
        goBack() {
            history.back()
        }
    }
}
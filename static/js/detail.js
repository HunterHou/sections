var detailHtml = '<div><h1>{{title}}</h1>'
detailHtml += '<p v-html="context"></p></div>'
var detail = {
    template: detailHtml,
    data: function () {
        return {
            title: "",
            context: ""
        }
    },
    mounted: function () {

        if (curData) {
            this.title = curData.Title
            this.context = curData.Context
        }
    }
}
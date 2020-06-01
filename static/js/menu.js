var menuhtml = '<div><h1>目录</h1>'
    + '<ul>'
    + '    <li v-for="Title in datas" :key="datas.index">'
    + '<a @click="open(Title)">{{ Title }}</a> '
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
    mounted:function () {
        this.datas=dataLib
    },
    methods:{
        open(filename){
            var self =this
            console.log(filename)
            var data = {"Code":FindOne, "Message": filename}
            astilectron.sendMessage(JSON.stringify(data), function (message) {
                console.log("send callback: " + message.Code)
                curData = message.Data
                document.getElementById("curTab").value = "/context"
                self.$root.activeIndex =[ "/context"]
                self.$router.push("/context")
            });

        }
    }

}
//发送消息
//处理消息
document.addEventListener('astilectron-ready', function () {
    astilectron.onMessage(function (message) {
        var data = message
        if (data.Code == ChooseFile) {
            dataLib = data.Data
        }
        if (data.Code == FindOne) {
            curData = data.Data
        }
        return "success"
    });
})


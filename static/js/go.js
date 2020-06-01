//发送消息
//处理消息
document.addEventListener('astilectron-ready', function () {
    astilectron.onMessage(function (message) {
        var data = message
        if(data.Code == ChooseFile){
            dataLib = data.Data
        }
        if(data.Code == FindOne){
            curData = data.Data
        }
        // success(data.Message)
        alert(data.Code)
        return "success"
    });
})

function go(code,msg) {
    if (code) {
        var data = {"Code":code, "Message": msg}
        astilectron.sendMessage(JSON.stringify(data), function (message) {
            console.log("send callback: " + message.Code)
        });
    }
}

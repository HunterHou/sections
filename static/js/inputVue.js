var inputHtml = '<div>'
    + '<el-form-item label="选择">'
    + ' <input type="file" id="file" v-on:change="chooseFile(this)" />'
    + '</el-form-item>'
    + '<el-form-item>'
    + ' <el-col :span="4" class="label">你选择了</el-col>'
    + ' <el-col :span="20">{{filename}}</el-col>'
    + '</el-form-item>'
    + '<el-form-item>'
    + ' <el-col :span="4" class="label">input:</el-col>'
    + '<el-col :span="20">'
    + ' <textarea id="input" onchange="reactText()" style="width: 100%; height: 100%; min-height: 250px;"></textarea>'
    + ' </el-col>'
    + '</el-form-item>'
    + '</div>'

var inputVue = {
    template: inputHtml,
    data: function () {
        return {
            filename: "",
        };
    },
    methods: {
        chooseFile() {
            var self = this
            var input = document.getElementById("file");
            var reader = new FileReader();
            if (!input || input.files.length == 0) {
                this.filename = ""
                return
            }
            var file = input.files[0];
            reader.readAsText(file);
            // reader.onload = function () {
            //     document.getElementById("input").value = this.result;
            // };
            this.filename = input.files[0].path;
            var data = { "Code": ChooseFile, "Message": this.filename }
            astilectron.sendMessage(JSON.stringify(data), function (message) {
                self.$notify({
                    type: "success",
                    message: "解析成功"
                })
                self.$router.push("/menu")
            });

        },
    },
};
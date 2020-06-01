function success(msg) {
    selfAlert(msg, "alert-success", true)
}

function fail(msg) {
    selfAlert(msg, "alert-danger", false)
}

function selfAlert(msg, clazz, autoClose) {
    var nodeId = new Date().getTime()
    var div = document.createElement("div")
    div.setAttribute("id", nodeId)
    var html = "<div  class=\"msg alert " + clazz + " alert-dismissable\">\n" +
        "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\"\n" +
        "            aria-hidden=\"true\">\n" +
        "        &times;\n" +
        "    </button>\n" +
        msg + "   \n" +
        "</div>";
    document.getElementById("msg").append(div)
    document.getElementById(nodeId).innerHTML = html
    if (autoClose) {
        setTimeout(function () {
            document.getElementById(nodeId).remove()
        }, "4000");
    }

}
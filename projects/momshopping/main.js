$("#add").click(addItem);
$("#del").click(delItem);

var trNum = 0;

function addItem(item) {
    var item = $("#nextitem").val();
    trNum++;
    if (item == "") {
        alert("Please enter an item");
        return
    }
    $("#list").append(`       
        <tr id="tr` + trNum + `">
            <td class="delete">
                <input type="checkbox" id="box` + trNum + `">
            </td>
            <td class="item">
                ` + item + `
            </td>
        </tr>`);
    $("#nextitem").val("");
    $("#nextitem").focus();
};

function delItem() {
    var parent = $("#list");
    for (var i = 1; i <= trNum; i++) {
        if ($("#box" + i).prop("checked") === true) {
            $("#tr" + i).remove();
            //            parent.removeChild(child);
        }
    }
}

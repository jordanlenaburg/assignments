//Event listeners for buttons

$("#get-list").click(getList);
$("#add").click(addToList);
$("#update").click(updateToDo);
$("#del").click(delToDo);
$("body").on('click', '.deleter', updateVals);



var newTodo = {
    title: $("#title").val(), // this one is the only thing that is actually required
    description: $("#desc").val(),
    price: $("#price").val(), // Must be a number of some kind (integer or float)
    imgUrl: $("#img-url").val(),
    completed: $("#completed").val(), // must be a boolean (true or false). If nothing provided, defaults to false.
    id: $("#bounty-id").val()
};

var newTodo = {};
var bountyId = "";

function estVar() {
    var completeCheck = false;
    if ($("#completed").prop("checked") === false) {
        completeCheck = true;
    };
    if ($("#price").val() === "") {
        $("#price").val(0);
    };
    newTodo = {
        "title": $("#title").val(),
        "description": $("#desc").val(),
        "price": parseInt($("#price").val()),
        "imgUrl": $("#img-url").val(),
        "completed": completeCheck,
    };
    bountyId = $("#bounty-id").val();
    console.log(bountyId);
}
getList();

var jData = {};

function updateVals() {
    console.log(jData);
    var selector = parseInt(this.id);
    for (var i = 0; i <= selector; i++) {
        $("#title").val(jData[i].title);
        $("#desc").val(jData[i].description);
        $("#price").val(jData[i].price);
        $("#img-url").val(jData[i].imgUrl);
        $("#bounty-id").val(jData[i]._id);
    }
}

//////////////////////////////////
// AJAX JQuery for POST and GET //
//////////////////////////////////

function getList() {
    var itemIndex = 0;
    $.ajax({
        url: "https://api.vschool.io/jordanlenaburg/todo",
        type: "GET",
        dataType: "json",
        success: function (JSON) {
            var finalInfo = `<tr>
                <th class="table-check">X</th>
                <th class="table-title">Title</th>
                <th class="table-desc">Description</th>
                <th class="table-price">Price</th>
                <th class="table-img">Image</th>
                <th class="table-status">Status</th>
                <th class="table-id">Bounty ID</th>
            </tr>`
            var data = JSON;
            jData = data;
            for (var i = 0; i < data.length; i++) {
                if (data[i].imgUrl === "") {
                    var image = "No Image"
                } else {
                    var image = `<a href="` + data[i].imgUrl + `" target="_blank"><img class="small-img" src="` + data[i].imgUrl + `" /></a>`
                };
                if (data[i].completed === true) {
                    var done = "Complete";
                    var strikethrough = "strikethrough";
                } else {
                    var done = "Incomplete";
                    var strikethrough = "";
                };
                finalInfo += `     
            <tr>
                <td class="table-check"><input type="radio" class="deleter" name="deleter" id="` + itemIndex + `"></td>
                <td class="table-title ` + strikethrough + `">` + data[i].title + `</td>
                <td class="table-desc ` + strikethrough + `">` + data[i].description + `</td>
                <td class="center table-price ` + strikethrough + `">` + data[i].price + `</td>
                <td class="center table-img ` + strikethrough + `">` + image + `</td>
                <td class="center table-status ` + strikethrough + `">` + done + `</td>
                <td class="table-id ` + strikethrough + `">` + data[i]._id + `</td>
            </tr>`;
                $("#list").html(finalInfo);
                itemIndex++
            }
            $("#title").val("");
            $("#desc").val("");
            $("#price").val("");
            $("#img-url").val("");
            $("#bounty-id").val("");
        }
    })
}

function addToList() {
    estVar();
    if ($("#title").val() === "") {
        alert("Please enter a title");
        return
    };
    $.ajax({
        type: "POST",
        url: "https://api.vschool.io/jordanlenaburg/todo",
        data: newTodo,
        dataType: "JSON",
        success: function () {
            alert("Successfully posted Bounty");
            getList();
        }
    })
}

////////////////////////////
// XHR for PUT and DELETE //
////////////////////////////
var xhr = new XMLHttpRequest();

function updateToDo() {
    estVar();
    if ($("#title").val() === "") {
        alert("Please enter a title");
        return
    };
    if ($("#bounty-id").val() === "") {
        alert("Please select an existing bounty");
        return
    }
    newTodo._id = bountyId;
    xhr.open("PUT", "https://api.vschool.io/jordanlenaburg/todo/" + bountyId, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(newTodo));
    setTimeout(getList, 500);
}

function delToDo() {
    estVar();
    if ($("#title").val() === "") {
        alert("Please enter a title");
        return
    };
    newTodo._id = bountyId;
    console.log(newTodo._id);
    xhr.open("DELETE", "https://api.vschool.io/jordanlenaburg/todo/" + bountyId, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    setTimeout(getList, 1000);
}

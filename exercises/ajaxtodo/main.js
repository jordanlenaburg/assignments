//Event listeners for buttons

$("#get-list").click(getList);
$("#add").click(addToList);
$("#update").click(updateToDo);
$("#del").click(delToDo);
$(".deleter").click(updateVals);



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

function updateVals() {
    $(this).
    //    var parent = $("#list");
    //    for (var i = 1; i <= trNum; i++) {
    //        if ($("#box" + i).prop("checked") === true) {
    //            $("#tr" + i).remove();
    //        }
    //    }
}

//////////////////////////////////
// AJAX JQuery for POST and GET //
//////////////////////////////////

function getList() {
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
            for (var i = 0; i < data.length; i++) {
                if (data[i].imgUrl === "") {
                    var image = "No Image"
                } else {
                    var image = `<img class="small-img" src="` + data[i].imgUrl + `" />`
                };
                if (data[i].completed === true) {
                    var done = "Complete";
                } else {
                    var done = "Incomplete";
                };
                finalInfo += `     
            <tr>
                <td class="table-check"><input type="radio" class="deleter" name="deleter"></td>
                <td class="table-title">` + data[i].title + `</td>
                <td class="table-desc">` + data[i].description + `</td>
                <td class="center table-price">` + data[i].price + `</td>
                <td class="center table-img">` + image + `</td>
                <td class="center table-status">` + done + `</td>
                <td class="table-id">` + data[i]._id + `</td>
            </tr>`;
                $("#list").html(finalInfo);
            }
        }
    })
}

function addToList() {
    estVar();
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
    newTodo._id = bountyId;
    xhr.open("PUT", "https://api.vschool.io/jordanlenaburg/todo/" + bountyId, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(newTodo));
    getList();
}

function delToDo() {
    estVar();
    newTodo._id = bountyId;
    xhr.open("DELETE", "https://api.vschool.io/jordanlenaburg/todo/" + bountyId, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    getList();
}



//var finalInfo = "";
//
//xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
//xhr.send();
//
//xhr.onreadystatechange = function parsePokemon() {
//    if (xhr.readyState === 4 && xhr.status === 200) {
//        var data = JSON.parse(xhr.responseText);
//        console.log(data.objects[0].pokemon);
//        for (var i = 0; i < data.objects[0].pokemon.length; i++) {
//            finalInfo += "{<br>name: " + data.objects[0].pokemon[i].name + "<br>resource_uri: " + data.objects[0].pokemon[i].resource_uri + "<br>}<br>";
//            document.getElementById("results").innerHTML = finalInfo;
//
//        }
//    }
//}

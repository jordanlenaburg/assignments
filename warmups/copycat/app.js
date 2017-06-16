obj = {
    name: "joe",
    age: 42,
    status: "active",
    alive: true
};

function copycat(obj) {
    var newObj = {};
    for (prop in obj) {
        console.log(obj[prop]);
        newObj[prop] = obj[prop]
    }
    return newObj
}

var newObj = copycat(obj);
newObj.alive = false;
console.log(obj);
console.log(newObj);
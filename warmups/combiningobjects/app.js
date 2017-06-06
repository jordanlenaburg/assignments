/**
 * Created by jordanlenaburg on 6/6/17.
 */

var people = [
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 10
    },
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 30
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        numFriends: 200
    },
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 30
    }
]
var combinedList = [];
function combineUsers (people){

    for (var i = 0; i < people.length; i++) {
        var newlist = people.filter(function (people[i]) {
            return
        })

        for (var j = 1; j < people.length; j++) {
            // console.log(people[i]);
            // console.log(people[j]);
            if (people[i].name === people[j].name && people[i].email === people[j].email) {
                people[i].numFriends += people[j].numFriends;
                combinedList = people.slice(i, j);
            }
        }
    }

}

combineUsers(people);

console.log(people);
console.log(combinedList);
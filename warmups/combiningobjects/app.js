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

function combineUsers(people) {
    for (var i = 0; i < people.length; i++) {
        var person = people[i]
        for (var j = i + 1; j < people.length; j++) {
            if (person !== people[j]) {
                var secondPerson = people[j];
            }
            
            filteredList[0].numFriends += filteredList[j].numFriends;
        }
}

}

combineUsers(people);

console.log(people);
// console.log(combinedList);
function fixUsers(arr) {
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i].email === arr[j].email) {
                temp = arr[j];
                break;
            }
        }
        if (arr[i] !== temp) {
            console.log("friends", arr[i].numFriends);
            if (arr[i].name === temp.name) {
                for (key in temp) {
                    if (key === "name" || key === "email") {
                        continue;
                    } else {
                        arr[i][key] += temp[key];
                    }
                }
                arr.splice(j, 1);
                i--;
            }       
        }
    }
    return arr;
}

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
    }
]

console.log(fixUsers(people));
var express = require("express");
var app = express();

var map = require("./map");

var router = express.Router({
    mergeParams: true
});

app.use(/^\/([nsew]+)/, router);

//app.use("/", router);


router.get("/plot", function(req, res) {
    console.log(req.params[0]);
    var directions = req.params[0];
    var output = "You plan to travel: ";
    var directLength = directions.length;
    for (var i=0; i<directLength; i++) {
        var direction = directions[i];
        if (direction == "n") {
            output += "north";
        }
        else if (direction == "s") {
            output += "south";
        }
        else if (direction == "w") {
            output += "east";
        }
        else if (direction == "e") {
            output += "west";
        }

        if (i != directLength - 1) {
            output += ", then "
        }
    }
    return res.send(output + ".");
});

router.get("/travel", function(req, res) {
    var position = [3, 4];
    var directions = req.params[0];
    for (var i=0; i<directions.length; i++) {
        var direction = directions[i];
        if (direction == "n") {
            position[0] -= 1;
        }
        else if (direction == "s") {
            position[0] += 1;
        }
        else if (direction == "w") {
            position[1] -= 1;
        }
        else if (direction == "e") {
            position[1] += 1;
        }

        console.log(position[0], position[1]);
        if (position[0] < 0 || position[0] >= map.length ||
            position[1] < 0 || position[1] >= map[0].length) {
            return res.send("You are lost in the wilderness");
        }

        var result = map[position[0]][position[1]];

        if (result == "m") {
            return res.send("You have been eaten by a Grue");
        }
        else if (result == "e") {
            return res.send("You have reached the exit");
        }
    }
    return res.send("You are safe... for now");
});

app.listen(3000, function() {
    console.log("Listening on port 3000!")
})
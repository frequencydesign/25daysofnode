var express = require('express');
var app = express();

var router = express.Router({
    mergeParams: true
});

app.use("/", router);

router.get("/plot", function(req, res) {
    console.log("Plotting journey");
});


/*
app.get("/", function (req, res) {
    res.send("Hello World");
});
*/

app.listen(3000, function() {
    console.log("Listening on port 3000!")
})
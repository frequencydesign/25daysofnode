var express = require("express");
var app = express();

app.get("/:firstname/:lastname", function(req, res) {
	var firstName = req.params.firstname;
	var lastName = req.params.lastname;
	//res.send("Hello " + firstName + " " + lastName);
	res.json({Person: firstName + " " + lastName});
});

app.get("/jedi/:firstname/:lastname", function(req, res) {
	var firstName = req.params.firstname;
	var lastName = req.params.lastname;
	var jediName = lastName.slice(0, 3) + firstName.slice(0, 2)
	//res.send("Hello Jedi " + jediName);
	res.json({Jedi: jediName});
});

app.listen(3000, function() {
	console.log("Example app listening on port 3000!");
});
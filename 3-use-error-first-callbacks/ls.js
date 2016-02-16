var fs = require("fs");

var listDirectory = function(directory) {
    fs.readdir(process.argv[2] || ".", function(err, files) {
        if (err) {
            console.log("No such file or directory");
            return;
        }
        console.log(files);
    });
};

fs.lstat(process.argv[2] || ".", function(err, stats) {
    if (err) {
        console.log("No such file or directory");
        return;
    }

    if (stats.isDirectory()) {
        listDirectory(process.argv[2]);
    }
    else {
        console.log(process.argv[2]);
    }
});
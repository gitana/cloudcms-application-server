var server = require("cloudcms-server/server");

// set up any after callbacks here
server.after(function(app, callback) {
    callback();
});

// report
server.report(function(callback) {

    console.log("");
    console.log("Web Server: http://localhost:" + process.env.PORT);
    console.log("");

    callback();

});

// start the server
server.start({
    "setup": "single",
    "virtualHost": {
        "enabled": false
    },
    "wcm": {
        "enabled": false,
        "cache": false
    }
});
var server = require("cloudcms-server/server");

/*
// set up any after callbacks here
server.after(function(app, callback) {
    callback();
});
*/

/*
// register any routes here
server.routes(function(app, callback) {
    app.use("/articles", function(req, res, next) {

        // get the Cloud CMS branch
        req.branch(function(err, branch) {

            // query for nodes
            branch.queryNodes({
                "_type": "my:article"
            }).then(function() {
                res.json(this);
            });

        });
    });

    // fire this when you're done setting up routes
    callback();
});
*/


// report
server.report(function(callback) {

    console.log("");
    console.log("Cloud CMS Application Server running on port: " + process.env.PORT);
    console.log("");

    callback();

});

// start the server
server.start();
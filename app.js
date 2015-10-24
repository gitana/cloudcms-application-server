var server = require("cloudcms-server/server");

var frameworkControllers = require("cloudcms-server/framework/controllers");
var frameworkSockets = require("cloudcms-server/framework/sockets");

// use the special "net-production" configuration
if (!process.env.CLOUDCMS_STORE_CONFIGURATION) {
    //process.env.CLOUDCMS_STORE_CONFIGURATION = "net-production";
    
    // TODO: for now, fall back to net-development since we rely on the /hosts directory
    process.env.CLOUDCMS_STORE_CONFIGURATION = "net-development";
}

/**
 * Default route handlers
 */
server.routes(function(app, callback) {
    frameworkControllers.init(app, function(err) {
        callback(err);
    });
});

/**
 * Default socket handlers
 */
server.sockets(function(socket, callback) {
    frameworkSockets.init(socket, function(err) {
        callback(err);
    });
});

// after
server.after(function(app, callback) {
    callback();
});

// report
server.report(function(callback) {
    
    console.log("");
    console.log("Cloud CMS Presentation Server started! (v" + process.env.CLOUDCMS_APPSERVER_PACKAGE_VERSION + ")");
    console.log("");
            
    var cpuCount = require('os').cpus().length;
    
    // provide some debug info
    console.log("");
    console.log("Node Version: " + process.version);
    console.log("Server Mode: " + process.env.CLOUDCMS_APPSERVER_MODE);
    console.log("Server Base Path: " + process.env.CLOUDCMS_APPSERVER_BASE_PATH);
    console.log("Gitana Scheme: " + process.env.GITANA_PROXY_SCHEME);
    console.log("Gitana Host: " + process.env.GITANA_PROXY_HOST);
    console.log("Gitana Port: " + process.env.GITANA_PROXY_PORT);
    console.log("CPU Count: " + cpuCount);
    console.log("Virtual Hosting domain: " + process.env.CLOUDCMS_DOMAIN);
    console.log("Store Configuration: " + process.env.CLOUDCMS_STORE_CONFIGURATION);
    console.log("Broadcast Provider: " + process.env.CLOUDCMS_BROADCAST_TYPE);
    console.log("Cache Provider: " + process.env.CLOUDCMS_CACHE_TYPE);
    console.log("Temp Directory: " + process.env.CLOUDCMS_TEMPDIR_PATH);
    console.log("LaunchPad Mode: " + process.env.CLOUDCMS_LAUNCHPAD_SETUP);
    
    console.log("");        
    console.log("Web Server: http://localhost:" + process.env.PORT);
    console.log("");        
    
    callback();
    
});

// start the server
var config = {
    "setup": "single",
    "virtualHost": {
        "enabled": true
    },
    "wcm": {
        "enabled": true,
        "cache": false
    },
    "serverTags": {
        "enabled": true
    },
    "autoRefresh": {
        "log": true
    },
    "insight": {
        "enabled": true
    }            
};

server.start(config);

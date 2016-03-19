# Cloud CMS Application Server

The Cloud CMS Application Server is an open-source, Node.js powered server that provides facilities for building
web applications and API tiers that connect to Cloud CMS.

Applications built using the application server can be run standalone to serve content from Cloud CMS.
The application server provides for fast content retrieval, CDN-friendly caching and other performance optimizations 
that you would want from an application server tier.  It also supports templates, layouts and tags for rendering 
content-driven pages on the fly.

This repository provides two examples that serve as starting points for your own apps:

- <code>/standalone</code> - a standalone Node.js application
- <code>/docker</code> - a sample Dockerfile for building your own Docker images to host your application


## Docker

Make sure you have Docker installed for your platform.  If you're on a Mac, make sure you've started the Docker Machine
and are running in a connected terminal.

You can build the image like this:

    docker build -t myappserver .
    
And then launch it like this:

    docker run -t -p 80:8080 myappserver

As an example of how you might use this in the real world, you do something like this:
    
    docker run -t -i -p 8080:80 -v $(pwd)/public:/var/app/current/public myappserver

This will expose your Node app on port 8080 and will mount the public directory.  You can then open a web browser to:

    http://<dockerHost>:8080
        
Where <dockerHost> is the domain name or IP address of your docker machine.


## Documentation

For more information see:
    [http://www.cloudcms.com/documentation/application-server.html](http://www.cloudcms.com/documentation/application-server.html)

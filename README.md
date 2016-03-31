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

    docker run -t -p 80:80 myappserver
    
This maps the Docker container's port 80 to 80 on your running Docker Machine.  You can then access the running
app by going to:

    http://<dockerMachineIpAddress>

Where <dockerMachineIpAddress> is the IP address or domain name of your Docker instance.  If you're using Docker
Machine, then you can find this by running:

    docker-machine ip


### Developing against Docker

In terms of development, it's often beneficial to make changes within a local IDE and see those changes show up in
your Docker container right away.  There are two good approaches:

1.  Mount the public directory so that HTML, CSS and JS changes are picked up.

    docker run -t -i -p 80:80 -v $(pwd)/src/public:/var/app/current/public myappserver
    
This approach lets you make live changes to the public directory and see them show up right away.  There is no need to
restart your Docker container.

2.  If you make changes to any server-side JS, rebuild your image and redeploy the container, like this:

    docker build -t myappserver .
    docker run -t -i -p 80:80 -v $(pwd)/src/public:/var/app/current/public myappserver
    


## Documentation

For more information see:
    [https://www.cloudcms.com/documentation/application-server.html](https://www.cloudcms.com/documentation/application-server.html)

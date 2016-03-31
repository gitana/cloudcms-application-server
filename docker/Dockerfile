#
# Cloud CMS Application Server Dockerfile
#
# Copyright 2016 Gitana Software, Inc.
#

FROM            fedora:latest

MAINTAINER Cloud CMS <support@cloudcms.com>

#
# Base Configuration
#

RUN dnf install -y initscripts wget zip unzip tar lsof procps tar bzip2
RUN rm -fr /var/cache/*
# max out file handles
RUN echo "root soft nofile 64000" >> /etc/security/limits.conf
RUN echo "root hard nofile 64000" >> /etc/security/limits.conf


#
# Install Node.js 5.6.0
#

RUN mkdir -p /opt/node
RUN wget -N http://nodejs.org/dist/v5.6.0/node-v5.6.0-linux-x64.tar.gz -O ~/node-v5.6.0-linux-x64.tar.gz
RUN tar xvf ~/node-v5.6.0-linux-x64.tar.gz -C /opt/node --strip-components=1
RUN rm -r ~/node-v5.6.0-linux-x64.tar.gz
ENV PATH $PATH:/opt/node/bin
ENV PORT 80
RUN ln -s /opt/node/bin/node /usr/bin/node
RUN ln -s /opt/node/bin/npm /usr/bin/npm
EXPOSE 80


#
# Install app.js and build it
#

RUN mkdir -p /var/app/current
WORKDIR /var/app/current
COPY src/package.json /var/app/current
RUN npm install --production
COPY src/ /var/app/current


#
# Set up the entry point and configure cmd
#

COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["app"]

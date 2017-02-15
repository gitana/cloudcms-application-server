#
# Cloud CMS Application Server Dockerfile
#
# Copyright 2016 Gitana Software, Inc.
#

FROM cloudcms/base-node:3.1.354

MAINTAINER Cloud CMS <support@cloudcms.com>

# copy in package.json and build
COPY src/package.json /var/app/current
RUN npm install --production

# copy in gitana.json
COPY gitana.json /var/app/current

# copy in assets from src
COPY src/ /var/app/current


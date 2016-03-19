#!/bin/bash
set -e

if [ "$1" = "app" ]; then

    # start node
    node app

else

    exec "$@"

fi
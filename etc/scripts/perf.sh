#!/bin/bash

URL=${1}

set -a [ -f ./.env ] && . ./.env && set +

URI="http://${SERVER_HOST}:${SERVER_PORT}/${URL}"

autocannon -c 10 "${URI}"

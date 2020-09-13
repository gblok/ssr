#!/bin/bash

sh etc/scripts/build.sh

set -a [ -f ./.env ] && . ./.env && set +

echo "${PAD}" CLINIC DOCTOR "${PAD}"

clinic doctor --on-port 'autocannon localhost:$PORT' -- node "${DIST}/server"

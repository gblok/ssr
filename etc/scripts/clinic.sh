#!/bin/bash

sh etc/scripts/build.sh

set -a [ -f ./.env ] && . ./.env && set +

echo "${PAD}" CLINIC DOCTOR "${PAD}"

clinic doctor --autocannon [ -c 10 ./ ] -- node "${DIST}/server"

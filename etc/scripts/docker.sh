#!/bin/bash

set -a [ -f ./.env ] && . ./.env && set +

echo "${PAD} DOCKER DEPENDENCY ${PAD}"

COMPOSE=etc/docker
PG=${COMPOSE}/pg.yml
SCYLLA=${COMPOSE}/scylla.yml

#docker-compose -f "${Pg}" up -d --remove-orphans

#docker-compose -f "${Scylla}" -f "${Pg}" up -d --remove-orphans

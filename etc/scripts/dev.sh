#!/bin/bash

set -a [ -f ./.env ] && . ./.env && set +

echo "${PAD}" DEV SERVER "${PAD}"

mkdir -p "${DIST}"

CONFIG=${DIST}/dev.json
SERVER=src/server/index.js


cat <<EOM >"${CONFIG}"
{
"restartable": "rs",
"verbose": false,
"colours": true,
"stdin": true,
"stdout": true,
"watchInterval": 2000,
"events": {
    "restart": "Server restart..."
},
"ignore": [
    "node_modules"
],
"watch": [
   "src"
],
"env": {
    "NODE_ENV": "development",
    "NODE_OPTIONS": "--max-old-space-size=${NODE_MAX_OLD_SPACE} --trace-warnings",
    "DEBUG": true
},
"execMap": {"js": "babel-node"}
}
EOM

#cat "${CONFIG}"

nodemon --config "${CONFIG}" "${SERVER}"

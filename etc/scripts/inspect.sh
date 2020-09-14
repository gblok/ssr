#!/bin/bash

sh etc/scripts/build.sh

set -a [ -f ./.env ] && . ./.env && set +

echo "$PAD INSPECT SERVER $PAD"

mkdir -p "$DIST"
SERVER=src/server/index

babel-node --max-old-space-size="$NODE_MAX_OLD_SPACE" --trace-warnings "$SERVER"

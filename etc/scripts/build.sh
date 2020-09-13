#!/bin/bash

set -a [ -f ./.env ] && . ./.env && set +

echo "${PAD}" BUILD SERVER "${PAD}"

babel "${SRC}" -d "${DIST}"

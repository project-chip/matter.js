#!/bin/bash

# @license
# Copyright 2022-2024 Matter.js Authors
# SPDX-License-Identifier: Apache-2.0

set -e

die() {
    echo "Error: $1" >&2
    exit 1
}

if [ -z "${TESTS}" ]; then
    die "TESTS environment variable must specify tests"
fi

if [ -z "${ALL_CLUSTERS}" ]; then
    die "ALL_CLUSTERS environment variable must specify \"all clusers\" implementation"
    exit 1
fi

if [ -z "${BRIDGE}" ]; then
    die "BRIDGE environment variable must specify bridge implementation"
fi

source ~/.nvm/nvm.sh >/dev/null
cd /matter.js
node /matter.js/packages/tools/bin/prepare-chip.js

cd /connectedhomeip
source scripts/activate.sh >/dev/null

scripts/tests/run_test_suite.py \
    --runner chip_tool_python \
    --log-level info \
    --target-glob "{$TESTS}" \
    run \
    --keep-going \
    --pics-file /pics.properties \
    --all-clusters-app "${ALL_CLUSTERS}" \
    --bridge-app "${BRIDGE}"

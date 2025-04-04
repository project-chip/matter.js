# @license
# Copyright 2022-2025 Matter.js Authors
# SPDX-License-Identifier: Apache-2.0

set -e

export CHIP_ARCH=$(docker inspect --format '{{ .Architecture }}' ghcr.io/matter-js/chip)
export CHIP_PLATFORM="linux/$CHIP_ARCH"
export CHIP_DIR=$(dirname "$(realpath "$(dirname "${BASH_SOURCE[0]}")")")

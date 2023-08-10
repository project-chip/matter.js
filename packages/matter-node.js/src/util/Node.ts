/**
 * Utils for Node.js.
 *
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "@project-chip/matter.js/common";

export function requireMinNodeVersion(minVersion: number) {
    const version = process.versions.node;
    const versionMajor = parseInt(version.split(".")[0]);
    if (versionMajor < minVersion)
        throw new MatterError(
            `Node version ${versionMajor} is not supported. Please upgrade to ${minVersion} or above.`,
        );
}

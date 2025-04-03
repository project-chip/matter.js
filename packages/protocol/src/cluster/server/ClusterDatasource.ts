/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OccurrenceManager } from "#events/OccurrenceManager.js";
import { Fabric } from "#fabric/Fabric.js";
import { SupportedStorageTypes } from "#general";

export interface ClusterDatasource {
    readonly version: number;
    readonly eventHandler?: OccurrenceManager;
    readonly fabrics: Fabric[];
    increaseVersion(): number;
    changed(key: string, value: SupportedStorageTypes): void;
}

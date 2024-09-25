/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Fabric } from "#fabric/Fabric.js";
import { Storage, SupportedStorageTypes } from "#general";
import { EventHandler } from "../../interaction/EventHandler.js";

export interface ClusterDatasource<S extends Storage = any> {
    readonly version: number;
    readonly eventHandler?: EventHandler<S>;
    readonly fabrics: Fabric[];
    increaseVersion(): number;
    changed(key: string, value: SupportedStorageTypes): void;
}

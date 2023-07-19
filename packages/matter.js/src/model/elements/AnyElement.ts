/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnyValueElement } from "./AnyValueElement.js";
import { ClusterElement } from "./ClusterElement.js";
import { DeviceTypeElement } from "./DeviceTypeElement.js";
import { EndpointElement } from "./EndpointElement.js";
import { FabricElement } from "./FabricElement.js";
import { MatterElement } from "./MatterElement.js";
import { NodeElement } from "./NodeElement.js";

/**
 * Any Matter element.
 */
export type AnyElement =
    AnyValueElement
    | ClusterElement
    | DeviceTypeElement
    | EndpointElement
    | FabricElement
    | NodeElement
    | MatterElement;

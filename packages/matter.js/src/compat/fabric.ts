/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { type Fabric } from "#protocol";

export {
    Fabric,
    FabricAction,
    FabricBuilder,
    FabricManager,
    FabricNotFoundError,
    FabricTableFullError,
    PairingHintBitmap,
    PairingHintBitmapSchema,
    PublicKeyError,
    type CommissionerInstanceData,
    type CommissioningModeInstanceData,
    type ExposedFabricInformation,
    type InstanceBroadcaster,
    type OperationalInstanceData,
} from "#protocol";

export type FabricJsonObject = Fabric.Config;

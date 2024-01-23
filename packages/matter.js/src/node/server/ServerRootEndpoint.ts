/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductDescriptionServer } from "../../behavior/system/product-description/ProductDescriptionServer.js";
import { CommissioningBehavior } from "../../behavior/system/commissioning/CommissioningBehavior.js";
import { IndexBehavior } from "../../behavior/system/index/IndexBehavior.js";
import { NetworkServer } from "../../behavior/system/networking/NetworkServer.js";
import { PartsBehavior } from "../../behavior/system/parts/PartsBehavior.js";
import { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { Identity } from "../../util/Type.js";

/**
 * The root endpoint for servers.
 * 
 * This is a {@link RootEndpoint} with extended behaviors implementing server functionality.
 */
export const ServerRootEndpoint = RootEndpoint.with(
    PartsBehavior,
    IndexBehavior,
    CommissioningBehavior,
    NetworkServer,
    ProductDescriptionServer,
)

export interface ServerRootEndpoint extends Identity<typeof ServerRootEndpoint> {}

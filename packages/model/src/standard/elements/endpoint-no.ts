/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const endpointNo = Datatype({
    name: "endpoint-no", type: "uint16", description: "Endpoint Number", isSeed: true,
    details: "An unsigned number that indicates an instance of a device type. Endpoint numbers shall NOT be " +
        "0xFFFF, to allow all endpoint number values to be expressible in nullable endpoint-no fields.",
    xref: { document: "core", section: "7.19.2.23" }
});

MatterDefinition.children.push(endpointNo);

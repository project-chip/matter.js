/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const endpointNo = Datatype({
    name: "endpoint-no", type: "uint16", description: "Endpoint Number", isSeed: true,
    details: "An unsigned number that indicates an instance of a device type.",
    xref: { document: "core", section: "7.18.2.23" }
});
Matter.children.push(endpointNo);

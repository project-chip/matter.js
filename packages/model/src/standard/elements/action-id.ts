/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const actionId = Datatype({
    name: "action-id", type: "uint8", description: "Action ID", isSeed: true,
    details: "An identifier that indicates an action as defined in the Interaction Model specification.",
    xref: { document: "core", section: "7.19.2.31" }
});
MatterDefinition.children.push(actionId);

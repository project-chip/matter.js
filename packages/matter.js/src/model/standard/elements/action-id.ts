/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const actionId = Datatype({
    name: "action-id", type: "uint8", description: "Action ID", isSeed: true,
    details: "An identifier that indicates an action as defined in the Interaction Model specification.",
    xref: { document: "core", section: "7.18.2.31" }
});
Matter.children.push(actionId);

/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const eventNo = Datatype({
    name: "event-no", type: "uint64", description: "Event Number", isSeed: true,
    details: "An unsigned number that indicates an Event instance.",
    xref: { document: "core", section: "7.19.2.35" }
});
MatterDefinition.children.push(eventNo);

/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const commandId = Datatype({
    name: "command-id", type: "uint32", description: "Command ID", isSeed: true,
    details: "An identifier that indicates a command defined in a cluster specification." +
        "\n" +
        "Command IDs shall be a Manufacturer Extensible Identifier. The specifics of its representation are " +
        "described in Data Model Types.",
    xref: { document: "core", section: "7.19.2.30" }
});

MatterDefinition.children.push(commandId);

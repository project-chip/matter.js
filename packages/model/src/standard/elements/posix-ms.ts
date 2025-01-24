/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const posixMs = Datatype({
    name: "posix-ms", type: "uint64", description: "POSIX Time in milliseconds", isSeed: true,
    details: "This type represents an offset, in milliseconds, from the UNIX epoch (1970-01-01 00:00:00 UTC), " +
        "encoded as an unsigned 64-bit scalar value." +
        "\n" +
        "This type is employed for compatibility reasons.",
    xref: { document: "core", section: "7.19.2.7" }
});

MatterDefinition.children.push(posixMs);

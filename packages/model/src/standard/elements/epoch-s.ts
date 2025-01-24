/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const epochS = Datatype({
    name: "epoch-s", type: "uint32", description: "Epoch Time in seconds", isSeed: true,

    details: "This type has the same semantics as Epoch Time in Microseconds, except that:" +
        "\n" +
        "  • the value encodes an offset in seconds, rather than microseconds;" +
        "\n" +
        "  • the value is encoded as an unsigned 32-bit scalar, rather than 64-bit." +
        "\n" +
        "This type is employed where compactness of representation is important and where the resolution of " +
        "seconds is still satisfactory.",

    xref: { document: "core", section: "7.19.2.6" }
});

MatterDefinition.children.push(epochS);

/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const ipv4Adr = Datatype({
    name: "ipv4adr", type: "octstr", description: "IPv4 Address", isSeed: true,

    details: "The IPv4 address data type is derived from an octet string. The octets shall correspond to the four " +
        "octets in network byte order that comprise an IPv4 address represented utilizing quad-dotted " +
        "notation." +
        "\n" +
        "Examples of encoding:" +
        "\n" +
        "  • Address 192.168.2.235 → C0A802EB" +
        "\n" +
        "  • Address 10.4.200.75 → 0A04C84B",

    xref: { document: "core", section: "7.19.2.38" }
});

MatterDefinition.children.push(ipv4Adr);

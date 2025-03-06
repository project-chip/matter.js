/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const ipv6Adr = Datatype({
    name: "ipv6adr", type: "octstr", description: "IPv6 Address", isSeed: true,

    details: "The IPv6 address data type is derived from an octet string. The octets shall correspond to the full " +
        "16 octets that comprise an IPv6 address as defined by RFC 4291. The octets shall be presented in " +
        "network byte order." +
        "\n" +
        "Examples of encoding:" +
        "\n" +
        "  • Address 2001:DB8:0:0:8:800:200C:417A → 20010DB80000000000080800200C417A" +
        "\n" +
        "  • Address 2001:0DB8:1122:3344:5566:7788:99AA:BBCC → 20010DB8112233445566778899AABBCC",

    xref: { document: "core", section: "7.19.2.39" }
});

MatterDefinition.children.push(ipv6Adr);

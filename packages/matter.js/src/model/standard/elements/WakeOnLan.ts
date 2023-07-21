/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "WakeOnLan", id: 0x503, classification: "application",
    description: "Wake on LAN",
    details: "This cluster provides an interface for managing low power mode on a device that supports the Wake " +
        "On LAN or Wake On Wireless LAN (WLAN) protocol (see [Wake On LAN]).",
    xref: { document: "cluster", section: "1.10" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "MacAddress", id: 0x0, type: "hwadr", access: "R V", conformance: "O",
            constraint: "max 32", quality: "F",
            details: "This shall indicate the current MAC address of the device. Only 48-bit MAC Addresses shall be used " +
                "for this attribute as required by the Wake on LAN protocol.",
            xref: { document: "cluster", section: "1.10.2.1" }
        },

        {
            tag: "attribute", name: "LinkLocalAddress", id: 0x1, type: "ipv6adr", access: "R V",
            conformance: "O", constraint: "desc", quality: "F",

            details: "This shall indicate the current link-local address of the device. Only 128-bit IPv6 link-local " +
                "addresses shall be used for this attribute." +
                "\n" +
                "NOTE" +
                "\n" +
                "Some companies may consider MAC Address to be protected data subject to PII handling considerations " +
                "and will therefore choose not to include it or read it. The MAC Address can often be determined " +
                "using ARP in IPv4 or NDP in IPv6.",

            xref: { document: "cluster", section: "1.10.2.2" }
        }
    ]
});

/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "PowerSourceConfiguration", id: 0x2e, classification: "endpoint",
    description: "Power Source Configuration",
    details: "This cluster is used to describe the configuration and capabilities of a Device’s power system. It " +
        "provides an ordering overview as well as linking to the one or more endpoints each supporting a " +
        "Power Source cluster.",
    xref: { document: "core", section: "11.6" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "Sources", id: 0x0, type: "list", access: "R V", conformance: "M",
            constraint: "max 6", quality: "N",

            details: "This list shall contain the set of all power sources capable of participating in the power system " +
                "of this Node. Each entry in the list shall be the endpoint number of an endpoint having a Power " +
                "Source cluster, which corresponds to a physical power source. The endpoint number shall be unique " +
                "within the list." +
                "\n" +
                "The order of power sources on a Node is defined by the Order attribute of its associated Power " +
                "Source cluster provided on the endpoint. List entries shall be sorted in increasing order, that is, " +
                "an entry with a lower order shall have a lower index than any entry with a higher order. Multiple " +
                "entries may have the same order, there are no restrictions on their relative sorting.",

            xref: { document: "core", section: "11.6.4.1" },
            children: [{ tag: "datatype", name: "entry", type: "endpoint-no" }]
        }
    ]
});

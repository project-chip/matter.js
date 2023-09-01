/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "OperationalCredentials",

    children: [
        // Spec specifies uint8, assuming this is actually fabric-idx
        {
            tag: "attribute",
            id: 0x5,
            name: "CurrentFabricIndex",
            type: "fabric-idx",
        },

        // Spec helpfully defines max length as RESP_MAX for these guys;
        // hard-coding as a constant
        {
            tag: "command",
            name: "AttestationResponse",
            id: 0x1,
            children: [{ tag: "datatype", id: 0x0, name: "AttestationElements", constraint: { max: 900 } }],
        },
        {
            tag: "command",
            name: "CsrResponse",
            id: 0x5,
            children: [{ tag: "datatype", id: 0x0, name: "NocsrElements", constraint: { max: 900 } }],
        },

        // TODO: Temporarily remove "fabric sensitive" quality.  This
        // non-standard tweak is due to how matter.js currently implements
        // persistence of these attributes
        {
            tag: "attribute",
            id: 0,
            name: "Nocs",
            access: "R U A",
        },
        {
            tag: "attribute",
            id: 1,
            name: "Fabrics",
            access: "R U V",
        },
    ],
});

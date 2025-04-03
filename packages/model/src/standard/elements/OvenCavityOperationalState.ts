/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    CommandElement as Command
} from "../../elements/index.js";

export const OvenCavityOperationalState = Cluster(
    {
        name: "OvenCavityOperationalState", id: 0x48, type: "OperationalState",
        classification: "application", pics: "OVENOPSTATE",
        details: "This cluster is derived from the Operational State cluster and provides an interface for monitoring " +
            "the operational state of an oven.",
        xref: { document: "cluster", section: "8.10" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),
    Command({ name: "Pause", id: 0x0, conformance: "X", xref: { document: "cluster", section: "8.10.5" } }),
    Command({ name: "Stop", id: 0x1, xref: { document: "cluster", section: "8.10.5" } }),
    Command({ name: "Start", id: 0x2, xref: { document: "cluster", section: "8.10.5" } }),
    Command({ name: "Resume", id: 0x3, conformance: "X", xref: { document: "cluster", section: "8.10.5" } }),
    Command({ name: "OperationalCommandResponse", id: 0x4, xref: { document: "cluster", section: "8.10.5" } })
);

MatterDefinition.children.push(OvenCavityOperationalState);

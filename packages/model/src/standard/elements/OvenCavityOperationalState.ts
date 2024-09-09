/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { ClusterElement as Cluster, AttributeElement as Attribute } from "../../elements/index.js";

export const OvenCavityOperationalState = Cluster({
    name: "OvenCavityOperationalState", id: 0x48, type: "OperationalState",
    classification: "application", pics: "OVENOPSTATE",
    details: "This cluster provides an interface for monitoring the operational state of an oven.",
    xref: { document: "cluster", section: "8.10" },
    children: [Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 })]
})

Matter.children.push(OvenCavityOperationalState);

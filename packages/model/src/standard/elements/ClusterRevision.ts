/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { AttributeElement as Attribute } from "../../elements/index.js";

export const ClusterRevision = Attribute({
    name: "ClusterRevision", id: 0xfffd, type: "uint16", access: "R V", conformance: "M",
    constraint: "min 1", isSeed: true, quality: "F",

    details: "The ClusterRevision attribute indicates the revision of the server cluster specification supported " +
        "by the cluster instance. An implementation of a cluster specification before the ClusterRevision " +
        "attribute was added shall have an assumed cluster revision of 0 (zero). For a new cluster " +
        "specification, the initial value for the ClusterRevision attribute shall be 1 (not zero)." +
        "\n" +
        "A history of revision numbers for a cluster specification release is listed in the Revision History " +
        "section for a cluster specification. Each new revision of a cluster specification shall specify a " +
        "new revision number incremented (by 1) from the last. The highest revision number in a cluster " +
        "specification’s Revision History is the revision number for the cluster specification. Therefore, a " +
        "ClusterRevision attribute value shall be the (highest) revision number of the cluster specification " +
        "that has been implemented.",

    xref: { document: "core", section: "7.13.1" }
});

MatterDefinition.children.push(ClusterRevision);

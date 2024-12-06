/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const AggregatorDt = DeviceType(
    {
        name: "Aggregator", id: 0xe, category: "Generic", classification: "simple",

        details: "This device type aggregates endpoints as a collection. Clusters on the endpoint indicating this " +
            "device type provide functionality for the collection of descendent endpoints present in the " +
            "PartsList of the endpoint’s descriptor, for example the Actions cluster." +
            "\n" +
            "The purpose of this device type is to aggregate functionality for a collection of endpoints. The " +
            "definition of the collection or functionality is not defined here." +
            "\n" +
            "When using this device type as a collection of bridged nodes, please see the \"Bridge\" section in " +
            "the System Model specification.",

        xref: { document: "device", section: "11.2" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 14, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "Actions", id: 0x25, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "11.2.4" }
    }),
    Requirement({
        name: "Identify", id: 0x3, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "11.2.4" }
    })
);

MatterDefinition.children.push(AggregatorDt);

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
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const LaundryDryerControls = Cluster(
    {
        name: "LaundryDryerControls", id: 0x4a, classification: "application", pics: "DRYERCTRL",
        details: "This cluster provides a way to access options associated with the operation of a laundry dryer " +
            "device type.",
        xref: { document: "cluster", section: "8.9" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            name: "SupportedDrynessLevels", id: 0x0, type: "list", access: "R V", conformance: "M",
            constraint: "1 to 4",
            details: "Indicates the list of supported dryness levels available to the appliance in the currently selected " +
                "mode. The dryness level values are determined by the manufacturer. At least one dryness level value " +
                "shall be provided in the SupportedDrynessLevels list. The list of dryness levels may change " +
                "depending on the currently-selected Laundry Dryer mode.",
            xref: { document: "cluster", section: "8.9.5.1" }
        },

        Field({ name: "entry", type: "DrynessLevelEnum" })
    ),

    Attribute({
        name: "SelectedDrynessLevel", id: 0x1, type: "DrynessLevelEnum", access: "RW VO", conformance: "M",
        constraint: "desc", quality: "X",

        details: "Indicates the currently-selected dryness level and it shall be the index into the " +
            "SupportedDrynessLevels list of the selected dryness level." +
            "\n" +
            "If an attempt is made to write this attribute with a value other than null or a value contained in " +
            "SupportedDrynessLevels, a CONSTRAINT_ERROR response shall be sent as the response. If an attempt is " +
            "made to write this attribute while the device is not in a state that supports modifying the dryness " +
            "level, an INVALID_IN_STATE error shall be sent as the response. A value of null shall indicate that " +
            "there will be no dryness level setting for the current mode.",

        xref: { document: "cluster", section: "8.9.5.2" }
    }),

    Datatype(
        {
            name: "DrynessLevelEnum", type: "enum8",
            details: "This enum provides a representation of the level of dryness that will be used while drying in a " +
                "selected mode." +
                "\n" +
                "It is up to the device manufacturer to determine the mapping between the enum values and the " +
                "corresponding temperature level.",
            xref: { document: "cluster", section: "8.9.4.1" }
        },

        Field({ name: "Low", id: 0x0, conformance: "M", description: "Provides a low dryness level for the selected mode" }),
        Field({
            name: "Normal", id: 0x1, conformance: "M",
            description: "Provides the normal level of dryness for the selected mode"
        }),
        Field({
            name: "Extra", id: 0x2, conformance: "M",
            description: "Provides an extra dryness level for the selected mode"
        }),
        Field({ name: "Max", id: 0x3, conformance: "M", description: "Provides the max dryness level for the selected mode" })
    )
);

MatterDefinition.children.push(LaundryDryerControls);

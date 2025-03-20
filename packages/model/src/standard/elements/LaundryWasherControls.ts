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

export const LaundryWasherControls = Cluster(
    {
        name: "LaundryWasherControls", id: 0x53, classification: "application", pics: "WASHERCTRL",
        details: "This cluster provides a way to access options associated with the operation of a laundry washer " +
            "device type.",
        xref: { document: "cluster", section: "8.6" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "8.6.4" } },

        Field({
            name: "SPIN", conformance: "O.a+", constraint: "0", description: "Spin",
            details: "This feature indicates multiple spin speeds are supported in at least one supported mode. Note that " +
                "some modes may not support multiple spin speeds even if this feature is supported.",
            xref: { document: "cluster", section: "8.6.4.1" }
        }),

        Field({
            name: "RINSE", conformance: "O.a+", constraint: "1", description: "Rinse",
            details: "This feature indicates multiple rinse cycles are supported in at least one supported mode. Note that " +
                "some modes may not support selection of the number of rinse cycles even if this feature is " +
                "supported.",
            xref: { document: "cluster", section: "8.6.4.2" }
        })
    ),

    Attribute(
        {
            name: "SpinSpeeds", id: 0x0, type: "list", access: "R V", conformance: "SPIN",
            constraint: "max 16[max 64]",
            details: "Indicates the list of spin speeds available to the appliance in the currently selected mode. The " +
                "spin speed values are determined by the manufacturer. At least one spin speed value shall be " +
                "provided in the SpinSpeeds list. The list of spin speeds may change depending on the currently " +
                "selected Laundry Washer mode. For example, Quick mode might have a completely different list of " +
                "SpinSpeeds than Delicates mode.",
            xref: { document: "cluster", section: "8.6.6.1" }
        },

        Field({ name: "entry", type: "string" })
    ),

    Attribute({
        name: "SpinSpeedCurrent", id: 0x1, type: "uint8", access: "RW VO", conformance: "SPIN",
        constraint: "max 15", quality: "X",

        details: "Indicates the currently selected spin speed. It is the index into the SpinSpeeds list of the " +
            "selected spin speed, as such, this attribute can be an integer between 0 and the number of entries " +
            "in SpinSpeeds - 1. If a value is received that is outside of the defined constraints, a " +
            "CONSTRAINT_ERROR shall be sent as the response. If a value is attempted to be written that doesn’t " +
            "match a valid index (e.g. an index of 5 when the list has 4 values), a CONSTRAINT_ERROR shall be " +
            "sent as the response. If null is written to this attribute, there will be no spin speed for the " +
            "selected cycle. If the value is null, there will be no spin speed on the current mode.",

        xref: { document: "cluster", section: "8.6.6.2" }
    }),

    Attribute({
        name: "NumberOfRinses", id: 0x2, type: "NumberOfRinsesEnum", access: "RW VO", conformance: "RINSE",
        constraint: "desc", default: 1,

        details: "Indicates how many times a rinse cycle shall be performed on a device for the current mode of " +
            "operation. A value of None shall indicate that no rinse cycle will be performed. This value may be " +
            "set by the client to adjust the number of rinses that are performed for" +
            "\n" +
            "the current mode of operation. If the device is not in a compatible state to accept the provided " +
            "value, an INVALID_IN_STATE error shall be sent as the response.",

        xref: { document: "cluster", section: "8.6.6.3" }
    }),

    Attribute(
        {
            name: "SupportedRinses", id: 0x3, type: "list", access: "R V", conformance: "RINSE",
            constraint: "max 4",
            details: "Indicates the amount of rinses allowed for a specific mode. Each entry shall indicate a " +
                "NumberOfRinsesEnum value that is possible in the selected mode on the device. The value of this " +
                "attribute may change at runtime based on the currently selected mode. Each entry shall be distinct.",
            xref: { document: "cluster", section: "8.6.6.4" }
        },

        Field({ name: "entry", type: "NumberOfRinsesEnum" })
    ),

    Datatype(
        {
            name: "NumberOfRinsesEnum", type: "enum8",
            details: "The NumberOfRinsesEnum provides a representation of the number of rinses that will be performed for " +
                "a selected mode. NumberOfRinsesEnum is derived from enum8. It is up to the device manufacturer to " +
                "determine the mapping between the enum values and the corresponding numbers of rinses.",
            xref: { document: "cluster", section: "8.6.5.1" }
        },

        Field({
            name: "None", id: 0x0, conformance: "RINSE",
            description: "This laundry washer mode does not perform rinse cycles"
        }),
        Field({
            name: "Normal", id: 0x1, conformance: "RINSE",
            description: "This laundry washer mode performs normal rinse cycles determined by the manufacturer"
        }),
        Field({
            name: "Extra", id: 0x2, conformance: "RINSE",
            description: "This laundry washer mode performs an extra rinse cycle"
        }),
        Field({
            name: "Max", id: 0x3, conformance: "RINSE",
            description: "This laundry washer mode performs the maximum number of rinse cycles determined by the manufacturer"
        })
    )
);

MatterDefinition.children.push(LaundryWasherControls);

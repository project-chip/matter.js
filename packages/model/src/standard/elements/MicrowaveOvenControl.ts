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
    CommandElement as Command
} from "../../elements/index.js";

export const MicrowaveOvenControl = Cluster(
    {
        name: "MicrowaveOvenControl", id: 0x5f, classification: "application", pics: "MWOCTRL",
        details: "This cluster defines the requirements for the Microwave Oven Control cluster." +
            "\n" +
            "This cluster has dependencies with the Operational State and Microwave Oven Mode clusters. The " +
            "Operational State cluster and the Microwave Oven Mode clusters, or derivatives of those clusters " +
            "shall appear on the same endpoint as this cluster.",
        xref: { document: "cluster", section: "8.13" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "8.13.4" } },
        Field({
            name: "PWRNUM", conformance: "O.a", constraint: "0", description: "PowerAsNumber",
            details: "Power is specified as a unitless number or a percentage"
        }),
        Field({
            name: "WATTS", conformance: "P, O.a", constraint: "1", description: "PowerInWatts",
            details: "Power is specified in Watts"
        }),
        Field({
            name: "PWRLMTS", conformance: "[PWRNUM]", constraint: "2", description: "PowerNumberLimits",
            details: "Supports the limit attributes used with the PWRNUM feature"
        })
    ),

    Attribute({
        name: "CookTime", id: 0x0, type: "elapsed-s", access: "R V", conformance: "M",
        constraint: "1 to maxCookTime", default: 30,
        details: "Indicates the total cook time associated with the operation of the device." +
            "\n" +
            "This attribute shall remain unchanged during the operation of the oven unless the value is changed " +
            "via a command or out-of-band action.",
        xref: { document: "cluster", section: "8.13.5.1" }
    }),

    Attribute({
        name: "MaxCookTime", id: 0x1, type: "elapsed-s", access: "R V", conformance: "M",
        constraint: "1 to 86400", quality: "F",
        details: "Indicates the maximum value to which the CookTime attribute can be set.",
        xref: { document: "cluster", section: "8.13.5.2" }
    }),

    Attribute({
        name: "PowerSetting", id: 0x2, type: "uint8", access: "R V", conformance: "PWRNUM",
        constraint: "desc",

        details: "Indicates the power level associated with the operation of the device. If the MinPower, MaxPower, " +
            "and PowerStep attributes are not supported:" +
            "\n" +
            "  • The minimum value of this attribute shall be 10," +
            "\n" +
            "  • The maximum value of this attribute shall be 100," +
            "\n" +
            "  • The value shall be in even multiples of 10," +
            "\n" +
            "  • The default value shall be 100." +
            "\n" +
            "If the MinPower, MaxPower, and PowerStep attributes are supported:" +
            "\n" +
            "  • The value of this attribute shall be between MinPower and MaxPower inclusive." +
            "\n" +
            "  • The value of this attribute shall be such that (PowerSetting - MinPower) % PowerStep == 0",

        xref: { document: "cluster", section: "8.13.5.3" }
    }),

    Attribute({
        name: "MinPower", id: 0x3, type: "uint8", access: "R V", conformance: "PWRLMTS",
        constraint: "1 to 99", default: 10, quality: "F",
        details: "Indicates the minimum value to which the PowerSetting attribute that can be set on the server.",
        xref: { document: "cluster", section: "8.13.5.4" }
    }),

    Attribute({
        name: "MaxPower", id: 0x4, type: "uint8", access: "R V", conformance: "PWRLMTS",
        constraint: "minPower + 1 to 100", default: 100, quality: "F",
        details: "Indicates the maximum value to which the PowerSetting attribute that can be set on the server.",
        xref: { document: "cluster", section: "8.13.5.5" }
    }),

    Attribute({
        name: "PowerStep", id: 0x5, type: "uint8", access: "R V", conformance: "PWRLMTS",
        constraint: "desc", default: 10, quality: "F",

        details: "Indicates the increment of power that can be set on the server. The value of this attribute shall be " +
            "between 1 and MaxPower inclusive." +
            "\n" +
            "The value of this attribute shall be such that (MaxPower - MinPower) % PowerStep == 0" +
            "\n" +
            "For example, if MinPower is 1, MaxPower is 10, and PowerSetting can be set to any integer between " +
            "MinPower and MaxPower, PowerStep would be set to 1.",

        xref: { document: "cluster", section: "8.13.5.6" }
    }),

    Attribute(
        {
            name: "SupportedWatts", id: 0x6, type: "list", access: "R V", conformance: "P, WATTS",
            constraint: "1 to 10", quality: "F",
            details: "Indicates the list of power levels (in W) supported by the server.",
            xref: { document: "cluster", section: "8.13.5.7" }
        },

        Field({ name: "entry", type: "uint16" })
    ),

    Attribute({
        name: "SelectedWattIndex", id: 0x7, type: "uint8", access: "R V", conformance: "P, WATTS",
        constraint: "desc",
        details: "Indicates the index into the list of SupportedWatts of the currently selected power setting." +
            "\n" +
            "The index shall be a valid index into the SupportedWatts list.",
        xref: { document: "cluster", section: "8.13.5.8" }
    }),

    Attribute({
        name: "WattRating", id: 0x8, type: "uint16", access: "R V", conformance: "O", quality: "F",
        details: "Indicates the rating, in Watts, of the microwave power of the oven." +
            "\n" +
            "Supporting this attribute can assist clients in suggesting cooking settings for various foods and " +
            "beverages.",
        xref: { document: "cluster", section: "8.13.5.9" }
    }),

    Command(
        {
            name: "SetCookingParameters", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "status",
            details: "This command is used to set the cooking parameters associated with the operation of the device. This " +
                "command supports the following fields:",
            xref: { document: "cluster", section: "8.13.6.2" }
        },

        Field({
            name: "CookMode", id: 0x0, type: "uint8", conformance: "O.b+", constraint: "desc",

            details: "This field shall indicate the value to which the CurrentMode attribute of the Microwave Oven Mode " +
                "cluster should be set. The value of this field shall be one from the list of SupportedModes from the " +
                "Microwave Oven Mode cluster." +
                "\n" +
                "If this field is missing, the CurrentMode attribute shall be set to a mode having the Normal mode " +
                "tag.",

            xref: { document: "cluster", section: "8.13.6.2.1" }
        }),

        Field({
            name: "CookTime", id: 0x1, type: "elapsed-s", conformance: "O.b+", constraint: "1 to maxCookTime",
            default: 30,
            details: "This field shall indicate the CookTime associated with the operation of the device. The value of " +
                "this field shall be subject to the constraints of the CookTime attribute of this cluster." +
                "\n" +
                "If this field is missing, the CookTime attribute shall be set to 30 seconds by the server.",
            xref: { document: "cluster", section: "8.13.6.2.2" }
        }),

        Field({
            name: "PowerSetting", id: 0x2, type: "uint8", conformance: "[PWRNUM].b+",
            constraint: "minPower to maxPower", default: { type: "reference", name: "MaxPower" },

            details: "This field shall indicate the PowerSetting associated with the operation of the device. The value of " +
                "this field shall be subject to the constraints of the PowerSetting attribute of this cluster. If the " +
                "PowerSetting field does not conform to the constraints of the PowerSetting attribute, the server " +
                "shall return a CONSTRAINT_ERROR status." +
                "\n" +
                "If this field is missing, the PowerSetting attribute shall be set to 100 if MaxPower is not " +
                "supported by the server, otherwise it shall be set to MaxPower if the MaxPower attribute is " +
                "supported by the server.",

            xref: { document: "cluster", section: "8.13.6.2.3" }
        }),

        Field({
            name: "WattSettingIndex", id: 0x3, type: "uint8", conformance: "[WATTS].b+", constraint: "desc",

            details: "This field shall indicate the value to which the SelectedWattIndex attribute is set. If the value of " +
                "this field is greater than or equal to the length of the SupportedWatts attribute list, the server " +
                "shall return a CONSTRAINT_ERROR status and the value of the SelectedWattIndex attribute shall be " +
                "unchanged." +
                "\n" +
                "If this field is missing, the SelectedWattIndex attribute shall be set by the server to the index " +
                "associated with the highest Watt setting for the selected CookMode.",

            xref: { document: "cluster", section: "8.13.6.2.4" }
        }),

        Field({
            name: "StartAfterSetting", id: 0x4, type: "bool", conformance: "O", default: false,
            details: "This field shall indicate whether or not oven operation shall be started when the command is " +
                "received.",
            xref: { document: "cluster", section: "8.13.6.2.5" }
        })
    ),

    Command(
        {
            name: "AddMoreTime", id: 0x1, access: "O", conformance: "O", direction: "request",
            response: "status",
            details: "This command is used to add more time to the CookTime attribute of the server. This command supports " +
                "these fields:",
            xref: { document: "cluster", section: "8.13.6.3" }
        },

        Field({
            name: "TimeToAdd", id: 0x0, type: "elapsed-s", conformance: "M", constraint: "1 to maxCookTime",
            details: "This field shall indicate the number of seconds to be added to the CookTime attribute.",
            xref: { document: "cluster", section: "8.13.6.3.1" }
        })
    )
);

MatterDefinition.children.push(MicrowaveOvenControl);

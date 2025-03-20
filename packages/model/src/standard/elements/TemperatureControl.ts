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

export const TemperatureControl = Cluster(
    {
        name: "TemperatureControl", id: 0x56, classification: "application", pics: "TCTL",

        details: "This cluster provides an interface to the setpoint temperature on devices such as washers, " +
            "refrigerators, and water heaters. The setpoint temperature is the temperature to which a device " +
            "using this cluster would attempt to control to. This cluster does not provide access to the actual " +
            "or physical temperature associated with any device using this cluster. Access to the physical " +
            "temperature associated with a device using this cluster would be provided by other clusters as part " +
            "of that devices device type definition." +
            "\n" +
            "The values and constraints of the attributes communicated to clients SHOULD match the controls on " +
            "any physical interface on a device implementing this server. For example, the value of the Step " +
            "attribute SHOULD match the incremental value by which the temperature setpoint can be changed on the " +
            "physical device.",

        xref: { document: "cluster", section: "8.2" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "8.2.4" } },

        Field({
            name: "TN", conformance: "O.a", constraint: "0", description: "TemperatureNumber",
            details: "For devices that use an actual temperature value for the temperature setpoint, such as some water " +
                "heaters, the feature TN shall be used. Note that this cluster provides and supports temperatures in " +
                "degrees Celsius via the temperature data type.",
            xref: { document: "cluster", section: "8.2.4.1" }
        }),

        Field({
            name: "TL", conformance: "O.a", constraint: "1", description: "TemperatureLevel",
            details: "For devices that use vendor-specific temperature levels for the temperature setpoint, such as some " +
                "washers, the feature TL shall be used.",
            xref: { document: "cluster", section: "8.2.4.2" }
        }),

        Field({
            name: "STEP", conformance: "[TN]", constraint: "2", description: "TemperatureStep",
            details: "For devices that support discrete temperature setpoints that are larger than the temperature " +
                "resolution imposed via the temperature data type, the Step feature may be used.",
            xref: { document: "cluster", section: "8.2.4.3" }
        })
    ),

    Attribute({
        name: "TemperatureSetpoint", id: 0x0, type: "temperature", access: "R V", conformance: "TN",
        constraint: "minTemperature to maxTemperature",
        details: "Indicates the desired Temperature Setpoint on the device.",
        xref: { document: "cluster", section: "8.2.5.1" }
    }),

    Attribute({
        name: "MinTemperature", id: 0x1, type: "temperature", access: "R V", conformance: "TN",
        constraint: "max maxTemperature - 1", quality: "F",
        details: "Indicates the minimum temperature to which the TemperatureSetpoint attribute may be set.",
        xref: { document: "cluster", section: "8.2.5.2" }
    }),

    Attribute(
        {
            name: "MaxTemperature", id: 0x2, type: "temperature", access: "R V", conformance: "TN",
            constraint: "desc", quality: "F",
            details: "Indicates the maximum temperature to which the TemperatureSetpoint attribute may be set." +
                "\n" +
                "If the Step attribute is supported, this attribute shall be such that MaxTemperature = " +
                "MinTemperature + Step * n, where n is an integer and n > 0. If the Step attribute is not supported, " +
                "this attribute shall be such that MaxTemperature > MinTemperature.",
            xref: { document: "cluster", section: "8.2.5.3" }
        }
    ),

    Attribute({
        name: "Step", id: 0x3, type: "temperature", access: "R V", conformance: "STEP",
        constraint: "max maxTemperature - minTemperature", quality: "F",

        details: "Indicates the discrete value by which the TemperatureSetpoint attribute can be changed via the " +
            "SetTemperature command." +
            "\n" +
            "For example, if the value of MinTemperature is 25.00C (2500) and the Step value is 0.50C (50), valid " +
            "values of the TargetTemperature field of the SetTemperature command would be 25.50C (2550), 26.00C " +
            "(2600), 26.50C (2650), etc.",

        xref: { document: "cluster", section: "8.2.5.4" }
    }),

    Attribute({
        name: "SelectedTemperatureLevel", id: 0x4, type: "uint8", access: "R V", conformance: "TL",
        constraint: "max 31",
        details: "Indicates the currently selected temperature level setting of the server. This attribute shall be " +
            "the positional index of the list item in the SupportedTemperatureLevels list that represents the " +
            "currently selected temperature level setting of the server.",
        xref: { document: "cluster", section: "8.2.5.5" }
    }),

    Attribute(
        {
            name: "SupportedTemperatureLevels", id: 0x5, type: "list", access: "R V", conformance: "TL",
            constraint: "max 32[max 16]",

            details: "Indicates the list of supported temperature level settings that may be selected via the " +
                "TargetTemperatureLevel field in the SetTemperature command. Each string is readable text that " +
                "describes each temperature level setting in a way that can be easily understood by humans. For " +
                "example, a washing machine can have temperature levels like \"Cold\", \"Warm\", and \"Hot\". Each string " +
                "is specified by the manufacturer." +
                "\n" +
                "Each item in this list shall represent a unique temperature level. Each entry in this list shall " +
                "have a unique value. The entries in this list shall appear in order of increasing temperature level " +
                "with list item 0 being the setting with the lowest temperature level.",

            xref: { document: "cluster", section: "8.2.5.6" }
        },

        Field({ name: "entry", type: "string" })
    ),

    Command(
        {
            name: "SetTemperature", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "8.2.6.1" }
        },

        Field({
            name: "TargetTemperature", id: 0x0, type: "temperature", conformance: "TN", constraint: "desc",
            details: "This field shall specify the desired temperature setpoint that the server is to be set to." +
                "\n" +
                "The TargetTemperature shall be from MinTemperature to MaxTemperature inclusive. If the Step " +
                "attribute is supported, TargetTemperature shall be such that (TargetTemperature - MinTemperature) % " +
                "Step == 0.",
            xref: { document: "cluster", section: "8.2.6.1.1" }
        }),

        Field({
            name: "TargetTemperatureLevel", id: 0x1, type: "uint8", conformance: "TL", constraint: "desc",
            details: "This field shall specify the index of the list item in the SupportedTemperatureLevels list that " +
                "represents the desired temperature level setting of the server. The value of this field shall be " +
                "between 0 and the length of the SupportedTemperatureLevels list -1.",
            xref: { document: "cluster", section: "8.2.6.1.2" }
        })
    )
);

MatterDefinition.children.push(TemperatureControl);

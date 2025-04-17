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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const ModeBase = Cluster(
    {
        name: "ModeBase", classification: "application", pics: "MODB",

        details: "This cluster provides an interface for controlling a characteristic of a device that can be set to " +
            "one of several predefined values. For example, the light pattern of a disco ball, the mode of a " +
            "massage chair, or the wash cycle of a laundry machine." +
            "\n" +
            "The server allows the client to set a mode on the server. A mode is one of a list of options that " +
            "may be presented by a client for a user choice, or understood by the client, via the mode’s tags." +
            "\n" +
            "A mode tag is either a standard tag within a standard category namespace, or a manufacturer specific " +
            "tag, within the namespace of the vendor ID of the manufacturer." +
            "\n" +
            "Any derived cluster specification based on this cluster shall support the standard mode tag value " +
            "definitions and command status definitions defined in this cluster and may define additional " +
            "standard mode tag values and standard command status values that are supported in the respective " +
            "derived cluster instances." +
            "\n" +
            "Each cluster ID that indicates this specification shall define a distinct purpose for the cluster " +
            "instance. For example: A LightBlinking cluster ID supports blinking modes for a light (and is " +
            "described that way)." +
            "\n" +
            "An anonymous mode shall NOT replace the meaning of a standard mode tag, when one exists, for the " +
            "cluster purpose.",

        xref: { document: "cluster", section: "1.10" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.10.4" } },

        Field({
            name: "DEPONOFF", constraint: "0", description: "OnOff",
            details: "This feature creates a dependency between an OnOff cluster instance and this cluster instance on the " +
                "same endpoint. See OnMode for more information.",
            xref: { document: "cluster", section: "1.10.4.1" }
        })
    ),

    Attribute(
        {
            name: "SupportedModes", id: 0x0, type: "list", access: "R V", conformance: "M",
            constraint: "2 to 255", quality: "F",

            details: "This attribute shall contain the list of supported modes that may be selected for the CurrentMode " +
                "attribute. Each item in this list represents a unique mode as indicated by the Mode field of the " +
                "ModeOptionStruct." +
                "\n" +
                "Each entry in this list shall have a unique value for the Mode field. Each entry in this list shall " +
                "have a unique value for the Label field.",

            xref: { document: "cluster", section: "1.10.6.1" }
        },

        Field({ name: "entry", type: "ModeOptionStruct" })
    ),

    Attribute({
        name: "CurrentMode", id: 0x1, type: "uint8", access: "R V", conformance: "M", constraint: "desc",
        quality: "N",

        details: "Indicates the current mode of the server." +
            "\n" +
            "The value of this field shall match the Mode field of one of the entries in the SupportedModes " +
            "attribute." +
            "\n" +
            "The value of this attribute may change at any time via an out-of-band interaction outside of the " +
            "server, such as interactions with a user interface, via internal mode changes due to autonomously " +
            "progressing through a sequence of operations, on system time-outs or idle delays, or via " +
            "interactions coming from a fabric other than the one which last executed a ChangeToMode.",

        xref: { document: "cluster", section: "1.10.6.2" }
    }),

    Attribute({
        name: "StartUpMode", id: 0x2, type: "uint8", access: "RW VO", conformance: "O", constraint: "desc",
        quality: "X N",

        details: "Indicates the desired startup mode for the server when it is supplied with power." +
            "\n" +
            "If this attribute is not null, the CurrentMode attribute shall be set to the StartUpMode value, when " +
            "the server is powered up, except in the case when the OnMode attribute overrides the StartUpMode " +
            "attribute (see OnModeWithPowerUp)." +
            "\n" +
            "This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentMode " +
            "attribute shall return to its value prior to the restart." +
            "\n" +
            "The value of this field shall match the Mode field of one of the entries in the SupportedModes " +
            "attribute." +
            "\n" +
            "If this attribute is not implemented, or is set to the null value, it shall have no effect.",

        xref: { document: "cluster", section: "1.10.6.3" }
    }),

    Attribute({
        name: "OnMode", id: 0x3, type: "uint8", access: "RW VO", conformance: "DEPONOFF",
        constraint: "desc", default: null, quality: "X N",

        details: "Indicates whether the value of CurrentMode depends on the state of the On/Off cluster on the same " +
            "endpoint. If this attribute is not present or is set to null, there is no dependency, otherwise the " +
            "CurrentMode attribute shall depend on the OnOff attribute in the On/Off cluster" +
            "\n" +
            "The value of this field shall match the Mode field of one of the entries in the SupportedModes " +
            "attribute.",

        xref: { document: "cluster", section: "1.10.6.4" }
    }),

    Command(
        {
            name: "ChangeToMode", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "ChangeToModeResponse",
            details: "This command is used to change device modes." +
                "\n" +
                "On receipt of this command the device shall respond with a ChangeToModeResponse command.",
            xref: { document: "cluster", section: "1.10.7.1" }
        },

        Field({
            name: "NewMode", id: 0x0, type: "uint8", conformance: "M", constraint: "desc",

            details: "If the NewMode field doesn’t match the Mode field of any entry of the SupportedModes list, the " +
                "ChangeToModeResponse command’s Status field shall indicate UnsupportedMode and the StatusText field " +
                "shall be included and may be used to indicate the issue, with a human readable string, or include an " +
                "empty string." +
                "\n" +
                "If the NewMode field matches the Mode field of one entry of the SupportedModes list, but the device " +
                "is not able to transition as requested, the ChangeToModeResponse command shall:" +
                "\n" +
                "  • Have the Status set to a product-specific Status value representing the error, or GenericFailure " +
                "    if a more specific error cannot be provided. See Status field for details." +
                "\n" +
                "  • Provide a human readable string in the StatusText field." +
                "\n" +
                "If the NewMode field matches the Mode field of one entry of the SupportedModes list and the device " +
                "is able to transition as requested, the server shall transition into the mode associated with " +
                "NewMode, the ChangeToModeResponse command shall have the Status field set to Success, the StatusText " +
                "field may be supplied with a human readable string or include an empty string and the CurrentMode " +
                "field shall be set to the value of the NewMode field." +
                "\n" +
                "If the NewMode field is the same as the value of the CurrentMode attribute the ChangeToModeResponse " +
                "command shall have the Status field set to Success and the StatusText field may be supplied with a " +
                "human readable string or include an empty string.",

            xref: { document: "cluster", section: "1.10.7.1.1" }
        })
    ),

    Command(
        {
            name: "ChangeToModeResponse", id: 0x1, conformance: "M", direction: "response",
            details: "This command is sent by the device on receipt of the ChangeToMode command. This command" +
                "\n" +
                "shall have the following data fields:",
            xref: { document: "cluster", section: "1.10.7.2" }
        },

        Field({
            name: "Status", id: 0x0, type: "ModeChangeStatus", conformance: "M", constraint: "desc",
            xref: { document: "cluster", section: "1.10.7.2.1" }
        }),
        Field({ name: "StatusText", id: 0x1, type: "string", conformance: "[Status == Success], M", constraint: "max 64" })
    ),

    Datatype(
        {
            name: "ModeTagStruct", type: "struct",
            details: "A Mode Tag is meant to be interpreted by the client for the purpose the cluster serves.",
            xref: { document: "cluster", section: "1.10.5.1" }
        },

        Field({
            name: "MfgCode", id: 0x0, type: "vendor-id", conformance: "O", constraint: "desc",

            details: "If the MfgCode field exists, the Value field shall be in the manufacturer-specific value range (see " +
                "Section 1.10.8, “Mode Namespace”)." +
                "\n" +
                "This field shall indicate the manufacturer’s VendorID and it shall determine the meaning of the " +
                "Value field." +
                "\n" +
                "The same manufacturer code and mode tag value in separate cluster instances are part of the same " +
                "namespace and have the same meaning. For example: a manufacturer tag meaning \"pinch\" can be used " +
                "both in a cluster whose purpose is to choose the amount of sugar, or in a cluster whose purpose is " +
                "to choose the amount of salt.",

            xref: { document: "cluster", section: "1.10.5.1.1" }
        }),

        Field({
            name: "Value", id: 0x1, type: "ModeTag", conformance: "M",
            details: "This field shall indicate the mode tag within a mode tag namespace which is either manufacturer " +
                "specific or standard.",
            xref: { document: "cluster", section: "1.10.5.1.2" }
        })
    ),

    Datatype(
        {
            name: "ModeOptionStruct", type: "struct",
            details: "This is a struct representing a possible mode of the server.",
            xref: { document: "cluster", section: "1.10.5.2" }
        },

        Field({
            name: "Label", id: 0x0, type: "string", conformance: "M", constraint: "max 64", quality: "F",
            details: "This field shall indicate readable text that describes the mode option, so that a client can provide " +
                "it to the user to indicate what this option means. This field is meant to be readable and " +
                "understandable by the user.",
            xref: { document: "cluster", section: "1.10.5.2.1" }
        }),

        Field({
            name: "Mode", id: 0x1, type: "uint8", conformance: "M", quality: "F",
            details: "This field is used to identify the mode option.",
            xref: { document: "cluster", section: "1.10.5.2.2" }
        }),

        Field(
            {
                name: "ModeTags", id: 0x2, type: "list", conformance: "M", constraint: "max 8", quality: "F",

                details: "This field shall contain a list of tags that are associated with the mode option. This may be used " +
                    "by clients to determine the full or the partial semantics of a certain mode, depending on which tags " +
                    "they understand, using standard definitions and/or manufacturer specific namespace definitions." +
                    "\n" +
                    "The standard mode tags are defined in this cluster specification. For the derived cluster instances, " +
                    "if the specification of the derived cluster defines a namespace, the set of standard mode tags also " +
                    "includes the mode tag values from that namespace." +
                    "\n" +
                    "Mode tags can help clients look for options that meet certain criteria, render the user interface, " +
                    "use" +
                    "\n" +
                    "the mode in an automation, or to craft help text their voice-driven interfaces. A mode tag shall be " +
                    "either a standard tag or a manufacturer specific tag, as defined in each ModeTagStruct list entry." +
                    "\n" +
                    "A mode option may have more than one mode tag. A mode option may be associated with a mixture of " +
                    "standard and manufacturer specific mode tags. A mode option shall be associated with at least one " +
                    "standard mode tag." +
                    "\n" +
                    "A few examples are provided below." +
                    "\n" +
                    "  • A mode named \"100%\" can have both the High (manufacturer specific) and Max (standard) mode tag. " +
                    "    Clients seeking the mode for either High or Max will find the same mode in this case." +
                    "\n" +
                    "  • A mode that includes a LowEnergy tag can be displayed by the client using a widget icon that " +
                    "    shows a green leaf." +
                    "\n" +
                    "  • A mode that includes a LowNoise tag may be used by the client when the user wishes for a lower " +
                    "    level of audible sound, less likely to disturb the household’s activities." +
                    "\n" +
                    "  • A mode that includes a LowEnergy tag (standard, defined in this cluster specification) and also " +
                    "    a Delicate tag (standard, defined in the namespace of a Laundry Mode derived cluster)." +
                    "\n" +
                    "  • A mode that includes both a generic Quick tag (defined here), and Vacuum and Mop tags, (defined " +
                    "    in the RVC Clean cluster that is a derivation of this cluster).",

                xref: { document: "cluster", section: "1.10.5.2.3" }
            },

            Field({ name: "entry", type: "ModeTagStruct" })
        )
    ),

    Datatype(
        { name: "ModeChangeStatus", type: "enum8" },
        Field({
            name: "Success", id: 0x0,
            description: "Switching to the mode indicated by the NewMode field is allowed and possible. The CurrentMode attribute is set to the value of the NewMode field.",
            xref: { document: "cluster", section: "1.10.7.2.1.2" }
        }),
        Field({
            name: "UnsupportedMode", id: 0x1,
            description: "The value of the NewMode field doesn’t match any entries in the SupportedModes attribute.",
            xref: { document: "cluster", section: "1.10.7.2.1.2" }
        }),
        Field({
            name: "GenericFailure", id: 0x2,
            description: "Generic failure code, indicating that switching to the mode indicated by the NewMode field is not allowed or not possible.",
            xref: { document: "cluster", section: "1.10.7.2.1.2" }
        }),
        Field({
            name: "InvalidInMode", id: 0x3,
            description: "The received request cannot be handled due to the current mode of the device",
            xref: { document: "cluster", section: "1.10.7.2.1.2" }
        })
    ),

    Datatype(
        { name: "ModeTag", type: "enum16" },
        Field({ name: "Auto", id: 0x0, xref: { document: "cluster", section: "1.10.8" } }),
        Field({ name: "Quick", id: 0x1, xref: { document: "cluster", section: "1.10.8" } }),
        Field({ name: "Quiet", id: 0x2, xref: { document: "cluster", section: "1.10.8" } }),
        Field({ name: "LowNoise", id: 0x3, xref: { document: "cluster", section: "1.10.8" } }),
        Field({ name: "LowEnergy", id: 0x4, xref: { document: "cluster", section: "1.10.8" } }),
        Field({ name: "Vacation", id: 0x5, xref: { document: "cluster", section: "1.10.8" } }),
        Field({ name: "Min", id: 0x6, xref: { document: "cluster", section: "1.10.8" } }),
        Field({ name: "Max", id: 0x7, xref: { document: "cluster", section: "1.10.8" } }),
        Field({ name: "Night", id: 0x8, xref: { document: "cluster", section: "1.10.8" } }),
        Field({ name: "Day", id: 0x9, xref: { document: "cluster", section: "1.10.8" } })
    )
);

MatterDefinition.children.push(ModeBase);

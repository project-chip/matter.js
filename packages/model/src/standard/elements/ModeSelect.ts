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

export const ModeSelect = Cluster(
    {
        name: "ModeSelect", id: 0x50, classification: "application", pics: "MOD",

        details: "This cluster provides an interface for controlling a characteristic of a device that can be set to " +
            "one of several predefined values. For example, the light pattern of a disco ball, the mode of a " +
            "massage chair, or the wash cycle of a laundry machine." +
            "\n" +
            "The server allows the client to set a mode on the server. A mode is one of a list of options that " +
            "may be presented by a client for a user choice, or understood by the client, via the semantic tags " +
            "on the" +
            "\n" +
            "mode." +
            "\n" +
            "A semantic tag is either a standard tag within a standard category namespace, or a manufacturer " +
            "specific tag, within the namespace of the vendor ID of the manufacturer. If there is no semantic " +
            "tag, the mode is anonymous, and the selection is made by the user solely based on the Label string." +
            "\n" +
            "Each cluster ID that indicates this specification shall define a distinct purpose for the cluster " +
            "instance. For example: A LightBlinking cluster ID supports blinking modes for a light (and is " +
            "described that way)." +
            "\n" +
            "An anonymous mode shall support the derived cluster purpose. A manufacturer specific semantic tag " +
            "shall support the derived cluster purpose. An anonymous mode shall NOT replace the meaning of a " +
            "standard semantic tag, when one exists, for the cluster purpose.",

        xref: { document: "cluster", section: "1.9" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.9.4" } },

        Field({
            name: "DEPONOFF", constraint: "0", description: "OnOff",
            details: "This feature creates a dependency between an OnOff cluster instance and this cluster instance on the " +
                "same endpoint. See OnMode for more information.",
            xref: { document: "cluster", section: "1.9.4.1" }
        })
    ),

    Attribute({
        name: "Description", id: 0x0, type: "string", access: "R V", conformance: "M", constraint: "max 64",
        quality: "F",

        details: "This attribute describes the purpose of the server, in readable text." +
            "\n" +
            "For example, a coffee machine may have a Mode Select cluster for the amount of milk to add, and " +
            "another Mode Select cluster for the amount of sugar to add. In this case, the first instance can " +
            "have the description Milk and the second instance can have the description Sugar. This allows the " +
            "user to tell the purpose of each of the instances.",

        xref: { document: "cluster", section: "1.9.6.1" }
    }),

    Attribute({
        name: "StandardNamespace", id: 0x1, type: "enum16", access: "R V", conformance: "M",
        constraint: "desc", default: null, quality: "X F",
        details: "This attribute, when not null, shall indicate a single standard namespace for any standard semantic " +
            "tag value supported in this or any other cluster instance with the same value of this attribute. A " +
            "null value indicates no standard namespace, and therefore, no standard semantic tags are provided in " +
            "this cluster instance. Each standard namespace and corresponding values and value meanings shall be " +
            "defined in another document.",
        xref: { document: "cluster", section: "1.9.6.2" }
    }),

    Attribute(
        {
            name: "SupportedModes", id: 0x2, type: "list", access: "R V", conformance: "M",
            constraint: "max 255", quality: "F",
            details: "This attribute is the list of supported modes that may be selected for the CurrentMode attribute. " +
                "Each item in this list represents a unique mode as indicated by the Mode field of the " +
                "ModeOptionStruct. Each entry in this list shall have a unique value for the Mode field.",
            xref: { document: "cluster", section: "1.9.6.3" }
        },

        Field({ name: "entry", type: "ModeOptionStruct" })
    ),

    Attribute({
        name: "CurrentMode", id: 0x3, type: "uint8", access: "R V", conformance: "M", constraint: "desc",
        quality: "N",
        details: "This attribute represents the current mode of the server." +
            "\n" +
            "The value of this field must match the Mode field of one of the entries in the SupportedModes" +
            "\n" +
            "attribute.",
        xref: { document: "cluster", section: "1.9.6.4" }
    }),

    Attribute({
        name: "StartUpMode", id: 0x4, type: "uint8", access: "RW VO", conformance: "O", constraint: "desc",
        quality: "X N",

        details: "The StartUpMode attribute value indicates the desired startup mode for the server when it is " +
            "supplied with power." +
            "\n" +
            "If this attribute is not null, the CurrentMode attribute shall be set to the StartUpMode value, when " +
            "the server is powered up, except in the case when the OnMode attribute overrides the StartUpMode " +
            "attribute (see OnModeWithPowerUp)." +
            "\n" +
            "This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentMode " +
            "attribute shall return to its value prior to the restart." +
            "\n" +
            "The value of this field shall match the Mode field of one of the entries in the SupportedModes" +
            "\n" +
            "attribute." +
            "\n" +
            "If this attribute is not implemented, or is set to the null value, it shall have no effect.",

        xref: { document: "cluster", section: "1.9.6.5" }
    }),

    Attribute({
        name: "OnMode", id: 0x5, type: "uint8", access: "RW VO", conformance: "DEPONOFF",
        constraint: "desc", default: null, quality: "X N",

        details: "Indicates the value of CurrentMode that depends on the state of the On/Off cluster on the same " +
            "endpoint. If this attribute is not present or is set to null, it shall NOT have an effect, otherwise " +
            "the CurrentMode attribute shall depend on the OnOff attribute of the On/Off cluster" +
            "\n" +
            "The value of this field shall match the Mode field of one of the entries in the SupportedModes" +
            "\n" +
            "attribute.",

        xref: { document: "cluster", section: "1.9.6.6" }
    }),

    Command(
        {
            name: "ChangeToMode", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "status",
            details: "On receipt of this command, if the NewMode field indicates a valid mode transition within the " +
                "supported list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the " +
                "server shall respond with an INVALID_COMMAND status response.",
            xref: { document: "cluster", section: "1.9.7.1" }
        },

        Field({ name: "NewMode", id: 0x0, type: "uint8", conformance: "M", constraint: "desc" })
    ),

    Datatype(
        {
            name: "SemanticTagStruct", type: "struct",
            details: "A Semantic Tag is meant to be interpreted by the client for the purpose the cluster serves.",
            xref: { document: "cluster", section: "1.9.5.1" }
        },

        Field({
            name: "MfgCode", id: 0x0, type: "vendor-id", conformance: "M", constraint: "desc", quality: "F",
            details: "This field shall indicate a manufacturer code (Vendor ID), and the Value field shall indicate a " +
                "semantic tag defined by the manufacturer. Each manufacturer code supports a single namespace of " +
                "values. The same manufacturer code and semantic tag value in separate cluster instances are part of " +
                "the same namespace and have the same meaning. For example: a manufacturer tag meaning \"pinch\", has " +
                "the same meaning in a cluster whose purpose is to choose the amount of sugar, or amount of salt.",
            xref: { document: "cluster", section: "1.9.5.1.2" }
        }),

        Field({
            name: "Value", id: 0x1, type: "uint16", conformance: "M", quality: "F",
            details: "This field shall indicate the semantic tag within a semantic tag namespace which is either " +
                "manufacturer specific or standard. For semantic tags in a standard namespace, see Standard " +
                "Namespace.",
            xref: { document: "cluster", section: "1.9.5.1.1" }
        })
    ),

    Datatype(
        {
            name: "ModeOptionStruct", type: "struct",
            details: "This is a struct representing a possible mode of the server.",
            xref: { document: "cluster", section: "1.9.5.2" }
        },

        Field({
            name: "Label", id: 0x0, type: "string", conformance: "M", constraint: "max 64", quality: "F",
            details: "This field is readable text that describes the mode option that can be used by a client to indicate " +
                "to the user what this option means. This field is meant to be readable and understandable by the " +
                "user.",
            xref: { document: "cluster", section: "1.9.5.2.1" }
        }),

        Field({
            name: "Mode", id: 0x1, type: "uint8", conformance: "M", quality: "F",
            details: "The Mode field is used to identify the mode option. The value shall be unique for every item in the " +
                "SupportedModes attribute.",
            xref: { document: "cluster", section: "1.9.5.2.2" }
        }),

        Field(
            {
                name: "SemanticTags", id: 0x2, type: "list", conformance: "M", constraint: "max 64", quality: "F",

                details: "This field is a list of semantic tags that map to the mode option. This may be used by clients to " +
                    "determine the meaning of the mode option as defined in a standard or manufacturer specific " +
                    "namespace. Semantic tags can help clients look for options that meet certain criteria. A semantic " +
                    "tag shall be either a standard tag or manufacturer specific tag as defined in each SemanticTagStruct " +
                    "list entry." +
                    "\n" +
                    "A mode option may have more than one semantic tag. A mode option may be mapped to a mixture of " +
                    "standard and manufacturer specific semantic tags." +
                    "\n" +
                    "All standard semantic tags are from a single namespace indicated by the StandardNamespace attribute." +
                    "\n" +
                    "For example: A mode labeled \"100%\" can have both the HIGH (MS) and MAX (standard) semantic tag. " +
                    "Clients seeking the option for either HIGH or MAX will find the same option in this case.",

                xref: { document: "cluster", section: "1.9.5.2.3" }
            },

            Field({ name: "entry", type: "SemanticTagStruct" })
        )
    )
);

MatterDefinition.children.push(ModeSelect);

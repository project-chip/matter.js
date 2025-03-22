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

export const LevelControl = Cluster(
    {
        name: "LevelControl", id: 0x8, classification: "application", pics: "LVL",
        details: "This cluster provides an interface for controlling a characteristic of a device that can be set to a " +
            "level, for example the brightness of a light, the degree of closure of a door, or the power output " +
            "of a heater.",
        xref: { document: "cluster", section: "1.6" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 6 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.6.4" } },
        Field({
            name: "OO", conformance: "O", constraint: "0", default: 1, description: "OnOff",
            details: "Dependency with the On/Off cluster"
        }),

        Field({
            name: "LT", conformance: "O", constraint: "1", default: 0, description: "Lighting",

            details: "This feature supports an interface for controlling the level of a light source. For the CurrentLevel " +
                "attribute:" +
                "\n" +
                "A value of 0x00 shall NOT be used." +
                "\n" +
                "A value of 0x01 shall indicate the minimum level that can be attained on a device. A value of 0xFE " +
                "shall indicate the maximum level that can be attained on a device. A value of null shall represent " +
                "an undefined value." +
                "\n" +
                "All other values are application specific gradations from the minimum to the maximum level.",

            xref: { document: "cluster", section: "1.6.4.2" }
        }),

        Field({
            name: "FQ", conformance: "P", constraint: "2", default: 0, description: "Frequency",
            details: "NOTE The Frequency feature is provisional.",
            xref: { document: "cluster", section: "1.6.4.3" }
        })
    ),

    Attribute({
        name: "CurrentLevel", id: 0x0, type: "uint8", access: "R V", conformance: "M",
        constraint: "minLevel to maxLevel", default: null, quality: "X N S Q",

        details: "Indicates the current level of this device. The meaning of 'level' is device dependent." +
            "\n" +
            "Changes to this attribute shall only be marked as reportable in the following cases:" +
            "\n" +
            "  • At most once per second, or" +
            "\n" +
            "  • At the end of the movement/transition, or" +
            "\n" +
            "  • When it changes from null to any other value and vice versa.",

        xref: { document: "cluster", section: "1.6.6.2" }
    }),

    Attribute({
        name: "RemainingTime", id: 0x1, type: "uint16", access: "R V", conformance: "LT", default: 0,
        quality: "Q",

        details: "Indicates the time remaining until the current command is complete - it is specified in 1/10ths of a " +
            "second." +
            "\n" +
            "Changes to this attribute shall only be marked as reportable in the following cases:" +
            "\n" +
            "  • When it changes from 0 to any value higher than 10, or" +
            "\n" +
            "  • When it changes, with a delta larger than 10, caused by the invoke of a command, or" +
            "\n" +
            "  • When it changes to 0." +
            "\n" +
            "For commands with a transition time or changes to the transition time less than 1 second, changes to " +
            "this attribute shall NOT be reported." +
            "\n" +
            "As this attribute is not being reported during a regular countdown, clients SHOULD NOT rely on the " +
            "reporting of this attribute in order to keep track of the remaining duration.",

        xref: { document: "cluster", section: "1.6.6.3" }
    }),

    Attribute({
        name: "MinLevel", id: 0x2, type: "uint8", access: "R V", conformance: "[LT]",
        constraint: "1 to 254", default: 1,
        details: "Indicates the minimum value of CurrentLevel that is capable of being assigned.",
        xref: { document: "cluster", section: "1.6.6.4" }
    }),

    Attribute({
        name: "MinLevel", id: 0x2, type: "uint8", access: "R V", conformance: "[!LT]",
        constraint: "max 254", default: 0,
        details: "Indicates the minimum value of CurrentLevel that is capable of being assigned.",
        xref: { document: "cluster", section: "1.6.6.4" }
    }),

    Attribute({
        name: "MaxLevel", id: 0x3, type: "uint8", access: "R V", conformance: "O",
        constraint: "minLevel to 254", default: 254,
        details: "Indicates the maximum value of CurrentLevel that is capable of being assigned.",
        xref: { document: "cluster", section: "1.6.6.5" }
    }),

    Attribute({
        name: "CurrentFrequency", id: 0x4, type: "uint16", access: "R V", conformance: "FQ",
        constraint: "minFrequency to maxFrequency", default: 0, quality: "S P Q",

        details: "Indicates the frequency at which the device is at CurrentLevel. A CurrentFrequency of 0 is unknown." +
            "\n" +
            "Changes to this attribute shall only be marked as reportable in the following cases:" +
            "\n" +
            "  • At most once per second, or" +
            "\n" +
            "  • At the start of the movement/transition, or" +
            "\n" +
            "  • At the end of the movement/transition.",

        xref: { document: "cluster", section: "1.6.6.6" }
    }),

    Attribute({
        name: "MinFrequency", id: 0x5, type: "uint16", access: "R V", conformance: "FQ", default: 0,
        details: "Indicates the minimum value of CurrentFrequency that is capable of being assigned. MinFrequency " +
            "shall be less than or equal to MaxFrequency. A value of 0 indicates undefined.",
        xref: { document: "cluster", section: "1.6.6.7" }
    }),

    Attribute({
        name: "MaxFrequency", id: 0x6, type: "uint16", access: "R V", conformance: "FQ",
        constraint: "min minFrequency", default: 0,
        details: "Indicates the maximum value of CurrentFrequency that is capable of being assigned. MaxFrequency " +
            "shall be greater than or equal to MinFrequency. A value of 0 indicates undefined.",
        xref: { document: "cluster", section: "1.6.6.8" }
    }),

    Attribute({
        name: "OnOffTransitionTime", id: 0x10, type: "uint16", access: "RW VO", conformance: "O",
        default: 0,

        details: "Indicates the time taken to move to or from the target level when On or Off commands are received by " +
            "an On/Off cluster on the same endpoint. It is specified in 1/10ths of a second." +
            "\n" +
            "The actual time taken SHOULD be as close to OnOffTransitionTime as the device is able. Please note " +
            "that if the device is not able to move at a variable rate, the OnOffTransitionTime attribute SHOULD " +
            "NOT be implemented.",

        xref: { document: "cluster", section: "1.6.6.10" }
    }),

    Attribute({
        name: "OnLevel", id: 0x11, type: "uint8", access: "RW VO", conformance: "M",
        constraint: "minLevel to maxLevel", default: null, quality: "X",

        details: "Indicates the value that the CurrentLevel attribute is set to when the OnOff attribute of an On/Off " +
            "cluster on the same endpoint is set to TRUE, as a result of processing an On/Off cluster command. If " +
            "the OnLevel attribute is not implemented, or is set to the null value, it has no effect. For more " +
            "details see Effect of On/Off Commands on the CurrentLevel attribute." +
            "\n" +
            "OnLevel represents a mandatory field that was previously not present or optional. Implementers " +
            "should be aware that older devices may not implement it.",

        xref: { document: "cluster", section: "1.6.6.11" }
    }),

    Attribute({
        name: "OnTransitionTime", id: 0x12, type: "uint16", access: "RW VO", conformance: "O",
        default: null, quality: "X",
        details: "Indicates the time taken to move the current level from the minimum level to the maximum level when " +
            "an On command is received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of a " +
            "second. If this attribute is not implemented, or contains a null value, the OnOffTransitionTime " +
            "shall be used instead.",
        xref: { document: "cluster", section: "1.6.6.12" }
    }),

    Attribute({
        name: "OffTransitionTime", id: 0x13, type: "uint16", access: "RW VO", conformance: "O",
        default: null, quality: "X",
        details: "Indicates the time taken to move the current level from the maximum level to the minimum level when " +
            "an Off command is received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of " +
            "a second. If this attribute is not implemented, or contains a null value, the OnOffTransitionTime " +
            "shall be used instead.",
        xref: { document: "cluster", section: "1.6.6.13" }
    }),

    Attribute({
        name: "DefaultMoveRate", id: 0x14, type: "uint8", access: "RW VO", conformance: "O",
        constraint: "min 1", quality: "X",
        details: "Indicates the movement rate, in units per second, when a Move command is received with a null value " +
            "Rate parameter.",
        xref: { document: "cluster", section: "1.6.6.14" }
    }),

    Attribute({
        name: "Options", id: 0xf, type: "OptionsBitmap", access: "RW VO", conformance: "M",
        constraint: "desc", default: 0,

        details: "Indicates the selected options of the device." +
            "\n" +
            "The Options attribute is a bitmap that determines the default behavior of some cluster commands. " +
            "Each command that is dependent on the Options attribute shall first construct a temporary Options " +
            "bitmap that is in effect during the command processing. The temporary Options bitmap has the same " +
            "format and meaning as the Options attribute, but includes any bits that may be overridden by command " +
            "fields." +
            "\n" +
            "This attribute is meant to be changed only during commissioning." +
            "\n" +
            "Command execution shall NOT continue beyond the Options processing if all of these criteria are " +
            "true:" +
            "\n" +
            "  • The command is one of the ‘without On/Off’ commands: Move, Move to Level, Step, or Stop." +
            "\n" +
            "  • The On/Off cluster exists on the same endpoint as this cluster." +
            "\n" +
            "  • The OnOff attribute of the On/Off cluster, on this endpoint, is FALSE." +
            "\n" +
            "  • The value of the ExecuteIfOff bit is 0.",

        xref: { document: "cluster", section: "1.6.6.9" }
    }),

    Attribute({
        name: "StartUpCurrentLevel", id: 0x4000, type: "uint8", access: "RW VM", conformance: "LT",
        constraint: "desc", quality: "X N",

        details: "Indicates the desired startup level for a device when it is supplied with power and this level shall " +
            "be reflected in the CurrentLevel attribute. The values of the StartUpCurrentLevel attribute are " +
            "listed below:" +
            "\n" +
            "This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentLevel " +
            "attribute shall return to its value prior to the restart.",

        xref: { document: "cluster", section: "1.6.6.15" }
    }),

    Command(
        {
            name: "MoveToLevel", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "1.6.7.1" }
        },
        Field({ name: "Level", id: 0x0, type: "uint8", conformance: "M", constraint: "max 254" }),
        Field({ name: "TransitionTime", id: 0x1, type: "uint16", conformance: "M", quality: "X" }),
        Field({ name: "OptionsMask", id: 0x2, type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x3, type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "Move", id: 0x1, access: "O", conformance: "M", direction: "request", response: "status",
            xref: { document: "cluster", section: "1.6.7.2" }
        },
        Field({
            name: "MoveMode", id: 0x0, type: "MoveModeEnum", conformance: "M", constraint: "desc",
            details: "This field shall be one of the non-reserved values in MoveModeEnum.",
            xref: { document: "cluster", section: "1.6.7.2.1" }
        }),

        Field({
            name: "Rate", id: 0x1, type: "uint8", conformance: "M", quality: "X",

            details: "This field shall indicate the rate of movement in units per second. The actual rate of movement " +
                "SHOULD be as close to this rate as the device is able. If the Rate field is null, then the value of " +
                "the DefaultMoveRate attribute shall be used if that attribute is supported and its value is not " +
                "null. If the Rate field is null and the DefaultMoveRate attribute is either not supported or set to " +
                "null, then the device SHOULD move as fast as it is able. If the device is not able to move at a " +
                "variable rate, this" +
                "\n" +
                "field may be disregarded.",

            xref: { document: "cluster", section: "1.6.7.2.2" }
        }),

        Field({ name: "OptionsMask", id: 0x2, type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x3, type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "Step", id: 0x2, access: "O", conformance: "M", direction: "request", response: "status",
            xref: { document: "cluster", section: "1.6.7.3" }
        },
        Field({
            name: "StepMode", id: 0x0, type: "StepModeEnum", conformance: "M", constraint: "desc",
            details: "This field shall be one of the non-reserved values in StepModeEnum.",
            xref: { document: "cluster", section: "1.6.7.3.1" }
        }),
        Field({
            name: "StepSize", id: 0x1, type: "uint8", conformance: "M",
            details: "This field shall indicate the change to CurrentLevel.",
            xref: { document: "cluster", section: "1.6.7.3.2" }
        }),

        Field({
            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", quality: "X",

            details: "This field shall indicate the time that shall be taken to perform the step, in tenths of a second. A " +
                "step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to" +
                "\n" +
                "this as the device is able. If the TransitionTime field is equal to null, the device SHOULD move as " +
                "fast as it is able." +
                "\n" +
                "If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.",

            xref: { document: "cluster", section: "1.6.7.3.3" }
        }),

        Field({ name: "OptionsMask", id: 0x3, type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x4, type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "Stop", id: 0x3, access: "O", conformance: "M", direction: "request", response: "status",
            xref: { document: "cluster", section: "1.6.7.4" }
        },
        Field({ name: "OptionsMask", id: 0x0, type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x1, type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command({
        name: "MoveToLevelWithOnOff", id: 0x4, type: "MoveToLevel", access: "O", conformance: "M",
        direction: "request", response: "status",
        xref: { document: "cluster", section: "1.6.7" }
    }),
    Command({
        name: "MoveWithOnOff", id: 0x5, type: "Move", access: "O", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "cluster", section: "1.6.7" }
    }),
    Command({
        name: "StepWithOnOff", id: 0x6, type: "Step", access: "O", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "cluster", section: "1.6.7" }
    }),
    Command({
        name: "StopWithOnOff", id: 0x7, type: "Stop", access: "O", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "cluster", section: "1.6.7" }
    }),

    Command(
        {
            name: "MoveToClosestFrequency", id: 0x8, access: "O", conformance: "FQ", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "1.6.7.5" }
        },
        Field({ name: "Frequency", id: 0x0, type: "uint16", conformance: "M", default: 0 })
    ),

    Datatype(
        { name: "OptionsBitmap", type: "map8", xref: { document: "cluster", section: "1.6.5.1" } },
        Field({
            name: "ExecuteIfOff", constraint: "0", description: "Dependency on On/Off cluster",
            details: "This bit indicates if this cluster has a dependency with the On/Off cluster.",
            xref: { document: "cluster", section: "1.6.5.1.1" }
        }),
        Field({
            name: "CoupleColorTempToLevel", constraint: "1", description: "Dependency on Color Control cluster",
            details: "This bit indicates if this cluster has a dependency with the Color Control cluster.",
            xref: { document: "cluster", section: "1.6.5.1.2" }
        })
    ),

    Datatype(
        { name: "MoveModeEnum", type: "enum8", xref: { document: "cluster", section: "1.6.5.2" } },
        Field({ name: "Up", id: 0x0, conformance: "M", description: "Increase the level" }),
        Field({ name: "Down", id: 0x1, conformance: "M", description: "Decrease the level" })
    ),
    Datatype(
        { name: "StepModeEnum", type: "enum8", xref: { document: "cluster", section: "1.6.5.3" } },
        Field({ name: "Up", id: 0x0, conformance: "M", description: "Step upwards" }),
        Field({ name: "Down", id: 0x1, conformance: "M", description: "Step downwards" })
    )
);

MatterDefinition.children.push(LevelControl);

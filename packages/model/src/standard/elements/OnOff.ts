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

export const OnOff = Cluster(
    {
        name: "OnOff", id: 0x6, classification: "application", pics: "OO",
        details: "Attributes and commands for turning devices on and off.",
        xref: { document: "cluster", section: "1.5" }
    },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 6 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.5.4" } },

        Field({
            name: "LT", conformance: "[!OFFONLY]", constraint: "0", description: "Lighting",

            details: "This cluster is used for a lighting application." +
                "\n" +
                "On receipt of a Level Control cluster command that causes the OnOff attribute to be set to FALSE, " +
                "the OnTime attribute shall be set to 0." +
                "\n" +
                "On receipt of a Level Control cluster command that causes the OnOff attribute to be set to TRUE, if " +
                "the value of the OnTime attribute is equal to 0, the server shall set the OffWaitTime attribute to " +
                "0.",

            xref: { document: "cluster", section: "1.5.4.1" }
        }),

        Field({
            name: "DF", conformance: "[!OFFONLY]", constraint: "1", description: "DeadFrontBehavior",

            details: "When this feature is supported, the device exposing this server cluster exhibits \"dead front\" " +
                "behavior when the \"OnOff\" attribute is FALSE (Off). This \"dead front\" behavior includes:" +
                "\n" +
                "  • clusters other than this cluster that are also exposed may respond with failures to Invoke and " +
                "    Write interactions. Such failure responses when in a \"dead front\" shall be with an " +
                "    INVALID_IN_STATE status code." +
                "\n" +
                "  • clusters other than this cluster may change the values of their attributes to best-effort " +
                "    values, due to the actual values not being defined or available in this state. Device type " +
                "    specifications that require support for the DF feature SHOULD define what these best-effort " +
                "    values are." +
                "\n" +
                "  • Report Transactions shall continue to be generated. Such transactions may include best-effort " +
                "    values as noted above." +
                "\n" +
                "  • Event generation logic for clusters other than this cluster is unchanged (noting possible use of " +
                "    best-effort attribute values as in the preceding bullets)." +
                "\n" +
                "When this feature is supported and the OnOff attribute changes from TRUE to FALSE (e.g. when " +
                "receiving an Off Command, or due to a manual interaction on the device), it shall start executing " +
                "this \"dead front\" behavior." +
                "\n" +
                "When this feature is supported and the OnOff attribute changes from FALSE to TRUE (e.g. when " +
                "receiving an On Command, or due to a manual interaction on the device), it shall stop executing this " +
                "\"dead front\" behavior." +
                "\n" +
                "When this feature is supported, and any change of the \"dead front\" state leads to changes in " +
                "attributes of other clusters due to the \"dead front\" feature, these attribute changes shall NOT be " +
                "skipped or omitted from the usual processing associated with attribute changes. For example, if an " +
                "attribute changes from value 4 to null on \"dead front\" behavior due to an Off command being " +
                "received, this change shall be processed for reporting and subscriptions.",

            xref: { document: "cluster", section: "1.5.4.2" }
        }),

        Field({
            name: "OFFONLY", conformance: "[!LT | DF]", constraint: "2", description: "OffOnly",

            details: "When this feature is supported, the Off command shall be supported and the On and Toggle commands " +
                "shall NOT be supported." +
                "\n" +
                "This feature is useful for devices which can be turned off via the Off command received by an " +
                "instance of this cluster but cannot be turned on via commands received by an instance of this " +
                "cluster due to regulatory requirements.",

            xref: { document: "cluster", section: "1.5.4.3" }
        })
    ),

    Attribute({
        name: "OnOff", id: 0x0, type: "bool", access: "R V", conformance: "M", default: false,
        quality: "N S",
        details: "This attribute indicates whether the device type implemented on the endpoint is turned off or turned " +
            "on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively.",
        xref: { document: "cluster", section: "1.5.6.2" }
    }),

    Attribute({
        name: "GlobalSceneControl", id: 0x4000, type: "bool", access: "R V", conformance: "LT",
        default: true,

        details: "In order to support the use case where the user gets back the last setting of a set of devices (e.g. " +
            "level settings for lights), a global scene is introduced which is stored when the devices are turned " +
            "off and recalled when the devices are turned on. The global scene is defined as the scene that is " +
            "stored with group identifier 0 and scene identifier 0." +
            "\n" +
            "This attribute is defined in order to prevent a second Off command storing the all-devices-off " +
            "situation as a global scene, and to prevent a second On command destroying the current settings by " +
            "going back to the global scene." +
            "\n" +
            "This attribute shall be set to TRUE after the reception of a command which causes the OnOff " +
            "attribute to be set to TRUE, such as a standard On command, a MoveToLevel(WithOnOff) command, a " +
            "RecallScene command or a OnWithRecallGlobalScene command." +
            "\n" +
            "This attribute is set to FALSE after reception of a OffWithEffect command.",

        xref: { document: "cluster", section: "1.5.6.3" }
    }),

    Attribute({
        name: "OnTime", id: 0x4001, type: "uint16", access: "RW VO", conformance: "LT", default: 0,
        details: "This attribute specifies the length of time (in 1/10ths second) that the On state shall be " +
            "maintained before automatically transitioning to the Off state when using the OnWithTimedOff " +
            "command. This attribute can be written at any time, but writing a value only has effect when in the " +
            "Timed On state. See OnWithTimedOff for more details.",
        xref: { document: "cluster", section: "1.5.6.4" }
    }),

    Attribute({
        name: "OffWaitTime", id: 0x4002, type: "uint16", access: "RW VO", conformance: "LT", default: 0,

        details: "This attribute specifies the length of time (in 1/10ths second) that the Off state shall be guarded " +
            "to prevent another OnWithTimedOff command turning the server back to its On state (e.g., when " +
            "leaving a room, the lights are turned off but an occupancy sensor detects the leaving person and " +
            "attempts to turn the lights back on). This attribute can be written at any time, but writing a value " +
            "only has an effect when in the Timed On state followed by a transition to the Delayed Off state, or " +
            "in the Delayed Off state. See OnWithTimedOff for more details.",

        xref: { document: "cluster", section: "1.5.6.5" }
    }),

    Attribute({
        name: "StartUpOnOff", id: 0x4003, type: "StartUpOnOffEnum", access: "RW VM", conformance: "LT",
        constraint: "desc", quality: "X N",

        details: "This attribute shall define the desired startup behavior of a device when it is supplied with power " +
            "and this state shall be reflected in the OnOff attribute. If the value is null, the OnOff attribute " +
            "is set to its previous value. Otherwise, the behavior is defined in the table defining " +
            "StartUpOnOffEnum." +
            "\n" +
            "This behavior does not apply to reboots associated with OTA. After an OTA restart, the OnOff " +
            "attribute shall return to its value prior to the restart.",

        xref: { document: "cluster", section: "1.5.6.6" }
    }),

    Command({
        name: "Off", id: 0x0, access: "O", conformance: "M", direction: "request", response: "status",
        xref: { document: "cluster", section: "1.5.7.1" }
    }),
    Command({
        name: "On", id: 0x1, access: "O", conformance: "!OFFONLY", direction: "request", response: "status",
        xref: { document: "cluster", section: "1.5.7.2" }
    }),
    Command({
        name: "Toggle", id: 0x2, access: "O", conformance: "!OFFONLY", direction: "request",
        response: "status",
        xref: { document: "cluster", section: "1.5.7.3" }
    }),

    Command(
        {
            name: "OffWithEffect", id: 0x40, access: "O", conformance: "LT", direction: "request",
            response: "status",
            details: "The OffWithEffect command allows devices to be turned off using enhanced ways of fading.",
            xref: { document: "cluster", section: "1.5.7.4" }
        },

        Field({
            name: "EffectIdentifier", id: 0x0, type: "EffectIdentifierEnum", conformance: "M",
            constraint: "desc",
            details: "This field specifies the fading effect to use when turning the device off. This field shall contain " +
                "one of the non-reserved values listed in EffectIdentifierEnum.",
            xref: { document: "cluster", section: "1.5.7.4.1" }
        }),

        Field({
            name: "EffectVariant", id: 0x1, type: "enum8", conformance: "M", constraint: "desc", default: 0,
            details: "This field is used to indicate which variant of the effect, indicated in the EffectIdentifier field, " +
                "SHOULD be triggered. If the server does not support the given variant, it shall use the default " +
                "variant. This field is dependent on the value of the EffectIdentifier field and shall contain one of " +
                "the non-reserved values listed in either DelayedAllOffEffectVariantEnum or " +
                "DyingLightEffectVariantEnum.",
            xref: { document: "cluster", section: "1.5.7.4.2" }
        })
    ),

    Command({
        name: "OnWithRecallGlobalScene", id: 0x41, access: "O", conformance: "LT", direction: "request",
        response: "status",
        details: "This command allows the recall of the settings when the device was turned off.",
        xref: { document: "cluster", section: "1.5.7.5" }
    }),

    Command(
        {
            name: "OnWithTimedOff", id: 0x42, access: "O", conformance: "LT", direction: "request",
            response: "status",
            details: "This command allows devices to be turned on for a specific duration with a guarded off duration so " +
                "that SHOULD the device be subsequently turned off, further OnWithTimedOff commands, received during " +
                "this time, are prevented from turning the devices back on. Further OnWithTimedOff commands received " +
                "while the server is turned on, will update the period that the device is turned on.",
            xref: { document: "cluster", section: "1.5.7.6" }
        },

        Field({
            name: "OnOffControl", id: 0x0, type: "OnOffControlBitmap", conformance: "M", constraint: "0 to 1",
            details: "This field contains information on how the server is to be operated.",
            xref: { document: "cluster", section: "1.5.7.6.1" }
        }),
        Field({
            name: "OnTime", id: 0x1, type: "uint16", conformance: "M", constraint: "max 65534",
            details: "This field is used to adjust the value of the OnTime attribute.",
            xref: { document: "cluster", section: "1.5.7.6.2" }
        }),
        Field({
            name: "OffWaitTime", id: 0x2, type: "uint16", conformance: "M", constraint: "max 65534",
            details: "This field is used to adjust the value of the OffWaitTime attribute.",
            xref: { document: "cluster", section: "1.5.7.6.3" }
        })
    ),

    Datatype(
        { name: "OnOffControlBitmap", type: "map8", xref: { document: "cluster", section: "1.5.5.1" } },
        Field({
            name: "AcceptOnlyWhenOn", constraint: "0",
            description: "Indicates a command is only accepted when in On state."
        })
    ),

    Datatype(
        { name: "StartUpOnOffEnum", type: "enum8", xref: { document: "cluster", section: "1.5.5.2" } },
        Field({ name: "Off", id: 0x0, conformance: "M", description: "Set the OnOff attribute to FALSE" }),
        Field({ name: "On", id: 0x1, conformance: "M", description: "Set the OnOff attribute to TRUE" }),
        Field({
            name: "Toggle", id: 0x2, conformance: "M",
            description: "If the previous value of the OnOff attribute is equal to FALSE, set the OnOff attribute to TRUE. If the previous value of the OnOff attribute is equal to TRUE, set the OnOff attribute to FALSE (toggle)."
        })
    ),

    Datatype(
        { name: "EffectIdentifierEnum", type: "enum8", xref: { document: "cluster", section: "1.5.5.3" } },
        Field({ name: "DelayedAllOff", id: 0x0, conformance: "M", description: "Delayed All Off" }),
        Field({ name: "DyingLight", id: 0x1, conformance: "M", description: "Dying Light" })
    ),

    Datatype(
        { name: "DelayedAllOffEffectVariantEnum", type: "enum8", xref: { document: "cluster", section: "1.5.5.4" } },
        Field({ name: "DelayedOffFastFade", id: 0x0, conformance: "M", description: "Fade to off in 0.8 seconds" }),
        Field({ name: "NoFade", id: 0x1, conformance: "M", description: "No fade" }),
        Field({
            name: "DelayedOffSlowFade", id: 0x2, conformance: "M",
            description: "50% dim down in 0.8 seconds then fade to off in 12 seconds"
        })
    ),

    Datatype(
        { name: "DyingLightEffectVariantEnum", type: "enum8", xref: { document: "cluster", section: "1.5.5.5" } },
        Field({
            name: "DyingLightFadeOff", id: 0x0, conformance: "M",
            description: "20% dim up in 0.5s then fade to off in 1 second"
        })
    )
);

MatterDefinition.children.push(OnOff);

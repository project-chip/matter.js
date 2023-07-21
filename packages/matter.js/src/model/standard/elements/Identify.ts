/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "Identify", id: 0x3, classification: "endpoint", description: "Identify",

    details: "This cluster supports an endpoint identification state (e.g., flashing a light), that indicates to " +
        "an observer (e.g., an installer) which of several nodes and/or endpoints it is. It also supports a " +
        "multicast request that any endpoint that is identifying itself to respond to the initiator." +
        "\n" +
        "The state of this cluster may be shared on more than one endpoint on a node." +
        "\n" +
        "For Example: Two endpoints on a single node, one a temperature sensor, and one a humidity sensor, " +
        "may both share the same cluster instance and therefore identification state (e.g. single LED on the " +
        "node)." +
        "\n" +
        "Zigbee: Note that this cluster cannot be disabled, and remains functional regardless of the setting " +
        "of the DeviceEnable attribute in the Basic cluster.",

    xref: { document: "cluster", section: "1.2" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "1.2.4" },
            children: [{
                tag: "datatype", name: "QRY", constraint: "0", description: "Query",
                details: "Multicast query for identification state"
            }]
        },

        {
            tag: "attribute", name: "IdentifyTime", id: 0x0, type: "uint16", access: "RW VO", conformance: "M",
            default: 0,

            details: "This attribute specifies the remaining length of time, in seconds, that the endpoint will continue " +
                "to identify itself." +
                "\n" +
                "If this attribute is set to a value other than 0 then the device shall enter its identification " +
                "state, in order to indicate to an observer which of several nodes and/or endpoints it is. It is " +
                "RECOMMENDED that this state consists of flashing a light with a period of 0.5 seconds. The " +
                "IdentifyTime attribute shall be decremented every second while in this state." +
                "\n" +
                "If this attribute reaches or is set to the value 0 then the device shall terminate its " +
                "identification state.",

            xref: { document: "cluster", section: "1.2.5.1" }
        },

        {
            tag: "attribute", name: "IdentifyType", id: 0x1, type: "enum8", access: "R V", conformance: "M",
            constraint: "desc", default: 0,
            details: "This attribute specifies how the identification state is presented to the user. This field shall " +
                "contain one of the values listed below:" +
                "\n" +
                "Table 2. Values of the IdentifyType attribute",
            xref: { document: "cluster", section: "1.2.5.2" },

            children: [
                { tag: "datatype", name: "None", id: 0x0, conformance: "M", description: "No presentation." },
                {
                    tag: "datatype", name: "LightOutput", id: 0x1, conformance: "M",
                    description: "Light output of a lighting product."
                },
                {
                    tag: "datatype", name: "VisibleIndicator", id: 0x2, conformance: "M",
                    description: "Typically a small LED."
                },
                { tag: "datatype", name: "AudibleBeep", id: 0x3, conformance: "M" },
                {
                    tag: "datatype", name: "Display", id: 0x4, conformance: "M",
                    description: "Presentation will be visible on display screen."
                },
                {
                    tag: "datatype", name: "Actuator", id: 0x5, conformance: "M",
                    description: "Presentation will be conveyed by actuator functionality such as through a window blind operation or in-wall relay."
                }
            ]
        },

        {
            tag: "command", name: "Identify", id: 0x0, access: "M", conformance: "M", direction: "request",
            response: "status",
            details: "This command starts or stops the receiving device identifying itself.",
            xref: { document: "cluster", section: "1.2.6.1" },
            children: [{ tag: "datatype", name: "IdentifyTime", id: 0x0, type: "uint16", conformance: "M" }]
        },

        {
            tag: "command", name: "IdentifyQuery", id: 0x1, access: "M", conformance: "QRY",
            direction: "request", response: "IdentifyQueryResponse",
            details: "This command allows the sending device to request the target or targets to respond if they are " +
                "currently identifying themselves." +
                "\n" +
                "This command has no data fields.",
            xref: { document: "cluster", section: "1.2.6.2" }
        },

        {
            tag: "command", name: "TriggerEffect", id: 0x40, access: "M", conformance: "O",
            direction: "request", response: "status",

            details: "This command allows the support of feedback to the user, such as a certain light effect. It is used " +
                "to allow an implementation to provide visual feedback to the user under certain circumstances such " +
                "as a color light turning green when it has successfully connected to a network. The use of this " +
                "command and the effects themselves are entirely up to the implementer to use whenever a visual " +
                "feedback is useful but it is not the same as and does not replace the identify mechanism used " +
                "during commissioning.",

            xref: { document: "cluster", section: "1.2.6.3" },

            children: [
                {
                    tag: "datatype", name: "EffectIdentifier", id: 0x0, type: "enum8", conformance: "M",
                    constraint: "desc",

                    details: "This field specifies the identify effect to use. All values of the EffectIdentifier shall be " +
                        "supported. Implementors may deviate from the example light effects in the table below, but they " +
                        "SHOULD indicate during testing how they handle each effect." +
                        "\n" +
                        "This field shall contain one of the non-reserved values listed below." +
                        "\n" +
                        "Table 3. Values of the EffectIdentifier Field of the TriggerEffect Command",

                    xref: { document: "cluster", section: "1.2.6.3.1" },

                    children: [
                        {
                            tag: "datatype", name: "Blink", id: 0x0, conformance: "M",
                            description: "e.g., Light is turned on/off once."
                        },
                        {
                            tag: "datatype", name: "Breathe", id: 0x1, conformance: "M",
                            description: "e.g., Light is turned on/off over 1 second and repeated 15 times."
                        },
                        {
                            tag: "datatype", name: "Okay", id: 0x2, conformance: "M",
                            description: "e.g., Colored light turns green for 1 second; non-colored light flashes twice."
                        },
                        {
                            tag: "datatype", name: "ChannelChange", id: 0xb, conformance: "M",
                            description: "e.g., Colored light turns orange for 8 seconds; non-colored light switches to the maximum brightness for 0.5s and then minimum brightness for 7.5s."
                        },
                        {
                            tag: "datatype", name: "FinishEffect", id: 0xfe, conformance: "M",
                            description: "Complete the current effect sequence before terminating. e.g., if in the middle of a breathe effect (as above), first complete the current 1s breathe effect and then terminate the effect."
                        },
                        {
                            tag: "datatype", name: "StopEffect", id: 0xff, conformance: "M",
                            description: "Terminate the effect as soon as possible."
                        }
                    ]
                },

                {
                    tag: "datatype", name: "EffectVariant", id: 0x1, type: "enum8", conformance: "M",
                    constraint: "desc",
                    details: "This field is used to indicate which variant of the effect, indicated in the EffectIdentifier " +
                        "field, SHOULD be triggered. If a device does not support the given variant, it shall use the " +
                        "default variant. This field shall contain one of the values listed below:" +
                        "\n" +
                        "Table 4. Values of the EffectVariant Field of the TriggerEffect Command",
                    xref: { document: "cluster", section: "1.2.6.3.2" },
                    children: [{ tag: "datatype", name: "Default", id: 0x0, conformance: "M" }]
                }
            ]
        },

        {
            tag: "command", name: "IdentifyQueryResponse", id: 0x0, conformance: "QRY", direction: "response",
            details: "This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery " +
                "Command, in the case that the device is currently identifying itself.",
            xref: { document: "cluster", section: "1.2.6.4" },

            children: [{
                tag: "datatype", name: "Timeout", id: 0x0, type: "uint16", conformance: "M",
                details: "This field contains the current value of the IdentifyTime attribute, and specifies the length of " +
                    "time, in seconds, that the device will continue to identify itself.",
                xref: { document: "cluster", section: "1.2.6.4.1" }
            }]
        }
    ]
});

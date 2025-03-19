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
    CommandElement as Command,
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const Identify = Cluster(
    {
        name: "Identify", id: 0x3, classification: "endpoint", pics: "I",

        details: "This cluster supports an endpoint identification state (e.g., flashing a light), that indicates to " +
            "an observer (e.g., an installer) which of several nodes and/or endpoints it is. It also supports a " +
            "multicast request that any endpoint that is identifying itself to respond to the initiator." +
            "\n" +
            "The state of this cluster may be shared on more than one endpoint on a node." +
            "\n" +
            "For Example: Two endpoints on a single node, one a temperature sensor, and one a humidity sensor, " +
            "may both share the same cluster instance and therefore identification state (e.g. single LED on the " +
            "node).",

        xref: { document: "cluster", section: "1.2" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 5 }),

    Attribute({
        name: "IdentifyTime", id: 0x0, type: "uint16", access: "RW VO", conformance: "M", default: 0,

        details: "Indicates the remaining length of time, in seconds, that the endpoint will continue to identify " +
            "itself." +
            "\n" +
            "If this attribute is set to a value other than 0 then the device shall enter its identification " +
            "state, in order to indicate to an observer which of several nodes and/or endpoints it is. It is " +
            "recommended that this state consists of flashing a light with a period of 0.5 seconds. The " +
            "IdentifyTime attribute shall be decremented every second while in this state." +
            "\n" +
            "If this attribute reaches or is set to the value 0 then the device shall terminate its " +
            "identification state.",

        xref: { document: "cluster", section: "1.2.5.1" }
    }),

    Attribute({
        name: "IdentifyType", id: 0x1, type: "IdentifyTypeEnum", access: "R V", conformance: "M",
        constraint: "desc",
        details: "Indicates how the identification state is presented to the user." +
            "\n" +
            "This attribute shall contain one of the values defined in IdentifyTypeEnum. The value None shall NOT " +
            "be used if the device is capable of presenting its identification state using one of the other " +
            "methods defined in IdentifyTypeEnum.",
        xref: { document: "cluster", section: "1.2.5.2" }
    }),

    Command(
        {
            name: "Identify", id: 0x0, access: "M", conformance: "M", direction: "request", response: "status",
            details: "This command starts or stops the receiving device identifying itself.",
            xref: { document: "cluster", section: "1.2.6.1" }
        },
        Field({ name: "IdentifyTime", id: 0x0, type: "uint16", conformance: "M" })
    ),

    Command(
        {
            name: "TriggerEffect", id: 0x40, access: "M", conformance: "O", direction: "request",
            response: "status",

            details: "This command allows the support of feedback to the user, such as a certain light effect. It is used " +
                "to allow an implementation to provide visual feedback to the user under certain circumstances such " +
                "as a color light turning green when it has successfully connected to a network. The use of this " +
                "command and the effects themselves are entirely up to the implementer to use whenever a visual " +
                "feedback is useful but it is not the same as and does not replace the identify mechanism used during " +
                "commissioning.",

            xref: { document: "cluster", section: "1.2.6.2" }
        },

        Field({
            name: "EffectIdentifier", id: 0x0, type: "EffectIdentifierEnum", conformance: "M",
            constraint: "desc",

            details: "This field shall indicate the identify effect to use and shall contain one of the non-reserved " +
                "values in EffectIdentifierEnum." +
                "\n" +
                "All values of the EffectIdentifierEnum shall be supported. Implementors may deviate from the example " +
                "light effects in EffectIdentifierEnum, but they SHOULD indicate during testing how they handle each " +
                "effect.",

            xref: { document: "cluster", section: "1.2.6.2.1" }
        }),

        Field({
            name: "EffectVariant", id: 0x1, type: "EffectVariantEnum", conformance: "M", constraint: "desc",
            details: "This field shall indicate which variant of the effect, indicated in the EffectIdentifier field, " +
                "SHOULD be triggered. If a device does not support the given variant, it shall use the default " +
                "variant. This field shall contain one of the values in EffectVariantEnum.",
            xref: { document: "cluster", section: "1.2.6.2.2" }
        })
    ),

    Datatype(
        { name: "IdentifyTypeEnum", type: "enum8", xref: { document: "cluster", section: "1.2.4.1" } },
        Field({ name: "None", id: 0x0, conformance: "M", description: "No presentation." }),
        Field({ name: "LightOutput", id: 0x1, conformance: "M", description: "Light output of a lighting product." }),
        Field({ name: "VisibleIndicator", id: 0x2, conformance: "M", description: "Typically a small LED." }),
        Field({ name: "AudibleBeep", id: 0x3, conformance: "M" }),
        Field({ name: "Display", id: 0x4, conformance: "M", description: "Presentation will be visible on display screen." }),
        Field({
            name: "Actuator", id: 0x5, conformance: "M",
            description: "Presentation will be conveyed by actuator functionality such as through a window blind operation or in- wall relay."
        })
    ),

    Datatype(
        { name: "EffectIdentifierEnum", type: "enum8", xref: { document: "cluster", section: "1.2.4.2" } },
        Field({ name: "Blink", id: 0x0, conformance: "M", description: "e.g., Light is turned on/off once." }),
        Field({
            name: "Breathe", id: 0x1, conformance: "M",
            description: "e.g., Light is turned on/off over 1 second and repeated 15 times."
        }),
        Field({
            name: "Okay", id: 0x2, conformance: "M",
            description: "e.g., Colored light turns green for 1 second; non-colored light flashes twice."
        }),
        Field({
            name: "ChannelChange", id: 0xb, conformance: "M",
            description: "e.g., Colored light turns orange for 8 seconds; non-colored light switches to the maximum brightness for 0.5s and then minimum brightness for 7.5s."
        }),
        Field({
            name: "FinishEffect", id: 0xfe, conformance: "M",
            description: "Complete the current effect sequence before terminating. e.g., if in the middle of a breathe effect (as above), first complete the current 1s breathe effect and then terminate the effect."
        }),
        Field({ name: "StopEffect", id: 0xff, conformance: "M", description: "Terminate the effect as soon as possible." })
    ),

    Datatype(
        { name: "EffectVariantEnum", type: "enum8", xref: { document: "cluster", section: "1.2.4.3" } },
        Field({ name: "Default", id: 0x0, conformance: "M", description: "Indicates the default effect is used" })
    )
);

MatterDefinition.children.push(Identify);

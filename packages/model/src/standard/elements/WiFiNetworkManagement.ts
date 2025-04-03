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
    FieldElement as Field
} from "../../elements/index.js";

export const WiFiNetworkManagement = Cluster(
    {
        name: "WiFiNetworkManagement", id: 0x451, asOf: "1.4", classification: "application",
        pics: "WIFINM",
        details: "This cluster provides an interface for getting information about the Wi-Fi network that a Network " +
            "Infrastructure Manager device type provides. Privileged nodes within the same fabric as a Network " +
            "Infrastructure Manager can use these interfaces to request information related to the Wi-Fi Network " +
            "such as SSID and Passphrase.",
        xref: { document: "cluster", section: "10.2" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute({
        name: "Ssid", id: 0x0, type: "octstr", access: "R V", conformance: "M", constraint: "1 to 32",
        default: null, quality: "X N",

        details: "Indicates the SSID of the primary Wi-Fi network provided by this device." +
            "\n" +
            "A value of null shall indicate that no primary Wi-Fi network is available (e.g. because the Wi-Fi " +
            "network has not yet been configured by the user)." +
            "\n" +
            "NOTE" +
            "\n" +
            "The SSID in Wi-Fi is a collection of 1-32 bytes, the text encoding of which is not specified. " +
            "Implementations must be careful to support transferring these byte strings without requiring a " +
            "particular encoding. The most common encoding is UTF-8, however this is just a convention. Some " +
            "configurations may use Latin-1 or other character sets.",

        xref: { document: "cluster", section: "10.2.4.1" }
    }),

    Attribute({
        name: "PassphraseSurrogate", id: 0x1, type: "uint64", access: "R M", conformance: "M",
        default: null, quality: "X N",

        details: "This attribute shall contain an arbitrary numeric value; this value shall increase whenever the " +
            "passphrase or PSK associated with the primary Wi-Fi network provided by this device changes." +
            "\n" +
            "A value of null shall indicate that no primary Wi-Fi network is available." +
            "\n" +
            "Clients can subscribe to this attribute or compare its value to a locally cached copy to detect if a " +
            "cached passphrase value has become stale." +
            "\n" +
            "It is recommended that servers implement this attribute as either a timestamp or a counter. When " +
            "implemented as a counter it SHOULD be initialized with a random value." +
            "\n" +
            "NOTE" +
            "\n" +
            "The passphrase itself is not exposed as an attribute to avoid its unintentional retrieval or caching " +
            "by clients that use wildcard reads or otherwise routinely read all available attributes. It can be " +
            "retrieved using the NetworkPassphraseRequest" +
            "\n" +
            "command.",

        xref: { document: "cluster", section: "10.2.4.2" }
    }),

    Command({
        name: "NetworkPassphraseRequest", id: 0x0, access: "M", conformance: "M", direction: "request",
        response: "NetworkPassphraseResponse",

        details: "This command is used to request the current WPA-Personal passphrase or PSK associated with the Wi-Fi " +
            "network provided by this device." +
            "\n" +
            "If the command is not executed via a CASE session, the command shall be rejected with a status of " +
            "UNSUPPORTED_ACCESS." +
            "\n" +
            "If no primary Wi-Fi network is available (the SSID attribute is null), the command shall be rejected " +
            "with a status of INVALID_IN_STATE." +
            "\n" +
            "Otherwise a NetworkPassphraseResponse shall be generated.",

        xref: { document: "cluster", section: "10.2.5.1" }
    }),

    Command(
        {
            name: "NetworkPassphraseResponse", id: 0x1, conformance: "M", direction: "response",
            details: "This command shall be generated in response to a NetworkPassphraseRequest command.",
            xref: { document: "cluster", section: "10.2.5.2" }
        },
        Field({ name: "Passphrase", id: 0x0, type: "octstr", conformance: "M", constraint: "max 64" })
    )
);

MatterDefinition.children.push(WiFiNetworkManagement);

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

export const ContentAppObserver = Cluster(
    {
        name: "ContentAppObserver", id: 0x510, classification: "application", pics: "APPOBSERVER",

        details: "This cluster provides an interface for sending targeted commands to an Observer of a Content App on " +
            "a Video Player device such as a Streaming Media Player, Smart TV or Smart Screen." +
            "\n" +
            "The cluster server for Content App Observer is implemented by an endpoint that communicates with a " +
            "Content App, such as a Casting Video Client." +
            "\n" +
            "The cluster client for Content App Observer is implemented by a Content App endpoint." +
            "\n" +
            "A Content App is informed of the NodeId of an Observer when a binding is set on the Content App. For " +
            "a Content App Platform, the binding is set by the platform when a CastingVideoClient is granted " +
            "access to the Content App, and the CastingVideoClient supports the Content App Observer cluster. The " +
            "Content App can then send the ContentAppMessage to the Observer (server cluster), and the Observer " +
            "responds with a ContentAppMessageResponse." +
            "\n" +
            "The Data and EncodingHint fields of the ContentAppMessage and ContentAppMessageResponse contain " +
            "content app-specific values, the format and interpretation of which is defined by the Content App " +
            "vendor, analogous to the custom message features offered by other popular casting protocols. " +
            "Standardized cluster and commands are used here rather than manufacturer-specific cluster and " +
            "commands because of the role that the Content App Platform plays in creating the ACLs and Bindings " +
            "on both sides of the communication between the Content App Observer endpoint and the Content App " +
            "endpoint." +
            "\n" +
            "By using standard cluster and commands:" +
            "\n" +
            "  1. The Content App Platform is able to easily determine that a binding is needed on the Content " +
            "     App endpoint because it can recognize the Content App Observer cluster implemented by a client " +
            "     node." +
            "\n" +
            "  2. The Content App Platform is able to easily identify commands that are allowed to be sent by the " +
            "     Content App to a client node because those commands use the Content App Observer cluster." +
            "\n" +
            "  3. The Content App is able to easily determine that a node supports the Content App Observer " +
            "     cluster because it has received a binding which specifies the Content App Observer cluster." +
            "\n" +
            "  4. The Casting Video Client is able to support a single cluster for receiving commands from any " +
            "     Content App and does not need to explicitly list every Content App it understands." +
            "\n" +
            "A Content App Observer SHOULD ignore the Data and EncodingHint field values in commands from a " +
            "Content App it does not recognize. A Content App SHOULD ignore the Data field values in responses " +
            "when the EncodingHint value is blank or not recognized.",

        xref: { document: "cluster", section: "6.12" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Command(
        {
            name: "ContentAppMessage", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "ContentAppMessageResponse",
            details: "Upon receipt, the data field may be parsed and interpreted. Message encoding is specific to the " +
                "Content App. A Content App may when possible read attributes from the Basic Information Cluster on " +
                "the Observer and use this to determine the Message encoding." +
                "\n" +
                "This command returns a ContentAppMessage Response.",
            xref: { document: "cluster", section: "6.12.5.1" }
        },

        Field({
            name: "Data", id: 0x0, type: "string", conformance: "M", constraint: "max 500",
            details: "This field shall indicate content app-specific data.",
            xref: { document: "cluster", section: "6.12.5.1.1" }
        }),
        Field({
            name: "EncodingHint", id: 0x1, type: "string", conformance: "O", constraint: "max 100",
            details: "This optional field shall indicate a content app-specific hint to the encoding of the data.",
            xref: { document: "cluster", section: "6.12.5.1.2" }
        })
    ),

    Command(
        {
            name: "ContentAppMessageResponse", id: 0x1, conformance: "M", direction: "response",
            details: "This command shall be generated in response to ContentAppMessage command.",
            xref: { document: "cluster", section: "6.12.5.2" }
        },
        Field({
            name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",
            details: "This field shall indicate the status of the command which resulted in this response.",
            xref: { document: "cluster", section: "6.12.5.2.1" }
        }),
        Field({
            name: "Data", id: 0x1, type: "string", conformance: "O", constraint: "max 500",
            details: "This optional field shall indicate content app-specific data.",
            xref: { document: "cluster", section: "6.12.5.2.2" }
        }),
        Field({
            name: "EncodingHint", id: 0x2, type: "string", conformance: "O", constraint: "max 100",
            details: "This optional field shall indicate a content app-specific hint to the encoding of the data.",
            xref: { document: "cluster", section: "6.12.5.2.3" }
        })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8", xref: { document: "cluster", section: "6.12.4.1" } },
        Field({ name: "Success", id: 0x0, conformance: "M", description: "Command succeeded" }),
        Field({
            name: "UnexpectedData", id: 0x1, conformance: "M",
            description: "Data field in command was not understood by the Observer"
        })
    )
);

MatterDefinition.children.push(ContentAppObserver);

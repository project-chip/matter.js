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

export const JointFabricPki = Cluster(
    {
        name: "JointFabricPki", id: 0x753, classification: "node", pics: "JFPKI",
        details: "An instance of the Joint Fabric PKI Cluster only applies to Joint Fabric Administrator nodes " +
            "fulfilling the role of Anchor CA." +
            "\n" +
            "NOTE Support for Joint Fabric PKI Cluster is provisional.",
        xref: { document: "core", section: "11.25" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Command(
        {
            name: "IcacsrRequest", id: 0x0, access: "A", conformance: "M", direction: "request",
            response: "IcacsrResponse",
            details: "This command shall be generated and executed during the Joint Commissioning Method steps and " +
                "subsequently respond in the form of an ICACSRResponse command." +
                "\n" +
                "Check ICA Cross Signing for details about the generation and contents of the ICACSR.",
            xref: { document: "core", section: "11.25.5.1" }
        },

        Field({ name: "Icacsr", id: 0x0, type: "octstr", conformance: "M", constraint: "max 400" })
    ),

    Command(
        {
            name: "IcacsrResponse", id: 0x1, access: "A", conformance: "M", direction: "response",
            details: "This command shall be generated in response to the ICACSRRequest command. Check ICA Cross Signing " +
                "for details about the generation and contents of ICAC.",
            xref: { document: "core", section: "11.25.5.2" }
        },

        Field({
            name: "StatusCode", id: 0x0, type: "IcacsrRequestStatusEnum", conformance: "M",
            details: "This field shall contain an ICACSRRequestStatusEnum value representing the status of the Section " +
                "11.25.5.1, “ICACSRRequest Command” operation.",
            xref: { document: "core", section: "11.25.5.2.1" }
        }),

        Field({
            name: "Icac", id: 0x1, type: "octstr", conformance: "O", constraint: "max 400",
            details: "If present, it shall contain the NOC Issuer Certificate in PEM format.",
            xref: { document: "core", section: "11.25.5.2.2" }
        })
    ),

    Command({
        name: "TransferAnchorRequest", id: 0x2, access: "A", conformance: "M", direction: "request",
        response: "TransferAnchorResponse",
        xref: { document: "core", section: "11.25.5" }
    }),
    Command({
        name: "TransferAnchorResponse", id: 0x3, access: "A", conformance: "M", direction: "response",
        xref: { document: "core", section: "11.25.5" }
    }),
    Command({
        name: "TransferAnchorComplete", id: 0x4, access: "A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.25.5" }
    }),

    Datatype(
        {
            name: "IcacsrRequestStatusEnum", type: "enum8",
            details: "This enumeration is used by the ICACSRResponse command to convey the detailed outcome of this " +
                "cluster’s ICACSRRequest command.",
            xref: { document: "core", section: "11.25.4.1" }
        },

        Field({ name: "Ok", id: 0x0, conformance: "M", description: "No error" }),
        Field({
            name: "InvalidIcaCsrFormat", id: 0x1, conformance: "M",
            description: "The ICACSR in the request is not compliant to PKCS #10 rules"
        }),
        Field({
            name: "InvalidIcaCsrSignature", id: 0x2, conformance: "M",
            description: "The ICACSR in the request has an incorrect signature"
        }),
        Field({
            name: "FailedDclVendorIdValidation", id: 0x3, conformance: "M",
            description: "DCL Vendor ID validation failed"
        }),
        Field({ name: "NotAnIcac", id: 0x4, conformance: "M", description: "DCL returned certificate is not an ICAC" }),
        Field({
            name: "BusyAnchorTransfer", id: 0x5, conformance: "M",
            description: "Error due to an in progress Anchor Transfer"
        }),
        Field({ name: "IcaCsrSigningFailed", id: 0x6, conformance: "M", description: "Signing the ICA CSR failed" }),
        Field({ name: "IcaCsrRequestNoUserConsent", id: 0x7, conformance: "M", description: "No user consent" })
    ),

    Datatype(
        {
            name: "TransferAnchorResponseStatusEnum", type: "enum8",
            details: "This enumeration is used by the TransferAnchorResponse command to convey the detailed outcome of " +
                "this cluster’s TransferAnchorRequest command.",
            xref: { document: "core", section: "11.25.4.2" }
        },

        Field({ name: "Ok", id: 0x0, conformance: "M", description: "No error" }),
        Field({
            name: "TransferAnchorStatusDatastoreBusy", id: 0x1, conformance: "M",
            description: "Anchor Transfer was not started due to on- going Datastore operations"
        }),
        Field({
            name: "TransferAnchorStatusNoUserConsent", id: 0x2, conformance: "M",
            description: "User has not consented for Anchor Transfer"
        })
    )
);

MatterDefinition.children.push(JointFabricPki);

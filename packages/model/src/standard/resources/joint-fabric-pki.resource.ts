/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "JointFabricPki", classification: "node", pics: "JFPKI", xref: "core§11.25",
    details: "An instance of the Joint Fabric PKI Cluster only applies to Joint Fabric Administrator nodes " +
        "fulfilling the role of Anchor CA.",

    children: [
        {
            tag: "command", name: "IcacsrRequest", xref: "core§11.25.5.1",
            details: "This command shall be generated and executed during the Joint Commissioning Method steps and " +
                "subsequently respond in the form of an ICACSRResponse command." +
                "\n" +
                "Check ICA Cross Signing for details about the generation and contents of the ICACSR."
        },

        {
            tag: "command", name: "IcacsrResponse", xref: "core§11.25.5.2",
            details: "This command shall be generated in response to the ICACSRRequest command. Check ICA Cross Signing " +
                "for details about the generation and contents of ICAC.",

            children: [
                {
                    tag: "field", name: "StatusCode", xref: "core§11.25.5.2.1",
                    details: "This field shall contain an ICACSRRequestStatusEnum value representing the status of the Section " +
                        "11.25.5.1, “ICACSRRequest Command” operation."
                },
                {
                    tag: "field", name: "Icac", xref: "core§11.25.5.2.2",
                    details: "If present, it shall contain the NOC Issuer Certificate in PEM format."
                }
            ]
        },

        { tag: "command", name: "TransferAnchorRequest", xref: "core§11.25.5" },
        { tag: "command", name: "TransferAnchorResponse", xref: "core§11.25.5" },
        { tag: "command", name: "TransferAnchorComplete", xref: "core§11.25.5" },

        {
            tag: "datatype", name: "IcacsrRequestStatusEnum", xref: "core§11.25.4.1",
            details: "This enumeration is used by the ICACSRResponse command to convey the detailed outcome of this " +
                "cluster’s ICACSRRequest command.",

            children: [
                { tag: "field", name: "Ok", description: "No error" },
                {
                    tag: "field", name: "InvalidIcaCsrFormat",
                    description: "The ICACSR in the request is not compliant to PKCS #10 rules"
                },
                {
                    tag: "field", name: "InvalidIcaCsrSignature",
                    description: "The ICACSR in the request has an incorrect signature"
                },
                { tag: "field", name: "FailedDclVendorIdValidation", description: "DCL Vendor ID validation failed" },
                { tag: "field", name: "NotAnIcac", description: "DCL returned certificate is not an ICAC" },
                {
                    tag: "field", name: "BusyAnchorTransfer",
                    description: "Error due to an in progress Anchor Transfer"
                },
                { tag: "field", name: "IcaCsrSigningFailed", description: "Signing the ICA CSR failed" },
                { tag: "field", name: "IcaCsrRequestNoUserConsent", description: "No user consent" }
            ]
        },

        {
            tag: "datatype", name: "TransferAnchorResponseStatusEnum", xref: "core§11.25.4.2",
            details: "This enumeration is used by the TransferAnchorResponse command to convey the detailed outcome of " +
                "this cluster’s TransferAnchorRequest command.",

            children: [
                { tag: "field", name: "Ok", description: "No error" },
                {
                    tag: "field", name: "TransferAnchorStatusDatastoreBusy",
                    description: "Anchor Transfer was not started due to on-going Datastore operations"
                },
                {
                    tag: "field", name: "TransferAnchorStatusNoUserConsent",
                    description: "User has not consented for Anchor Transfer"
                }
            ]
        }
    ]
});

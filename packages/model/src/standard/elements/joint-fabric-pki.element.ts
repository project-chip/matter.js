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
    { name: "JointFabricPki", id: 0x753 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Command(
        {
            name: "IcacsrRequest", id: 0x0, access: "A", conformance: "M", direction: "request",
            response: "IcacsrResponse"
        },
        Field({ name: "Icacsr", id: 0x0, type: "octstr", conformance: "M", constraint: "max 400" })
    ),

    Command(
        { name: "IcacsrResponse", id: 0x1, access: "A", conformance: "M", direction: "response" },
        Field({ name: "StatusCode", id: 0x0, type: "IcacsrRequestStatusEnum", conformance: "M" }),
        Field({ name: "Icac", id: 0x1, type: "octstr", conformance: "O", constraint: "max 400" })
    ),
    Command({
        name: "TransferAnchorRequest", id: 0x2, access: "A", conformance: "M", direction: "request",
        response: "TransferAnchorResponse"
    }),
    Command({ name: "TransferAnchorResponse", id: 0x3, access: "A", conformance: "M", direction: "response" }),
    Command({
        name: "TransferAnchorComplete", id: 0x4, access: "A", conformance: "M", direction: "request",
        response: "status"
    }),

    Datatype(
        { name: "IcacsrRequestStatusEnum", type: "enum8" },
        Field({ name: "Ok", id: 0x0, conformance: "M" }),
        Field({ name: "InvalidIcaCsrFormat", id: 0x1, conformance: "M" }),
        Field({ name: "InvalidIcaCsrSignature", id: 0x2, conformance: "M" }),
        Field({ name: "FailedDclVendorIdValidation", id: 0x3, conformance: "M" }),
        Field({ name: "NotAnIcac", id: 0x4, conformance: "M" }),
        Field({ name: "BusyAnchorTransfer", id: 0x5, conformance: "M" }),
        Field({ name: "IcaCsrSigningFailed", id: 0x6, conformance: "M" }),
        Field({ name: "IcaCsrRequestNoUserConsent", id: 0x7, conformance: "M" })
    ),

    Datatype(
        { name: "TransferAnchorResponseStatusEnum", type: "enum8" },
        Field({ name: "Ok", id: 0x0, conformance: "M" }),
        Field({ name: "TransferAnchorStatusDatastoreBusy", id: 0x1, conformance: "M" }),
        Field({ name: "TransferAnchorStatusNoUserConsent", id: 0x2, conformance: "M" })
    )
);

MatterDefinition.children.push(JointFabricPki);

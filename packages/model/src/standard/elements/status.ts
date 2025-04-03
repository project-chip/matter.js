/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const status = Datatype(
    {
        name: "status", type: "enum8", description: "Status Code", isSeed: true, metatype: "enum",

        details: "An enumeration value that means a success or error status. A status code is indicated as a response " +
            "to an action in an interaction (see Interaction Model)." +
            "\n" +
            "A status code shall be one of:" +
            "\n" +
            "  • a common status code from the set defined in the Interaction Model status code table;" +
            "\n" +
            "  • a cluster status code that is scoped to a particular cluster." +
            "\n" +
            "The following table defines the enumeration ranges for status codes." +
            "\n" +
            "Status codes in an undefined range, or status codes undefined within a range are reserved and shall " +
            "NOT be indicated.",

        xref: { document: "core", section: "7.19.2.18" }
    },

    Field({
        name: "Success", id: 0x0, description: "Operation was successful.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "Failure", id: 0x1, description: "Operation was not successful.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "InvalidSubscription", id: 0x7d, description: "Subscription ID is not active.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "UnsupportedAccess", id: 0x7e,
        description: "The sender of the action or command does not have authorization or access.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "UnsupportedEndpoint", id: 0x7f,
        description: "The endpoint indicated is unsupported on the node.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "InvalidAction", id: 0x80,
        description: "The action is malformed, has missing fields, or fields with invalid values. Action not carried out.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "UnsupportedCommand", id: 0x81,
        description: "The indicated command ID is not supported on the cluster instance. Command not carried out.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "InvalidCommand", id: 0x85,
        description: "The cluster command is malformed, has missing fields, or fields with invalid values. Command not carried out.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "UnsupportedAttribute", id: 0x86,
        description: "The indicated attribute ID, field ID or list entry does not exist for an attribute path.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "ConstraintError", id: 0x87,
        description: "Out of range error or set to a reserved value. Attribute keeps its old value. Note that an attribute value may be out of range if an attribute is related to another, e.g. with minimum and maximum attributes. See the individual attribute descriptions for specific details.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "UnsupportedWrite", id: 0x88, description: "Attempt to write a read-only attribute.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "ResourceExhausted", id: 0x89,
        description: "An action or operation failed due to insufficient available resources.INSUFFICIENT_SPACE is anobsolete name for this error code.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "NotFound", id: 0x8b, description: "The indicated data field or entry could not be found.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "UnreportableAttribute", id: 0x8c,
        description: "Reports cannot be issued for this attribute.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "InvalidDataType", id: 0x8d,
        description: "The data type indicated is undefined or invalid for the indicated data field. Command or action not carried out.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "UnsupportedRead", id: 0x8f, description: "Attempt to read a write-only attribute.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "DataVersionMismatch", id: 0x92,
        description: "Cluster instance data version did not match request path",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "Timeout", id: 0x94, description: "The transaction was aborted due to time being exceeded.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "UnsupportedNode", id: 0x9b,
        description: "The node ID indicated is not supported on the node.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "Busy", id: 0x9c,
        description: "The receiver is busy processing another action that prevents the execution of the incoming action.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "AccessRestricted", id: 0x9d,
        description: "The access to the action or command by the sender is permitted by the ACL but restricted by the ARL.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "UnsupportedCluster", id: 0xc3,
        description: "The cluster indicated is not supported on the endpoint.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "NoUpstreamSubscription", id: 0xc5,
        description: "Used by proxies to convey to clients the lack of an upstream subscription to a source.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "NeedsTimedInteraction", id: 0xc6,
        description: "A Untimed Write or Untimed Invoke interaction was used for an attribute or command that requires a Timed Write or Timed Invoke.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "UnsupportedEvent", id: 0xc7,
        description: "The indicated event ID is not supported on the cluster instance.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "PathsExhausted", id: 0xc8,
        description: "The receiver has insufficient resources to support the specified number of paths in the request",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "TimedRequestMismatch", id: 0xc9,
        description: "A request with TimedRequest field set to TRUE was issued outside a Timed transaction or a request with TimedRequest set to FALSE was issued inside a Timed transaction.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "FailsafeRequired", id: 0xca,
        description: "A request requiring a Fail-safe context was invoked without the Fail-Safe context.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "InvalidInState", id: 0xcb,
        description: "The received request cannot be handled due to the current operational state of the device",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "NoCommandResponse", id: 0xcc,
        description: "A CommandDataIB is missing a response in the InvokeResponses of an Invoke Response action.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "TermsAndConditionsChanged", id: 0xcd,
        description: "The node requires updated TC acceptance. The user MAY be directed to visit the EnhancedSetupFlowMaintenanceUrl to complete this.",
        xref: { document: "core", section: "8.10.1" }
    }),
    Field({
        name: "MaintenanceRequired", id: 0xce,
        description: "The node requires the user to visit the EnhancedSetupFlowMaintenanceUrl for instructions on further action.",
        xref: { document: "core", section: "8.10.1" }
    })
);

MatterDefinition.children.push(status);

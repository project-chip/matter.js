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

export const JointFabricDatastore = Cluster(
    { name: "JointFabricDatastore", id: 0x752 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute({ name: "AnchorRootCa", id: 0x0, type: "octstr", access: "R S A", conformance: "M" }),
    Attribute({ name: "AnchorNodeId", id: 0x1, type: "node-id", access: "R S A", conformance: "M" }),
    Attribute({ name: "AnchorVendorId", id: 0x2, type: "vendor-id", access: "R S A", conformance: "M" }),
    Attribute({ name: "FriendlyName", id: 0x3, type: "string", access: "R S A", conformance: "M", constraint: "max 32" }),
    Attribute(
        { name: "GroupKeySetList", id: 0x4, type: "list", access: "R S A", conformance: "M" },
        Field({ name: "entry", type: "GroupKeyManagement.GroupKeySetStruct" })
    ),
    Attribute(
        { name: "GroupList", id: 0x5, type: "list", access: "R S A", conformance: "M" },
        Field({ name: "entry", type: "DatastoreGroupInformationEntry" })
    ),
    Attribute(
        { name: "NodeList", id: 0x6, type: "list", access: "R S A", conformance: "M" },
        Field({ name: "entry", type: "DatastoreNodeInformationEntry" })
    ),
    Attribute(
        { name: "AdminList", id: 0x7, type: "list", access: "R S A", conformance: "M" },
        Field({ name: "entry", type: "DatastoreAdministratorInformationEntry" })
    ),
    Attribute({ name: "StatusEntry", id: 0x8, type: "DatastoreAdministratorInformationEntry", access: "R S A", conformance: "M" }),
    Command({ name: "Section112471", id: 0x0, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ name: "Section112472", id: 0x1, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ name: "Section112473", id: 0x2, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ name: "Section112474", id: 0x3, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ name: "Section112475", id: 0x4, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ name: "Section112476", id: 0x5, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ name: "Section112477", id: 0x6, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ name: "Section112478", id: 0x7, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ name: "Section112479", id: 0x8, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ name: "Section1124710", id: 0x9, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ name: "Section1124711", id: 0xa, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ name: "Section1124712", id: 0xb, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ name: "Section1124713", id: 0xc, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ name: "Section1124714", id: 0xd, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ name: "Section1124715", id: 0xe, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command({ name: "Section1124716", id: 0xf, access: "F A", conformance: "M", direction: "request", response: "status" }),
    Command(
        { name: "Section1124717", id: 0x10, access: "F A", conformance: "M", direction: "request", response: "status" }
    ),
    Command(
        { name: "Section1124718", id: 0x11, access: "F A", conformance: "M", direction: "request", response: "status" }
    ),
    Command(
        { name: "Section1124719", id: 0x12, access: "F A", conformance: "M", direction: "request", response: "status" }
    ),
    Command(
        { name: "Section1124720", id: 0x13, access: "F A", conformance: "M", direction: "request", response: "status" }
    ),

    Datatype(
        { name: "DatastoreStateEnum", type: "enum8" },
        Field({ name: "Pending", id: 0x0, conformance: "M" }),
        Field({ name: "Committed", id: 0x1, conformance: "M" }),
        Field({ name: "DeletePending", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "DatastoreStatusEntry", type: "struct" },
        Field({ name: "State", id: 0x0, type: "DatastoreStateEnum", access: "R F V", conformance: "M", default: 0 }),
        Field({ name: "UpdateTimestamp", id: 0x1, type: "epoch-s", access: "R F V", conformance: "M", default: null }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreNodeKeyEntry", type: "struct" },
        Field({ name: "GroupKeySetId", id: 0x0, type: "uint16", access: "R F V", conformance: "M" }),
        Field({ name: "StatusEntry", id: 0x1, type: "DatastoreStatusEntry", access: "R F V", conformance: "M" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreGroupInformationEntry", type: "struct" },
        Field({ name: "GroupId", id: 0x0, type: "uint64", access: "R F V", conformance: "M" }),
        Field({ name: "FriendlyName", id: 0x1, type: "string", access: "R F V", conformance: "M", constraint: "max 32" }),
        Field({ name: "GroupKeySetId", id: 0x2, type: "uint16", access: "R F V", conformance: "M", constraint: "1 to 65535" }),
        Field({ name: "GroupCat", id: 0x3, type: "uint16", access: "R F V", conformance: "M", constraint: "1 to 65535" }),
        Field({
            name: "GroupCatVersion", id: 0x4, type: "uint16", access: "R F V", conformance: "M",
            constraint: "1 to 65535"
        }),
        Field({
            name: "GroupPermission", id: 0x5, type: "AccessControl.AccessControlEntryPrivilegeEnum",
            access: "R F V", conformance: "M"
        }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreBindingEntry", type: "struct" },
        Field({ name: "ListId", id: 0x0, type: "uint16", access: "R F V", conformance: "M" }),
        Field({
            name: "Binding", id: 0x1, type: "Binding.TargetStruct", access: "R F V", conformance: "M",
            constraint: "desc"
        }),
        Field({ name: "StatusEntry", id: 0x2, type: "DatastoreStatusEntry", access: "R F V", conformance: "M" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreGroupIDEntry", type: "struct" },
        Field({ name: "GroupId", id: 0x0, type: "group-id", access: "R F V", conformance: "M" }),
        Field({ name: "StatusEntry", id: 0x1, type: "DatastoreStatusEntry", access: "R F V", conformance: "M" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreEndpointEntry", type: "struct" },
        Field({ name: "EndpointId", id: 0x0, type: "endpoint-no", access: "R F V", conformance: "M" }),
        Field({ name: "NodeId", id: 0x1, type: "node-id", access: "R F V", conformance: "M" }),
        Field({ name: "FriendlyName", id: 0x2, type: "string", access: "R F V", conformance: "M", constraint: "max 32" }),
        Field({ name: "StatusEntry", id: 0x3, type: "DatastoreStatusEntry", access: "R F V", conformance: "M" }),
        Field(
            { name: "GroupIdList", id: 0x4, type: "list", access: "R F V", conformance: "M" },
            Field({ name: "entry", type: "DatastoreGroupIDEntry" })
        ),
        Field(
            { name: "BindingList", id: 0x5, type: "list", access: "R F V", conformance: "M" },
            Field({ name: "entry", type: "DatastoreBindingEntry" })
        ),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreACLEntry", type: "struct" },
        Field({ name: "ListId", id: 0x0, type: "uint16", access: "R F V", conformance: "M" }),
        Field({
            name: "AclEntry", id: 0x1, type: "AccessControl.AccessControlEntryStruct", access: "R F V",
            conformance: "M"
        }),
        Field({ name: "StatusEntry", id: 0x2, type: "DatastoreStatusEntry", access: "R F V", conformance: "M" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreNodeInformationEntry", type: "struct" },
        Field({ name: "NodeId", id: 0x1, type: "node-id", access: "R F V", conformance: "M" }),
        Field({ name: "FriendlyName", id: 0x2, type: "string", access: "R F V", conformance: "M", constraint: "max 32" }),
        Field({ name: "CommissioningStatusEntry", id: 0x3, type: "DatastoreStatusEntry", access: "R F V", conformance: "M" }),
        Field(
            { name: "NodeKeySetList", id: 0x4, type: "list", access: "R F V", conformance: "M" },
            Field({ name: "entry", type: "DatastoreNodeKeyEntry" })
        ),
        Field(
            { name: "AclList", id: 0x5, type: "list", access: "R F V", conformance: "M" },
            Field({ name: "entry", type: "DatastoreACLEntry" })
        ),
        Field(
            { name: "EndpointList", id: 0x6, type: "list", access: "R F V", conformance: "M" },
            Field({ name: "entry", type: "DatastoreEndpointEntry" })
        ),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreAdministratorInformationEntry", type: "struct" },
        Field({ name: "NodeId", id: 0x1, type: "node-id", access: "R F V", conformance: "M" }),
        Field({ name: "FriendlyName", id: 0x2, type: "string", access: "R F V", conformance: "M", constraint: "max 32" }),
        Field({ name: "VendorId", id: 0x3, type: "vendor-id", access: "R F V", conformance: "M" }),
        Field({ name: "Icac", id: 0x4, type: "octstr", access: "R F V", conformance: "M", constraint: "max 400" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    )
);

MatterDefinition.children.push(JointFabricDatastore);

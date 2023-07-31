/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Conformance, Constraint } from "../aspects/index.js";
import { Metatype, StatusCode } from "../definitions/index.js";
import { AttributeElement } from "./AttributeElement.js";
import { ValueElement } from "./ValueElement.js";
import { DatatypeElement } from "./DatatypeElement.js";
import { EventElement } from "./EventElement.js";

// Constants for all type names used more than once
export const OCTSTR = "octstr";
export const STRUCT = "struct"
export const ENUM8 = "enum8";
export const UINT8 = "uint8";
export const UINT16 = "uint16";
export const UINT32 = "uint32";
export const UINT64 = "uint64";

// Base type factories (types with metatypes)
const bool = (name: string, description: string) =>
    DatatypeElement({ name, description, metatype: Metatype.boolean });
const map = (name: string, description: string, byteSize: ValueElement.BitmapSize) =>
    DatatypeElement({ name, description, byteSize, metatype: Metatype.bitmap });
const int = (name: string, description: string, byteSize: ValueElement.Size) =>
    DatatypeElement({ name, description, byteSize, metatype: Metatype.integer });
const float = (name: string, description: string, byteSize: ValueElement.Size) =>
    DatatypeElement({ name, description, byteSize, metatype: Metatype.float });
const octet = (name: string, description: string) =>
    DatatypeElement({ name, description, metatype: Metatype.bytes });
const string = (name: string, description: string) =>
    DatatypeElement({ name, description, metatype: Metatype.string });
const list = (name: string, description: string) =>
    DatatypeElement({ name, description, metatype: Metatype.array });
const struct = (name: string, description: string) =>
    DatatypeElement({ name, description, metatype: Metatype.object });
const enumt = (name: string, description: string, type: string) =>
    DatatypeElement({ name, description, metatype: Metatype.enum, type });

// Derivative type factories (types that inherit metatypes)
const extInt = (name: string, description: string, type: string) =>
    DatatypeElement({ name, description, type });
const depInt = (name: string, description: string, type: string) =>
    DatatypeElement({ name, description, type, conformance: Conformance.Flag.Deprecated });
const extOctet = (name: string, description: string, constraint?: Constraint.Definition) =>
    DatatypeElement({ name, description, type: OCTSTR, constraint });
const extEnum = (name: string, description: string, values: DatatypeElement.ValueMap) =>
    DatatypeElement({ name, description, type: ENUM8, children: DatatypeElement.ListValues(values) });
const extStruct = (name: string, description: string, children: DatatypeElement[]) =>
    DatatypeElement({ name, description, type: STRUCT, children });

const TodFields = [
    DatatypeElement({ type: "uint8", name: "hours" }),
    DatatypeElement({ type: "uint8", name: "minutes" }),
    DatatypeElement({ type: "uint8", name: "seconds" }),
    DatatypeElement({ type: "uint8", name: "hundredths" })
];

const DateFields = [
    DatatypeElement({ type: "uint8", name: "year" }),
    DatatypeElement({ type: "uint8", name: "month" }),
    DatatypeElement({ type: "uint8", name: "day" }),
    DatatypeElement({ type: "uint8", name: "dow" })
];

/**
 * These are all of the global elements defined in the Matter Specification.
 * This includes types from the "data types" section and other elements from
 * the "global elements" section.
 * 
 * According to the specification, any type that is used by more than one
 * cluster should be defined here.  Various cluster-specific elements reference
 * these types or derive new types.
 */
export const Globals = {
    // Discrete
    bool: bool("bool", "Boolean"),
    map8: map("map8", "8-bit bitmap", 1),
    map16: map("map16", "16-bit bitmap", 2),
    map32: map("map32", "32-bit bitmap", 4),
    map64: map("map64", "64-bit bitmap", 8),

    // Analog integer
    uint8: int(UINT8, "Signed 8-bit integer", 1),
    uint16: int(UINT16, "Signed 16-bit integer", 2),
    uint24: int("uint24", "Signed 24-bit integer", 3),
    uint32: int(UINT32, "Signed 32-bit integer", 4),
    uint40: int("uint40", "Signed 40-bit integer", 5),
    uint48: int("uint48", "Signed 48-bit integer", 6),
    uint56: int("uint56", "Signed 56-bit integer", 7),
    uint64: int(UINT64, "Signed 64-bit integer", 8),
    int8: int("int8", "Unsigned 8-bit integer", 1),
    int16: int("int16", "Unsigned 16-bit integer", 2),
    int24: int("int24", "Unsigned 24-bit integer", 3),
    int32: int("int32", "Unsigned 32-bit integer", 4),
    int40: int("int40", "Unsigned 40-bit integer", 5),
    int48: int("int48", "Unsigned 48-bit integer", 6),
    int56: int("int56", "Unsigned 56-bit integer", 7),
    int64: int("int64", "Unsigned 64-bit integer", 8),

    // Analog float
    single: float("single", "Single precision", 4),
    double: float("double", "Double precision", 8),

    // Composite
    octstr: octet(OCTSTR, "Octet string"),
    list: list("list", "List"),
    struct: struct("struct", "Struct"),

    // Analog relative
    percent: extInt("percent", "Percentage units 1%", UINT8),
    percent100ths: extInt("percent100ths", "Percentage units 0.01%", UINT16),

    // Analog time
    tod: extStruct("tod", "Time of day", TodFields),
    date: extStruct("date", "Date", DateFields),
    epochUs: extInt("epoch-us", "Epoch time in microseconds", UINT64),
    epochS: extInt("epoch-s", "Epoch time in seconds", UINT32),
    /** @deprecated by Matter specification */
    utc: depInt("utc", "UTC time", UINT32),
    posixMs: extInt("posix-ms", "POSIX time in milliseconds", UINT64),
    systimeUs: extInt("systime-us", "Sytem time in microseconds", UINT64),
    systimeMs: extInt("systime-ms", "System time in milliseconds", UINT64),

    // Discrete enumeration
    enum8: enumt(ENUM8, "8-bit enumeration", UINT8),
    enum16: enumt("enum16", "16-bit enumeration", UINT16),
    priority: extEnum("priority", "Priority", EventElement.PriorityId),
    status: extEnum("status", "Status Code", StatusCode),

    // Identifier
    fabricId: extInt("fabric-id", "Fabric ID", UINT64),
    fabricIdx: extInt("fabric-idx", "Fabric Index", UINT8),
    nodeId: extInt("node-id", "Node ID", UINT64),
    /** @deprecated by Matter specification */
    eui64: depInt("eui64", "IEEE address", UINT64),
    groupId: extInt("group-id", "Group ID", UINT16),
    endpointNo: extInt("endpoint-no", "Endpoint number", UINT16),
    // Using CHIP type for vendor-id because spec specifies 0xd3 which conflicts with ipadr
    vendorId: extInt("vendor-id", "Vendor ID", UINT16),
    deviceTypeId: extInt("devtype-id", "Device type ID", UINT32),
    clusterId: extInt("cluster-id", "Cluster ID", UINT32),
    attributeId: extInt("attrib-id", "Attribute ID", UINT32),
    fieldId: extInt("field-id", "Field ID", UINT32),
    eventId: extInt("event-id", "Event ID", UINT32),
    commandId: extInt("command-id", "Command ID", UINT32),
    actionId: extInt("action-id", "Action ID", UINT8),
    transactionId: extInt("trans-id", "Transaction ID", UINT32),

    // Index
    entryIdx: extInt("entry-idx", "Entry index", UINT16),

    // Counter
    dataVer: extInt("data-ver", "Data version", UINT32),
    eventNo: extInt("event-no", "Event number", UINT64),

    // Composite string
    string: string("string", "Character string"),

    // Composite address
    // Using CHIP type for ipadr because spec specifies 0xd3 which conflicts with vendor-id
    ipadr: extOctet("ipadr", "IP Address", { min: 4, max: 16 }),
    ipv4adr: extOctet("ipv4adr", "IPv4 address", 4),
    ipv6adr: extOctet("ipv6adr", "IPv6 address", 16),
    ipv6pre: extOctet("ipv6pre", "IPv6 prefix", { min: 1, max: 17 }),
    hwadr: extOctet("hwadr", "Hardware address", { min: 6, max: 8 }),

    // Global elements
    ClusterRevision: AttributeElement({
        id: 0xfffd, name: "ClusterRevision", type: "uint16",
        constraint: { min: 1 }, quality: "F", access: "R V", conformance: "M"
    }),
    FeatureMap: AttributeElement({
        id: 0xfffc, name: "FeatureMap", type: "map32",
        quality: "F", access: "R V", default: 0, conformance: "M"
    }),
    AttributeList: AttributeElement({
        id: 0xfffb, name: "AttributeList", type: "list[attrib-id]",
        quality: "F", access: "R V", conformance: "M"
    }),
    EventList: AttributeElement({
        id: 0xfffa, name: "EventList", type: "list[event-id]",
        quality: "F", access: "R V", conformance: "P, M"
    }),
    AcceptedCommandListList: AttributeElement({
        id: 0xfff9, name: "AcceptedCommandList", type: "list[command-id]",
        quality: "F", access: "R V", conformance: "M"
    }),
    GeneratedCommandList: AttributeElement({
        id: 0xfff8, name: "GeneratedCommandList", type: "list[command-id]",
        quality: "F", access: "R V", conformance: "M"
    }),
    FabricIndex: DatatypeElement({
        id: 0xfe, name: "FabricIndex", type: "fabric-idx",
        constraint: "1 to 254", access: "R V F", conformance: "M"
    }),

    // Not defined as global in the specification but used across multiple
    // clusters without structured definition
    SubjectId: DatatypeElement({ name: "SubjectID", type: "uint64" }),

    // Not formal part of specification, indicates field's type may vary
    any: DatatypeElement({ name: "any", description: "Any value", metatype: "any" })
}

Object.values(Globals).forEach(g => g.global = true);

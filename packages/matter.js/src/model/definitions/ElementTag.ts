/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Types of elements per the Matter specification.
 *
 * We use "tag" to differentiate elements so we can use "type" for datatypes.
 */
export enum ElementTag {
    Fabric = "fabric",
    Node = "node",
    Endpoint = "endpoint",
    Cluster = "cluster",
    Command = "command",
    Event = "event",
    Attribute = "attribute",
    DeviceType = "deviceType",
    Datatype = "datatype",

    // Device cluster element requirement - not formally an "element" in the
    // specification
    Requirement = "requirement",

    // Root element type - not formally part of specification
    Matter = "matter",
}

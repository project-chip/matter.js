/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Elements from "@project-chip/matter.js/elements";
import {
    FLOAT32_MAX,
    FLOAT32_MIN,
    INT16_MAX,
    INT16_MIN,
    INT32_MAX,
    INT32_MIN,
    INT64_MAX,
    INT64_MIN,
    INT8_MAX,
    INT8_MIN,
    UINT16_MAX,
    UINT24_MAX,
    UINT32_MAX,
    UINT64_MAX,
    UINT8_MAX,
} from "@project-chip/matter.js/util";

/**
 * Map of matter datatype names to TlvGenerator.tlvImport arguments.
 */
export const SpecializedNumbers: { [name: string]: [string, string] } = {
    [Elements.attribId.name]: ["datatype", "TlvAttributeId"],
    [Elements.clusterId.name]: ["datatype", "TlvClusterId"],
    [Elements.commandId.name]: ["datatype", "TlvCommandId"],
    [Elements.devtypeId.name]: ["datatype", "TlvDeviceTypeId"],
    [Elements.endpointNo.name]: ["datatype", "TlvEndpointNumber"],
    [Elements.eventId.name]: ["datatype", "TlvEventId"],
    [Elements.fabricId.name]: ["datatype", "TlvFabricId"],
    [Elements.fabricIdx.name]: ["datatype", "TlvFabricIndex"],
    [Elements.groupId.name]: ["datatype", "TlvGroupId"],
    [Elements.nodeId.name]: ["datatype", "TlvNodeId"],
    [Elements.subjectId.name]: ["datatype", "TlvSubjectId"],
    [Elements.vendorId.name]: ["datatype", "TlvVendorId"],
    [Elements.percent.name]: ["number", "TlvPercent"],
    [Elements.percent100ths.name]: ["number", "TlvPercent100ths"],
    [Elements.epochUs.name]: ["number", "TlvEpochUs"],
    [Elements.epochS.name]: ["number", "TlvEpochS"],
    [Elements.posixMs.name]: ["number", "TlvPosixMs"],
    [Elements.systimeUs.name]: ["number", "TlvSysTimeUs"],
    [Elements.systimeMs.name]: ["number", "TlvSysTimeMS"],
};

/**
 * Map of matter datatype names of wrapped TLV types to the wrapping field
 * name.
 *
 * Turns out we don't actually need the key because we use the constructor but
 * leaving in place in case something changes.
 */
export const WrappedConstantKeys = {
    [Elements.attribId.name]: true,
    [Elements.clusterId.name]: true,
    [Elements.commandId.name]: true,
    [Elements.devtypeId.name]: true,
    [Elements.endpointNo.name]: true,
    [Elements.eventId.name]: true,
    [Elements.fabricId.name]: true,
    [Elements.fabricIdx.name]: true,
    [Elements.groupId.name]: true,
    [Elements.nodeId.name]: true,
    [Elements.subjectId.name]: true,
    [Elements.vendorId.name]: true,
};

/**
 * Bounds for numeric types.
 */
export const NumericRanges = {
    uint8: { min: 0, max: UINT8_MAX },
    uint16: { min: 0, max: UINT16_MAX },
    uint24: { min: 0, max: UINT24_MAX },
    uint32: { min: 0, max: UINT32_MAX },
    uint64: { min: 0, max: UINT64_MAX },
    int8: { min: INT8_MIN, max: INT8_MAX },
    int16: { min: INT16_MIN, max: INT16_MAX },
    int32: { min: INT32_MIN, max: INT32_MAX },
    int64: { min: INT64_MIN, max: INT64_MAX },
    float32: { min: FLOAT32_MIN, max: FLOAT32_MAX },
    percent: { min: 0, max: 100 },
    percent100ths: { min: 0, max: 10000 },
};

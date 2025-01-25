/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

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
} from "#general";
import {
    attribId,
    clusterId,
    commandId,
    devtypeId,
    endpointNo,
    epochS,
    epochUs,
    eventId,
    fabricId,
    fabricIdx,
    groupId,
    Model,
    nodeId,
    percent,
    percent100ths,
    posixMs,
    subjectId,
    systimeMs,
    systimeUs,
    vendorId,
} from "#model";

function special(type: string, category: "datatype" | "number" = "datatype") {
    return { type, category };
}

/**
 * Map of matter datatype names to TlvGenerator.tlvImport arguments.
 */
export const SpecializedNumbers = {
    [attribId.name]: special("TlvAttributeId", "datatype"),
    [clusterId.name]: special("TlvClusterId", "datatype"),
    [commandId.name]: special("TlvCommandId", "datatype"),
    [devtypeId.name]: special("TlvDeviceTypeId", "datatype"),
    [endpointNo.name]: special("TlvEndpointNumber", "datatype"),
    [eventId.name]: special("TlvEventId", "datatype"),
    [fabricId.name]: special("TlvFabricId", "datatype"),
    [fabricIdx.name]: special("TlvFabricIndex", "datatype"),
    [groupId.name]: special("TlvGroupId", "datatype"),
    [nodeId.name]: special("TlvNodeId", "datatype"),
    [subjectId.name]: special("TlvSubjectId", "datatype"),
    [vendorId.name]: special("TlvVendorId", "datatype"),
    [percent.name]: special("TlvPercent", "number"),
    [percent100ths.name]: special("TlvPercent100ths", "number"),
    [epochUs.name]: special("TlvEpochUs", "number"),
    [epochS.name]: special("TlvEpochS", "number"),
    [posixMs.name]: special("TlvPosixMs", "number"),
    [systimeUs.name]: special("TlvSysTimeUs", "number"),
    [systimeMs.name]: special("TlvSysTimeMS", "number"),
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

export function specializedNumberTypeFor(model: Model) {
    for (let base: Model | undefined = model; base; base = base.base) {
        if (SpecializedNumbers[base.name]) {
            return base;
        }
    }
}

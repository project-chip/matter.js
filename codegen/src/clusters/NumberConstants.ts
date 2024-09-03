/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
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
} from "@project-chip/matter.js-general";
import * as Elements from "@project-chip/matter.js-model";
import { Model } from "@project-chip/matter.js-model";

function special(type: string, category: "datatype" | "number" = "datatype") {
    return { type, category };
}

/**
 * Map of matter datatype names to TlvGenerator.tlvImport arguments.
 */
export const SpecializedNumbers = {
    [Elements.attribId.name]: special("TlvAttributeId", "datatype"),
    [Elements.clusterId.name]: special("TlvClusterId", "datatype"),
    [Elements.commandId.name]: special("TlvCommandId", "datatype"),
    [Elements.devtypeId.name]: special("TlvDeviceTypeId", "datatype"),
    [Elements.endpointNo.name]: special("TlvEndpointNumber", "datatype"),
    [Elements.eventId.name]: special("TlvEventId", "datatype"),
    [Elements.fabricId.name]: special("TlvFabricId", "datatype"),
    [Elements.fabricIdx.name]: special("TlvFabricIndex", "datatype"),
    [Elements.groupId.name]: special("TlvGroupId", "datatype"),
    [Elements.nodeId.name]: special("TlvNodeId", "datatype"),
    [Elements.subjectId.name]: special("TlvSubjectId", "datatype"),
    [Elements.vendorId.name]: special("TlvVendorId", "datatype"),
    [Elements.percent.name]: special("TlvPercent", "number"),
    [Elements.percent100ths.name]: special("TlvPercent100ths", "number"),
    [Elements.epochUs.name]: special("TlvEpochUs", "number"),
    [Elements.epochS.name]: special("TlvEpochS", "number"),
    [Elements.posixMs.name]: special("TlvPosixMs", "number"),
    [Elements.systimeUs.name]: special("TlvSysTimeUs", "number"),
    [Elements.systimeMs.name]: special("TlvSysTimeMS", "number"),
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

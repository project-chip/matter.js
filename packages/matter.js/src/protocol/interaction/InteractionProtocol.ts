/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventPriority } from "../../cluster/Cluster.js";
import { TlvAttributeId } from "../../datatype/AttributeId.js";
import { TlvClusterId } from "../../datatype/ClusterId.js";
import { TlvCommandId } from "../../datatype/CommandId.js";
import { TlvEndpointNumber } from "../../datatype/EndpointNumber.js";
import { TlvEventId } from "../../datatype/EventId.js";
import { TlvNodeId } from "../../datatype/NodeId.js";
import { MatterCoreSpecificationV1_0 } from "../../spec/Specifications.js";
import { TlvAny } from "../../tlv/TlvAny.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvEnum, TlvPosixMs, TlvSysTimeMS, TlvUInt16, TlvUInt32, TlvUInt64, TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvField, TlvList, TlvObject, TlvOptionalField } from "../../tlv/TlvObject.js";

/** @see {@link MatterCoreSpecificationV1_0}, section 8.10 */
export const enum StatusCode {
    Success = 0x00,
    Failure = 0x01,
    InvalidSubscription = 0x7d,
    UnsupportedAccess = 0x7e, // old name: NOT_AUTHORIZED
    UnsupportedEndpoint = 0x7f,
    InvalidAction = 0x80,
    UnsupportedCommand = 0x81, // old name: UNSUP_COMMAND
    InvalidCommand = 0x85, // old name INVALID_FIELD
    UnsupportedAttribute = 0x86,
    ConstraintError = 0x87, // old name INVALID_VALUE
    UnsupportedWrite = 0x88, // old name READ_ONLY
    ResourceExhausted = 0x89, // old name INSUFFICIENT_SPACE
    NotFound = 0x8b,
    UnreportableAttribute = 0x8c,
    InvalidDataType = 0x8d,
    UnsupportedRead = 0x8f,
    DataVersionMismatch = 0x92,
    Timeout = 0x94,
    UnsupportedMode = 0x9b,
    Busy = 0x9c,
    UnsupportedCluster = 0xc3,
    NoUpstreamSubscription = 0xc5,
    NeedsTimedInteraction = 0xc6,
    UnsupportedEvent = 0xc7,
    PathsExhausted = 0xc8,
    TimedRequestMismatch = 0xc9,
    FailsafeRequired = 0xca,
}

// Data structures

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.2 */
export const TlvAttributePath = TlvList({
    // AttributePathIB
    enableTagCompression: TlvOptionalField(0, TlvBoolean),
    nodeId: TlvOptionalField(1, TlvNodeId),
    endpointId: TlvOptionalField(2, TlvEndpointNumber),
    clusterId: TlvOptionalField(3, TlvClusterId),
    attributeId: TlvOptionalField(4, TlvAttributeId),
    listIndex: TlvOptionalField(5, TlvNullable(TlvUInt16)),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.8 */
export const TlvEventPath = TlvList({
    // EventPathIB
    nodeId: TlvOptionalField(0, TlvNodeId),
    endpointId: TlvOptionalField(1, TlvEndpointNumber),
    clusterId: TlvOptionalField(2, TlvClusterId),
    eventId: TlvOptionalField(3, TlvEventId),
    isUrgent: TlvOptionalField(4, TlvBoolean),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.9 */
export const TlvEventData = TlvObject({
    // EventDataIB
    path: TlvField(0, TlvEventPath),
    eventNumber: TlvField(1, TlvUInt64),
    priority: TlvField(2, TlvEnum<EventPriority>()),
    epochTimestamp: TlvOptionalField(3, TlvPosixMs),
    systemTimestamp: TlvOptionalField(4, TlvSysTimeMS),
    deltaEpochTimestamp: TlvOptionalField(5, TlvPosixMs),
    deltaSystemTimestamp: TlvOptionalField(6, TlvSysTimeMS),
    data: TlvOptionalField(7, TlvAny),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.6 */
export const TlvEventFilter = TlvObject({
    // EventFilterIB
    nodeId: TlvOptionalField(0, TlvNodeId),
    eventMin: TlvField(1, TlvUInt64),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.7 */
export const TlvClusterPath = TlvList({
    // ClusterPathIB
    nodeId: TlvOptionalField(0, TlvNodeId),
    endpointId: TlvField(1, TlvEndpointNumber),
    clusterId: TlvField(2, TlvClusterId),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.3 */
export const TlvDataVersionFilter = TlvObject({
    // DataVersionFilterIB
    path: TlvField(0, TlvClusterPath),
    dataVersion: TlvField(1, TlvUInt32),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.17 */
export const TlvStatus = TlvObject({
    // StatusIB
    status: TlvOptionalField(0, TlvEnum<StatusCode>()),
    clusterStatus: TlvOptionalField(1, TlvEnum<StatusCode>()),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.16 */
export const TlvAttributeStatus = TlvObject({
    // AttributeStatusIB
    path: TlvField(0, TlvAttributePath),
    status: TlvField(1, TlvStatus),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.4 */
export const TlvAttributeData = TlvObject({
    // AttributeDataIB version for Non-Reports
    dataVersion: TlvOptionalField(0, TlvUInt32),
    path: TlvField(1, TlvAttributePath),
    data: TlvField(2, TlvAny),
});

export const TlvAttributeReportData = TlvObject({
    // AttributeDataIB version for Reports
    dataVersion: TlvField(0, TlvUInt32),
    path: TlvField(1, TlvAttributePath),
    data: TlvField(2, TlvAny),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.5 */
export const TlvAttributeReport = TlvObject({
    // AttributeReportIB
    attributeStatus: TlvOptionalField(0, TlvAttributeStatus),
    attributeData: TlvOptionalField(1, TlvAttributeReportData),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.15 */
export const TlvEventStatus = TlvObject({
    // EventStatusIB
    path: TlvField(0, TlvEventPath),
    status: TlvField(1, TlvStatus),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.10 */
export const TlvEventReport = TlvObject({
    // EventReportIB
    eventStatus: TlvOptionalField(0, TlvEventStatus),
    eventData: TlvOptionalField(1, TlvEventData),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.11 */
export const TlvCommandPath = TlvList({
    // CommandPathIB
    endpointId: TlvOptionalField(0, TlvEndpointNumber),
    clusterId: TlvField(1, TlvClusterId),
    commandId: TlvField(2, TlvCommandId),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.12 */
export const TlvCommandData = TlvObject({
    // CommandDataIB
    commandPath: TlvField(0, TlvCommandPath),
    commandFields: TlvOptionalField(1, TlvAny),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.14 */
export const TlvCommandStatus = TlvObject({
    // CommandStatusIB
    commandPath: TlvField(0, TlvCommandPath),
    status: TlvField(1, TlvStatus),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.13 */
export const TlvInvokeResponseData = TlvObject({
    // InvokeResponseIB
    command: TlvOptionalField(0, TlvCommandData),
    status: TlvOptionalField(1, TlvCommandStatus),
});

// Request/Response Messages

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.1 */
export const TlvStatusResponse = TlvObject({
    status: TlvField(0, TlvEnum<StatusCode>()),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.2 */
export const TlvReadRequest = TlvObject({
    attributeRequests: TlvOptionalField(0, TlvArray(TlvAttributePath)),
    eventRequests: TlvOptionalField(1, TlvArray(TlvEventPath)),
    eventFilters: TlvOptionalField(2, TlvArray(TlvEventFilter)),
    isFabricFiltered: TlvField(3, TlvBoolean),
    dataVersionFilters: TlvOptionalField(4, TlvArray(TlvDataVersionFilter)),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.3 */
export const TlvDataReport = TlvObject({
    subscriptionId: TlvOptionalField(0, TlvUInt32),
    attributeReports: TlvOptionalField(1, TlvArray(TlvAttributeReport)),
    eventReports: TlvOptionalField(2, TlvArray(TlvEventReport)),
    moreChunkedMessages: TlvOptionalField(3, TlvBoolean),
    suppressResponse: TlvOptionalField(4, TlvBoolean),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.4 */
export const TlvSubscribeRequest = TlvObject({
    keepSubscriptions: TlvField(0, TlvBoolean),
    minIntervalFloorSeconds: TlvField(1, TlvUInt16),
    maxIntervalCeilingSeconds: TlvField(2, TlvUInt16),
    attributeRequests: TlvOptionalField(3, TlvArray(TlvAttributePath)),
    eventRequests: TlvOptionalField(4, TlvArray(TlvEventPath)),
    eventFilters: TlvOptionalField(5, TlvArray(TlvEventFilter)),
    isFabricFiltered: TlvField(7, TlvBoolean),
    dataVersionFilters: TlvOptionalField(8, TlvArray(TlvDataVersionFilter)),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.5 */
export const TlvSubscribeResponse = TlvObject({
    subscriptionId: TlvField(0, TlvUInt32),
    maxInterval: TlvField(2, TlvUInt16),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.9 */
export const TlvInvokeRequest = TlvObject({
    suppressResponse: TlvField(0, TlvBoolean),
    timedRequest: TlvField(1, TlvBoolean),
    invokeRequests: TlvField(2, TlvArray(TlvCommandData)),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.10 */
export const TlvInvokeResponse = TlvObject({
    suppressResponse: TlvField(0, TlvBoolean),
    invokeResponses: TlvField(1, TlvArray(TlvInvokeResponseData)),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.8 */
export const TlvTimedRequest = TlvObject({
    timeout: TlvField(0, TlvUInt16),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.6 */
export const TlvWriteRequest = TlvObject({
    suppressResponse: TlvOptionalField(0, TlvBoolean),
    timedRequest: TlvField(1, TlvBoolean),
    writeRequests: TlvField(2, TlvArray(TlvAttributeData)),
    moreChunkedMessages: TlvOptionalField(3, TlvBoolean),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.7 */
export const TlvWriteResponse = TlvObject({
    writeResponses: TlvField(0, TlvArray(TlvAttributeStatus)),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

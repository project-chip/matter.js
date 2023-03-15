/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvNodeId } from "../common/NodeId";
import {
    MatterCoreSpecificationV1_0,
    TlvAny,
    TlvArray,
    TlvBoolean,
    TlvEnum,
    TlvField,
    TlvInt64,
    TlvList,
    TlvNullable,
    TlvObject,
    TlvOptionalField,
    TlvUInt16,
    TlvUInt32,
    TlvUInt64,
    TlvUInt8
} from "@project-chip/matter.js";

/** @see {@link MatterCoreSpecificationV1_0}, section 8.10 */
export const enum StatusCode {
    Success = 0x00,
    Failure = 0x01,
    InvalidSubscription = 0x7d,
    UnsupportedAccess = 0x7e, // old name: NOT_AUTHORIZED
    UnsupportedEndpoint = 0x7f,
    InvalidAction = 0x80,
    UnsupportedCommand = 0x81,// old name: UNSUP_COMMAND
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
export const TlvAttributePath = TlvList({ // AttributePathIB
    enableTagCompression: TlvOptionalField(0, TlvBoolean),
    nodeId: TlvOptionalField(1, TlvNodeId),
    endpointId: TlvOptionalField(2, TlvUInt16),
    clusterId: TlvOptionalField(3, TlvUInt32),
    attributeId: TlvOptionalField(4, TlvUInt32),
    listIndex: TlvOptionalField(5,  TlvNullable(TlvUInt16)),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.8 */
export const TlvEventPath = TlvList({ // EventPathIB
    node: TlvOptionalField(0, TlvNodeId),
    endpoint: TlvOptionalField(1, TlvUInt16),
    cluster: TlvOptionalField(2, TlvUInt32),
    event: TlvOptionalField(3, TlvUInt32),
    isUrgent: TlvOptionalField(4,  TlvBoolean),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.9 */
export const TlvEventData = TlvObject({ // EventDataIB
    path: TlvField(0, TlvEventPath),
    eventNumber: TlvField(1, TlvUInt64),
    priority: TlvField(2, TlvUInt8),
    epochTimestamp: TlvOptionalField(3, TlvInt64),
    systemTimestamp: TlvOptionalField(4, TlvUInt64),
    deltaEpochTimestamp: TlvOptionalField(5, TlvUInt64),
    deltaSystemTimestamp: TlvOptionalField(6, TlvUInt64),
    data: TlvOptionalField(7, TlvAny),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.6 */
export const TlvEventFilter = TlvList({ // EventFilterIB
    node: TlvOptionalField(0, TlvNodeId),
    eventMin: TlvField(1, TlvUInt64),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.7 */
export const TlvClusterPath = TlvList({ // ClusterPathIB
    node: TlvOptionalField(0, TlvNodeId),
    endpoint: TlvField(1, TlvUInt16),
    cluster: TlvField(2, TlvUInt32),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.3 */
export const TlvDataVersionFilter = TlvObject({ // DataVersionFilterIB
    path: TlvField(0, TlvClusterPath),
    dataVersion: TlvField(1, TlvUInt32),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.17 */
export const TlvStatus = TlvObject({ // StatusIB
    status: TlvOptionalField(0, TlvEnum<StatusCode>()),
    clusterStatus: TlvOptionalField(1, TlvEnum<StatusCode>()),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.16 */
export const TlvAttributeStatus = TlvObject({ // AttributeStatusIB
    path: TlvField(0, TlvAttributePath),
    status: TlvField(1, TlvStatus),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.4 */
export const TlvAttributeData = TlvObject({ // AttributeDataIB
    dataVersion: TlvOptionalField(0, TlvUInt32),
    path: TlvField(1, TlvAttributePath),
    data: TlvField(2, TlvAny),
});

export const TlvAttributeReportValue = TlvObject({ // TODO consolidate with TlvAttributeData
    version: TlvField(0, TlvUInt32), // Name change
    path: TlvField(1, TlvAttributePath),
    value: TlvField(2, TlvAny), // Name change
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.5 */
export const TlvAttributeReport = TlvObject({ // AttributeReportIB
    attributeStatus: TlvOptionalField(0, TlvAttributeStatus),
    value: TlvOptionalField(1, TlvAttributeReportValue), // AttributeDataIB, TODO rename to attributeData
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.15 */
export const TlvEventStatus = TlvObject({ // EventStatusIB
    path: TlvField(0, TlvEventPath),
    status: TlvField(1, TlvStatus),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.10 */
export const TlvEventReport = TlvObject({ // EventReportIB
    eventStatus: TlvField(0, TlvEventStatus),
    eventData: TlvField(1, TlvEventData),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.11 */
export const TlvCommandPath = TlvList({ // CommandPathIB
    endpointId: TlvField(0, TlvUInt16), // TODO Formally Optional
    clusterId: TlvField(1, TlvUInt32),
    commandId: TlvField(2, TlvUInt32),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.12 */
export const TlvCommandData = TlvObject({ // CommandDataIB
    path: TlvField(0, TlvCommandPath), // TODO rename to commandPath
    args: TlvField(1, TlvAny), // TODO rename to commandFields
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.14 */
export const TlvCommandStatus = TlvObject({ // CommandStatusIB
    path: TlvField(0, TlvCommandPath), // TODO rename to commandPath
    result: TlvField(1, TlvObject({ // StatusIB, TODO consolidate and rename to status
        code: TlvField(0, TlvUInt16),
    })),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.5.13 */
export const TlvInvokeResponseData = TlvObject({ // InvokeResponseIB
    response: TlvOptionalField(0, TlvObject({ // CommandDataIB, TODO consolidate with types! Rename to command
        path: TlvField(0, TlvCommandPath),
        response: TlvField(1, TlvAny),
    })),
    result: TlvOptionalField(1, TlvCommandStatus), // TODO rename to status
});

// Request/Response Messages

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.1 */
export const TlvStatusResponse = TlvObject({
    status: TlvField(0, TlvEnum<StatusCode>()),
    interactionModelRevision: TlvField(0xFF, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.2 */
export const TlvReadRequest = TlvObject({
    attributes: TlvField(0, TlvArray(TlvAttributePath)), // TODO rename to attributeRequests, formally optional
    eventRequests: TlvOptionalField(1, TlvArray(TlvEventPath)),
    eventFilters: TlvOptionalField(2, TlvArray(TlvEventFilter)),
    isFabricFiltered: TlvField(3,  TlvBoolean),
    dataVersionFilters: TlvOptionalField(4, TlvArray(TlvDataVersionFilter)),
    interactionModelRevision: TlvField(0xFF, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.3 */
export const TlvDataReport = TlvObject({
    subscriptionId: TlvOptionalField(0, TlvUInt32),
    values: TlvOptionalField(1, TlvArray(TlvAttributeReport)), // TODO: rename to attributeReports
    eventReports: TlvOptionalField(2, TlvArray(TlvEventReport)),
    moreChunkedMessages: TlvOptionalField(3, TlvBoolean),
    suppressResponse: TlvOptionalField(4, TlvBoolean),
    interactionModelRevision: TlvField(0xFF, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.4 */
export const TlvSubscribeRequest = TlvObject({
    keepSubscriptions: TlvField(0, TlvBoolean),
    minIntervalFloorSeconds: TlvField(1, TlvUInt16),
    maxIntervalCeilingSeconds: TlvField(2, TlvUInt16),
    attributeRequests: TlvOptionalField(3, TlvArray(TlvAttributePath)),
    eventRequests: TlvOptionalField(4, TlvArray(TlvEventPath)),
    eventFilters: TlvOptionalField(5, TlvArray(TlvEventFilter)),
    isFabricFiltered: TlvField(7,  TlvBoolean),
    dataVersionFilters: TlvOptionalField(8, TlvArray(TlvDataVersionFilter)),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.5 */
export const TlvSubscribeResponse = TlvObject({
    subscriptionId: TlvField(0, TlvUInt32),
    maxInterval: TlvField(2, TlvUInt16),
    interactionModelRevision: TlvField(0xFF, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.9 */
export const TlvInvokeRequest = TlvObject({
    suppressResponse: TlvField(0,  TlvBoolean),
    timedRequest: TlvField(1,  TlvBoolean),
    invokes: TlvField(2, TlvArray(TlvCommandData)), // TODO: rename to invokeRequests
    interactionModelRevision: TlvField(0xFF, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.10 */
export const TlvInvokeResponse = TlvObject({
    suppressResponse: TlvField(0,  TlvBoolean),
    responses: TlvField(1, TlvArray(TlvInvokeResponseData)), // TODO: rename to invokeResponses
    interactionModelRevision: TlvField(0xFF, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.8 */
export const TlvTimedRequest = TlvObject({
    timeout: TlvField(0, TlvUInt16),
    interactionModelRevision: TlvField(0xFF, TlvUInt8), //??
});

/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.6 */
export const TlvWriteRequest = TlvObject({
    suppressResponse: TlvOptionalField(0, TlvBoolean),
    timedRequest: TlvField(1, TlvBoolean),
    writeRequests: TlvField(2, TlvArray(TlvAttributeData)),
    moreChunkedMessages: TlvOptionalField(3, TlvBoolean),
    interactionModelRevision: TlvField(0xFF, TlvUInt8),
});


/** @see {@link MatterCoreSpecificationV1_0}, section 10.6.7 */
export const TlvWriteResponse = TlvObject({
    writeResponses: TlvField(0, TlvArray(TlvAttributeStatus)),
    interactionModelRevision: TlvField(0xFF, TlvUInt8),
});

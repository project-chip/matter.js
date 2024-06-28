/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventPriority } from "../../cluster/Cluster.js";
import { TlvAttributeId } from "../../datatype/AttributeId.js";
import { TlvClusterId } from "../../datatype/ClusterId.js";
import { TlvCommandId } from "../../datatype/CommandId.js";
import { TlvEndpointNumber } from "../../datatype/EndpointNumber.js";
import { TlvEventId } from "../../datatype/EventId.js";
import { TlvEventNumber } from "../../datatype/EventNumber.js";
import { TlvNodeId } from "../../datatype/NodeId.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvAny } from "../../tlv/TlvAny.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import {
    TlvBitmap,
    TlvEnum,
    TlvPosixMs,
    TlvSysTimeMS,
    TlvUInt16,
    TlvUInt32,
    TlvUInt64,
    TlvUInt8,
} from "../../tlv/TlvNumber.js";
import { TlvField, TlvObject, TlvOptionalField, TlvTaggedList } from "../../tlv/TlvObject.js";
import { StatusCode } from "./StatusCode.js";

// Data structures

/** @see {@link MatterSpecification.v13.Core} section XXX */
export const WildcardPathFlagsBitmap = {
    /** Skip the Root Node endpoint (endpoint 0) during wildcard expansion. */
    skipRootNode: BitFlag(0),

    /** Skip several large global attributes during wildcard expansion. */
    skipGlobalAttributes: BitFlag(1),

    /** Skip the AttributeList global attribute during wildcard expansion. */
    skipAttributeList: BitFlag(2),

    /** Skip the EventList global attribute during wildcard expansion. */
    skipEventList: BitFlag(3),

    /** Skip the AcceptedCommandList and GeneratedCommandList global attributes during wildcard expansion. */
    skipCommandLists: BitFlag(4),

    /** Skip any manufacturer-specific clusters or attributes during wildcard expansion. */
    skipCustomElements: BitFlag(5),

    /** Skip any Fixed (F) quality attributes during wildcard expansion. */
    skipFixedAttributes: BitFlag(6),

    /** Skip any Changes Omitted (C) quality attributes during wildcard expansion. */
    skipChangesOmittedAttributes: BitFlag(7),

    /** Skip all clusters with the Diagnostics (K) quality during wildcard expansion. */
    skipDiagnosticsClusters: BitFlag(8),
};

/** @see {@link MatterSpecification.v13.Core}, section 10.6.2 */
export const TlvAttributePath = TlvTaggedList({
    // AttributePathIB
    enableTagCompression: TlvOptionalField(0, TlvBoolean),
    nodeId: TlvOptionalField(1, TlvNodeId),
    endpointId: TlvOptionalField(2, TlvEndpointNumber),
    clusterId: TlvOptionalField(3, TlvClusterId),
    attributeId: TlvOptionalField(4, TlvAttributeId),
    listIndex: TlvOptionalField(5, TlvNullable(TlvUInt16)),
    wildcardPathFlags: TlvOptionalField(6, TlvBitmap(TlvUInt32, WildcardPathFlagsBitmap)),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.6.8 */
export const TlvEventPath = TlvTaggedList({
    // EventPathIB
    nodeId: TlvOptionalField(0, TlvNodeId),
    endpointId: TlvOptionalField(1, TlvEndpointNumber),
    clusterId: TlvOptionalField(2, TlvClusterId),
    eventId: TlvOptionalField(3, TlvEventId),
    isUrgent: TlvOptionalField(4, TlvBoolean),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.6.9 */
export const TlvEventData = TlvObject({
    // EventDataIB
    path: TlvField(0, TlvEventPath),
    eventNumber: TlvField(1, TlvEventNumber),
    priority: TlvField(2, TlvEnum<EventPriority>()),
    epochTimestamp: TlvOptionalField(3, TlvPosixMs),
    systemTimestamp: TlvOptionalField(4, TlvSysTimeMS),
    deltaEpochTimestamp: TlvOptionalField(5, TlvPosixMs),
    deltaSystemTimestamp: TlvOptionalField(6, TlvSysTimeMS),
    data: TlvOptionalField(7, TlvAny),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.6.6 */
export const TlvEventFilter = TlvObject({
    // EventFilterIB
    nodeId: TlvOptionalField(0, TlvNodeId),
    eventMin: TlvField(1, TlvUInt64),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.6.7 */
export const TlvClusterPath = TlvTaggedList({
    // ClusterPathIB
    nodeId: TlvOptionalField(0, TlvNodeId),
    endpointId: TlvField(1, TlvEndpointNumber),
    clusterId: TlvField(2, TlvClusterId),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.6.3 */
export const TlvDataVersionFilter = TlvObject({
    // DataVersionFilterIB
    path: TlvField(0, TlvClusterPath),
    dataVersion: TlvField(1, TlvUInt32),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.6.17 */
export const TlvStatus = TlvObject({
    // StatusIB
    status: TlvOptionalField(0, TlvEnum<StatusCode>()), // 8Bit
    clusterStatus: TlvOptionalField(1, TlvEnum<StatusCode>()),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.6.16 */
export const TlvAttributeStatus = TlvObject({
    // AttributeStatusIB
    path: TlvField(0, TlvAttributePath),
    status: TlvField(1, TlvStatus),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.6.4 */
export const TlvAttributeData = TlvObject({
    // AttributeDataIB version for Non-Reports
    dataVersion: TlvOptionalField(0, TlvUInt32),
    path: TlvField(1, TlvAttributePath),
    data: TlvField(2, TlvAny),
});

export const TlvAttributeReportData = TlvObject({
    // AttributeDataIB version for Reports
    dataVersion: TlvOptionalField(0, TlvUInt32),
    path: TlvField(1, TlvAttributePath),
    data: TlvField(2, TlvAny),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.6.5 */
export const TlvAttributeReport = TlvObject({
    // AttributeReportIB
    attributeStatus: TlvOptionalField(0, TlvAttributeStatus),
    attributeData: TlvOptionalField(1, TlvAttributeReportData),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.6.15 */
export const TlvEventStatus = TlvObject({
    // EventStatusIB
    path: TlvField(0, TlvEventPath),
    status: TlvField(1, TlvStatus),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.6.10 */
export const TlvEventReport = TlvObject({
    // EventReportIB
    eventStatus: TlvOptionalField(0, TlvEventStatus),
    eventData: TlvOptionalField(1, TlvEventData),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.6.11 */
export const TlvCommandPath = TlvTaggedList({
    // CommandPathIB
    endpointId: TlvOptionalField(0, TlvEndpointNumber),
    clusterId: TlvField(1, TlvClusterId),
    commandId: TlvField(2, TlvCommandId),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.6.12 */
export const TlvCommandData = TlvObject({
    // CommandDataIB
    commandPath: TlvField(0, TlvCommandPath),
    commandFields: TlvOptionalField(1, TlvAny),
    commandRef: TlvOptionalField(2, TlvUInt16),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.6.14 */
export const TlvCommandStatus = TlvObject({
    // CommandStatusIB
    commandPath: TlvField(0, TlvCommandPath),
    status: TlvField(1, TlvStatus),
    commandRef: TlvOptionalField(2, TlvUInt16),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.6.13 */
export const TlvInvokeResponseData = TlvObject({
    // InvokeResponseIB
    command: TlvOptionalField(0, TlvCommandData),
    status: TlvOptionalField(1, TlvCommandStatus),
});

// Request/Response Messages

/** @see {@link MatterSpecification.v13.Core}, section 10.7.1 */
export const TlvStatusResponse = TlvObject({
    /** A status code (@see Status Codes {@link MatterSpecification.v13.Core} section 7.10.7) */
    status: TlvField(0, TlvEnum<StatusCode>()),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.7.2 */
export const TlvReadRequest = TlvObject({
    /** A list of zero or more request paths to cluster attribute data. */
    attributeRequests: TlvOptionalField(0, TlvArray(TlvAttributePath)),

    /** A list of zero or more request paths to cluster events. */
    eventRequests: TlvOptionalField(1, TlvArray(TlvEventPath)),

    /** A list of zero or more minimum event numbers per specific node. */
    eventFilters: TlvOptionalField(2, TlvArray(TlvEventFilter)),

    /** Limits the data read within fabric-scoped lists to the accessing fabric. */
    isFabricFiltered: TlvField(3, TlvBoolean),

    /** A list of zero or more cluster instance data versions. */
    dataVersionFilters: TlvOptionalField(4, TlvArray(TlvDataVersionFilter)),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.7.3 */
export const TlvDataReport = TlvObject({
    /** A SubscriptionId only used in a Subscribe interaction. */
    subscriptionId: TlvOptionalField(0, TlvUInt32),

    /** A list of zero or more attribute data reports, */
    attributeReports: TlvOptionalField(1, TlvArray(TlvAttributeReport)),

    /** A list of zero or more event reports. */
    eventReports: TlvOptionalField(2, TlvArray(TlvEventReport)),
    moreChunkedMessages: TlvOptionalField(3, TlvBoolean),

    /** Do not send a response to this action. */
    suppressResponse: TlvOptionalField(4, TlvBoolean),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** Special version of the DataReport Message with pre-encoded report entries used by Send logic */
export const TlvDataReportForSend = TlvObject({
    /** A SubscriptionId only used in a Subscribe interaction. */
    subscriptionId: TlvOptionalField(0, TlvUInt32),

    /** A list of zero or more attribute data reports, */
    attributeReports: TlvOptionalField(1, TlvArray(TlvAny)),

    /** A list of zero or more event reports. */
    eventReports: TlvOptionalField(2, TlvArray(TlvAny)),
    moreChunkedMessages: TlvOptionalField(3, TlvBoolean),

    /** Do not send a response to this action. */
    suppressResponse: TlvOptionalField(4, TlvBoolean),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.7.4 */
export const TlvSubscribeRequest = TlvObject({
    /** False to terminate existing subscriptions from initiator. */
    keepSubscriptions: TlvField(0, TlvBoolean),

    /** The requested minimum interval boundary floor in seconds. */
    minIntervalFloorSeconds: TlvField(1, TlvUInt16),

    /** The requested maximum interval boundary ceiling in seconds. */
    maxIntervalCeilingSeconds: TlvField(2, TlvUInt16),

    /** A list of zero or more request paths to cluster attribute data. */
    attributeRequests: TlvOptionalField(3, TlvArray(TlvAttributePath)),

    /** A list of zero or more request paths to cluster events. */
    eventRequests: TlvOptionalField(4, TlvArray(TlvEventPath)),

    /** A list of zero or more minimum event numbers per specific node. */
    eventFilters: TlvOptionalField(5, TlvArray(TlvEventFilter)),

    /** Limits the data read within fabric-scoped lists to the accessing fabric. */
    isFabricFiltered: TlvField(7, TlvBoolean),

    /** A list of zero or more cluster instance data versions. */
    dataVersionFilters: TlvOptionalField(8, TlvArray(TlvDataVersionFilter)),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.7.5 */
export const TlvSubscribeResponse = TlvObject({
    /** Identifies the subscription. */
    subscriptionId: TlvField(0, TlvUInt32),

    /** The final maximum interval for the subscription in seconds. */
    maxInterval: TlvField(2, TlvUInt16),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.7.9 */
export const TlvInvokeRequest = TlvObject({
    /** Do not send a response to this action. */
    suppressResponse: TlvField(0, TlvBoolean),

    /** Flag action as part of a timed invoke transaction. */
    timedRequest: TlvField(1, TlvBoolean),

    /** Cluster command(s) to invoke. */
    invokeRequests: TlvField(2, TlvArray(TlvCommandData)),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.7.10 */
export const TlvInvokeResponse = TlvObject({
    /** Deprecated and ignored by client, but required for backward compatibility reasons. */
    suppressResponse: TlvField(0, TlvBoolean),

    /** Command response or status. */
    invokeResponses: TlvField(1, TlvArray(TlvInvokeResponseData)),
    moreChunkedMessages: TlvOptionalField(2, TlvBoolean),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

export const TlvInvokeResponseForSend = TlvObject({
    suppressResponse: TlvField(0, TlvBoolean),
    invokeResponses: TlvField(1, TlvArray(TlvAny)),
    moreChunkedMessages: TlvOptionalField(2, TlvBoolean),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.7.8 */
export const TlvTimedRequest = TlvObject({
    /** An interval, in milliseconds, to expect a following action. */
    timeout: TlvField(0, TlvUInt16),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.7.6 */
export const TlvWriteRequest = TlvObject({
    /** Do not send a response to this action. */
    suppressResponse: TlvOptionalField(0, TlvBoolean),

    /** Flag action as part of a timed write transaction. */
    timedRequest: TlvField(1, TlvBoolean),

    /** A list of one or more path and data tuples. */
    writeRequests: TlvField(2, TlvArray(TlvAttributeData)),
    moreChunkedMessages: TlvOptionalField(3, TlvBoolean),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

/** @see {@link MatterSpecification.v13.Core}, section 10.7.7 */
export const TlvWriteResponse = TlvObject({
    /** A list of zero or more concrete paths indicating errors or successes. */
    writeResponses: TlvField(0, TlvArray(TlvAttributeStatus)),
    interactionModelRevision: TlvField(0xff, TlvUInt8),
});

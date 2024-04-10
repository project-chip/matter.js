/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "@project-chip/matter.js/crypto";
import { KEY } from "../cluster/ClusterServerTestingUtil.js";

import {
    AccessControlCluster,
    AccessLevel,
    AdministratorCommissioning,
    Attributes,
    BasicInformation,
    BasicInformationCluster,
    ClusterDatasource,
    ClusterServer,
    ClusterServerObj,
    Events,
    OnOffCluster,
    WritableAttribute,
} from "@project-chip/matter.js/cluster";
import { Message, SessionType } from "@project-chip/matter.js/codec";
import {
    AttributeId,
    ClusterId,
    CommandId,
    EndpointNumber,
    EventId,
    EventNumber,
    FabricId,
    FabricIndex,
    NodeId,
    TlvClusterId,
    TlvFabricIndex,
    TlvVendorId,
    VendorId,
} from "@project-chip/matter.js/datatype";
import { DeviceClasses, DeviceTypeDefinition, Endpoint } from "@project-chip/matter.js/device";
import { Fabric } from "@project-chip/matter.js/fabric";
import {
    DataReportPayload,
    EventHandler,
    INTERACTION_MODEL_REVISION,
    InteractionEndpointStructure,
    InteractionServer,
    InteractionServerMessenger,
    InvokeRequest,
    InvokeResponse,
    ReadRequest,
    StatusCode,
    StatusResponseError,
    SubscribeRequest,
    WriteRequest,
    WriteResponse,
} from "@project-chip/matter.js/interaction";
import { MessageExchange } from "@project-chip/matter.js/protocol";
import { SecureSession } from "@project-chip/matter.js/session";
import { StorageBackendMemory, StorageContext, StorageManager, SyncStorage } from "@project-chip/matter.js/storage";
import {
    TlvArray,
    TlvField,
    TlvNoArguments,
    TlvNullable,
    TlvObject,
    TlvOptionalField,
    TlvString,
    TlvUInt16,
    TlvUInt8,
} from "@project-chip/matter.js/tlv";
import { ByteArray } from "@project-chip/matter.js/util";
import * as assert from "assert";

const DummyTestDevice = DeviceTypeDefinition({
    code: 0,
    name: "DummyTestDevice",
    deviceClass: DeviceClasses.Simple,
    revision: 1,
});

const READ_REQUEST: ReadRequest = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    isFabricFiltered: true,
    attributeRequests: [
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(2) },
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(4) },
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(400) }, // unsupported attribute
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), attributeId: AttributeId(4) }, // unsupported cluster
        { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), attributeId: AttributeId(1) }, // unsupported endpoint
        { endpointId: undefined, clusterId: ClusterId(0x28), attributeId: AttributeId(3) },
        { endpointId: undefined, clusterId: ClusterId(0x99), attributeId: AttributeId(3) }, // ignore
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x1d), attributeId: AttributeId(1) },
    ],
    eventRequests: [
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), eventId: EventId(0) }, // existing event
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), eventId: EventId(400) }, // unsupported event
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), eventId: EventId(4) }, // unsupported cluster
        { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), eventId: EventId(1) }, // unsupported endpoint
    ],
};

const READ_REQUEST_WITH_UNUSED_FILTER: ReadRequest = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    isFabricFiltered: true,
    attributeRequests: [
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(2) },
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(4) },
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(400) }, // unsupported attribute
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), attributeId: AttributeId(4) }, // unsupported cluster
        { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), attributeId: AttributeId(1) }, // unsupported endpoint
        { endpointId: undefined, clusterId: ClusterId(0x28), attributeId: AttributeId(3) },
        { endpointId: undefined, clusterId: ClusterId(0x99), attributeId: AttributeId(3) }, // ignore
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x1d), attributeId: AttributeId(1) },
    ],
    dataVersionFilters: [{ path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28) }, dataVersion: 1 }],
    eventRequests: [
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), eventId: EventId(0) }, // existing event
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), eventId: EventId(400) }, // unsupported event
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), eventId: EventId(4) }, // unsupported cluster
        { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), eventId: EventId(1) }, // unsupported endpoint
    ],
    eventFilters: [{ eventMin: 1 }],
};

const READ_REQUEST_WITH_FILTER: ReadRequest = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    isFabricFiltered: true,
    attributeRequests: [
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(2) },
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(4) },
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(400) }, // unsupported attribute
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), attributeId: AttributeId(4) }, // unsupported cluster
        { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), attributeId: AttributeId(1) }, // unsupported endpoint
        { endpointId: undefined, clusterId: ClusterId(0x28), attributeId: AttributeId(3) },
        { endpointId: undefined, clusterId: ClusterId(0x99), attributeId: AttributeId(3) }, // ignore
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x1d), attributeId: AttributeId(1) },
    ],
    dataVersionFilters: [{ path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28) }, dataVersion: 0 }],
    eventRequests: [
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), eventId: EventId(0) }, // existing event
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), eventId: EventId(400) }, // unsupported event
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), eventId: EventId(4) }, // unsupported cluster
        { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), eventId: EventId(1) }, // unsupported endpoint
    ],
    eventFilters: [{ eventMin: 2 }],
};

const READ_RESPONSE: DataReportPayload = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    attributeReportsPayload: [
        {
            attributeData: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(2) },
                schema: TlvVendorId,
                payload: 1,
                dataVersion: 0,
            },
        },
        {
            attributeData: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(4) },
                schema: TlvUInt16,
                payload: 2,
                dataVersion: 0,
            },
        },
        {
            attributeStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(400) },
                status: { status: 134 },
            },
        },
        {
            attributeStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), attributeId: AttributeId(4) },
                status: { status: 195 },
            },
        },
        {
            attributeStatus: {
                path: { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), attributeId: AttributeId(1) },
                status: { status: 127 },
            },
        },
        {
            attributeData: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(3) },
                schema: TlvString.bound({ maxLength: 32 }),
                payload: "product",
                dataVersion: 0,
            },
        },
        {
            attributeData: {
                path: {
                    endpointId: EndpointNumber(0),
                    clusterId: ClusterId(0x1d),
                    attributeId: AttributeId(1),
                },
                schema: TlvArray(TlvClusterId),
                payload: [ClusterId(29), ClusterId(40)],
                dataVersion: 0,
            },
        },
    ],
    eventReportsPayload: [
        {
            eventData: {
                path: {
                    endpointId: EndpointNumber(0),
                    clusterId: ClusterId(0x28),
                    eventId: EventId(0),
                    isUrgent: undefined,
                },
                schema: BasicInformation.TlvStartUpEvent,
                payload: {
                    softwareVersion: 1,
                },
                eventNumber: EventNumber(1),
                priority: 2,
                epochTimestamp: 0,
            },
        },
        {
            eventData: {
                path: {
                    endpointId: EndpointNumber(0),
                    clusterId: ClusterId(0x28),
                    eventId: EventId(0),
                    isUrgent: undefined,
                },
                schema: BasicInformation.TlvStartUpEvent,
                payload: {
                    softwareVersion: 2,
                },
                eventNumber: EventNumber(2),
                priority: 2,
                epochTimestamp: 0,
            },
        },
        {
            eventStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), eventId: EventId(400) },
                status: { status: 199 },
            },
        },
        {
            eventStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), eventId: EventId(4) },
                status: { status: 195 },
            },
        },
        {
            eventStatus: {
                path: { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), eventId: EventId(1) },
                status: { status: 127 },
            },
        },
    ],
};

const READ_RESPONSE_WITH_FILTER: DataReportPayload = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    attributeReportsPayload: [
        {
            attributeStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(400) },
                status: { status: 134 },
            },
        },
        {
            attributeStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), attributeId: AttributeId(4) },
                status: { status: 195 },
            },
        },
        {
            attributeStatus: {
                path: { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), attributeId: AttributeId(1) },
                status: { status: 127 },
            },
        },
        {
            attributeData: {
                path: {
                    endpointId: EndpointNumber(0),
                    clusterId: ClusterId(0x1d),
                    attributeId: AttributeId(1),
                },
                schema: TlvArray(TlvClusterId),
                payload: [ClusterId(29), ClusterId(40)],
                dataVersion: 0,
            },
        },
    ],
    eventReportsPayload: [
        {
            eventData: {
                path: {
                    endpointId: EndpointNumber(0),
                    clusterId: ClusterId(0x28),
                    eventId: EventId(0),
                    isUrgent: undefined,
                },
                schema: BasicInformation.TlvStartUpEvent,
                payload: {
                    softwareVersion: 2,
                },
                eventNumber: EventNumber(2),
                priority: 2,
                epochTimestamp: 0,
            },
        },
        {
            eventStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), eventId: EventId(400) },
                status: { status: 199 },
            },
        },
        {
            eventStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), eventId: EventId(4) },
                status: { status: 195 },
            },
        },
        {
            eventStatus: {
                path: { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), eventId: EventId(1) },
                status: { status: 127 },
            },
        },
    ],
};

const INVALID_SUBSCRIBE_REQUEST: SubscribeRequest = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    isFabricFiltered: true,
    attributeRequests: [
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), attributeId: AttributeId(2) },
        { endpointId: EndpointNumber(99) },
    ],
    eventRequests: [
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), eventId: EventId(2) },
        { endpointId: EndpointNumber(99) },
    ],
    keepSubscriptions: true,
    minIntervalFloorSeconds: 1,
    maxIntervalCeilingSeconds: 2,
};

const WRITE_REQUEST: WriteRequest = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    timedRequest: false,
    writeRequests: [
        {
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(100) },
            data: TlvUInt8.encodeTlv(3),
        },
        {
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), attributeId: AttributeId(4) },
            data: TlvUInt8.encodeTlv(3),
        },
        {
            path: { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), attributeId: AttributeId(4) },
            data: TlvUInt8.encodeTlv(3),
            dataVersion: 0,
        },
        {
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(5) },
            data: TlvString.encodeTlv("test"),
            dataVersion: 0,
        },
        {
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(6) },
            data: TlvString.encodeTlv("AB"),
            dataVersion: 10,
        },
        {
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(3) },
            data: TlvString.encodeTlv("test"),
            dataVersion: 0,
        },
    ],
    moreChunkedMessages: false,
};

const WRITE_RESPONSE: WriteResponse = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    writeResponses: [
        {
            path: { attributeId: AttributeId(100), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { clusterStatus: undefined, status: 134 },
        },
        {
            path: { attributeId: AttributeId(4), clusterId: ClusterId(0x99), endpointId: EndpointNumber(0) },
            status: { clusterStatus: undefined, status: 195 },
        },
        {
            path: { attributeId: AttributeId(4), clusterId: ClusterId(40), endpointId: EndpointNumber(1) },
            status: { clusterStatus: undefined, status: 127 },
        },
        {
            path: { attributeId: AttributeId(5), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { clusterStatus: undefined, status: 0 },
        },
        {
            path: { attributeId: AttributeId(6), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { clusterStatus: undefined, status: 146 },
        },
        {
            path: { attributeId: AttributeId(3), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { clusterStatus: undefined, status: 136 },
        },
    ],
};

const WRITE_REQUEST_TIMED_REQUIRED: WriteRequest = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    timedRequest: false,
    writeRequests: [
        {
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(5) },
            data: TlvString.encodeTlv("test"),
            dataVersion: 0,
        },
    ],
    moreChunkedMessages: false,
};

const WRITE_RESPONSE_TIMED_REQUIRED: WriteResponse = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    writeResponses: [
        {
            path: { attributeId: AttributeId(5), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { clusterStatus: undefined, status: 0 },
        },
    ],
};

const WRITE_RESPONSE_TIMED_ERROR: WriteResponse = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    writeResponses: [
        {
            path: { attributeId: AttributeId(5), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { clusterStatus: undefined, status: 198 },
        },
    ],
};

const ILLEGAL_MASS_WRITE_REQUEST: WriteRequest = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    timedRequest: false,
    writeRequests: [
        {
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(0x5) },
            data: TlvString.encodeTlv("test"),
            dataVersion: 0,
        },
        {
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99) },
            data: TlvString.encodeTlv("test"),
            dataVersion: 0,
        },
        {
            path: { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), attributeId: AttributeId(0x5) },
            data: TlvString.encodeTlv("test"),
            dataVersion: 0,
        },
    ],
    moreChunkedMessages: false,
};

const MASS_WRITE_REQUEST: WriteRequest = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    timedRequest: false,
    writeRequests: [
        {
            path: { clusterId: ClusterId(0x28), attributeId: AttributeId(0x5) },
            data: TlvString.encodeTlv("test"),
            dataVersion: 0,
        },
    ],
    moreChunkedMessages: false,
};

const MASS_WRITE_RESPONSE: WriteResponse = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    writeResponses: [
        {
            path: { attributeId: AttributeId(5), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { clusterStatus: undefined, status: 0 },
        },
    ],
};

const TlvAclTestSchema = TlvObject({
    privilege: TlvField(1, TlvUInt8),
    authMode: TlvField(2, TlvUInt8),
    subjects: TlvField(3, TlvNullable(TlvUInt8)),
    targets: TlvField(4, TlvNullable(TlvUInt8)),
    fabricIndex: TlvOptionalField(254, TlvFabricIndex),
});

const CHUNKED_ARRAY_WRITE_REQUEST: WriteRequest = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    timedRequest: false,
    writeRequests: [
        {
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x1f), attributeId: AttributeId(0) },
            data: TlvArray(TlvAclTestSchema).encodeTlv([]),
            dataVersion: 0,
        },
        {
            path: {
                endpointId: EndpointNumber(0),
                clusterId: ClusterId(0x1f),
                attributeId: AttributeId(0),
                listIndex: null,
            },
            data: TlvAclTestSchema.encodeTlv({
                privilege: 1,
                authMode: 1,
                subjects: null,
                targets: null,
            }),
            dataVersion: 0,
        },
        {
            path: {
                endpointId: EndpointNumber(0),
                clusterId: ClusterId(0x1f),
                attributeId: AttributeId(0),
                listIndex: null,
            },
            data: TlvAclTestSchema.encodeTlv({
                privilege: 1,
                authMode: 0,
                subjects: null,
                targets: null,
                fabricIndex: FabricIndex.NO_FABRIC,
            }),
            dataVersion: 0,
        },
        {
            path: {
                endpointId: EndpointNumber(0),
                clusterId: ClusterId(0x1f),
                attributeId: AttributeId(0),
                listIndex: null,
            },
            data: TlvAclTestSchema.encodeTlv({
                privilege: 1,
                authMode: 2,
                subjects: null,
                targets: null,
                fabricIndex: FabricIndex(2),
            }),
            dataVersion: 0,
        },
    ],
    moreChunkedMessages: false,
};

const CHUNKED_ARRAY_WRITE_RESPONSE: WriteResponse = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    writeResponses: [
        {
            path: { attributeId: AttributeId(0), clusterId: ClusterId(31), endpointId: EndpointNumber(0) },
            status: { clusterStatus: undefined, status: 0 },
        },
    ],
};

const INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS: InvokeRequest = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: {
                endpointId: EndpointNumber(0),
                clusterId: ClusterId(6),
                commandId: CommandId(1),
            },
            commandFields: TlvNoArguments.encodeTlv(undefined),
        },
    ],
};

const INVOKE_COMMAND_REQUEST_TIMED_REQUIRED: InvokeRequest = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: {
                endpointId: EndpointNumber(0),
                clusterId: ClusterId(0x3c),
                commandId: CommandId(2),
            },
            commandFields: TlvNoArguments.encodeTlv(undefined),
        },
    ],
};

const INVOKE_COMMAND_RESPONSE_TIMED_REQUIRED: InvokeResponse = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    invokeResponses: [
        {
            status: {
                commandPath: { clusterId: ClusterId(0x3c), commandId: CommandId(2), endpointId: EndpointNumber(0) },
                status: { status: 198 },
            },
        },
    ],
};

const INVOKE_COMMAND_RESPONSE_TIMED_REQUIRED_SUCCESS: InvokeResponse = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    invokeResponses: [
        {
            status: {
                commandPath: { clusterId: ClusterId(0x3c), commandId: CommandId(2), endpointId: EndpointNumber(0) },
                status: { clusterStatus: undefined, status: 0 },
            },
        },
    ],
};

const INVOKE_COMMAND_REQUEST_WITH_NO_ARGS: InvokeRequest = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(1) },
        },
    ],
};

const INVOKE_COMMAND_REQUEST_MULTI: InvokeRequest = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(1) },
        },
        {
            commandPath: { endpointId: undefined, clusterId: ClusterId(6), commandId: CommandId(0) },
        },
        {
            commandPath: { endpointId: undefined, clusterId: ClusterId(6), commandId: CommandId(99) },
        },
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(100) },
        },
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(90), commandId: CommandId(1) },
        },
        {
            commandPath: { endpointId: EndpointNumber(99), clusterId: ClusterId(6), commandId: CommandId(1) },
        },
    ],
};

const INVOKE_COMMAND_REQUEST_INVALID: InvokeRequest = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(10) },
        },
    ],
};

const INVOKE_COMMAND_RESPONSE: InvokeResponse = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    invokeResponses: [
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(1), endpointId: EndpointNumber(0) },
                status: { clusterStatus: undefined, status: 0 },
            },
        },
    ],
};

const INVOKE_COMMAND_RESPONSE_BUSY: InvokeResponse = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    invokeResponses: [
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(1), endpointId: EndpointNumber(0) },
                status: { clusterStatus: undefined, status: 0x9c },
            },
        },
    ],
};

const INVOKE_COMMAND_RESPONSE_INVALID: InvokeResponse = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    invokeResponses: [
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(10), endpointId: EndpointNumber(0) },
                status: { status: 0x81 },
            },
        },
    ],
};

const INVOKE_COMMAND_RESPONSE_MULTI: InvokeResponse = {
    interactionModelRevision: INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    invokeResponses: [
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(100), endpointId: EndpointNumber(0) },
                status: { status: 129 },
            },
        },
        {
            status: {
                commandPath: { clusterId: ClusterId(90), commandId: CommandId(1), endpointId: EndpointNumber(0) },
                status: { status: 195 },
            },
        },
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(1), endpointId: EndpointNumber(99) },
                status: { status: 127 },
            },
        },
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(1), endpointId: EndpointNumber(0) },
                status: { clusterStatus: undefined, status: 0 },
            },
        },
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(0), endpointId: EndpointNumber(0) },
                status: { clusterStatus: undefined, status: 0 },
            },
        },
    ],
};

const BasicInformationClusterWithTimedInteraction = {
    ...BasicInformationCluster,
    attributes: {
        ...BasicInformationCluster.attributes,
        nodeLabel: WritableAttribute(0x5, TlvString.bound({ maxLength: 32 }), {
            persistent: true,
            default: "",
            writeAcl: AccessLevel.Manage,
            timed: true,
        }),
    },
};

const testFabric = new Fabric(
    FabricIndex(1),
    FabricId(1),
    NodeId(BigInt(1)),
    NodeId(1),
    ByteArray.fromHex("00"),
    ByteArray.fromHex("00"),
    KEY,
    VendorId(1),
    ByteArray.fromHex("00"),
    ByteArray.fromHex("00"),
    ByteArray.fromHex("00"),
    ByteArray.fromHex("00"),
    ByteArray.fromHex("00"),
    "",
);

async function getDummyMessageExchange(
    hasTimedInteraction = false,
    timedInteractionExpired = false,
    clearTimedInteractionCallback?: () => void,
) {
    const session = await SecureSession.create({
        context: { getFabrics: () => [] } as any,
        id: 1,
        fabric: testFabric,
        peerNodeId: NodeId(BigInt(1)),
        peerSessionId: 1,
        sharedSecret: ByteArray.fromHex("00"),
        salt: ByteArray.fromHex("00"),
        isInitiator: false,
        isResumption: false,
        closeCallback: async () => {
            /* */
        },
        sessionParameters: { idleIntervalMs: 1000, activeIntervalMs: 1000 },
    });
    return {
        channel: { name: "test" },
        clearTimedInteraction: () => clearTimedInteractionCallback?.(),
        hasTimedInteraction: () => hasTimedInteraction,
        hasActiveTimedInteraction: () => hasTimedInteraction && !timedInteractionExpired,
        hasExpiredTimedInteraction: () => hasTimedInteraction && timedInteractionExpired,
        session,
    } as unknown as MessageExchange<any>;
}

describe("InteractionProtocol", () => {
    let realGetRandomData = Crypto.get().getRandomData;

    before(() => {
        realGetRandomData = Crypto.get().getRandomData;
        Crypto.get().getRandomData = (length: number) => {
            return new Uint8Array(length);
        };
        MockTime.reset();
    });

    after(() => {
        Crypto.get().getRandomData = realGetRandomData;
    });

    let storageManager: StorageManager;
    let storageContext: StorageContext;
    let endpoint: Endpoint;
    let endpointStructure: InteractionEndpointStructure;
    let interactionProtocol: InteractionServer;
    let eventHandler: EventHandler;
    let basicInfoClusterServer: ClusterServerObj<
        BasicInformationCluster["attributes"],
        BasicInformationCluster["events"]
    >;

    function withClusters<A extends Attributes, E extends Events, A2 extends Attributes, E2 extends Events>(
        cluster?: ClusterServerObj<A, E>,
        cluster2?: ClusterServerObj<A2, E2>,
    ) {
        function addClusterServer(cluster: ClusterServerObj<any, any>) {
            endpoint.addClusterServer(cluster);
            let version = 0;
            cluster.datasource = {
                get version() {
                    return version;
                },

                get eventHandler() {
                    return eventHandler;
                },

                increaseVersion() {
                    return ++version;
                },

                changed() {},
            } as ClusterDatasource<SyncStorage>;
        }

        if (cluster) {
            addClusterServer(cluster as any);
            if (cluster2) {
                addClusterServer(cluster2 as any);
            }
        } else {
            basicInfoClusterServer = ClusterServer(
                BasicInformationCluster,
                {
                    dataModelRevision: 1,
                    vendorName: "vendor",
                    vendorId: VendorId(1),
                    productName: "product",
                    productId: 2,
                    nodeLabel: "",
                    hardwareVersion: 0,
                    hardwareVersionString: "0",
                    location: "US",
                    localConfigDisabled: false,
                    softwareVersion: 1,
                    softwareVersionString: "v1",
                    capabilityMinima: {
                        caseSessionsPerFabric: 100,
                        subscriptionsPerFabric: 100,
                    },
                },
                {},
                {
                    startUp: true,
                },
            );
            addClusterServer(basicInfoClusterServer as ClusterServerObj<any, any>);
        }

        endpointStructure.initializeFromEndpoint(endpoint);
    }

    beforeEach(async () => {
        storageManager = new StorageManager(new StorageBackendMemory());
        await storageManager.initialize();
        storageContext = storageManager.createContext("test");
        endpoint = new Endpoint([DummyTestDevice], { endpointId: EndpointNumber(0) });
        endpointStructure = new InteractionEndpointStructure();
        interactionProtocol = new InteractionServer({
            endpointStructure: endpointStructure,
            eventHandler: (eventHandler = new EventHandler(storageContext.createContext("EventHandler"))),
        });
    });

    describe("handleReadRequest", () => {
        it("replies with attributes and events", async () => {
            withClusters();

            basicInfoClusterServer.triggerStartUpEvent({ softwareVersion: 1 });
            basicInfoClusterServer.triggerStartUpEvent({ softwareVersion: 2 });

            const result = await interactionProtocol.handleReadRequest(
                await getDummyMessageExchange(),
                READ_REQUEST,
                {} as Message,
            );

            assert.deepEqual(result, READ_RESPONSE);
        });

        it("replies with attributes and events using (unused) version filter", async () => {
            withClusters();

            basicInfoClusterServer.triggerStartUpEvent({ softwareVersion: 1 });
            basicInfoClusterServer.triggerStartUpEvent({ softwareVersion: 2 });

            const result = await interactionProtocol.handleReadRequest(
                await getDummyMessageExchange(),
                READ_REQUEST_WITH_UNUSED_FILTER,
                {} as Message,
            );

            assert.deepEqual(result, READ_RESPONSE);
        });

        it("replies with attributes and events with active version filter", async () => {
            withClusters();

            basicInfoClusterServer.triggerStartUpEvent({ softwareVersion: 1 });
            basicInfoClusterServer.triggerStartUpEvent({ softwareVersion: 2 });

            const result = await interactionProtocol.handleReadRequest(
                await getDummyMessageExchange(),
                READ_REQUEST_WITH_FILTER,
                {} as Message,
            );

            assert.deepEqual(result, READ_RESPONSE_WITH_FILTER);
        });
    });

    describe("handleSubscribeRequest", () => {
        // Success case is tested in Integration test
        it("errors when no path match the requested path's", async () => {
            withClusters();

            let statusSent = -1;
            let closed = false;
            await interactionProtocol.handleSubscribeRequest(
                await getDummyMessageExchange(),
                INVALID_SUBSCRIBE_REQUEST,
                {
                    sendStatus: code => {
                        statusSent = code;
                    },

                    close: async () => {
                        closed = true;
                    },
                } as InteractionServerMessenger,
                {} as Message,
            );
            assert.equal(statusSent, 128);
            assert.equal(closed, true);
        });
    });

    describe("handleWriteRequest", () => {
        it("write values and return errors on invalid values", async () => {
            withClusters();

            const result = await interactionProtocol.handleWriteRequest(
                await getDummyMessageExchange(),
                WRITE_REQUEST,
                {
                    packetHeader: { sessionType: SessionType.Unicast },
                } as Message,
            );

            assert.deepEqual(result, WRITE_RESPONSE);
            assert.equal(endpoint.getClusterServer(BasicInformationCluster)?.attributes.nodeLabel.getLocal(), "test");
        });

        it("write chunked array values with Fabric Index handling", async () => {
            const accessControlCluster = ClusterServer(
                AccessControlCluster,
                {
                    acl: [],
                    extension: [],
                    subjectsPerAccessControlEntry: 4,
                    targetsPerAccessControlEntry: 4,
                    accessControlEntriesPerFabric: 4,
                },
                {},
                {
                    accessControlEntryChanged: true,
                    accessControlExtensionChanged: true,
                },
            );

            withClusters(accessControlCluster);

            const result = await interactionProtocol.handleWriteRequest(
                await getDummyMessageExchange(),
                CHUNKED_ARRAY_WRITE_REQUEST,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, CHUNKED_ARRAY_WRITE_RESPONSE);
            assert.deepEqual(accessControlCluster.attributes.acl.getLocalForFabric(testFabric), [
                {
                    privilege: 1,
                    authMode: 1,
                    subjects: null,
                    targets: null,
                    fabricIndex: FabricIndex(1), // Set from session
                },
                {
                    privilege: 1,
                    authMode: 0,
                    subjects: null,
                    targets: null,
                    fabricIndex: FabricIndex(0), // existing value 0
                },
                {
                    privilege: 1,
                    authMode: 2,
                    subjects: null,
                    targets: null,
                    fabricIndex: FabricIndex(2), // existing value 2
                },
            ]);
        });

        it("rejects mass write with wildcard attribute", async () => {
            withClusters();

            await assert.rejects(
                interactionProtocol.handleWriteRequest(await getDummyMessageExchange(), ILLEGAL_MASS_WRITE_REQUEST, {
                    packetHeader: { sessionType: SessionType.Unicast },
                } as Message),
            );
        });

        it("performs mass write with wildcard endpoint", async () => {
            withClusters();

            const result = await interactionProtocol.handleWriteRequest(
                await getDummyMessageExchange(),
                MASS_WRITE_REQUEST,
                {
                    packetHeader: { sessionType: SessionType.Unicast },
                } as Message,
            );

            expect(result).deep.equals(MASS_WRITE_RESPONSE);
            assert.equal(basicInfoClusterServer.attributes.location.getLocal(), "US");
            assert.equal(basicInfoClusterServer.attributes.nodeLabel.getLocal(), "test");
        });

        it("write values and return errors on invalid values timed interaction mismatch request", async () => {
            let timedInteractionCleared = false;
            withClusters();
            const messageExchange = await getDummyMessageExchange(false, false, () => {
                timedInteractionCleared = true;
            });
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleWriteRequest(
                        messageExchange,
                        { ...WRITE_REQUEST, timedRequest: true },
                        {
                            packetHeader: { sessionType: SessionType.Unicast },
                        } as Message,
                    ),
                {
                    message:
                        "(201) timedRequest flag of write interaction (true) mismatch with expected timed interaction (false).",
                },
            );

            assert.equal(timedInteractionCleared, false);
            assert.equal(basicInfoClusterServer.attributes.nodeLabel.getLocal(), "");
        });

        it("write values and return errors on invalid values timed interaction mismatch timed expected", async () => {
            let timedInteractionCleared = false;
            withClusters();
            const messageExchange = await getDummyMessageExchange(true, false, () => {
                timedInteractionCleared = true;
            });
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleWriteRequest(messageExchange, WRITE_REQUEST, {
                        packetHeader: { sessionType: SessionType.Unicast },
                    } as Message),
                {
                    message:
                        "(201) timedRequest flag of write interaction (false) mismatch with expected timed interaction (true).",
                },
            );

            assert.equal(timedInteractionCleared, false);
            assert.equal(basicInfoClusterServer.attributes.nodeLabel.getLocal(), "");
        });

        it("write values and return errors on invalid values timed interaction required by attribute", async () => {
            let timedInteractionCleared = false;
            const basicCluster = ClusterServer(
                BasicInformationClusterWithTimedInteraction,
                {
                    dataModelRevision: 1,
                    vendorName: "vendor",
                    vendorId: VendorId(1),
                    productName: "product",
                    productId: 2,
                    nodeLabel: "",
                    hardwareVersion: 0,
                    hardwareVersionString: "0",
                    location: "US",
                    localConfigDisabled: false,
                    softwareVersion: 1,
                    softwareVersionString: "v1",
                    capabilityMinima: {
                        caseSessionsPerFabric: 100,
                        subscriptionsPerFabric: 100,
                    },
                },
                {},
                {
                    startUp: true,
                },
            );

            withClusters(basicCluster);
            const messageExchange = await getDummyMessageExchange(false, false, () => {
                timedInteractionCleared = true;
            });
            const result = await interactionProtocol.handleWriteRequest(messageExchange, WRITE_REQUEST_TIMED_REQUIRED, {
                packetHeader: { sessionType: SessionType.Unicast },
            } as Message);

            assert.deepEqual(result, WRITE_RESPONSE_TIMED_ERROR);
            assert.equal(timedInteractionCleared, false);
            assert.equal(basicCluster.attributes.nodeLabel.getLocal(), "");
        });

        it("write values and return errors on invalid values timed interaction required by attribute success", async () => {
            let timedInteractionCleared = false;
            const basicCluster = ClusterServer(
                BasicInformationClusterWithTimedInteraction,
                {
                    dataModelRevision: 1,
                    vendorName: "vendor",
                    vendorId: VendorId(1),
                    productName: "product",
                    productId: 2,
                    nodeLabel: "",
                    hardwareVersion: 0,
                    hardwareVersionString: "0",
                    location: "US",
                    localConfigDisabled: false,
                    softwareVersion: 1,
                    softwareVersionString: "v1",
                    capabilityMinima: {
                        caseSessionsPerFabric: 100,
                        subscriptionsPerFabric: 100,
                    },
                },
                {},
                {
                    startUp: true,
                },
            );

            withClusters(basicCluster);
            const messageExchange = await getDummyMessageExchange(true, false, () => {
                timedInteractionCleared = true;
            });
            const result = await interactionProtocol.handleWriteRequest(
                messageExchange,
                { ...WRITE_REQUEST_TIMED_REQUIRED, timedRequest: true },
                {
                    packetHeader: { sessionType: SessionType.Unicast },
                } as Message,
            );

            assert.deepEqual(result, WRITE_RESPONSE_TIMED_REQUIRED);
            assert.equal(timedInteractionCleared, true);
            assert.equal(basicCluster.attributes.nodeLabel.getLocal(), "test");
        });

        it("write values and return errors on invalid values timed interaction expired", async () => {
            let timedInteractionCleared = false;
            withClusters();
            const messageExchange = await getDummyMessageExchange(true, true, () => {
                timedInteractionCleared = true;
            });
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleWriteRequest(
                        messageExchange,
                        { ...WRITE_REQUEST, timedRequest: true },
                        {
                            packetHeader: { sessionType: SessionType.Unicast },
                        } as Message,
                    ),
                {
                    message: "(148) Timed request window expired. Decline write request.",
                },
            );

            assert.equal(timedInteractionCleared, true);
            assert.equal(basicInfoClusterServer.attributes.nodeLabel.getLocal(), "");
        });

        it("write values and return errors on invalid values timed interaction in group message", async () => {
            let timedInteractionCleared = false;
            withClusters();
            const messageExchange = await getDummyMessageExchange(true, false, () => {
                timedInteractionCleared = true;
            });
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleWriteRequest(
                        messageExchange,
                        { ...WRITE_REQUEST, timedRequest: true },
                        {
                            packetHeader: { sessionType: SessionType.Group },
                        } as Message,
                    ),
                {
                    message:
                        "(128) Write requests are only allowed on unicast sessions when a timed interaction is running.",
                },
            );

            assert.equal(timedInteractionCleared, true);
            assert.equal(basicInfoClusterServer.attributes.nodeLabel.getLocal(), "");
        });

        it("write values and return errors on invalid values in timed interaction", async () => {
            let timedInteractionCleared = false;
            withClusters();
            const messageExchange = await getDummyMessageExchange(true, false, () => {
                timedInteractionCleared = true;
            });
            const result = await interactionProtocol.handleWriteRequest(
                messageExchange,
                { ...WRITE_REQUEST, timedRequest: true },
                {
                    packetHeader: { sessionType: SessionType.Unicast },
                } as Message,
            );

            assert.equal(timedInteractionCleared, true);
            assert.deepEqual(result, WRITE_RESPONSE);
            assert.equal(basicInfoClusterServer.attributes.nodeLabel.getLocal(), "test");
        });
    });

    describe("handleInvokeRequest", () => {
        let onOffState: boolean;
        let onOffCluster;
        let adminCommissioningCluster;

        beforeEach(async () => {
            onOffState = false;
            onOffCluster = ClusterServer(
                OnOffCluster,
                {
                    onOff: onOffState,
                },
                {
                    on: async () => {
                        onOffState = true;
                    },
                    off: async () => {
                        onOffState = false;
                    },
                    toggle: async () => {
                        onOffState = !onOffState;
                    },
                },
            );
            adminCommissioningCluster = ClusterServer(
                AdministratorCommissioning.Cluster,
                { windowStatus: 0, adminFabricIndex: FabricIndex(0), adminVendorId: VendorId(0) },
                {
                    openCommissioningWindow: async () => {
                        return;
                    },
                    revokeCommissioning: async () => {
                        return;
                    },
                },
            );

            withClusters(onOffCluster, adminCommissioningCluster);
        });

        it("invoke command with empty args", async () => {
            const result = await interactionProtocol.handleInvokeRequest(
                await getDummyMessageExchange(),
                INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE);
            assert.equal(onOffState, true);
        });

        it("invoke command with no args", async () => {
            const result = await interactionProtocol.handleInvokeRequest(
                await getDummyMessageExchange(),
                INVOKE_COMMAND_REQUEST_WITH_NO_ARGS,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE);
            assert.equal(onOffState, true);
        });

        it("invalid invoke command", async () => {
            const result = await interactionProtocol.handleInvokeRequest(
                await getDummyMessageExchange(),
                INVOKE_COMMAND_REQUEST_INVALID,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE_INVALID);
            assert.equal(onOffState, false);
        });

        it("multi invoke commands", async () => {
            onOffState = false;
            let triggeredOn = false;
            let triggeredOff = false;
            onOffCluster = ClusterServer(
                OnOffCluster,
                {
                    onOff: onOffState,
                },
                {
                    on: async () => {
                        onOffState = true;
                        triggeredOn = true;
                    },
                    off: async () => {
                        onOffState = false;
                        triggeredOff = true;
                    },
                    toggle: async () => {
                        onOffState = !onOffState;
                    },
                },
            );

            withClusters(onOffCluster);

            const result = await interactionProtocol.handleInvokeRequest(
                await getDummyMessageExchange(),
                INVOKE_COMMAND_REQUEST_MULTI,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE_MULTI);
            assert.equal(triggeredOn, true);
            assert.equal(triggeredOff, true);
            assert.equal(onOffState, false);
        });

        it("handles StatusResponseError gracefully", async () => {
            onOffCluster = ClusterServer(
                OnOffCluster,
                {
                    onOff: false,
                },
                {
                    on: async () => {
                        throw new StatusResponseError("Sorry so swamped", StatusCode.Busy);
                    },
                    off: async () => {},
                    toggle: async () => {},
                },
            );

            withClusters(onOffCluster);

            const result = await interactionProtocol.handleInvokeRequest(
                await getDummyMessageExchange(),
                { ...INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS },
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE_BUSY);
        });

        it("invoke command with timed interaction mismatch request", async () => {
            let timedInteractionCleared = false;
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleInvokeRequest(
                        await getDummyMessageExchange(false, false, () => {
                            timedInteractionCleared = true;
                        }),
                        { ...INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS, timedRequest: true },
                        { packetHeader: { sessionType: SessionType.Unicast } } as Message,
                    ),
                {
                    message:
                        "(201) timedRequest flag of invoke interaction (true) mismatch with expected timed interaction (false).",
                },
            );

            assert.equal(timedInteractionCleared, false);
            assert.equal(onOffState, false);
        });

        it("invoke command with timed interaction mismatch timed expected", async () => {
            let timedInteractionCleared = false;
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleInvokeRequest(
                        await getDummyMessageExchange(true, false, () => {
                            timedInteractionCleared = true;
                        }),
                        INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS,
                        { packetHeader: { sessionType: SessionType.Unicast } } as Message,
                    ),
                {
                    message:
                        "(201) timedRequest flag of invoke interaction (false) mismatch with expected timed interaction (true).",
                },
            );

            assert.equal(timedInteractionCleared, false);
            assert.equal(onOffState, false);
        });

        it("invoke command with timed interaction expired", async () => {
            let timedInteractionCleared = false;
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleInvokeRequest(
                        await getDummyMessageExchange(true, true, () => {
                            timedInteractionCleared = true;
                        }),
                        { ...INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS, timedRequest: true },
                        { packetHeader: { sessionType: SessionType.Unicast } } as Message,
                    ),
                {
                    message: "(148) Timed request window expired. Decline invoke request.",
                },
            );

            assert.equal(timedInteractionCleared, true);
            assert.equal(onOffState, false);
        });

        it("invoke command with timed interaction as group message", async () => {
            let timedInteractionCleared = false;
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleInvokeRequest(
                        await getDummyMessageExchange(true, false, () => {
                            timedInteractionCleared = true;
                        }),
                        { ...INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS, timedRequest: true },
                        { packetHeader: { sessionType: SessionType.Group } } as Message,
                    ),
                {
                    message:
                        "(128) Invoke requests are only allowed on unicast sessions when a timed interaction is running.",
                },
            );

            assert.equal(timedInteractionCleared, true);
            assert.equal(onOffState, false);
        });

        it("invoke command with with timed interaction success", async () => {
            let timedInteractionCleared = false;
            const result = await interactionProtocol.handleInvokeRequest(
                await getDummyMessageExchange(true, false, () => {
                    timedInteractionCleared = true;
                }),
                { ...INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS, timedRequest: true },
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE);
            assert.equal(onOffState, true);
            assert.equal(timedInteractionCleared, true);
        });

        it("invoke command with with timed interaction required by command errors when not send as timed request", async () => {
            let timedInteractionCleared = false;
            const result = await interactionProtocol.handleInvokeRequest(
                await getDummyMessageExchange(false, false, () => {
                    timedInteractionCleared = true;
                }),
                INVOKE_COMMAND_REQUEST_TIMED_REQUIRED,
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE_TIMED_REQUIRED);
            assert.equal(timedInteractionCleared, false);
        });

        it("invoke command with with timed interaction required by command success", async () => {
            let timedInteractionCleared = false;
            const result = await interactionProtocol.handleInvokeRequest(
                await getDummyMessageExchange(true, false, () => {
                    timedInteractionCleared = true;
                }),
                { ...INVOKE_COMMAND_REQUEST_TIMED_REQUIRED, timedRequest: true },
                { packetHeader: { sessionType: SessionType.Unicast } } as Message,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE_TIMED_REQUIRED_SUCCESS);
            assert.equal(timedInteractionCleared, true);
        });
    });
});

/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto, StorageBackendMemory, StorageContext, StorageManager } from "#general";
import {
    BaseDataReport,
    DataReportPayload,
    DataReportPayloadIterator,
    FabricManager,
    InteractionContext,
    InteractionEndpointStructure,
    InteractionServer,
    InteractionServerMessenger,
    InvokeRequest,
    InvokeResponse,
    MessageType,
    OccurrenceManager,
    ReadRequest,
    SessionManager,
    SubscribeRequest,
    VolatileEventStore,
    WriteRequest,
    WriteResponse,
} from "#protocol";
import {
    AttributeId,
    ClusterId,
    ClusterType,
    CommandId,
    EndpointNumber,
    EventId,
    EventNumber,
    FabricIndex,
    StatusCode,
    StatusResponseError,
    TlvArray,
    TlvClusterId,
    TlvFabricIndex,
    TlvField,
    TlvInvokeResponse,
    TlvNoArguments,
    TlvNullable,
    TlvObject,
    TlvOptionalField,
    TlvStatusResponse,
    TlvString,
    TlvUInt16,
    TlvUInt8,
    TlvVendorId,
    TypeFromBitmapSchema,
    TypeFromPartialBitSchema,
    VendorId,
    WildcardPathFlagsBitmap,
    WritableAttribute,
} from "#types";
import { AccessLevel, Specification } from "@matter/model";
import {
    AccessControlCluster,
    AdministratorCommissioning,
    BasicInformation,
    BasicInformationCluster,
    OnOffCluster,
    WiFiNetworkDiagnosticsCluster,
} from "@matter/types/clusters";
import { ClusterServer, ClusterServerObj } from "@project-chip/matter.js/cluster";
import { DeviceClasses, DeviceTypeDefinition, Endpoint } from "@project-chip/matter.js/device";
import * as assert from "node:assert";
import {
    DummyGroupcastMessage,
    DummyUnicastMessage,
    createDummyMessageExchange,
    testFabric,
} from "./InteractionTestUtils.js";

const DummyTestDevice = DeviceTypeDefinition({
    code: 0,
    name: "DummyTestDevice",
    deviceClass: DeviceClasses.Simple,
    revision: 1,
});

const READ_REQUEST: ReadRequest = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
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
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), eventId: EventId(254) }, // unsupported event
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), eventId: EventId(4) }, // unsupported cluster
        { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), eventId: EventId(1) }, // unsupported endpoint
    ],
};

const READ_REQUEST_WITH_UNUSED_FILTER: ReadRequest = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
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
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), eventId: EventId(254) }, // unsupported event
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), eventId: EventId(4) }, // unsupported cluster
        { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), eventId: EventId(1) }, // unsupported endpoint
    ],
    eventFilters: [{ eventMin: 1 }],
};

const READ_REQUEST_WITH_FILTER: ReadRequest = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
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
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), eventId: EventId(254) }, // unsupported event
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), eventId: EventId(4) }, // unsupported cluster
        { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), eventId: EventId(1) }, // unsupported endpoint
    ],
    eventFilters: [{ eventMin: 2 }],
};

const READ_RESPONSE: DataReportPayload = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: true,
    attributeReportsPayload: [
        {
            hasFabricSensitiveData: false,
            attributeData: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(2) },
                schema: TlvVendorId,
                payload: 1,
                dataVersion: 0,
            },
        },
        {
            hasFabricSensitiveData: false,
            attributeData: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(4) },
                schema: TlvUInt16,
                payload: 2,
                dataVersion: 0,
            },
        },
        {
            hasFabricSensitiveData: false,
            attributeStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(400) },
                status: { status: 134 },
            },
        },
        {
            hasFabricSensitiveData: false,
            attributeStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), attributeId: AttributeId(4) },
                status: { status: 195 },
            },
        },
        {
            hasFabricSensitiveData: false,
            attributeStatus: {
                path: { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), attributeId: AttributeId(1) },
                status: { status: 127 },
            },
        },
        {
            hasFabricSensitiveData: false,
            attributeData: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(3) },
                schema: TlvString.bound({ maxLength: 32 }),
                payload: "product",
                dataVersion: 0,
            },
        },
        {
            hasFabricSensitiveData: false,
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
            hasFabricSensitiveData: false,
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
            hasFabricSensitiveData: false,
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
            hasFabricSensitiveData: false,
            eventStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), eventId: EventId(254) },
                status: { status: 199 },
            },
        },
        {
            hasFabricSensitiveData: false,
            eventStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), eventId: EventId(4) },
                status: { status: 195 },
            },
        },
        {
            hasFabricSensitiveData: false,
            eventStatus: {
                path: { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), eventId: EventId(1) },
                status: { status: 127 },
            },
        },
    ],
};

const READ_RESPONSE_WITH_FILTER: DataReportPayload = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: true,
    attributeReportsPayload: [
        {
            hasFabricSensitiveData: false,
            attributeStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(400) },
                status: { status: 134 },
            },
        },
        {
            hasFabricSensitiveData: false,
            attributeStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), attributeId: AttributeId(4) },
                status: { status: 195 },
            },
        },
        {
            hasFabricSensitiveData: false,
            attributeStatus: {
                path: { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), attributeId: AttributeId(1) },
                status: { status: 127 },
            },
        },
        {
            hasFabricSensitiveData: false,
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
            hasFabricSensitiveData: false,
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
            hasFabricSensitiveData: false,
            eventStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), eventId: EventId(254) },
                status: { status: 199 },
            },
        },
        {
            hasFabricSensitiveData: false,
            eventStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), eventId: EventId(4) },
                status: { status: 195 },
            },
        },
        {
            hasFabricSensitiveData: false,
            eventStatus: {
                path: { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), eventId: EventId(1) },
                status: { status: 127 },
            },
        },
    ],
};

const INVALID_SUBSCRIBE_REQUEST: SubscribeRequest = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
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
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: true,
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
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
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
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: true,
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
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    writeResponses: [
        {
            path: { attributeId: AttributeId(5), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { clusterStatus: undefined, status: 0 },
        },
    ],
};

const WRITE_RESPONSE_TIMED_ERROR: WriteResponse = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    writeResponses: [
        {
            path: { attributeId: AttributeId(5), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { clusterStatus: undefined, status: 198 },
        },
    ],
};

const ILLEGAL_MASS_WRITE_REQUEST: WriteRequest = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: true,
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
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: true,
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
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
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
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: true,
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
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    writeResponses: [
        {
            path: { attributeId: AttributeId(0), clusterId: ClusterId(31), endpointId: EndpointNumber(0) },
            status: { clusterStatus: undefined, status: 0 },
        },
        {
            path: { attributeId: AttributeId(0), clusterId: ClusterId(31), endpointId: EndpointNumber(0) },
            status: { clusterStatus: undefined, status: 0 },
        },
        {
            path: { attributeId: AttributeId(0), clusterId: ClusterId(31), endpointId: EndpointNumber(0) },
            status: { clusterStatus: undefined, status: 0 },
        },
        {
            path: { attributeId: AttributeId(0), clusterId: ClusterId(31), endpointId: EndpointNumber(0) },
            status: { clusterStatus: undefined, status: 0 },
        },
    ],
};

const INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS: InvokeRequest = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
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
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
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
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
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
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    invokeResponses: [
        {
            status: {
                commandPath: { clusterId: ClusterId(0x3c), commandId: CommandId(2), endpointId: EndpointNumber(0) },
                status: { status: 0 },
            },
        },
    ],
};

const INVOKE_COMMAND_REQUEST_WITH_NO_ARGS: InvokeRequest = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(1) },
        },
    ],
};

const INVOKE_COMMAND_REQUEST_MULTI_WILDCARD: InvokeRequest = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: {
                endpointId: EndpointNumber(0),
                clusterId: ClusterId(6),
                commandId: CommandId(1),
            },
            commandRef: 0,
        },
        {
            commandPath: { endpointId: undefined, clusterId: ClusterId(6), commandId: CommandId(0) },
            commandRef: 1,
        },
        {
            commandPath: { endpointId: undefined, clusterId: ClusterId(6), commandId: CommandId(99) },
            commandRef: 2,
        },
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(100) },
            commandRef: 3,
        },
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(90), commandId: CommandId(1) },
            commandRef: 4,
        },
        {
            commandPath: { endpointId: EndpointNumber(99), clusterId: ClusterId(6), commandId: CommandId(1) },
            commandRef: 5,
        },
    ],
};

const INVOKE_COMMAND_REQUEST_MULTI_SAME: InvokeRequest = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(1) },
            commandRef: 0,
        },
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(1) },
            commandRef: 1,
        },
    ],
};

const INVOKE_COMMAND_REQUEST_MULTI: InvokeRequest = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(0) },
            commandFields: TlvNoArguments.encodeTlv(undefined),
            commandRef: 1,
        },
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(1) },
            commandFields: TlvNoArguments.encodeTlv(undefined),
            commandRef: 2,
        },
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(2) },
            commandFields: TlvNoArguments.encodeTlv(undefined),
            commandRef: 3,
        },
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(100) },
            commandFields: TlvNoArguments.encodeTlv(undefined),
            commandRef: 4,
        },
    ],
};

const INVOKE_COMMAND_REQUEST_INVALID: InvokeRequest = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(10) },
        },
    ],
};

const INVOKE_COMMAND_RESPONSE: InvokeResponse = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    invokeResponses: [
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(1), endpointId: EndpointNumber(0) },
                status: { status: 0 },
            },
        },
    ],
};

const INVOKE_COMMAND_RESPONSE_BUSY: InvokeResponse = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    invokeResponses: [
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(1), endpointId: EndpointNumber(0) },
                status: { status: 0x9c },
            },
        },
    ],
};

const INVOKE_COMMAND_RESPONSE_INVALID: InvokeResponse = {
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
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
    interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
    suppressResponse: false,
    invokeResponses: [
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(0), endpointId: EndpointNumber(0) },
                commandRef: 1,
                status: { status: 0 },
            },
        },
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(1), endpointId: EndpointNumber(0) },
                commandRef: 2,
                status: { status: 0 },
            },
        },
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(2), endpointId: EndpointNumber(0) },
                commandRef: 3,
                status: { status: 0 },
            },
        },
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(100), endpointId: EndpointNumber(0) },
                commandRef: 4,
                status: { status: 129 },
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

const wildcardTestCases: {
    testCase: string;
    clusterId: ClusterId;
    wildcardPathFilter?: TypeFromPartialBitSchema<typeof WildcardPathFlagsBitmap>;
    count: number;
}[] = [
    { testCase: "no", clusterId: ClusterId(0x28), wildcardPathFilter: undefined, count: 21 },
    { testCase: "skipRootNode", clusterId: ClusterId(0x28), wildcardPathFilter: { skipRootNode: true }, count: 0 }, // all sorted out
    {
        testCase: "skipGlobalAttributes",
        clusterId: ClusterId(0x28),
        wildcardPathFilter: { skipGlobalAttributes: true },
        count: 18,
    }, // 4 less
    {
        testCase: "skipAttributeList",
        clusterId: ClusterId(0x28),
        wildcardPathFilter: { skipAttributeList: true },
        count: 20,
    }, // 1 less
    {
        testCase: "skipCommandLists",
        clusterId: ClusterId(0x28),
        wildcardPathFilter: { skipCommandLists: true },
        count: 19,
    }, // 2 less
    {
        testCase: "skipFixedAttributes",
        clusterId: ClusterId(0x28),
        wildcardPathFilter: { skipFixedAttributes: true },
        count: 7,
    }, // 13 less
    {
        testCase: "skipChangesOmittedAttributes",
        clusterId: ClusterId(0x28),
        wildcardPathFilter: { skipChangesOmittedAttributes: true },
        count: 21,
    }, // nothing filtered
    {
        testCase: "no for WiFiDiag",
        clusterId: ClusterId(0x36),
        wildcardPathFilter: {},
        count: 10,
    }, // nothing filtered
    {
        testCase: "skipChangesOmittedAttributes",
        clusterId: ClusterId(0x36),
        wildcardPathFilter: { skipChangesOmittedAttributes: true },
        count: 9,
    }, // 1 filtered
    {
        testCase: "skipDiagnosticsClusters",
        clusterId: ClusterId(0x36),
        wildcardPathFilter: { skipDiagnosticsClusters: true },
        count: 0,
    }, // all filtered
];

function fillIterableDataReport(data: {
    dataReport: BaseDataReport;
    payload?: DataReportPayloadIterator;
}): DataReportPayload {
    const { dataReport: report, payload } = data;
    const dataReport: DataReportPayload = { ...report };

    if (payload !== undefined) {
        for (const payloadItem of payload) {
            if ("attributeData" in payloadItem || "attributeStatus" in payloadItem) {
                dataReport.attributeReportsPayload = dataReport.attributeReportsPayload ?? [];
                dataReport.attributeReportsPayload.push(payloadItem);
            } else if ("eventData" in payloadItem || "eventStatus" in payloadItem) {
                dataReport.eventReportsPayload = dataReport.eventReportsPayload ?? [];
                dataReport.eventReportsPayload.push(payloadItem);
            }
        }
    }
    return dataReport;
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
    let eventManger: OccurrenceManager;
    let basicInfoClusterServer: ClusterServerObj<BasicInformationCluster>;

    function createInteractionServer(
        structure: InteractionEndpointStructure,
        storageManager: StorageManager,
        options?: Partial<InteractionContext>,
    ) {
        return new InteractionServer({
            sessions: new SessionManager({
                fabrics: new FabricManager(),
                storage: storageManager.createContext("sessions"),
            }),
            structure,
            initiateExchange: (() => {}) as any,
            ...options,
        });
    }

    function withClusters<T1 extends ClusterType, T2 extends ClusterType>(
        cluster?: ClusterServerObj<T1>,
        cluster2?: ClusterServerObj<T2>,
    ) {
        function addClusterServer<const T extends ClusterType>(cluster: ClusterServerObj<T>) {
            endpoint.addClusterServer(cluster);
            let version = 0;
            cluster.datasource = {
                fabrics: [],
                version,
                eventHandler: eventManger,

                increaseVersion() {
                    return ++version;
                },

                changed() {},
            };
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
                    uniqueId: "",
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
                    specificationVersion: Specification.SPECIFICATION_VERSION,
                    maxPathsPerInvoke: 100,
                },
                {},
                {
                    startUp: true,
                },
            );
            addClusterServer(basicInfoClusterServer);
        }

        endpointStructure.initializeFromEndpoint(endpoint);
    }

    beforeEach(async () => {
        storageManager = new StorageManager(new StorageBackendMemory());
        await storageManager.initialize();
        storageContext = storageManager.createContext("test");
        eventManger = new OccurrenceManager({
            store: new VolatileEventStore(storageContext.createContext("EventHandler")),
        });
        endpoint = new Endpoint([DummyTestDevice], { endpointId: EndpointNumber(0) });
        endpointStructure = new InteractionEndpointStructure();
        interactionProtocol = createInteractionServer(endpointStructure, storageManager);
    });

    describe("handleReadRequest", () => {
        it("replies with attributes and events", async () => {
            withClusters();

            basicInfoClusterServer.triggerStartUpEvent({ softwareVersion: 1 });
            basicInfoClusterServer.triggerStartUpEvent({ softwareVersion: 2 });

            const result = await interactionProtocol.handleReadRequest(
                await createDummyMessageExchange(),
                READ_REQUEST,
                DummyUnicastMessage,
            );

            assert.deepEqual(fillIterableDataReport(result), READ_RESPONSE);
        });

        it("replies with attributes and events using (unused) version filter", async () => {
            withClusters();

            basicInfoClusterServer.triggerStartUpEvent({ softwareVersion: 1 });
            basicInfoClusterServer.triggerStartUpEvent({ softwareVersion: 2 });

            const result = await interactionProtocol.handleReadRequest(
                await createDummyMessageExchange(),
                READ_REQUEST_WITH_UNUSED_FILTER,
                DummyUnicastMessage,
            );

            assert.deepEqual(fillIterableDataReport(result), READ_RESPONSE);
        });

        it("replies with attributes and events with active version filter", async () => {
            withClusters();

            basicInfoClusterServer.triggerStartUpEvent({ softwareVersion: 1 });
            basicInfoClusterServer.triggerStartUpEvent({ softwareVersion: 2 });

            const result = await interactionProtocol.handleReadRequest(
                await createDummyMessageExchange(),
                READ_REQUEST_WITH_FILTER,
                DummyUnicastMessage,
            );

            assert.deepEqual(fillIterableDataReport(result), READ_RESPONSE_WITH_FILTER);
        });

        for (const { testCase, clusterId, wildcardPathFilter, count } of wildcardTestCases) {
            it(`replies with attributes with ${testCase} wildcard Filter`, async () => {
                withClusters(
                    basicInfoClusterServer,
                    ClusterServer(
                        WiFiNetworkDiagnosticsCluster,
                        {
                            bssid: null,
                            securityType: null,
                            wiFiVersion: null,
                            channelNumber: null,
                            rssi: 0,
                        },
                        {},
                        {},
                    ),
                );

                const result = await interactionProtocol.handleReadRequest(
                    await createDummyMessageExchange(),
                    {
                        interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
                        isFabricFiltered: true,
                        attributeRequests: [
                            {
                                endpointId: undefined,
                                clusterId,
                                attributeId: undefined,
                                wildcardPathFlags: wildcardPathFilter,
                            },
                        ],
                    },
                    DummyUnicastMessage,
                );

                assert.deepEqual(fillIterableDataReport(result).attributeReportsPayload?.length || 0, count);
            });
        }
    });

    describe("handleSubscribeRequest", () => {
        // Success case is tested in Integration test
        it("errors when no path match the requested path's", async () => {
            withClusters();

            let statusSent = -1;
            let closed = false;
            const exchange = await createDummyMessageExchange(
                false,
                false,
                (messageType, payload) => {
                    expect(messageType).to.equal(MessageType.StatusResponse);
                    statusSent = TlvStatusResponse.decode(payload).status;
                },
                undefined,
                () => {
                    closed = true;
                },
            );
            await interactionProtocol.handleSubscribeRequest(
                exchange,
                INVALID_SUBSCRIBE_REQUEST,
                new InteractionServerMessenger(exchange),
                DummyUnicastMessage,
            );
            assert.equal(statusSent, 128);
            assert.equal(closed, true);
        });
    });

    describe("handleWriteRequest", () => {
        it("write values and return errors on invalid values", async () => {
            withClusters();

            const result = await interactionProtocol.handleWriteRequest(
                await createDummyMessageExchange(),
                WRITE_REQUEST,
                DummyUnicastMessage,
            );

            assert.deepEqual(result, WRITE_RESPONSE);
            assert.equal(endpoint.getClusterServer(BasicInformationCluster)?.attributes.nodeLabel.getLocal(), "test");
        });

        it("write chunked array values with Fabric Index handling", async () => {
            const accessControlCluster = ClusterServer(
                AccessControlCluster,
                {
                    acl: [],
                    subjectsPerAccessControlEntry: 4,
                    targetsPerAccessControlEntry: 4,
                    accessControlEntriesPerFabric: 4,
                },
                {},
                {
                    accessControlEntryChanged: true,
                },
            );

            withClusters(accessControlCluster);

            const result = await interactionProtocol.handleWriteRequest(
                await createDummyMessageExchange(),
                CHUNKED_ARRAY_WRITE_REQUEST,
                DummyUnicastMessage,
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
                    fabricIndex: FabricIndex(1), // existing value 0
                },
                {
                    privilege: 1,
                    authMode: 2,
                    subjects: null,
                    targets: null,
                    fabricIndex: FabricIndex(1), // existing value 2, we override hard
                },
            ]);
        });

        it("rejects mass write with wildcard attribute", async () => {
            withClusters();

            await assert.rejects(
                interactionProtocol.handleWriteRequest(
                    await createDummyMessageExchange(),
                    ILLEGAL_MASS_WRITE_REQUEST,
                    DummyUnicastMessage,
                ),
            );
        });

        it("performs mass write with wildcard endpoint", async () => {
            withClusters();

            const result = await interactionProtocol.handleWriteRequest(
                await createDummyMessageExchange(),
                MASS_WRITE_REQUEST,
                DummyUnicastMessage,
            );

            expect(result).deep.equals(MASS_WRITE_RESPONSE);
            assert.equal(basicInfoClusterServer.attributes.location.getLocal(), "US");
            assert.equal(basicInfoClusterServer.attributes.nodeLabel.getLocal(), "test");
        });

        it("write values and return errors on invalid values timed interaction mismatch request", async () => {
            let timedInteractionCleared = false;
            withClusters();
            const messageExchange = await createDummyMessageExchange(false, false, undefined, () => {
                timedInteractionCleared = true;
            });
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleWriteRequest(
                        messageExchange,
                        { ...WRITE_REQUEST, timedRequest: true },
                        DummyUnicastMessage,
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
            const messageExchange = await createDummyMessageExchange(true, false, undefined, () => {
                timedInteractionCleared = true;
            });
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleWriteRequest(messageExchange, WRITE_REQUEST, DummyUnicastMessage),
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
                    uniqueId: "",
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
                    specificationVersion: Specification.SPECIFICATION_VERSION,
                    maxPathsPerInvoke: 100,
                },
                {},
                {
                    startUp: true,
                },
            );

            withClusters(basicCluster);
            const messageExchange = await createDummyMessageExchange(false, false, undefined, () => {
                timedInteractionCleared = true;
            });
            const result = await interactionProtocol.handleWriteRequest(
                messageExchange,
                WRITE_REQUEST_TIMED_REQUIRED,
                DummyUnicastMessage,
            );

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
                    uniqueId: "",
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
                    specificationVersion: Specification.SPECIFICATION_VERSION,
                    maxPathsPerInvoke: 100,
                },
                {},
                {
                    startUp: true,
                },
            );

            withClusters(basicCluster);
            const messageExchange = await createDummyMessageExchange(true, false, undefined, () => {
                timedInteractionCleared = true;
            });
            const result = await interactionProtocol.handleWriteRequest(
                messageExchange,
                { ...WRITE_REQUEST_TIMED_REQUIRED, timedRequest: true },
                DummyUnicastMessage,
            );

            assert.deepEqual(result, WRITE_RESPONSE_TIMED_REQUIRED);
            assert.equal(timedInteractionCleared, true);
            assert.equal(basicCluster.attributes.nodeLabel.getLocal(), "test");
        });

        it("write values and return errors on invalid values timed interaction expired", async () => {
            let timedInteractionCleared = false;
            withClusters();
            const messageExchange = await createDummyMessageExchange(true, true, undefined, () => {
                timedInteractionCleared = true;
            });
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleWriteRequest(
                        messageExchange,
                        { ...WRITE_REQUEST, timedRequest: true },
                        DummyUnicastMessage,
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
            const messageExchange = await createDummyMessageExchange(true, false, undefined, () => {
                timedInteractionCleared = true;
            });
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleWriteRequest(
                        messageExchange,
                        { ...WRITE_REQUEST, timedRequest: true },
                        DummyGroupcastMessage,
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
            const messageExchange = await createDummyMessageExchange(true, false, undefined, () => {
                timedInteractionCleared = true;
            });
            const result = await interactionProtocol.handleWriteRequest(
                messageExchange,
                { ...WRITE_REQUEST, timedRequest: true },
                DummyUnicastMessage,
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
            let result;
            const exchange = await createDummyMessageExchange(false, false, (_messageType, payload) => {
                result = TlvInvokeResponse.decode(payload);
            });
            await interactionProtocol.handleInvokeRequest(
                exchange,
                INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS,
                new InteractionServerMessenger(exchange),
                DummyUnicastMessage,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE);
            assert.equal(onOffState, true);
        });

        it("invoke command with no args", async () => {
            let result;
            const exchange = await createDummyMessageExchange(false, false, (_messageType, payload) => {
                result = TlvInvokeResponse.decode(payload);
            });
            await interactionProtocol.handleInvokeRequest(
                exchange,
                INVOKE_COMMAND_REQUEST_WITH_NO_ARGS,
                new InteractionServerMessenger(exchange),
                DummyUnicastMessage,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE);
            assert.equal(onOffState, true);
        });

        it("invalid invoke command", async () => {
            let result;
            const exchange = await createDummyMessageExchange(false, false, (_messageType, payload) => {
                result = TlvInvokeResponse.decode(payload);
            });
            await interactionProtocol.handleInvokeRequest(
                exchange,
                INVOKE_COMMAND_REQUEST_INVALID,
                new InteractionServerMessenger(exchange),
                DummyUnicastMessage,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE_INVALID);
            assert.equal(onOffState, false);
        });

        it("throws on multi invoke commands with wildcards", async () => {
            withClusters();

            const exchange = await createDummyMessageExchange(false, false, (_messageType, payload) => {
                result = TlvInvokeResponse.decode(payload);
            });
            let result = undefined;
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleInvokeRequest(
                        exchange,
                        INVOKE_COMMAND_REQUEST_MULTI_WILDCARD,
                        new InteractionServerMessenger(exchange),
                        DummyUnicastMessage,
                    ),
                {
                    message: "(128) Illegal wildcard path in batch invoke",
                },
            );
            assert.equal(result, undefined);
        });

        it("throws on multi invoke commands with one 1 allowed", async () => {
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

            const exchange = await createDummyMessageExchange(false, false, (_messageType, payload) => {
                result = TlvInvokeResponse.decode(payload);
            });
            let result = undefined;

            interactionProtocol = createInteractionServer(endpointStructure, storageManager, {
                maxPathsPerInvoke: 1,
            });

            await assert.rejects(
                async () =>
                    await interactionProtocol.handleInvokeRequest(
                        exchange,
                        INVOKE_COMMAND_REQUEST_MULTI,
                        new InteractionServerMessenger(exchange),
                        DummyUnicastMessage,
                    ),
                {
                    message: "(128) Only 1 invoke requests are supported in one message. This message contains 4",
                },
            );

            //assert.deepEqual(result, INVOKE_COMMAND_RESPONSE_MULTI); // TODO Add again later when we support it officially
            assert.equal(triggeredOn, false);
            assert.equal(triggeredOff, false);
            assert.equal(onOffState, false);
            assert.equal(result, undefined);
        });

        it("multi invoke commands are ok", async () => {
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

            let result = undefined;
            const exchange = await createDummyMessageExchange(false, false, (_messageType, payload) => {
                result = TlvInvokeResponse.decode(payload);
            });

            await interactionProtocol.handleInvokeRequest(
                exchange,
                INVOKE_COMMAND_REQUEST_MULTI,
                new InteractionServerMessenger(exchange),
                DummyUnicastMessage,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE_MULTI); // TODO Add again later when we support it officially
            assert.equal(triggeredOn, true);
            assert.equal(triggeredOff, true);
            assert.equal(onOffState, false);
        });

        it("multi invoke response is split into multiple messages if needed", async () => {
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

            const result = Array<TypeFromBitmapSchema<typeof TlvInvokeResponse>>();
            const exchange = await createDummyMessageExchange(false, false, (_messageType, payload) => {
                result.push(TlvInvokeResponse.decode(payload));
            });

            interactionProtocol = createInteractionServer(endpointStructure, storageManager, {
                maxPathsPerInvoke: 1000,
            });

            const request = {
                ...INVOKE_COMMAND_REQUEST_MULTI,
            };
            request.invokeRequests = [...request.invokeRequests];
            for (let i = 1; i < 100; i++) {
                request.invokeRequests.push({
                    commandPath: {
                        endpointId: EndpointNumber(0),
                        clusterId: ClusterId(6),
                        commandId: CommandId(100 + i),
                    },
                    commandFields: TlvNoArguments.encodeTlv(undefined),
                    commandRef: i + 4,
                });
            }

            await interactionProtocol.handleInvokeRequest(
                exchange,
                request,
                new InteractionServerMessenger(exchange),
                DummyUnicastMessage,
            );

            assert.equal(result.length, 3);
            assert.equal(
                result[0].invokeResponses.length + result[1].invokeResponses.length + result[2].invokeResponses.length,
                103,
            );
            assert.equal(result[0].moreChunkedMessages, true);
            assert.equal(result[1].moreChunkedMessages, true);
            assert.equal(result[2].moreChunkedMessages, undefined);
            assert.equal(triggeredOn, true);
            assert.equal(triggeredOff, true);
            assert.equal(onOffState, false);
        });

        it("throws on multi invoke commands with one same commands", async () => {
            const exchange = await createDummyMessageExchange(false, false, (_messageType, payload) => {
                result = TlvInvokeResponse.decode(payload);
            });
            let result = undefined;
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleInvokeRequest(
                        exchange,
                        INVOKE_COMMAND_REQUEST_MULTI_SAME,
                        new InteractionServerMessenger(exchange),
                        DummyUnicastMessage,
                    ),
                {
                    message: "(128) Duplicate command path (0/6/1) in batch invoke",
                },
            );

            assert.equal(result, undefined);
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

            let result;
            const exchange = await createDummyMessageExchange(false, false, (_messageType, payload) => {
                result = TlvInvokeResponse.decode(payload);
            });
            await interactionProtocol.handleInvokeRequest(
                exchange,
                { ...INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS },
                new InteractionServerMessenger(exchange),
                DummyUnicastMessage,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE_BUSY);
        });

        it("invoke command with timed interaction mismatch request", async () => {
            let timedInteractionCleared = false;
            const exchange = await createDummyMessageExchange(
                false,
                false,
                (_messageType, payload) => {
                    result = TlvInvokeResponse.decode(payload);
                },
                () => {
                    timedInteractionCleared = true;
                },
            );
            let result = undefined;
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleInvokeRequest(
                        exchange,
                        { ...INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS, timedRequest: true },
                        new InteractionServerMessenger(exchange),
                        DummyUnicastMessage,
                    ),
                {
                    message:
                        "(201) timedRequest flag of invoke interaction (true) mismatch with expected timed interaction (false).",
                },
            );

            assert.equal(timedInteractionCleared, false);
            assert.equal(onOffState, false);
            assert.equal(result, undefined);
        });

        it("invoke command with timed interaction mismatch timed expected", async () => {
            let timedInteractionCleared = false;
            const exchange = await createDummyMessageExchange(
                true,
                false,
                (messageType, payload) => {
                    expect(messageType).to.equal(MessageType.StatusResponse);
                    result = TlvStatusResponse.decode(payload);
                    console.log(result);
                },
                () => {
                    timedInteractionCleared = true;
                },
            );
            let result = undefined;
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleInvokeRequest(
                        exchange,
                        INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS,
                        new InteractionServerMessenger(exchange),
                        DummyUnicastMessage,
                    ),
                {
                    message:
                        "(201) timedRequest flag of invoke interaction (false) mismatch with expected timed interaction (true).",
                },
            );

            assert.equal(timedInteractionCleared, false);
            assert.equal(onOffState, false);
            assert.equal(result, undefined);
        });

        it("invoke command with timed interaction expired", async () => {
            let timedInteractionCleared = false;
            let result = undefined;
            const exchange = await createDummyMessageExchange(
                true,
                true,
                (_messageType, payload) => {
                    result = TlvInvokeResponse.decode(payload);
                },
                () => {
                    timedInteractionCleared = true;
                },
            );
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleInvokeRequest(
                        exchange,
                        { ...INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS, timedRequest: true },
                        new InteractionServerMessenger(exchange),
                        DummyUnicastMessage,
                    ),
                {
                    message: "(148) Timed request window expired. Decline invoke request.",
                },
            );

            assert.equal(timedInteractionCleared, true);
            assert.equal(onOffState, false);
            assert.equal(result, undefined);
        });

        it("invoke command with timed interaction as group message", async () => {
            let timedInteractionCleared = false;
            const exchange = await createDummyMessageExchange(
                true,
                false,
                (_messageType, payload) => {
                    result = TlvInvokeResponse.decode(payload);
                },
                () => {
                    timedInteractionCleared = true;
                },
            );
            let result = undefined;
            await assert.rejects(
                async () =>
                    await interactionProtocol.handleInvokeRequest(
                        exchange,
                        { ...INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS, timedRequest: true },
                        new InteractionServerMessenger(exchange),
                        DummyGroupcastMessage,
                    ),
                {
                    message:
                        "(128) Invoke requests are only allowed on unicast sessions when a timed interaction is running.",
                },
            );

            assert.equal(timedInteractionCleared, true);
            assert.equal(onOffState, false);
            assert.equal(result, undefined);
        });

        it("invoke command with with timed interaction success", async () => {
            let timedInteractionCleared = false;
            const exchange = await createDummyMessageExchange(
                true,
                false,
                (_messageType, payload) => {
                    result = TlvInvokeResponse.decode(payload);
                },
                () => {
                    timedInteractionCleared = true;
                },
            );
            let result;
            await interactionProtocol.handleInvokeRequest(
                exchange,
                { ...INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS, timedRequest: true },
                new InteractionServerMessenger(exchange),
                DummyUnicastMessage,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE);
            assert.equal(onOffState, true);
            assert.equal(timedInteractionCleared, true);
        });

        it("invoke command with with timed interaction required by command errors when not send as timed request", async () => {
            let timedInteractionCleared = false;
            const exchange = await createDummyMessageExchange(
                false,
                false,
                (_messageType, payload) => {
                    result = TlvInvokeResponse.decode(payload);
                },
                () => {
                    timedInteractionCleared = true;
                },
            );
            let result;
            await interactionProtocol.handleInvokeRequest(
                exchange,
                INVOKE_COMMAND_REQUEST_TIMED_REQUIRED,
                new InteractionServerMessenger(exchange),
                DummyUnicastMessage,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE_TIMED_REQUIRED);
            assert.equal(timedInteractionCleared, false);
        });

        it("invoke command with with timed interaction required by command success", async () => {
            let timedInteractionCleared = false;
            let result;
            const exchange = await createDummyMessageExchange(
                true,
                false,
                (_messageType, payload) => {
                    result = TlvInvokeResponse.decode(payload);
                },

                () => {
                    timedInteractionCleared = true;
                },
            );
            await interactionProtocol.handleInvokeRequest(
                exchange,
                { ...INVOKE_COMMAND_REQUEST_TIMED_REQUIRED, timedRequest: true },
                new InteractionServerMessenger(exchange),
                DummyUnicastMessage,
            );

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE_TIMED_REQUIRED_SUCCESS);
            assert.equal(timedInteractionCleared, true);
        });
    });
});

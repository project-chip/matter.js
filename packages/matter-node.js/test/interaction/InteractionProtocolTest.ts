/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "@project-chip/matter.js/crypto";
import { KEY } from "../cluster/ClusterServerTestingUtil.js";

import {
    AccessControlCluster,
    AccessLevel,
    AdministratorCommissioning,
    BasicInformationCluster,
    ClusterServer,
    ClusterServerObjForCluster,
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
    FabricId,
    FabricIndex,
    NodeId,
    TlvFabricIndex,
    VendorId,
} from "@project-chip/matter.js/datatype";
import { DeviceClasses, DeviceTypeDefinition, Endpoint } from "@project-chip/matter.js/device";
import { Fabric } from "@project-chip/matter.js/fabric";
import {
    DataReport,
    InteractionServer,
    InteractionServerMessenger,
    InvokeRequest,
    InvokeResponse,
    ReadRequest,
    SubscribeRequest,
    WriteRequest,
    WriteResponse,
} from "@project-chip/matter.js/interaction";
import { MessageExchange } from "@project-chip/matter.js/protocol";
import { SecureSession } from "@project-chip/matter.js/session";
import { StorageBackendMemory, StorageContext, StorageManager } from "@project-chip/matter.js/storage";
import {
    TlvArray,
    TlvField,
    TlvNoArguments,
    TlvNullable,
    TlvObject,
    TlvOptionalField,
    TlvString,
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
    interactionModelRevision: 10,
    isFabricFiltered: true,
    attributeRequests: [
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(2) },
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(4) },
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(400) }, // unsupported attribute
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), attributeId: AttributeId(4) }, // unsupported cluster
        { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), attributeId: AttributeId(1) }, // unsupported endpoint
        { endpointId: undefined, clusterId: ClusterId(0x28), attributeId: AttributeId(3) },
        { endpointId: undefined, clusterId: ClusterId(0x99), attributeId: AttributeId(3) }, // ignore
    ],
};

const READ_REQUEST_WITH_UNUSED_FILTER: ReadRequest = {
    interactionModelRevision: 10,
    isFabricFiltered: true,
    attributeRequests: [
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(2) },
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(4) },
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(400) }, // unsupported attribute
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), attributeId: AttributeId(4) }, // unsupported cluster
        { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), attributeId: AttributeId(1) }, // unsupported endpoint
        { endpointId: undefined, clusterId: ClusterId(0x28), attributeId: AttributeId(3) },
        { endpointId: undefined, clusterId: ClusterId(0x99), attributeId: AttributeId(3) }, // ignore
    ],
    dataVersionFilters: [{ path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28) }, dataVersion: 1 }],
};

const READ_REQUEST_WITH_FILTER: ReadRequest = {
    interactionModelRevision: 10,
    isFabricFiltered: true,
    attributeRequests: [
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(2) },
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(4) },
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(400) }, // unsupported attribute
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), attributeId: AttributeId(4) }, // unsupported cluster
        { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), attributeId: AttributeId(1) }, // unsupported endpoint
        { endpointId: undefined, clusterId: ClusterId(0x28), attributeId: AttributeId(3) },
        { endpointId: undefined, clusterId: ClusterId(0x99), attributeId: AttributeId(3) }, // ignore
    ],
    dataVersionFilters: [{ path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28) }, dataVersion: 0 }],
};

const READ_RESPONSE: DataReport = {
    interactionModelRevision: 10,
    suppressResponse: false,
    eventReports: undefined,
    attributeReports: [
        {
            attributeData: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(2) },
                data: TlvUInt8.encodeTlv(1),
                dataVersion: 0,
            },
        },
        {
            attributeData: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(4) },
                data: TlvUInt8.encodeTlv(2),
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
                data: TlvString.encodeTlv("product"),
                dataVersion: 0,
            },
        },
    ],
};

const READ_RESPONSE_WITH_FILTER: DataReport = {
    interactionModelRevision: 10,
    suppressResponse: false,
    eventReports: undefined,
    attributeReports: [
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
    ],
};

const INVALID_SUBSCRIBE_REQUEST: SubscribeRequest = {
    interactionModelRevision: 10,
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
    interactionModelRevision: 10,
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
    interactionModelRevision: 10,
    writeResponses: [
        {
            path: { attributeId: AttributeId(100), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { status: 134 },
        },
        {
            path: { attributeId: AttributeId(4), clusterId: ClusterId(0x99), endpointId: EndpointNumber(0) },
            status: { status: 195 },
        },
        {
            path: { attributeId: AttributeId(4), clusterId: ClusterId(40), endpointId: EndpointNumber(1) },
            status: { status: 127 },
        },
        {
            path: { attributeId: AttributeId(5), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { status: 0 },
        },
        {
            path: { attributeId: AttributeId(6), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { status: 146 },
        },
        {
            path: { attributeId: AttributeId(3), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { status: 136 },
        },
    ],
};

const WRITE_REQUEST_TIMED_REQUIRED: WriteRequest = {
    interactionModelRevision: 10,
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
    interactionModelRevision: 10,
    writeResponses: [
        {
            path: { attributeId: AttributeId(5), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { status: 0 },
        },
    ],
};

const WRITE_RESPONSE_TIMED_ERROR: WriteResponse = {
    interactionModelRevision: 10,
    writeResponses: [
        {
            path: { attributeId: AttributeId(5), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { status: 198 },
        },
    ],
};

const MASS_WRITE_REQUEST: WriteRequest = {
    interactionModelRevision: 10,
    suppressResponse: false,
    timedRequest: false,
    writeRequests: [
        {
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28) },
            data: TlvString.encodeTlv("test"),
            dataVersion: 0,
        },
        {
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99) },
            data: TlvString.encodeTlv("test"),
            dataVersion: 0,
        },
        {
            path: { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28) },
            data: TlvString.encodeTlv("test"),
            dataVersion: 0,
        },
    ],
    moreChunkedMessages: false,
};

const MASS_WRITE_RESPONSE: WriteResponse = {
    interactionModelRevision: 10,
    writeResponses: [
        {
            path: { attributeId: AttributeId(5), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { status: 0 },
        },
        {
            path: { attributeId: AttributeId(6), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { status: 0 },
        },
        {
            path: { attributeId: AttributeId(16), clusterId: ClusterId(40), endpointId: EndpointNumber(0) },
            status: { status: 0 },
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
    interactionModelRevision: 10,
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
    interactionModelRevision: 10,
    writeResponses: [
        {
            path: { attributeId: AttributeId(0), clusterId: ClusterId(31), endpointId: EndpointNumber(0) },
            status: { status: 0 },
        },
    ],
};

const INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS: InvokeRequest = {
    interactionModelRevision: 10,
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
    interactionModelRevision: 10,
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
    interactionModelRevision: 10,
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
    interactionModelRevision: 10,
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
    interactionModelRevision: 10,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(1) },
        },
    ],
};

const INVOKE_COMMAND_REQUEST_MULTI: InvokeRequest = {
    interactionModelRevision: 10,
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
    interactionModelRevision: 10,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(10) },
        },
    ],
};

const INVOKE_COMMAND_RESPONSE: InvokeResponse = {
    interactionModelRevision: 10,
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

const INVOKE_COMMAND_RESPONSE_INVALID: InvokeResponse = {
    interactionModelRevision: 10,
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
    interactionModelRevision: 10,
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
                status: { status: 0 },
            },
        },
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(0), endpointId: EndpointNumber(0) },
                status: { status: 0 },
            },
        },
    ],
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
    const session = await SecureSession.create(
        { getFabrics: () => [] } as any,
        1,
        testFabric,
        NodeId(1),
        1,
        ByteArray.fromHex("00"),
        ByteArray.fromHex("00"),
        false,
        false,
        async () => {
            /* nothing */
        },
        1000,
        1000,
    );
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
    // eslint-disable-next-line @typescript-eslint/unbound-method
    let realGetRandomData = Crypto.get().getRandomData;

    before(() => {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        realGetRandomData = Crypto.get().getRandomData;
        Crypto.get().getRandomData = (length: number) => {
            return new Uint8Array(length);
        };
    });

    after(() => {
        Crypto.get().getRandomData = realGetRandomData;
    });

    describe("handleReadRequest", () => {
        let storageManager: StorageManager;
        let storageContext: StorageContext;
        let endpoint: Endpoint;
        let interactionProtocol: InteractionServer;
        const basicInfoClusterServer = () =>
            ClusterServer(
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

        beforeEach(async () => {
            storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            storageContext = storageManager.createContext("test");
            endpoint = new Endpoint([DummyTestDevice], { endpointId: EndpointNumber(0) });
            interactionProtocol = new InteractionServer(storageContext);
        });

        it("replies with attribute values", async () => {
            endpoint.addClusterServer(basicInfoClusterServer());
            interactionProtocol.setRootEndpoint(endpoint);

            const result = interactionProtocol.handleReadRequest(await getDummyMessageExchange(), READ_REQUEST);

            assert.deepEqual(result, READ_RESPONSE);
        });

        it("replies with attribute values using (unused) version filter", async () => {
            endpoint.addClusterServer(basicInfoClusterServer());
            interactionProtocol.setRootEndpoint(endpoint);

            const result = interactionProtocol.handleReadRequest(
                await getDummyMessageExchange(),
                READ_REQUEST_WITH_UNUSED_FILTER,
            );

            assert.deepEqual(result, READ_RESPONSE);
        });

        it("replies with attribute values with active version filter", async () => {
            endpoint.addClusterServer(basicInfoClusterServer());
            interactionProtocol.setRootEndpoint(endpoint);

            const result = interactionProtocol.handleReadRequest(
                await getDummyMessageExchange(),
                READ_REQUEST_WITH_FILTER,
            );

            assert.deepEqual(result, READ_RESPONSE_WITH_FILTER);
        });
    });

    describe("handleSubscribeRequest", () => {
        let storageManager: StorageManager;
        let storageContext: StorageContext;
        let endpoint: Endpoint;
        let interactionProtocol: InteractionServer;
        const basicInfoClusterServer = () =>
            ClusterServer(
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

        beforeEach(async () => {
            storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            storageContext = storageManager.createContext("test");
            endpoint = new Endpoint([DummyTestDevice], { endpointId: EndpointNumber(0) });
            interactionProtocol = new InteractionServer(storageContext);
        });

        // Success case is tested in Integration test
        it("errors when no path match the requested path's", async () => {
            endpoint.addClusterServer(basicInfoClusterServer());
            interactionProtocol.setRootEndpoint(endpoint);

            let statusSent = -1;
            await interactionProtocol.handleSubscribeRequest(
                await getDummyMessageExchange(),
                INVALID_SUBSCRIBE_REQUEST,
                {
                    sendStatus: code => {
                        statusSent = code;
                    },
                } as InteractionServerMessenger,
            );
            assert.equal(statusSent, 128);
        });
    });

    describe("handleWriteRequest", () => {
        let storageManager: StorageManager;
        let storageContext: StorageContext;
        let endpoint: Endpoint;
        let interactionProtocol: InteractionServer;
        let basicInfoClusterServer: ClusterServerObjForCluster<BasicInformationCluster>;

        beforeEach(async () => {
            storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            storageContext = storageManager.createContext("test");
            endpoint = new Endpoint([DummyTestDevice], { endpointId: EndpointNumber(0) });
            interactionProtocol = new InteractionServer(storageContext);
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
        });

        it("write values and return errors on invalid values", async () => {
            endpoint.addClusterServer(basicInfoClusterServer);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = interactionProtocol.handleWriteRequest(await getDummyMessageExchange(), WRITE_REQUEST, {
                packetHeader: { sessionType: SessionType.Unicast },
            } as Message);

            assert.deepEqual(result, WRITE_RESPONSE);
            assert.equal(basicInfoClusterServer.attributes.nodeLabel.getLocal(), "test");
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

            endpoint.addClusterServer(accessControlCluster);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = interactionProtocol.handleWriteRequest(
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

        it("mass write values and only set the one allowed", async () => {
            endpoint.addClusterServer(basicInfoClusterServer);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = interactionProtocol.handleWriteRequest(await getDummyMessageExchange(), MASS_WRITE_REQUEST, {
                packetHeader: { sessionType: SessionType.Unicast },
            } as Message);

            assert.deepEqual(result, MASS_WRITE_RESPONSE);
            assert.equal(basicInfoClusterServer.attributes.vendorName.getLocal(), "vendor");
            assert.equal(basicInfoClusterServer.attributes.productName.getLocal(), "product");
            assert.equal(basicInfoClusterServer.attributes.location.getLocal(), "US");
            assert.equal(basicInfoClusterServer.attributes.nodeLabel.getLocal(), "test");
        });

        it("write values and return errors on invalid values timed interaction mismatch request", async () => {
            let timedInteractionCleared = false;
            endpoint.addClusterServer(basicInfoClusterServer);
            interactionProtocol.setRootEndpoint(endpoint);
            const messageExchange = await getDummyMessageExchange(false, false, () => {
                timedInteractionCleared = true;
            });
            assert.throws(
                () =>
                    interactionProtocol.handleWriteRequest(messageExchange, { ...WRITE_REQUEST, timedRequest: true }, {
                        packetHeader: { sessionType: SessionType.Unicast },
                    } as Message),
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
            endpoint.addClusterServer(basicInfoClusterServer);
            interactionProtocol.setRootEndpoint(endpoint);
            const messageExchange = await getDummyMessageExchange(true, false, () => {
                timedInteractionCleared = true;
            });
            assert.throws(
                () =>
                    interactionProtocol.handleWriteRequest(messageExchange, WRITE_REQUEST, {
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
            const BasicInformationClusterWithTimedInteraction = BasicInformationCluster;
            BasicInformationClusterWithTimedInteraction.attributes.nodeLabel = WritableAttribute(
                0x5,
                TlvString.bound({ maxLength: 32 }),
                { persistent: true, default: "", writeAcl: AccessLevel.Manage, timed: true },
            );
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

            endpoint.addClusterServer(basicCluster);
            interactionProtocol.setRootEndpoint(endpoint);
            const messageExchange = await getDummyMessageExchange(false, false, () => {
                timedInteractionCleared = true;
            });
            const result = interactionProtocol.handleWriteRequest(messageExchange, WRITE_REQUEST_TIMED_REQUIRED, {
                packetHeader: { sessionType: SessionType.Unicast },
            } as Message);

            assert.deepEqual(result, WRITE_RESPONSE_TIMED_ERROR);
            assert.equal(timedInteractionCleared, false);
            assert.equal(basicCluster.attributes.nodeLabel.getLocal(), "");
        });

        it("write values and return errors on invalid values timed interaction required by attribute success", async () => {
            let timedInteractionCleared = false;
            const BasicInformationClusterWithTimedInteraction = BasicInformationCluster;
            BasicInformationClusterWithTimedInteraction.attributes.nodeLabel = WritableAttribute(
                0x5,
                TlvString.bound({ maxLength: 32 }),
                { persistent: true, default: "", writeAcl: AccessLevel.Manage, timed: true },
            );
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

            endpoint.addClusterServer(basicCluster);
            interactionProtocol.setRootEndpoint(endpoint);
            const messageExchange = await getDummyMessageExchange(true, false, () => {
                timedInteractionCleared = true;
            });
            const result = interactionProtocol.handleWriteRequest(
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
            endpoint.addClusterServer(basicInfoClusterServer);
            interactionProtocol.setRootEndpoint(endpoint);
            const messageExchange = await getDummyMessageExchange(true, true, () => {
                timedInteractionCleared = true;
            });
            assert.throws(
                () =>
                    interactionProtocol.handleWriteRequest(messageExchange, { ...WRITE_REQUEST, timedRequest: true }, {
                        packetHeader: { sessionType: SessionType.Unicast },
                    } as Message),
                {
                    message: "(148) Timed request window expired. Decline write request.",
                },
            );

            assert.equal(timedInteractionCleared, true);
            assert.equal(basicInfoClusterServer.attributes.nodeLabel.getLocal(), "");
        });

        it("write values and return errors on invalid values timed interaction in group message", async () => {
            let timedInteractionCleared = false;
            endpoint.addClusterServer(basicInfoClusterServer);
            interactionProtocol.setRootEndpoint(endpoint);
            const messageExchange = await getDummyMessageExchange(true, false, () => {
                timedInteractionCleared = true;
            });
            assert.throws(
                () =>
                    interactionProtocol.handleWriteRequest(messageExchange, { ...WRITE_REQUEST, timedRequest: true }, {
                        packetHeader: { sessionType: SessionType.Group },
                    } as Message),
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
            endpoint.addClusterServer(basicInfoClusterServer);
            interactionProtocol.setRootEndpoint(endpoint);
            const messageExchange = await getDummyMessageExchange(true, false, () => {
                timedInteractionCleared = true;
            });
            const result = interactionProtocol.handleWriteRequest(
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
        let storageManager: StorageManager;
        let storageContext: StorageContext;
        let endpoint: Endpoint;
        let interactionProtocol: InteractionServer;
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

            storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            storageContext = storageManager.createContext("test");
            endpoint = new Endpoint([DummyTestDevice], { endpointId: EndpointNumber(0) });
            endpoint.addClusterServer(onOffCluster);
            endpoint.addClusterServer(adminCommissioningCluster);
            interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);
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

            endpoint = new Endpoint([DummyTestDevice], { endpointId: EndpointNumber(0) });
            endpoint.addClusterServer(onOffCluster);
            interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

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

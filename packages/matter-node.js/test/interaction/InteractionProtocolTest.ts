/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageBackendMemory, StorageManager } from "@project-chip/matter.js/storage";
import { Time, TimeFake } from "@project-chip/matter.js/time";

Time.get = () => new TimeFake(0);

import { Crypto } from "@project-chip/matter.js/crypto";
import { CryptoNode } from "../../src/crypto/CryptoNode";

Crypto.get = () => new CryptoNode();

import * as assert from "assert";
import {
    ClusterServer, InteractionServer, ReadRequest, DataReport, WriteRequest, WriteResponse, InvokeRequest,
    InvokeResponse
} from "@project-chip/matter.js/interaction";
import { MessageExchange } from "@project-chip/matter.js/protocol";
import { Endpoint, DeviceTypeDefinition, DeviceClasses } from "@project-chip/matter.js/device";
import { FabricId, FabricIndex, NodeId, VendorId } from "@project-chip/matter.js/datatype";
import { TlvString, TlvUInt8, TlvNoArguments, TlvArray, TlvField, TlvObject, TlvNullable } from "@project-chip/matter.js/tlv";
import { BasicInformationCluster, OnOffCluster, AccessControlCluster } from "@project-chip/matter.js/cluster";
import { Message } from "@project-chip/matter.js/codec";
import { Fabric } from "@project-chip/matter.js/fabric";
import { ByteArray } from "@project-chip/matter.js/util";
import { SecureSession } from "@project-chip/matter.js/session";

const DummyTestDevice = DeviceTypeDefinition({
    code: 0,
    name: "DummyTestDevice",
    deviceClass: DeviceClasses.Simple,
    revision: 1
});

const READ_REQUEST: ReadRequest = {
    interactionModelRevision: 1,
    isFabricFiltered: true,
    attributeRequests: [
        { endpointId: 0, clusterId: 0x28, attributeId: 2 },
        { endpointId: 0, clusterId: 0x28, attributeId: 4 },
        { endpointId: 0, clusterId: 0x28, attributeId: 400 }, // unsupported attribute
        { endpointId: 0, clusterId: 0x99, attributeId: 4 }, // unsupported cluster
        { endpointId: 1, clusterId: 0x28, attributeId: 1 }, // unsupported endpoint
        { endpointId: undefined, clusterId: 0x28, attributeId: 3 },
        { endpointId: undefined, clusterId: 0x99, attributeId: 3 }, // ignore
    ],
};

const READ_RESPONSE: DataReport = {
    interactionModelRevision: 1,
    suppressResponse: false,
    attributeReports: [
        {
            attributeData: {
                path: { endpointId: 0, clusterId: 0x28, attributeId: 2 },
                data: TlvUInt8.encodeTlv(1),
                dataVersion: 0,
            }
        },
        {
            attributeData: {
                path: { endpointId: 0, clusterId: 0x28, attributeId: 4 },
                data: TlvUInt8.encodeTlv(2),
                dataVersion: 0,
            }
        },
        {
            attributeStatus: {
                path: { endpointId: 0, clusterId: 0x28, attributeId: 400 },
                status: { status: 134 },
            }
        },
        {
            attributeStatus: {
                path: { endpointId: 0, clusterId: 0x99, attributeId: 4 },
                status: { status: 195 },
            }
        },
        {
            attributeStatus: {
                path: { endpointId: 1, clusterId: 0x28, attributeId: 1 },
                status: { status: 127 },
            }
        },
        {
            attributeData: {
                path: { endpointId: 0, clusterId: 0x28, attributeId: 3 },
                data: TlvString.encodeTlv("product"),
                dataVersion: 0,
            }
        },
    ]
};

const WRITE_REQUEST: WriteRequest = {
    interactionModelRevision: 1,
    suppressResponse: false,
    timedRequest: false,
    writeRequests: [
        {
            path: { endpointId: 0, clusterId: 0x28, attributeId: 100 },
            data: TlvUInt8.encodeTlv(3),
            dataVersion: 0,
        },
        {
            path: { endpointId: 0, clusterId: 0x99, attributeId: 4 },
            data: TlvUInt8.encodeTlv(3),
            dataVersion: 0,
        },
        {
            path: { endpointId: 1, clusterId: 0x28, attributeId: 4 },
            data: TlvUInt8.encodeTlv(3),
            dataVersion: 0,
        },
        {
            path: { endpointId: 0, clusterId: 0x28, attributeId: 5 },
            data: TlvString.encodeTlv("test"),
            dataVersion: 0,
        },
    ],
    moreChunkedMessages: false,
};

const WRITE_RESPONSE: WriteResponse = {
    interactionModelRevision: 1,
    writeResponses: [
        {
            path: { attributeId: 100, clusterId: 40, endpointId: 0 }, status: { status: 134 }
        },
        {
            path: { attributeId: 4, clusterId: 0x99, endpointId: 0 }, status: { status: 195 }
        },
        {
            path: { attributeId: 4, clusterId: 40, endpointId: 1 }, status: { status: 127 }
        },
        {
            path: { attributeId: 5, clusterId: 40, endpointId: 0 }, status: { status: 0 }
        }
    ]
};

const MASS_WRITE_REQUEST: WriteRequest = {
    interactionModelRevision: 1,
    suppressResponse: false,
    timedRequest: false,
    writeRequests: [
        {
            path: { endpointId: 0, clusterId: 0x28 },
            data: TlvString.encodeTlv("test"),
            dataVersion: 0,
        },
        {
            path: { endpointId: 0, clusterId: 0x99 },
            data: TlvString.encodeTlv("test"),
            dataVersion: 0,
        },
        {
            path: { endpointId: 1, clusterId: 0x28 },
            data: TlvString.encodeTlv("test"),
            dataVersion: 0,
        }
    ],
    moreChunkedMessages: false,
};

const MASS_WRITE_RESPONSE: WriteResponse = {
    interactionModelRevision: 1,
    writeResponses: [
        {
            path: { attributeId: 5, clusterId: 40, endpointId: 0 }, status: { status: 0 }
        },
        {
            path: { attributeId: 6, clusterId: 40, endpointId: 0 }, status: { status: 0 }
        },
        {
            path: { attributeId: 16, clusterId: 40, endpointId: 0 }, status: { status: 0 }
        }
    ]
};

const TlvAclTestSchema = TlvObject({
    privilege: TlvField(1, TlvUInt8),
    authMode: TlvField(2, TlvUInt8),
    subjects: TlvField(3, TlvNullable(TlvUInt8)),
    targets: TlvField(4, TlvNullable(TlvUInt8)),
});

const CHUNKED_ARRAY_WRITE_REQUEST: WriteRequest = {
    interactionModelRevision: 1,
    suppressResponse: false,
    timedRequest: false,
    writeRequests: [
        {
            path: { endpointId: 0, clusterId: 0x1f, attributeId: 0 },
            data: TlvArray(TlvAclTestSchema).encodeTlv([]),
            dataVersion: 0,
        },
        {
            path: { endpointId: 0, clusterId: 0x1f, attributeId: 0, listIndex: null },
            data: TlvAclTestSchema.encodeTlv({
                privilege: 1,
                authMode: 2,
                subjects: null,
                targets: null,
            }),
            dataVersion: 0,
        },
    ],
    moreChunkedMessages: false,
};

const CHUNKED_ARRAY_WRITE_RESPONSE: WriteResponse = {
    interactionModelRevision: 1,
    writeResponses: [
        {
            path: { attributeId: 0, clusterId: 31, endpointId: 0 }, status: { status: 0 }
        }
    ]
};

const INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS: InvokeRequest = {
    interactionModelRevision: 1,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: {
                endpointId: 0,
                clusterId: 6,
                commandId: 1,
            },
            commandFields: TlvNoArguments.encodeTlv(undefined),
        }
    ]
};

const INVOKE_COMMAND_REQUEST_WITH_NO_ARGS: InvokeRequest = {
    interactionModelRevision: 1,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: { endpointId: 0, clusterId: 6, commandId: 1 },
        }
    ]
};

const INVOKE_COMMAND_REQUEST_INVALID: InvokeRequest = {
    interactionModelRevision: 1,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: { endpointId: 0, clusterId: 6, commandId: 10 },
        }
    ]
};

const INVOKE_COMMAND_RESPONSE: InvokeResponse = {
    interactionModelRevision: 1,
    suppressResponse: false,
    invokeResponses: [
        {
            status: {
                commandPath: { clusterId: 6, commandId: 1, endpointId: 0 }, status: { status: 0 }
            }
        }
    ]
};

const INVOKE_COMMAND_RESPONSE_INVALID: InvokeResponse = {
    interactionModelRevision: 1,
    suppressResponse: false,
    invokeResponses: [
        {
            status: {
                commandPath: { clusterId: 6, commandId: 10, endpointId: 0 }, status: { status: 0x81 }
            }
        }
    ]
};

describe("InteractionProtocol", () => {

    describe("handleReadRequest", () => {
        it("replies with attribute values", async () => {
            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const storageContext = storageManager.createContext("test");
            const endpoint = new Endpoint([DummyTestDevice], { endpointId: 0 });
            endpoint.addClusterServer(ClusterServer(BasicInformationCluster, {
                dataModelRevision: 1,
                vendorName: "vendor",
                vendorId: new VendorId(1),
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
            }, {}, {
                startUp: true
            }));
            const interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = interactionProtocol.handleReadRequest(({ channel: { getName: () => "test" } }) as MessageExchange<any>, READ_REQUEST);

            assert.deepEqual(result, READ_RESPONSE);
        });
    });

    describe("handleWriteRequest", () => {
        it("write values and return errors on invalid values", async () => {
            const basicCluster = ClusterServer(BasicInformationCluster, {
                dataModelRevision: 1,
                vendorName: "vendor",
                vendorId: new VendorId(1),
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
            }, {}, {
                startUp: true
            });

            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const storageContext = storageManager.createContext("test");
            const endpoint = new Endpoint([DummyTestDevice], { endpointId: 0 });
            endpoint.addClusterServer(basicCluster);
            const interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = interactionProtocol.handleWriteRequest(({ channel: { getName: () => "test" } }) as MessageExchange<any>, WRITE_REQUEST);

            assert.deepEqual(result, WRITE_RESPONSE);
            assert.equal(basicCluster.attributes.nodeLabel.get(), "test");
        });

        it("write chunked array values and return errors on invalid values", async () => {
            const accessControlCluster = ClusterServer(AccessControlCluster, {
                acl: [],
                extension: [],
                subjectsPerAccessControlEntry: 4,
                targetsPerAccessControlEntry: 4,
                accessControlEntriesPerFabric: 3
            }, {}, {
                accessControlEntryChanged: true,
                accessControlExtensionChanged: true,
            });

            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const storageContext = storageManager.createContext("test");
            const endpoint = new Endpoint([DummyTestDevice], { endpointId: 0 });
            endpoint.addClusterServer(accessControlCluster);
            const interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

            const testFabric = new Fabric(new FabricIndex(1), new FabricId(BigInt(1)), new NodeId(BigInt(1)), new NodeId(BigInt(2)), ByteArray.fromHex("00"), ByteArray.fromHex("00"), { privateKey: ByteArray.fromHex("00"), publicKey: ByteArray.fromHex("00") }, new VendorId(1), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), "");
            const testSession = await SecureSession.create({} as any, 1, testFabric, new NodeId(BigInt(1)), 1, ByteArray.fromHex("00"), ByteArray.fromHex("00"), false, false, () => {/* nothing */ }, 1000, 1000);
            const result = interactionProtocol.handleWriteRequest(({ channel: { getName: () => "test" }, session: testSession }) as unknown as MessageExchange<any>, CHUNKED_ARRAY_WRITE_REQUEST);

            assert.deepEqual(result, CHUNKED_ARRAY_WRITE_RESPONSE);
            assert.deepEqual(accessControlCluster.attributes.acl.get(testSession), [
                {
                    privilege: 1,
                    authMode: 2,
                    subjects: null,
                    targets: null,
                }
            ]);
        });

        it("mass write values and only set the one allowed", async () => {
            const basicCluster = ClusterServer(BasicInformationCluster, {
                dataModelRevision: 1,
                vendorName: "vendor",
                vendorId: new VendorId(1),
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
            }, {}, {
                startUp: true
            });

            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const storageContext = storageManager.createContext("test");
            const endpoint = new Endpoint([DummyTestDevice], { endpointId: 0 });
            endpoint.addClusterServer(basicCluster);
            const interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = interactionProtocol.handleWriteRequest(({ channel: { getName: () => "test" } }) as MessageExchange<any>, MASS_WRITE_REQUEST);

            assert.deepEqual(result, MASS_WRITE_RESPONSE);
            assert.equal(basicCluster.attributes.vendorName.get(), "vendor");
            assert.equal(basicCluster.attributes.productName.get(), "product");
            assert.equal(basicCluster.attributes.location.get(), "US");
            assert.equal(basicCluster.attributes.nodeLabel.get(), "test");
        });
    });

    describe("handleInvokeRequest", () => {
        it("invoke command with empty args", async () => {
            let onOffState = false;
            const onOffCluster = ClusterServer(OnOffCluster, {
                onOff: onOffState,
            }, {
                on: async () => {
                    onOffState = true;
                },
                off: async () => {
                    onOffState = false;
                },
                toggle: async () => {
                    onOffState = !onOffState;
                }
            });

            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const storageContext = storageManager.createContext("test");
            const endpoint = new Endpoint([DummyTestDevice], { endpointId: 0 });
            endpoint.addClusterServer(onOffCluster);
            const interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = await interactionProtocol.handleInvokeRequest(({ channel: { getName: () => "test" } }) as MessageExchange<any>, INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS, {} as Message);

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE);
            assert.equal(onOffState, true);
        });

        it("invoke command with no args", async () => {

            let onOffState = false;
            const onOffCluster = ClusterServer(OnOffCluster, {
                onOff: onOffState,
            }, {
                on: async () => {
                    onOffState = true;
                },
                off: async () => {
                    onOffState = false;
                },
                toggle: async () => {
                    onOffState = !onOffState;
                }
            });

            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const storageContext = storageManager.createContext("test");
            const endpoint = new Endpoint([DummyTestDevice], { endpointId: 0 });
            endpoint.addClusterServer(onOffCluster);
            const interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = await interactionProtocol.handleInvokeRequest(({ channel: { getName: () => "test" } }) as MessageExchange<any>, INVOKE_COMMAND_REQUEST_WITH_NO_ARGS, {} as Message);

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE);
            assert.equal(onOffState, true);
        });

        it("invalid invoke command", async () => {
            let onOffState = false;
            const onOffCluster = ClusterServer(OnOffCluster, {
                onOff: onOffState,
            }, {
                on: async () => {
                    onOffState = true;
                },
                off: async () => {
                    onOffState = false;
                },
                toggle: async () => {
                    onOffState = !onOffState;
                }
            });

            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const storageContext = storageManager.createContext("test");
            const endpoint = new Endpoint([DummyTestDevice], { endpointId: 0 });
            endpoint.addClusterServer(onOffCluster);
            const interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = await interactionProtocol.handleInvokeRequest(({ channel: { getName: () => "test" } }) as MessageExchange<any>, INVOKE_COMMAND_REQUEST_INVALID, {} as Message);

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE_INVALID);
            assert.equal(onOffState, false);
        });
    });
});

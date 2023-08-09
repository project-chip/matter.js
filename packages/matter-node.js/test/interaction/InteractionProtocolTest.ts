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

import { KEY } from "../cluster/ClusterServerTestingUtil.js";

Crypto.get = () => new CryptoNode();

import * as assert from "assert";
import {
    ClusterServer, InteractionServer, ReadRequest, DataReport, WriteRequest, WriteResponse, InvokeRequest,
    InvokeResponse
} from "@project-chip/matter.js/interaction";
import { MessageExchange } from "@project-chip/matter.js/protocol";
import { Endpoint, DeviceTypeDefinition, DeviceClasses } from "@project-chip/matter.js/device";
import {
    FabricId, FabricIndex, NodeId, VendorId, TlvFabricIndex, EndpointNumber, ClusterId, AttributeId, CommandId
} from "@project-chip/matter.js/datatype";
import {
    TlvString, TlvUInt8, TlvNoArguments, TlvArray, TlvField, TlvObject, TlvNullable, TlvOptionalField
} from "@project-chip/matter.js/tlv";
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
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(2) },
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(4) },
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(400) }, // unsupported attribute
        { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), attributeId: AttributeId(4) }, // unsupported cluster
        { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), attributeId: AttributeId(1) }, // unsupported endpoint
        { endpointId: undefined, clusterId: ClusterId(0x28), attributeId: AttributeId(3) },
        { endpointId: undefined, clusterId: ClusterId(0x99), attributeId: AttributeId(3) }, // ignore
    ],
};

const READ_RESPONSE: DataReport = {
    interactionModelRevision: 1,
    suppressResponse: false,
    eventReports: undefined,
    attributeReports: [
        {
            attributeData: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(2) },
                data: TlvUInt8.encodeTlv(1),
                dataVersion: 0,
            }
        },
        {
            attributeData: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(4) },
                data: TlvUInt8.encodeTlv(2),
                dataVersion: 0,
            }
        },
        {
            attributeStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(400) },
                status: { status: 134 },
            }
        },
        {
            attributeStatus: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), attributeId: AttributeId(4) },
                status: { status: 195 },
            }
        },
        {
            attributeStatus: {
                path: { endpointId: EndpointNumber(1), clusterId: ClusterId(0x28), attributeId: AttributeId(1) },
                status: { status: 127 },
            }
        },
        {
            attributeData: {
                path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(3) },
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
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x28), attributeId: AttributeId(100) },
            data: TlvUInt8.encodeTlv(3),
            dataVersion: 0,
        },
        {
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x99), attributeId: AttributeId(4) },
            data: TlvUInt8.encodeTlv(3),
            dataVersion: 0,
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
    ],
    moreChunkedMessages: false,
};

const WRITE_RESPONSE: WriteResponse = {
    interactionModelRevision: 1,
    writeResponses: [
        {
            path: { attributeId: AttributeId(100), clusterId: ClusterId(40), endpointId: EndpointNumber(0) }, status: { status: 134 }
        },
        {
            path: { attributeId: AttributeId(4), clusterId: ClusterId(0x99), endpointId: EndpointNumber(0) }, status: { status: 195 }
        },
        {
            path: { attributeId: AttributeId(4), clusterId: ClusterId(40), endpointId: EndpointNumber(1) }, status: { status: 127 }
        },
        {
            path: { attributeId: AttributeId(5), clusterId: ClusterId(40), endpointId: EndpointNumber(0) }, status: { status: 0 }
        }
    ]
};

const MASS_WRITE_REQUEST: WriteRequest = {
    interactionModelRevision: 1,
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
        }
    ],
    moreChunkedMessages: false,
};

const MASS_WRITE_RESPONSE: WriteResponse = {
    interactionModelRevision: 1,
    writeResponses: [
        {
            path: { attributeId: AttributeId(5), clusterId: ClusterId(40), endpointId: EndpointNumber(0) }, status: { status: 0 }
        },
        {
            path: { attributeId: AttributeId(6), clusterId: ClusterId(40), endpointId: EndpointNumber(0) }, status: { status: 0 }
        },
        {
            path: { attributeId: AttributeId(16), clusterId: ClusterId(40), endpointId: EndpointNumber(0) }, status: { status: 0 }
        }
    ]
};

const TlvAclTestSchema = TlvObject({
    privilege: TlvField(1, TlvUInt8),
    authMode: TlvField(2, TlvUInt8),
    subjects: TlvField(3, TlvNullable(TlvUInt8)),
    targets: TlvField(4, TlvNullable(TlvUInt8)),
    fabricIndex: TlvOptionalField(254, TlvFabricIndex),
});

const CHUNKED_ARRAY_WRITE_REQUEST: WriteRequest = {
    interactionModelRevision: 1,
    suppressResponse: false,
    timedRequest: false,
    writeRequests: [
        {
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x1f), attributeId: AttributeId(0) },
            data: TlvArray(TlvAclTestSchema).encodeTlv([]),
            dataVersion: 0,
        },
        {
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x1f), attributeId: AttributeId(0), listIndex: null },
            data: TlvAclTestSchema.encodeTlv({
                privilege: 1,
                authMode: 1,
                subjects: null,
                targets: null,
            }),
            dataVersion: 0,
        },
        {
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x1f), attributeId: AttributeId(0), listIndex: null },
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
            path: { endpointId: EndpointNumber(0), clusterId: ClusterId(0x1f), attributeId: AttributeId(0), listIndex: null },
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
    interactionModelRevision: 1,
    writeResponses: [
        {
            path: { attributeId: AttributeId(0), clusterId: ClusterId(31), endpointId: EndpointNumber(0) }, status: { status: 0 }
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
                endpointId: EndpointNumber(0),
                clusterId: ClusterId(6),
                commandId: CommandId(1),
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
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(1) },
        }
    ]
};

const INVOKE_COMMAND_REQUEST_MULTI: InvokeRequest = {
    interactionModelRevision: 1,
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
        }
    ]
};

const INVOKE_COMMAND_REQUEST_INVALID: InvokeRequest = {
    interactionModelRevision: 1,
    suppressResponse: false,
    timedRequest: false,
    invokeRequests: [
        {
            commandPath: { endpointId: EndpointNumber(0), clusterId: ClusterId(6), commandId: CommandId(10) },
        }
    ]
};

const INVOKE_COMMAND_RESPONSE: InvokeResponse = {
    interactionModelRevision: 1,
    suppressResponse: false,
    invokeResponses: [
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(1), endpointId: EndpointNumber(0) }, status: { status: 0 }
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
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(10), endpointId: EndpointNumber(0) }, status: { status: 0x81 }
            }
        }
    ]
};

const INVOKE_COMMAND_RESPONSE_MULTI: InvokeResponse = {
    interactionModelRevision: 1,
    suppressResponse: false,
    invokeResponses: [
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(100), endpointId: EndpointNumber(0) }, status: { status: 129 }
            }
        },
        {
            status: {
                commandPath: { clusterId: ClusterId(90), commandId: CommandId(1), endpointId: EndpointNumber(0) }, status: { status: 195 }
            }
        },
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(1), endpointId: EndpointNumber(99) }, status: { status: 127 }
            }
        },
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(1), endpointId: EndpointNumber(0) }, status: { status: 0 }
            }
        },
        {
            status: {
                commandPath: { clusterId: ClusterId(6), commandId: CommandId(0), endpointId: EndpointNumber(0) }, status: { status: 0 }
            }
        },
    ]
};

describe("InteractionProtocol", () => {

    describe("handleReadRequest", () => {
        it("replies with attribute values", async () => {
            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const storageContext = storageManager.createContext("test");
            const endpoint = new Endpoint([DummyTestDevice], { endpointId: EndpointNumber(0) });
            endpoint.addClusterServer(ClusterServer(BasicInformationCluster, {
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
            }, {}, {
                startUp: true
            }));
            const interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = interactionProtocol.handleReadRequest(({ channel: { name: "test" } }) as MessageExchange<any>, READ_REQUEST);

            assert.deepEqual(result, READ_RESPONSE);
        });
    });

    describe("handleWriteRequest", () => {
        it("write values and return errors on invalid values", async () => {
            const basicCluster = ClusterServer(BasicInformationCluster, {
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
            }, {}, {
                startUp: true
            });

            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const storageContext = storageManager.createContext("test");
            const endpoint = new Endpoint([DummyTestDevice], { endpointId: EndpointNumber(0) });
            endpoint.addClusterServer(basicCluster);
            const interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = interactionProtocol.handleWriteRequest(({ channel: { name: "test" } }) as MessageExchange<any>, WRITE_REQUEST);

            assert.deepEqual(result, WRITE_RESPONSE);
            assert.equal(basicCluster.attributes.nodeLabel.getLocal(), "test");
        });

        it("write chunked array values with Fabric Index handling", async () => {
            const accessControlCluster = ClusterServer(AccessControlCluster, {
                acl: [],
                extension: [],
                subjectsPerAccessControlEntry: 4,
                targetsPerAccessControlEntry: 4,
                accessControlEntriesPerFabric: 4
            }, {}, {
                accessControlEntryChanged: true,
                accessControlExtensionChanged: true,
            });

            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const storageContext = storageManager.createContext("test");
            const endpoint = new Endpoint([DummyTestDevice], { endpointId: EndpointNumber(0) });
            endpoint.addClusterServer(accessControlCluster);
            const interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

            const testFabric = new Fabric(FabricIndex(1), FabricId(1), NodeId(BigInt(1)), NodeId(1), ByteArray.fromHex("00"), ByteArray.fromHex("00"), KEY, VendorId(1), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), "");
            const testSession = await SecureSession.create({ getFabrics: () => [] } as any, 1, testFabric, NodeId(1), 1, ByteArray.fromHex("00"), ByteArray.fromHex("00"), false, false, () => {/* nothing */ }, 1000, 1000);
            const result = interactionProtocol.handleWriteRequest(({ channel: { name: "test" }, session: testSession }) as unknown as MessageExchange<any>, CHUNKED_ARRAY_WRITE_REQUEST);

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
                }
            ]);
        });

        it("mass write values and only set the one allowed", async () => {
            const basicCluster = ClusterServer(BasicInformationCluster, {
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
            }, {}, {
                startUp: true
            });

            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const storageContext = storageManager.createContext("test");
            const endpoint = new Endpoint([DummyTestDevice], { endpointId: EndpointNumber(0) });
            endpoint.addClusterServer(basicCluster);
            const interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = interactionProtocol.handleWriteRequest(({ channel: { name: "test" } }) as MessageExchange<any>, MASS_WRITE_REQUEST);

            assert.deepEqual(result, MASS_WRITE_RESPONSE);
            assert.equal(basicCluster.attributes.vendorName.getLocal(), "vendor");
            assert.equal(basicCluster.attributes.productName.getLocal(), "product");
            assert.equal(basicCluster.attributes.location.getLocal(), "US");
            assert.equal(basicCluster.attributes.nodeLabel.getLocal(), "test");
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
            const endpoint = new Endpoint([DummyTestDevice], { endpointId: EndpointNumber(0) });
            endpoint.addClusterServer(onOffCluster);
            const interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = await interactionProtocol.handleInvokeRequest(({ channel: { name: "test" } }) as MessageExchange<any>, INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS, {} as Message);

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
            const endpoint = new Endpoint([DummyTestDevice], { endpointId: EndpointNumber(0) });
            endpoint.addClusterServer(onOffCluster);
            const interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = await interactionProtocol.handleInvokeRequest(({ channel: { name: "test" } }) as MessageExchange<any>, INVOKE_COMMAND_REQUEST_WITH_NO_ARGS, {} as Message);

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
            const endpoint = new Endpoint([DummyTestDevice], { endpointId: EndpointNumber(0) });
            endpoint.addClusterServer(onOffCluster);
            const interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = await interactionProtocol.handleInvokeRequest(({ channel: { name: "test" } }) as MessageExchange<any>, INVOKE_COMMAND_REQUEST_INVALID, {} as Message);

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE_INVALID);
            assert.equal(onOffState, false);
        });

        it("multi invoke commands", async () => {
            let onOffState = false;
            let triggeredOn = false;
            let triggeredOff = false;
            const onOffCluster = ClusterServer(OnOffCluster, {
                onOff: onOffState,
            }, {
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
                }
            });

            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const storageContext = storageManager.createContext("test");
            const endpoint = new Endpoint([DummyTestDevice], { endpointId: EndpointNumber(0) });
            endpoint.addClusterServer(onOffCluster);
            const interactionProtocol = new InteractionServer(storageContext);
            interactionProtocol.setRootEndpoint(endpoint);

            const result = await interactionProtocol.handleInvokeRequest(({ channel: { name: "test" } }) as MessageExchange<any>, INVOKE_COMMAND_REQUEST_MULTI, {} as Message);

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE_MULTI);
            assert.equal(triggeredOn, true);
            assert.equal(triggeredOff, true);
            assert.equal(onOffState, false);
        });
    });
});

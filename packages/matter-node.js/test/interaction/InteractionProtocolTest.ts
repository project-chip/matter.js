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
import { DEVICE } from "@project-chip/matter.js/common";
import { MatterDevice } from "@project-chip/matter.js";
import { VendorId } from "@project-chip/matter.js/datatype";
import { TlvString, TlvUInt8, TlvNoArguments, TlvArray, TlvField, TlvObject, TlvNullable } from "@project-chip/matter.js/tlv";
import { BasicInformationCluster, OnOffCluster, AccessControlCluster } from "@project-chip/matter.js/cluster";
import { Message } from "@project-chip/matter.js/codec";

const READ_REQUEST: ReadRequest = {
    interactionModelRevision: 1,
    isFabricFiltered: true,
    attributeRequests: [
        { endpointId: 0, clusterId: 0x28, attributeId: 2 },
        { endpointId: 0, clusterId: 0x28, attributeId: 4 },
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
            path: { attributeId: 100, clusterId: 40, endpointId: 0 }, status: { status: 136 }
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

describe("InteractionProtocol", () => {

    describe("handleReadRequest", () => {
        it("replies with attribute values", async () => {
            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const interactionProtocol = new InteractionServer(storageManager)
                .addEndpoint(0, DEVICE.ROOT, [
                    new ClusterServer(BasicInformationCluster, {}, {
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
                    }, {}),
                ]);

            const result = interactionProtocol.handleReadRequest(({ channel: { getName: () => "test" } }) as MessageExchange<MatterDevice>, READ_REQUEST);

            assert.deepEqual(result, READ_RESPONSE);
        });
    });

    describe("handleWriteRequest", () => {
        it("write values and return errors on invalid values", async () => {
            const basicCluster = new ClusterServer(BasicInformationCluster, {}, {
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
            }, {});

            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const interactionProtocol = new InteractionServer(storageManager)
                .addEndpoint(0, DEVICE.ROOT, [basicCluster]);

            const result = interactionProtocol.handleWriteRequest(({ channel: { getName: () => "test" } }) as MessageExchange<MatterDevice>, WRITE_REQUEST);

            assert.deepEqual(result, WRITE_RESPONSE);
            assert.equal(basicCluster.attributes.nodeLabel.get(), "test");
        });

        it("write chunked array values and return errors on invalid values", async () => {
            const accessControlCluster = new ClusterServer(AccessControlCluster, {}, {
                acl: [],
                extension: [],
                subjectsPerAccessControlEntry: 4,
                targetsPerAccessControlEntry: 4,
                accessControlEntriesPerFabric: 3
            }, {});

            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const interactionProtocol = new InteractionServer(storageManager)
                .addEndpoint(0, DEVICE.ROOT, [accessControlCluster]);

            const result = interactionProtocol.handleWriteRequest(({ channel: { getName: () => "test" } }) as MessageExchange<MatterDevice>, CHUNKED_ARRAY_WRITE_REQUEST);

            assert.deepEqual(result, CHUNKED_ARRAY_WRITE_RESPONSE);
            assert.deepEqual(accessControlCluster.attributes.acl.get(), [
                {
                    privilege: 1,
                    authMode: 2,
                    subjects: null,
                    targets: null,
                }
            ]);
        });

        it("mass write values and only set the one allowed", async () => {
            const basicCluster = new ClusterServer(BasicInformationCluster, {}, {
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
            }, {});

            const storageManager = new StorageManager(new StorageBackendMemory());
            await storageManager.initialize();
            const interactionProtocol = new InteractionServer(storageManager)
                .addEndpoint(0, DEVICE.ROOT, [basicCluster]);

            const result = interactionProtocol.handleWriteRequest(({ channel: { getName: () => "test" } }) as MessageExchange<MatterDevice>, MASS_WRITE_REQUEST);

            assert.deepEqual(result, MASS_WRITE_RESPONSE);
            assert.equal(basicCluster.attributes.vendorName.get(), "vendor");
            assert.equal(basicCluster.attributes.productName.get(), "product");
            assert.equal(basicCluster.attributes.location.get(), "US");
            assert.equal(basicCluster.attributes.nodeLabel.get(), "test");
        });
    });

    describe("handleInvokeRequest", () => {
        it("invoke method with empty args", async () => {
            let onOffState = false;
            const onOffCluster = new ClusterServer(OnOffCluster, {
                lightingLevelControl: false
            }, {
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
            const interactionProtocol = new InteractionServer(storageManager)
                .addEndpoint(0, DEVICE.ROOT, [onOffCluster]);

            const result = await interactionProtocol.handleInvokeRequest(({ channel: { getName: () => "test" } }) as MessageExchange<MatterDevice>, INVOKE_COMMAND_REQUEST_WITH_EMPTY_ARGS, {} as Message);

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE);
            assert.equal(onOffState, true);
        });

        it("invoke method with no args", async () => {

            let onOffState = false;
            const onOffCluster = new ClusterServer(OnOffCluster, {
                lightingLevelControl: false
            }, {
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
            const interactionProtocol = new InteractionServer(storageManager)
                .addEndpoint(0, DEVICE.ROOT, [onOffCluster]);

            const result = await interactionProtocol.handleInvokeRequest(({ channel: { getName: () => "test" } }) as MessageExchange<MatterDevice>, INVOKE_COMMAND_REQUEST_WITH_NO_ARGS, {} as Message);

            assert.deepEqual(result, INVOKE_COMMAND_RESPONSE);
            assert.equal(onOffState, true);
        });
    });
});

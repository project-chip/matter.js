/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { BasicInformationCluster } from "../../src/cluster/definitions/BasicInformationCluster.js";
import {
    AttributeServer,
    FabricScopedAttributeServer,
    FixedAttributeServer,
} from "../../src/cluster/server/AttributeServer.js";
import { PrivateKey } from "../../src/crypto/Key.js";
import { AttributeId } from "../../src/datatype/AttributeId.js";
import { FabricId } from "../../src/datatype/FabricId.js";
import { FabricIndex } from "../../src/datatype/FabricIndex.js";
import { NodeId } from "../../src/datatype/NodeId.js";
import { VendorId } from "../../src/datatype/VendorId.js";
import { Fabric } from "../../src/fabric/Fabric.js";
import { MatterDevice } from "../../src/MatterDevice.js";
import { SecureSession } from "../../src/session/SecureSession.js";
import { TlvUInt8 } from "../../src/tlv/TlvNumber.js";
import { ByteArray } from "../../src/util/ByteArray.js";

const ZERO = new ByteArray(1);
const PRIVATE_KEY = new ByteArray(32);
PRIVATE_KEY[31] = 1; // EC doesn't like all-zero private key
const KEY = PrivateKey(PRIVATE_KEY);

describe("AttributeServerTest", () => {
    describe("FixedAttributeServer", () => {
        it("should return the value set in the constructor", () => {
            const server = new FixedAttributeServer(AttributeId(1), "test", TlvUInt8, false, false, 3, () => 1);
            assert.strictEqual(server.getLocal(), 3);
        });

        it("should return the value from getter", () => {
            const server = new FixedAttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => 1,
                () => 4,
            );
            assert.strictEqual(server.getLocal(), 4);
        });

        it("should successfully initialize with a value", () => {
            const server = new FixedAttributeServer(AttributeId(1), "test", TlvUInt8, false, false, 3, () => 1);
            server.init(5);
            assert.strictEqual(server.getLocal(), 5);
        });
    });

    describe("AttributeServer", () => {
        it("should return the value set in the constructor", () => {
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                true,
                false,
                3,
                () => 1,
                () => 2,
            );
            assert.strictEqual(server.getLocal(), 3);
        });

        it("should set the value locally and trigger listeners on change", () => {
            let valueTriggered: number | undefined = undefined;
            let versionTriggered: number | undefined = undefined;
            let valueTriggered2: number | undefined = undefined;
            let oldValueTriggered2: number | undefined = undefined;
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => 1,
                () => 2,
            );
            server.addValueChangeListener((value, version) => {
                valueTriggered = value;
                versionTriggered = version;
            });
            server.addValueSetListener((newValue, oldValue) => {
                valueTriggered2 = newValue;
                oldValueTriggered2 = oldValue;
            });

            assert.strictEqual(server.getLocal(), 3);
            server.setLocal(4);
            assert.strictEqual(server.getLocal(), 4);
            assert.strictEqual(valueTriggered, 4);
            assert.strictEqual(versionTriggered, 2);
            assert.strictEqual(valueTriggered2, 4);
            assert.strictEqual(oldValueTriggered2, 3);
        });

        it("should set the value locally and trigger listeners on non change", () => {
            let valueTriggered2: number | undefined = undefined;
            let oldValueTriggered2: number | undefined = undefined;
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => 1,
                () => 2,
            );
            server.addValueChangeListener(() => {
                throw new Error("Should not be triggered.");
            });
            server.addValueSetListener((newValue, oldValue) => {
                valueTriggered2 = newValue;
                oldValueTriggered2 = oldValue;
            });

            assert.strictEqual(server.getLocal(), 3);
            server.setLocal(3);
            assert.strictEqual(server.getLocal(), 3);
            assert.strictEqual(valueTriggered2, 3);
            assert.strictEqual(oldValueTriggered2, 3);
        });

        it("should throw an error if the value is set non locally and not writable", () => {
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => 1,
                () => 2,
            );
            assert.strictEqual(server.getLocal(), 3);
            assert.throws(() => server.set(4, {} as SecureSession<MatterDevice>), {
                message: '(136) Attribute "test" is not writable.',
            });
        });

        it("should return the value from getter", () => {
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => 1,
                () => 2,
                () => 4,
            );
            assert.strictEqual(server.getLocal(), 4);
        });

        it("should return the value from getter also with setter but increased version on change", () => {
            let valueSet: number | undefined = undefined;
            let version = 0;
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => version,
                () => version++,
                () => 4,
                value => {
                    valueSet = value;
                    return true;
                },
            );
            assert.deepEqual(server.getWithVersion({} as SecureSession<MatterDevice>, false), { value: 4, version: 0 });
            server.setLocal(5);
            assert.deepEqual(server.getWithVersion({} as SecureSession<MatterDevice>, false), { value: 4, version: 1 });
            assert.strictEqual(valueSet, 5);
            assert.strictEqual(version, 1);
        });

        it("should return the value from getter also with setter but not increased version when no change", () => {
            let valueSet: number | undefined = undefined;
            let version = 0;
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => version,
                () => version++,
                () => 4,
                value => {
                    valueSet = value;
                    return false;
                },
            );
            assert.deepEqual(server.getWithVersion({} as SecureSession<MatterDevice>, false), { value: 4, version: 0 });
            server.setLocal(5);
            assert.deepEqual(server.getWithVersion({} as SecureSession<MatterDevice>, false), { value: 4, version: 0 });
            assert.strictEqual(valueSet, 5);
            assert.strictEqual(version, 0);
        });

        it("should return the value from getter and increased version after update", () => {
            let valueSet: number | undefined = undefined;
            let version = 0;
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => version,
                () => version++,
                () => 4,
                value => {
                    valueSet = value;
                    return false;
                },
            );
            assert.deepEqual(server.getWithVersion({} as SecureSession<MatterDevice>, false), { value: 4, version: 0 });
            server.updated({} as SecureSession<MatterDevice>);
            assert.deepEqual(server.getWithVersion({} as SecureSession<MatterDevice>, false), { value: 4, version: 1 });
            assert.strictEqual(valueSet, undefined);
            assert.strictEqual(version, 1);
        });

        it("should trigger listeners with getter also with setter but increased version on change", () => {
            let valueSet: number | undefined = undefined;
            let valueTriggered: number | undefined = undefined;
            let versionTriggered: number | undefined = undefined;
            let valueTriggered2: number | undefined = undefined;
            let oldValueTriggered2: number | undefined = undefined;
            let version = 0;
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => version,
                () => version++,
                () => 4,
                value => {
                    valueSet = value;
                    return true;
                },
            );
            server.addValueChangeListener((value, version) => {
                valueTriggered = value;
                versionTriggered = version;
            });
            server.addValueSetListener((newValue, oldValue) => {
                valueTriggered2 = newValue;
                oldValueTriggered2 = oldValue;
            });
            assert.deepEqual(server.getWithVersion({} as SecureSession<MatterDevice>, false), { value: 4, version: 0 });
            server.setLocal(5);
            assert.deepEqual(server.getWithVersion({} as SecureSession<MatterDevice>, false), { value: 4, version: 1 });
            assert.strictEqual(valueSet, 5);
            assert.strictEqual(valueTriggered, 5);
            assert.strictEqual(versionTriggered, 0);
            assert.strictEqual(valueTriggered2, 5);
            assert.strictEqual(oldValueTriggered2, 4);
            assert.strictEqual(version, 1);
        });

        it("should return the value from getter also with setter but not increased version when no change", () => {
            let valueSet: number | undefined = undefined;
            let valueTriggered2: number | undefined = undefined;
            let oldValueTriggered2: number | undefined = undefined;
            let version = 0;
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => version,
                () => version++,
                () => 4,
                value => {
                    valueSet = value;
                    return false;
                },
            );
            server.addValueChangeListener(() => {
                throw new Error("Should not be triggered");
            });
            server.addValueSetListener((newValue, oldValue) => {
                valueTriggered2 = newValue;
                oldValueTriggered2 = oldValue;
            });
            assert.deepEqual(server.getWithVersion({} as SecureSession<MatterDevice>, false), { value: 4, version: 0 });
            server.setLocal(5);
            assert.deepEqual(server.getWithVersion({} as SecureSession<MatterDevice>, false), { value: 4, version: 0 });
            assert.strictEqual(valueSet, 5);
            assert.strictEqual(valueTriggered2, 5);
            assert.strictEqual(oldValueTriggered2, 4);
            assert.strictEqual(version, 0);
        });

        it("should return the value from getter and increased version after update", () => {
            let valueSet: number | undefined = undefined;
            let version = 0;
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => version,
                () => version++,
                () => 4,
                value => {
                    valueSet = value;
                    return false;
                },
            );
            assert.deepEqual(server.getWithVersion({} as SecureSession<MatterDevice>, false), { value: 4, version: 0 });
            server.updated({} as SecureSession<MatterDevice>);
            assert.deepEqual(server.getWithVersion({} as SecureSession<MatterDevice>, false), { value: 4, version: 1 });
            assert.strictEqual(valueSet, undefined);
            assert.strictEqual(version, 1);
        });

        it("should successfully initialize with a value", () => {
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => 1,
                () => 2,
            );
            server.init(5);
            assert.strictEqual(server.getLocal(), 5);
        });

        it("if initialized with undefined value the default value uis used", () => {
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => 1,
                () => 2,
            );
            server.init(undefined);
            assert.strictEqual(server.getLocal(), 3);
        });

        it("use getter value if initialized with undefined", () => {
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => 1,
                () => 2,
                () => 4,
            );
            server.init(1);
            assert.strictEqual(server.getLocal(), 4);
        });

        it("setter is not called when initialized", () => {
            let setterCalled = false;
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => 1,
                () => 2,
                undefined,
                () => {
                    setterCalled = true;
                    return true;
                },
            );
            server.init(1);
            assert.strictEqual(setterCalled, false);
        });

        it("should throw an error if default value is invalid", () => {
            assert.throws(
                () =>
                    new AttributeServer(
                        AttributeId(1),
                        "test",
                        TlvUInt8.bound({ min: 0, max: 2 }),
                        false,
                        false,
                        3,
                        () => 1,
                        () => 2,
                    ),
                { message: 'Validation error for attribute "test": Invalid value: 3 is above the maximum, 2.' },
            );
        });

        it("should throw an error if set value is invalid according to schema validator", () => {
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8.bound({ min: 0, max: 3 }),
                false,
                false,
                3,
                () => 1,
                () => 2,
                undefined,
                () => true,
            );
            assert.throws(() => server.setLocal(11), {
                message: 'Validation error for attribute "test": Invalid value: 11 is above the maximum, 3.',
            });
        });

        it("should throw an error if set value is invalid according to custom validator only on set", () => {
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                () => 1,
                () => 2,
                undefined,
                undefined,
                () => {
                    throw new Error("Validator error");
                },
            );
            assert.throws(() => server.setLocal(11), { message: "Validator error" });
        });
    });

    describe("FabricScopedAttributeServer", () => {
        it("should return the value set in the constructor if fabric context is empty", () => {
            const testFabric = new Fabric(
                FabricIndex(1),
                FabricId(BigInt(1)),
                NodeId(BigInt(1)),
                NodeId(BigInt(2)),
                ZERO,
                ZERO,
                KEY,
                VendorId(1),
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                "",
            );

            const server = new FabricScopedAttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                true,
                false,
                3,
                BasicInformationCluster,
                () => 1,
                () => 2,
            );
            assert.strictEqual(server.getLocalForFabric(testFabric), 3);
        });

        it("should return the value from fabric context if set", () => {
            const testFabric = new Fabric(
                FabricIndex(1),
                FabricId(BigInt(1)),
                NodeId(BigInt(1)),
                NodeId(BigInt(2)),
                ZERO,
                ZERO,
                KEY,
                VendorId(1),
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                "",
            );
            testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });

            const server = new FabricScopedAttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                true,
                false,
                3,
                BasicInformationCluster,
                () => 1,
                () => 2,
            );
            assert.strictEqual(server.getLocalForFabric(testFabric), 5);
        });

        it("should return the value from fabric scoped storage when changed", () => {
            const testFabric = new Fabric(
                FabricIndex(1),
                FabricId(BigInt(1)),
                NodeId(BigInt(1)),
                NodeId(BigInt(2)),
                ZERO,
                ZERO,
                KEY,
                VendorId(1),
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                "",
            );

            const server = new FabricScopedAttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                true,
                false,
                3,
                BasicInformationCluster,
                () => 1,
                () => 2,
            );
            testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });
            assert.strictEqual(server.getLocalForFabric(testFabric), 5);
        });

        it("should update the value from fabric scoped storage when set and trigger listeners", () => {
            let valueTriggered: number | undefined = undefined;
            let versionTriggered: number | undefined = undefined;
            let valueTriggered2: number | undefined = undefined;
            let oldValueTriggered2: number | undefined = undefined;
            let counter = 0;
            const testFabric = new Fabric(
                FabricIndex(1),
                FabricId(BigInt(1)),
                NodeId(BigInt(1)),
                NodeId(BigInt(2)),
                ZERO,
                ZERO,
                KEY,
                VendorId(1),
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                "",
            );
            testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });

            const server = new FabricScopedAttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                true,
                false,
                3,
                BasicInformationCluster,
                () => counter,
                () => counter++,
            );
            server.addValueChangeListener((value, version) => {
                valueTriggered = value;
                versionTriggered = version;
            });
            server.addValueSetListener((newValue, oldValue) => {
                valueTriggered2 = newValue;
                oldValueTriggered2 = oldValue;
            });

            server.setLocalForFabric(7, testFabric);
            assert.strictEqual(server.getLocalForFabric(testFabric), 7);
            assert.deepEqual(testFabric.getScopedClusterDataValue(BasicInformationCluster, "test"), { value: 7 });
            assert.strictEqual(valueTriggered, 7);
            assert.strictEqual(versionTriggered, 0);
            assert.strictEqual(valueTriggered2, 7);
            assert.strictEqual(oldValueTriggered2, 5);
            assert.strictEqual(counter, 1);
        });

        it("should handle the value from fabric scoped storage when set and trigger ony external listeners", () => {
            let valueTriggered2: number | undefined = undefined;
            let oldValueTriggered2: number | undefined = undefined;
            const testFabric = new Fabric(
                FabricIndex(1),
                FabricId(BigInt(1)),
                NodeId(BigInt(1)),
                NodeId(BigInt(2)),
                ZERO,
                ZERO,
                KEY,
                VendorId(1),
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                "",
            );
            testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });

            const server = new FabricScopedAttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                true,
                false,
                3,
                BasicInformationCluster,
                () => 1,
                () => 2,
            );
            server.addValueChangeListener(() => {
                throw new Error("Should not be triggered");
            });
            server.addValueSetListener((newValue, oldValue) => {
                valueTriggered2 = newValue;
                oldValueTriggered2 = oldValue;
            });

            server.setLocalForFabric(5, testFabric);
            assert.strictEqual(server.getLocalForFabric(testFabric), 5);
            assert.deepEqual(testFabric.getScopedClusterDataValue(BasicInformationCluster, "test"), { value: 5 });
            assert.strictEqual(valueTriggered2, 5);
            assert.strictEqual(oldValueTriggered2, 5);
        });

        it("should throw an error if only getter is implemented but writable", () => {
            assert.throws(
                () =>
                    new FabricScopedAttributeServer(
                        AttributeId(1),
                        "test",
                        TlvUInt8,
                        true,
                        false,
                        3,
                        BasicInformationCluster,
                        () => 1,
                        () => 2,
                        () => 7,
                    ),
                { message: 'Getter and setter must be implemented together writeable fabric scoped attribute "test".' },
            );
        });

        it("should throw an error when trying to get getter method value locally", () => {
            const testFabric = new Fabric(
                FabricIndex(1),
                FabricId(BigInt(1)),
                NodeId(BigInt(1)),
                NodeId(BigInt(2)),
                ZERO,
                ZERO,
                KEY,
                VendorId(1),
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                "",
            );
            testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });

            const server = new FabricScopedAttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                BasicInformationCluster,
                () => 1,
                () => 2,
                () => 7,
            );
            assert.throws(() => server.getLocalForFabric(testFabric), {
                message: 'Fabric scoped attribute "test" can not be read locally when a custom getter is defined.',
            });
        });

        it("should return value from getter when used non-locally", () => {
            const testFabric = new Fabric(
                FabricIndex(1),
                FabricId(BigInt(1)),
                NodeId(BigInt(1)),
                NodeId(BigInt(2)),
                ZERO,
                ZERO,
                KEY,
                VendorId(1),
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                "",
            );
            const testSession = { getAssociatedFabric: () => testFabric } as SecureSession<MatterDevice>;
            testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });

            const server = new FabricScopedAttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                3,
                BasicInformationCluster,
                () => 1,
                () => 2,
                () => 7,
            );
            assert.strictEqual(server.get(testSession, true), 7);
        });

        it("should use getter and setter and trigger listeners", () => {
            let valueTriggered: number | undefined = undefined;
            let versionTriggered: number | undefined = undefined;
            let valueTriggered2: number | undefined = undefined;
            let oldValueTriggered2: number | undefined = undefined;
            const testFabric = new Fabric(
                FabricIndex(1),
                FabricId(BigInt(1)),
                NodeId(BigInt(1)),
                NodeId(BigInt(2)),
                ZERO,
                ZERO,
                KEY,
                VendorId(1),
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                ZERO,
                "",
            );
            const testSession = { getAssociatedFabric: () => testFabric } as SecureSession<MatterDevice>;

            let counter = 3;
            const server = new FabricScopedAttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                true,
                false,
                3,
                BasicInformationCluster,
                () => counter,
                () => counter++,
                () => 7,
                () => true,
            );
            server.init(undefined);
            server.addValueChangeListener((value, version) => {
                valueTriggered = value;
                versionTriggered = version;
            });
            server.addValueSetListener((newValue, oldValue) => {
                valueTriggered2 = newValue;
                oldValueTriggered2 = oldValue;
            });

            server.set(9, testSession);
            assert.strictEqual(server.get(testSession, false), 7);
            assert.strictEqual(valueTriggered, 9);
            assert.strictEqual(versionTriggered, 3);
            assert.strictEqual(valueTriggered2, 9);
            assert.strictEqual(oldValueTriggered2, 7);
            assert.strictEqual(counter, 4);
        });
    });
});

/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicInformationCluster } from "../../src/cluster/definitions/BasicInformationCluster.js";
import {
    AttributeServer,
    FabricScopedAttributeServer,
    FixedAttributeServer,
} from "../../src/cluster/server/AttributeServer.js";
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
import { DUMMY_KEY } from "../crypto/test-util.js";

const ZERO = new ByteArray(1);

describe("AttributeServerTest", () => {
    describe("FixedAttributeServer", () => {
        it("should return the value set in the constructor", () => {
            const server = new FixedAttributeServer(AttributeId(1), "test", TlvUInt8, false, false, false, 3, () => 1);
            expect(server.getLocal()).equal(3);
        });

        it("should return the value from getter", () => {
            const server = new FixedAttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                false,
                3,
                () => 1,
                () => 4,
            );
            expect(server.getLocal()).equal(4);
        });

        it("should successfully initialize with a value", () => {
            const server = new FixedAttributeServer(AttributeId(1), "test", TlvUInt8, false, false, false, 3, () => 1);
            server.init(5);
            expect(server.getLocal()).equal(5);
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
                false,
                3,
                () => 1,
                () => 2,
            );
            expect(server.getLocal()).equal(3);
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

            expect(server.getLocal()).equal(3);
            server.setLocal(4);
            expect(server.getLocal()).equal(4);
            expect(valueTriggered).equal(4);
            expect(versionTriggered).equal(2);
            expect(valueTriggered2).equal(4);
            expect(oldValueTriggered2).equal(3);
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

            expect(server.getLocal()).equal(3);
            server.setLocal(3);
            expect(server.getLocal()).equal(3);
            expect(valueTriggered2).equal(3);
            expect(oldValueTriggered2).equal(3);
        });

        it("should throw an error if the value is set non locally and not writable", () => {
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                false,
                3,
                () => 1,
                () => 2,
            );
            expect(server.getLocal()).equal(3);
            expect(() => server.set(4, {} as SecureSession<MatterDevice>)).throws(
                '(136) Attribute "test" is not writable.',
            );
        });

        it("should return the value from getter", () => {
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                false,
                3,
                () => 1,
                () => 2,
                () => 4,
            );
            expect(server.getLocal()).equal(4);
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
            expect(server.getWithVersion({} as SecureSession<MatterDevice>, false)).deep.equal({
                value: 4,
                version: 0,
            });
            server.setLocal(5);
            expect(server.getWithVersion({} as SecureSession<MatterDevice>, false)).deep.equal({
                value: 4,
                version: 1,
            });
            expect(valueSet).equal(5);
            expect(version).equal(1);
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
            expect(server.getWithVersion({} as SecureSession<MatterDevice>, false)).deep.equal({
                value: 4,
                version: 0,
            });
            server.setLocal(5);
            expect(server.getWithVersion({} as SecureSession<MatterDevice>, false)).deep.equal({
                value: 4,
                version: 0,
            });
            expect(valueSet).equal(5);
            expect(version).equal(0);
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
            expect(server.getWithVersion({} as SecureSession<MatterDevice>, false)).deep.equal({
                value: 4,
                version: 0,
            });
            server.updated({} as SecureSession<MatterDevice>);
            expect(server.getWithVersion({} as SecureSession<MatterDevice>, false)).deep.equal({
                value: 4,
                version: 1,
            });
            expect(valueSet).undefined;
            expect(version).equal(1);
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
            expect(server.getWithVersion({} as SecureSession<MatterDevice>, false)).deep.equal({
                value: 4,
                version: 0,
            });
            server.setLocal(5);
            expect(server.getWithVersion({} as SecureSession<MatterDevice>, false)).deep.equal({
                value: 4,
                version: 1,
            });
            expect(valueSet).equal(5);
            expect(valueTriggered).equal(5);
            expect(versionTriggered).equal(0);
            expect(valueTriggered2).equal(5);
            expect(oldValueTriggered2).equal(4);
            expect(version).equal(1);
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
            expect(server.getWithVersion({} as SecureSession<MatterDevice>, false)).deep.equal({
                value: 4,
                version: 0,
            });
            server.setLocal(5);
            expect(server.getWithVersion({} as SecureSession<MatterDevice>, false)).deep.equal({
                value: 4,
                version: 0,
            });
            expect(valueSet).equal(5);
            expect(valueTriggered2).equal(5);
            expect(oldValueTriggered2).equal(4);
            expect(version).equal(0);
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
            expect(server.getWithVersion({} as SecureSession<MatterDevice>, false)).deep.equal({
                value: 4,
                version: 0,
            });
            server.updated({} as SecureSession<MatterDevice>);
            expect(server.getWithVersion({} as SecureSession<MatterDevice>, false)).deep.equal({
                value: 4,
                version: 1,
            });
            expect(valueSet).undefined;
            expect(version).equal(1);
        });

        it("should successfully initialize with a value", () => {
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                false,
                3,
                () => 1,
                () => 2,
            );
            server.init(5);
            expect(server.getLocal()).equal(5);
        });

        it("if initialized with undefined value the default value uis used", () => {
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                false,
                3,
                () => 1,
                () => 2,
            );
            server.init(undefined);
            expect(server.getLocal()).equal(3);
        });

        it("use getter value if initialized with undefined", () => {
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
                false,
                false,
                3,
                () => 1,
                () => 2,
                () => 4,
            );
            server.init(1);
            expect(server.getLocal()).equal(4);
        });

        it("setter is not called when initialized", () => {
            let setterCalled = false;
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
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
            expect(setterCalled).equal(false);
        });

        it("should throw an error if default value is invalid", () => {
            expect(
                () =>
                    new AttributeServer(
                        AttributeId(1),
                        "test",
                        TlvUInt8.bound({ min: 0, max: 2 }),
                        false,
                        false,
                        false,
                        3,
                        () => 1,
                        () => 2,
                    ),
            ).throw('Validation error for attribute "test": Invalid value: 3 is above the maximum, 2.');
        });

        it("should throw an error if set value is invalid according to schema validator", () => {
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8.bound({ min: 0, max: 3 }),
                false,
                false,
                false,
                3,
                () => 1,
                () => 2,
                undefined,
                () => true,
            );
            expect(() => server.setLocal(11)).throw(
                'Validation error for attribute "test": Invalid value: 11 is above the maximum, 3.',
            );
        });

        it("should throw an error if set value is invalid according to custom validator only on set", () => {
            const server = new AttributeServer(
                AttributeId(1),
                "test",
                TlvUInt8,
                false,
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
            expect(() => server.setLocal(11)).throw("Validator error");
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
                DUMMY_KEY,
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
                false,
                3,
                BasicInformationCluster,
                () => 1,
                () => 2,
            );
            expect(server.getLocalForFabric(testFabric)).equal(3);
        });

        it("should return the value from fabric context if set", () => {
            const testFabric = new Fabric(
                FabricIndex(1),
                FabricId(BigInt(1)),
                NodeId(BigInt(1)),
                NodeId(BigInt(2)),
                ZERO,
                ZERO,
                DUMMY_KEY,
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
                false,
                3,
                BasicInformationCluster,
                () => 1,
                () => 2,
            );
            expect(server.getLocalForFabric(testFabric)).equal(5);
        });

        it("should return the value from fabric scoped storage when changed", () => {
            const testFabric = new Fabric(
                FabricIndex(1),
                FabricId(BigInt(1)),
                NodeId(BigInt(1)),
                NodeId(BigInt(2)),
                ZERO,
                ZERO,
                DUMMY_KEY,
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
                false,
                3,
                BasicInformationCluster,
                () => 1,
                () => 2,
            );
            testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });
            expect(server.getLocalForFabric(testFabric)).equal(5);
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
                DUMMY_KEY,
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
            expect(server.getLocalForFabric(testFabric)).equal(7);
            expect(testFabric.getScopedClusterDataValue(BasicInformationCluster, "test")).deep.equal({ value: 7 });
            expect(valueTriggered).equal(7);
            expect(versionTriggered).equal(0);
            expect(valueTriggered2).equal(7);
            expect(oldValueTriggered2).equal(5);
            expect(counter).equal(1);
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
                DUMMY_KEY,
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
            expect(server.getLocalForFabric(testFabric)).equal(5);
            expect(testFabric.getScopedClusterDataValue(BasicInformationCluster, "test")).deep.equal({ value: 5 });
            expect(valueTriggered2).equal(5);
            expect(oldValueTriggered2).equal(5);
        });

        it("should throw an error if only getter is implemented but writable", () => {
            expect(
                () =>
                    new FabricScopedAttributeServer(
                        AttributeId(1),
                        "test",
                        TlvUInt8,
                        true,
                        false,
                        false,
                        3,
                        BasicInformationCluster,
                        () => 1,
                        () => 2,
                        () => 7,
                    ),
            ).throw('Getter and setter must be implemented together writeable fabric scoped attribute "test".');
        });

        it("should throw an error when trying to get getter method value locally", () => {
            const testFabric = new Fabric(
                FabricIndex(1),
                FabricId(BigInt(1)),
                NodeId(BigInt(1)),
                NodeId(BigInt(2)),
                ZERO,
                ZERO,
                DUMMY_KEY,
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
                false,
                3,
                BasicInformationCluster,
                () => 1,
                () => 2,
                () => 7,
            );
            expect(() => server.getLocalForFabric(testFabric)).throw(
                'Fabric scoped attribute "test" can not be read locally when a custom getter is defined.',
            );
        });

        it("should return value from getter when used non-locally", () => {
            const testFabric = new Fabric(
                FabricIndex(1),
                FabricId(BigInt(1)),
                NodeId(BigInt(1)),
                NodeId(BigInt(2)),
                ZERO,
                ZERO,
                DUMMY_KEY,
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
                false,
                3,
                BasicInformationCluster,
                () => 1,
                () => 2,
                () => 7,
            );
            expect(server.get(testSession, true)).equal(7);
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
                DUMMY_KEY,
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
            expect(server.get(testSession, false)).equal(7);
            expect(valueTriggered).equal(9);
            expect(versionTriggered).equal(3);
            expect(valueTriggered2).equal(9);
            expect(oldValueTriggered2).equal(7);
            expect(counter).equal(4);
        });
    });
});

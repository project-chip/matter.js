/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { AttributeServer, FixedAttributeServer, FabricScopedAttributeServer } from "../../src/cluster/server/AttributeServer.js";
import { TlvUInt8 } from "../../src/tlv/TlvNumber.js";
import { BasicInformationCluster } from "../../src/cluster/definitions/BasicInformationCluster.js";
import { Fabric } from "../../src/fabric/Fabric.js";
import { FabricIndex } from "../../src/datatype/FabricIndex.js";
import { FabricId } from "../../src/datatype/FabricId.js";
import { NodeId } from "../../src/datatype/NodeId.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { VendorId } from "../../src/datatype/VendorId.js";
import { MatterDevice } from "../../src/MatterDevice.js";
import { SecureSession } from "../../src/session/SecureSession.js";

describe("AttributeServerTest", () => {

    describe("FixedAttributeServer", () => {
        it("should return the value set in the constructor", () => {
            const server = new FixedAttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3);
            assert.strictEqual(server.getLocal(), 3);
        });

        it("should return the value from getter", () => {
            const server = new FixedAttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3, () => 4);
            assert.strictEqual(server.getLocal(), 4);
        });

        it("should successfully initialize with a value", () => {
            const server = new FixedAttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3);
            server.init(5);
            assert.strictEqual(server.getLocal(), 5);
        });

        it("should throw an error if initialized with a version", () => {
            const server = new FixedAttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3);
            assert.throws(() => server.init(2, 1), { message: "Version is not supported on fixed attributes." });
        });
    });

    describe("AttributeServer", () => {
        it("should return the value set in the constructor", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */ }, true, false, 3);
            assert.strictEqual(server.getLocal(), 3);
        });

        it("should set the value locally and trigger listeners on change", () => {
            let valueTriggered = undefined;
            let versionTriggered = undefined;
            let valueTriggered2 = undefined;
            let oldValueTriggered2 = undefined;
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3,);
            server.addMatterListener((value, version) => { valueTriggered = value; versionTriggered = version; });
            server.addListener((newValue, oldValue) => { valueTriggered2 = newValue; oldValueTriggered2 = oldValue; });

            assert.strictEqual(server.getLocal(), 3);
            server.setLocal(4);
            assert.strictEqual(server.getLocal(), 4);
            assert.strictEqual(valueTriggered, 4);
            assert.strictEqual(versionTriggered, 1);
            assert.strictEqual(valueTriggered2, 4);
            assert.strictEqual(oldValueTriggered2, 3);
        });

        it("should set the value locally and trigger listeners on non change", () => {
            let valueTriggered2 = undefined;
            let oldValueTriggered2 = undefined;
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3,);
            server.addMatterListener(() => { throw new Error("Should not be triggered."); });
            server.addListener((newValue, oldValue) => { valueTriggered2 = newValue; oldValueTriggered2 = oldValue; });

            assert.strictEqual(server.getLocal(), 3);
            server.setLocal(3);
            assert.strictEqual(server.getLocal(), 3);
            assert.strictEqual(valueTriggered2, 3);
            assert.strictEqual(oldValueTriggered2, 3);
        });

        it("should throw an error if the value is set non locally and not writable", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3,);
            assert.strictEqual(server.getLocal(), 3);
            assert.throws(() => server.set(4), { message: "(136) Attribute test is not writable." });
        });

        it("should return the value from getter", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3, () => 4);
            assert.strictEqual(server.getLocal(), 4);
        });

        it("should return the value from getter also with setter but increased version on change", () => {
            let valueSet = undefined;
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3, () => 4, (value) => { valueSet = value; return true; });
            assert.deepEqual(server.getWithVersion(), { value: 4, version: 0 });
            server.setLocal(5);
            assert.deepEqual(server.getWithVersion(), { value: 4, version: 1 });
            assert.strictEqual(valueSet, 5);
        });

        it("should return the value from getter also with setter but not increased version when no change", () => {
            let valueSet = undefined;
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3, () => 4, (value) => { valueSet = value; return false; });
            assert.deepEqual(server.getWithVersion(), { value: 4, version: 0 });
            server.setLocal(5);
            assert.deepEqual(server.getWithVersion(), { value: 4, version: 0 });
            assert.strictEqual(valueSet, 5);
        });

        it("should return the value from getter and increased version after update", () => {
            let valueSet = undefined;
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3, () => 4, (value) => { valueSet = value; return false; });
            assert.deepEqual(server.getWithVersion(), { value: 4, version: 0 });
            server.updated();
            assert.deepEqual(server.getWithVersion(), { value: 4, version: 1 });
            assert.strictEqual(valueSet, undefined);
        });

        it("should trigger listeners with getter also with setter but increased version on change", () => {
            let valueSet = undefined;
            let valueTriggered = undefined;
            let versionTriggered = undefined;
            let valueTriggered2 = undefined;
            let oldValueTriggered2 = undefined;
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3, () => 4, (value) => { valueSet = value; return true; });
            server.addMatterListener((value, version) => { valueTriggered = value; versionTriggered = version; });
            server.addListener((newValue, oldValue) => { valueTriggered2 = newValue; oldValueTriggered2 = oldValue; });
            assert.deepEqual(server.getWithVersion(), { value: 4, version: 0 });
            server.setLocal(5);
            assert.deepEqual(server.getWithVersion(), { value: 4, version: 1 });
            assert.strictEqual(valueSet, 5);
            assert.strictEqual(valueTriggered, 5);
            assert.strictEqual(versionTriggered, 1);
            assert.strictEqual(valueTriggered2, 5);
            assert.strictEqual(oldValueTriggered2, 4);
        });

        it("should return the value from getter also with setter but not increased version when no change", () => {
            let valueSet = undefined;
            let valueTriggered2 = undefined;
            let oldValueTriggered2 = undefined;
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3, () => 4, (value) => { valueSet = value; return false; });
            server.addMatterListener(() => { throw new Error("Should not be triggered"); });
            server.addListener((newValue, oldValue) => { valueTriggered2 = newValue; oldValueTriggered2 = oldValue; });
            assert.deepEqual(server.getWithVersion(), { value: 4, version: 0 });
            server.setLocal(5);
            assert.deepEqual(server.getWithVersion(), { value: 4, version: 0 });
            assert.strictEqual(valueSet, 5);
            assert.strictEqual(valueTriggered2, 5);
            assert.strictEqual(oldValueTriggered2, 4);
        });

        it("should return the value from getter and increased version after update", () => {
            let valueSet = undefined;
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3, () => 4, (value) => { valueSet = value; return false; });
            assert.deepEqual(server.getWithVersion(), { value: 4, version: 0 });
            server.updated();
            assert.deepEqual(server.getWithVersion(), { value: 4, version: 1 });
            assert.strictEqual(valueSet, undefined);
        });

        it("should successfully initialize with a value", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3);
            server.init(5, 1);
            assert.strictEqual(server.getLocal(), 5);
        });

        it("should throw an error if initialized with undefined value", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3);
            assert.throws(() => server.init(undefined, 1), { message: "Can not initialize attributes with undefined value." });
        });

        it("should throw an error if initialized with getter provided", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3, () => 4);
            assert.throws(() => server.init(1, 1), { message: "Can not initialize attributes with getter or setter methods and a value." });
        });

        it("should throw an error if initialized with setter provided", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3, undefined, () => true);
            assert.throws(() => server.init(1, 1), { message: "Can not initialize attributes with getter or setter methods and a value." });
        });

        it("should throw an error if default value is invalid", () => {
            assert.throws(() => new AttributeServer(1, "test", TlvUInt8, () => { throw new Error("Validator error") }, false, false, 3), { message: "Validator error" });
        });

        it("should throw an error if set value is invalid according to schema validator", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, (value) => { if (value > 10) throw new Error("Validator error") }, false, false, 3, undefined, () => true);
            assert.throws(() => server.setLocal(11), { message: "Validator error" });
        });

        it("should throw an error if setter and validator are both implemented", () => {
            assert.throws(() => new AttributeServer(1, "test", TlvUInt8, () => { /* */ }, false, false, 3, undefined, () => true, () => { throw new Error("Validator error") }), { message: "Validator and setter must not be implemented together." });
        });

        it("should throw an error if set value is invalid according to custom validator only on set", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => { /* */ }, false, false, 3, undefined, undefined, () => { throw new Error("Validator error") });
            assert.throws(() => server.setLocal(11), { message: "Validator error" });
        });

        it("should throw an error if update is used without getter", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => { /* */ }, false, false, 3, undefined, undefined, () => { throw new Error("Validator error") });
            assert.throws(() => server.updated(), { message: "Updated can only be used if the attribute has a getter or setter method." });
        });

    });

    describe("FabricScopedAttributeServer", () => {
        it("should return the value set in the constructor if fabric context is empty", () => {
            const testFabric = new Fabric(new FabricIndex(1), new FabricId(BigInt(1)), new NodeId(BigInt(1)), new NodeId(BigInt(2)), ByteArray.fromHex("00"), ByteArray.fromHex("00"), { privateKey: ByteArray.fromHex("00"), publicKey: ByteArray.fromHex("00") }, new VendorId(1), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), "");

            const server = new FabricScopedAttributeServer(1, "test", TlvUInt8, () => {/* */ }, true, false, 3, BasicInformationCluster);
            assert.strictEqual(server.getLocal(testFabric, true), 3);
        });

        it("should return the value from fabric context if set", () => {
            const testFabric = new Fabric(new FabricIndex(1), new FabricId(BigInt(1)), new NodeId(BigInt(1)), new NodeId(BigInt(2)), ByteArray.fromHex("00"), ByteArray.fromHex("00"), { privateKey: ByteArray.fromHex("00"), publicKey: ByteArray.fromHex("00") }, new VendorId(1), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), "");
            testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });

            const server = new FabricScopedAttributeServer(1, "test", TlvUInt8, () => {/* */ }, true, false, 3, BasicInformationCluster);
            assert.strictEqual(server.getLocal(testFabric, true), 5);
        });

        it("should return the value from fabric scoped storage when changed", () => {
            const testFabric = new Fabric(new FabricIndex(1), new FabricId(BigInt(1)), new NodeId(BigInt(1)), new NodeId(BigInt(2)), ByteArray.fromHex("00"), ByteArray.fromHex("00"), { privateKey: ByteArray.fromHex("00"), publicKey: ByteArray.fromHex("00") }, new VendorId(1), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), "");

            const server = new FabricScopedAttributeServer(1, "test", TlvUInt8, () => {/* */ }, true, false, 3, BasicInformationCluster);
            testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });
            assert.strictEqual(server.getLocal(testFabric, true), 5);
        });

        it("should update the value from fabric scoped storage when set and trigger listeners", () => {
            let valueTriggered = undefined;
            let versionTriggered = undefined;
            let valueTriggered2 = undefined;
            let oldValueTriggered2 = undefined;
            const testFabric = new Fabric(new FabricIndex(1), new FabricId(BigInt(1)), new NodeId(BigInt(1)), new NodeId(BigInt(2)), ByteArray.fromHex("00"), ByteArray.fromHex("00"), { privateKey: ByteArray.fromHex("00"), publicKey: ByteArray.fromHex("00") }, new VendorId(1), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), "");
            testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });

            const server = new FabricScopedAttributeServer(1, "test", TlvUInt8, () => {/* */ }, true, false, 3, BasicInformationCluster);
            server.addMatterListener((value, version) => { valueTriggered = value; versionTriggered = version; });
            server.addListener((newValue, oldValue) => { valueTriggered2 = newValue; oldValueTriggered2 = oldValue; });

            server.setLocal(7, testFabric)
            assert.strictEqual(server.getLocal(testFabric, true), 7);
            assert.deepEqual(testFabric.getScopedClusterDataValue(BasicInformationCluster, "test"), { value: 7 });
            assert.strictEqual(valueTriggered, 7);
            assert.strictEqual(versionTriggered, 1);
            assert.strictEqual(valueTriggered2, 7);
            assert.strictEqual(oldValueTriggered2, 5);
        });

        it("should handle the value from fabric scoped storage when set and trigger ony external listeners", () => {
            let valueTriggered2 = undefined;
            let oldValueTriggered2 = undefined;
            const testFabric = new Fabric(new FabricIndex(1), new FabricId(BigInt(1)), new NodeId(BigInt(1)), new NodeId(BigInt(2)), ByteArray.fromHex("00"), ByteArray.fromHex("00"), { privateKey: ByteArray.fromHex("00"), publicKey: ByteArray.fromHex("00") }, new VendorId(1), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), "");
            testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });

            const server = new FabricScopedAttributeServer(1, "test", TlvUInt8, () => {/* */ }, true, false, 3, BasicInformationCluster);
            server.addMatterListener(() => { throw new Error("Should not be triggered"); });
            server.addListener((newValue, oldValue) => { valueTriggered2 = newValue; oldValueTriggered2 = oldValue; });

            server.setLocal(5, testFabric)
            assert.strictEqual(server.getLocal(testFabric, true), 5);
            assert.deepEqual(testFabric.getScopedClusterDataValue(BasicInformationCluster, "test"), { value: 5 });
            assert.strictEqual(valueTriggered2, 5);
            assert.strictEqual(oldValueTriggered2, 5);
        });




        it("should throw an error if only getter is implemented but writable", () => {
            assert.throws(() => new FabricScopedAttributeServer(1, "test", TlvUInt8, () => 3, true, false, 3, BasicInformationCluster, () => 7), { message: "Getter and setter must be implemented together when attribute is writeable." });
        });

        it("should throw an error when trying to get getter method value locally", () => {
            const testFabric = new Fabric(new FabricIndex(1), new FabricId(BigInt(1)), new NodeId(BigInt(1)), new NodeId(BigInt(2)), ByteArray.fromHex("00"), ByteArray.fromHex("00"), { privateKey: ByteArray.fromHex("00"), publicKey: ByteArray.fromHex("00") }, new VendorId(1), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), "");
            testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });

            const server = new FabricScopedAttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3, BasicInformationCluster, () => 7);
            assert.throws(() => server.getLocal(testFabric, true), { message: "Getter method is not allowed to get fabric scoped attributes locally." });
        });

        it("should return value from getter when used non-locally", () => {
            const testFabric = new Fabric(new FabricIndex(1), new FabricId(BigInt(1)), new NodeId(BigInt(1)), new NodeId(BigInt(2)), ByteArray.fromHex("00"), ByteArray.fromHex("00"), { privateKey: ByteArray.fromHex("00"), publicKey: ByteArray.fromHex("00") }, new VendorId(1), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), "");
            const testSession = { getAccessingFabric: () => testFabric } as SecureSession<MatterDevice>;
            testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });

            const server = new FabricScopedAttributeServer(1, "test", TlvUInt8, () => {/* */ }, false, false, 3, BasicInformationCluster, () => 7);
            assert.strictEqual(server.get(testSession, true), 7);
        });

        it("should use getter amd setter and trigger listeners", () => {
            let valueTriggered = undefined;
            let versionTriggered = undefined;
            let valueTriggered2 = undefined;
            let oldValueTriggered2 = undefined;
            const testFabric = new Fabric(new FabricIndex(1), new FabricId(BigInt(1)), new NodeId(BigInt(1)), new NodeId(BigInt(2)), ByteArray.fromHex("00"), ByteArray.fromHex("00"), { privateKey: ByteArray.fromHex("00"), publicKey: ByteArray.fromHex("00") }, new VendorId(1), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), ByteArray.fromHex("00"), "");
            const testSession = { getAccessingFabric: () => testFabric } as SecureSession<MatterDevice>;

            const server = new FabricScopedAttributeServer(1, "test", TlvUInt8, () => {/* */ }, true, false, 3, BasicInformationCluster, () => 7, () => true);
            server.init(undefined, 2);
            server.addMatterListener((value, version) => { valueTriggered = value; versionTriggered = version; });
            server.addListener((newValue, oldValue) => { valueTriggered2 = newValue; oldValueTriggered2 = oldValue; });

            server.set(9, testSession);
            assert.strictEqual(server.get(testSession), 7);
            assert.strictEqual(valueTriggered, 9);
            assert.strictEqual(versionTriggered, 3);
            assert.strictEqual(valueTriggered2, 9);
            assert.strictEqual(oldValueTriggered2, 7);
        });
    });

});

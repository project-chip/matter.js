/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { AttributeServer, FixedAttributeServer, FabricScopedAttributeServer} from "../../src/cluster/server/AttributeServer.js";
import {TlvUInt8} from "../../src/tlv/TlvNumber.js";
import { BasicInformationCluster } from "../../src/cluster/definitions/BasicInformationCluster.js";
import { Fabric } from "../../src/fabric/Fabric.js";

describe("AttributeServerTest", () => {

    describe("FixedAttributeServer", () => {
        it("should return the value set in the constructor", () => {
            const server = new FixedAttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3);
            assert.strictEqual(server.getLocal(), 3);
        });

        it("should return the value from getter", () => {
            const server = new FixedAttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3, () => 4);
            assert.strictEqual(server.getLocal(), 4);
        });

        it("should successfully initialize with a value", () => {
            const server = new FixedAttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3);
            server.init(5);
            assert.strictEqual(server.getLocal(), 5);
        });

        it("should throw an error if initialized with a version", () => {
            const server = new FixedAttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3);
            assert.throws(() => server.init(2, 1), {message: "Version is not supported on fixed attributes."});
        });
    });

    describe("AttributeServer", () => {
        it("should return the value set in the constructor", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */}, true, 3);
            assert.strictEqual(server.getLocal(), 3);
        });

        it("should set the value locally and trigger listeners on change", () => {
            let valueTriggered = undefined;
            let versionTriggered = undefined;
            let valueTriggered2 = undefined;
            let oldValueTriggered2 = undefined;
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3, );
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
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3, );
            server.addMatterListener(() => { throw new Error("Should not be triggered.");});
            server.addListener((newValue, oldValue) => { valueTriggered2 = newValue; oldValueTriggered2 = oldValue; });

            assert.strictEqual(server.getLocal(), 3);
            server.setLocal(3);
            assert.strictEqual(server.getLocal(), 3);
            assert.strictEqual(valueTriggered2, 3);
            assert.strictEqual(oldValueTriggered2, 3);
        });

        it("should throw an error if the value is set non locally and not writable", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3, );
            assert.strictEqual(server.getLocal(), 3);
            assert.throws(() => server.set(4), {message: "(136) Attribute test is not writable."});
        });

        it("should return the value from getter", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3, () => 4);
            assert.strictEqual(server.getLocal(), 4);
        });

        it("should return the value from getter also with setter but increased version on change", () => {
            let valueSet = undefined;
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3, () => 4, (value) => { valueSet = value; return true; });
            assert.deepEqual(server.getWithVersion(), {value: 4, version: 0});
            server.setLocal(5);
            assert.deepEqual(server.getWithVersion(), {value: 4, version: 1});
            assert.strictEqual(valueSet, 5);
        });

        it("should return the value from getter also with setter but not increased version when no change", () => {
            let valueSet = undefined;
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3, () => 4, (value) => { valueSet = value; return false; });
            assert.deepEqual(server.getWithVersion(), {value: 4, version: 0});
            server.setLocal(5);
            assert.deepEqual(server.getWithVersion(), {value: 4, version: 0});
            assert.strictEqual(valueSet, 5);
        });

        it("should return the value from getter and increased version after update", () => {
            let valueSet = undefined;
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3, () => 4, (value) => { valueSet = value; return false; });
            assert.deepEqual(server.getWithVersion(), {value: 4, version: 0});
            server.update();
            assert.deepEqual(server.getWithVersion(), {value: 4, version: 1});
            assert.strictEqual(valueSet, undefined);
        });

        it("should trigger listeners with getter also with setter but increased version on change", () => {
            let valueSet = undefined;
            let valueTriggered = undefined;
            let versionTriggered = undefined;
            let valueTriggered2 = undefined;
            let oldValueTriggered2 = undefined;
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3, () => 4, (value) => { valueSet = value; return true; });
            server.addMatterListener((value, version) => { valueTriggered = value; versionTriggered = version; });
            server.addListener((newValue, oldValue) => { valueTriggered2 = newValue; oldValueTriggered2 = oldValue; });
            assert.deepEqual(server.getWithVersion(), {value: 4, version: 0});
            server.setLocal(5);
            assert.deepEqual(server.getWithVersion(), {value: 4, version: 1});
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
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3, () => 4, (value) => { valueSet = value; return false; });
            server.addMatterListener(() => { throw new Error("Should not be triggered"); });
            server.addListener((newValue, oldValue) => { valueTriggered2 = newValue; oldValueTriggered2 = oldValue; });
            assert.deepEqual(server.getWithVersion(), {value: 4, version: 0});
            server.setLocal(5);
            assert.deepEqual(server.getWithVersion(), {value: 4, version: 0});
            assert.strictEqual(valueSet, 5);
            assert.strictEqual(valueTriggered2, 5);
            assert.strictEqual(oldValueTriggered2, 4);
        });

        it("should return the value from getter and increased version after update", () => {
            let valueSet = undefined;
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3, () => 4, (value) => { valueSet = value; return false; });
            assert.deepEqual(server.getWithVersion(), {value: 4, version: 0});
            server.update();
            assert.deepEqual(server.getWithVersion(), {value: 4, version: 1});
            assert.strictEqual(valueSet, undefined);
        });

        it("should successfully initialize with a value", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3);
            server.init(5, 1);
            assert.strictEqual(server.getLocal(), 5);
        });

        it("should throw an error if initialized with undefined value", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3);
            assert.throws(() => server.init(undefined, 1), {message: "Can not initialize attributes with undefined value."});
        });

        it("should throw an error if initialized with getter provided", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3, () => 4);
            assert.throws(() => server.init(1, 1), {message: "Can not initialize attributes with getter or setter methods and a value."});
        });

        it("should throw an error if initialized with setter provided", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => {/* */}, false, 3, undefined, () => true);
            assert.throws(() => server.init(1, 1), {message: "Can not initialize attributes with getter or setter methods and a value."});
        });

        it("should throw an error if default value is invalid", () => {
            assert.throws(() => new AttributeServer(1, "test", TlvUInt8, () => { throw new Error("Validator error")}, false, 3), {message: "Validator error"});
        });

        it("should throw an error if set value is invalid according to schema validator", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, (value) => { if (value > 10) throw new Error("Validator error") }, false, 3, undefined, () => true);
            assert.throws(() => server.setLocal(11), {message: "Validator error"});
        });

        it("should throw an error if setter and validator are both implemented", () => {
            assert.throws(() => new AttributeServer(1, "test", TlvUInt8, () => { /* */ }, false, 3, undefined, () => true, () => { throw new Error("Validator error") }), {message: "Validator and setter must not be implemented together."});
        });

        it("should throw an error if set value is invalid according to custom validator only on set", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => { /* */ }, false, 3, undefined, undefined, () => { throw new Error("Validator error") });
            assert.throws(() => server.setLocal(11), {message: "Validator error"});
        });

        it("should throw an error if update is used without getter", () => {
            const server = new AttributeServer(1, "test", TlvUInt8, () => { /* */ }, false, 3, undefined, undefined, () => { throw new Error("Validator error") });
            assert.throws(() => server.update(), {message: "Update can only be used if the attribute has a getter or setter method."});
        });

    });

    describe("FabricScopedAttributeServer", () => {
        it("should return the value set in the constructor", () => {
            const server = new FabricScopedAttributeServer(1, "test", TlvUInt8, () => {/* */}, true, 3, BasicInformationCluster);
            assert.strictEqual(server.getLocal({} as Fabric), 3);
        });
    });

});

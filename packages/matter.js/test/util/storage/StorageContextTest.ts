/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageBackendMemory } from "../../../src/storage/StorageBackendMemory.js";
import { StorageContext } from "../../../src/storage/StorageContext.js";
import * as assert from "assert";
import { SupportedStorageTypes } from "../../../src/storage/StringifyTools.js";
import { ByteArray } from "../../../src/util/ByteArray.js";

type TestVector = { [testName: string]: { key: string, input: SupportedStorageTypes } };

const validateStorageTestVector: TestVector = {
    "store and retrieve string": { key: "stringKey", input: "value" },
    "store and retrieve number": { key: "numberKey", input: 1234 },
    "store and retrieve boolean": { key: "booleanKey", input: true },
    "store and retrieve bigint": { key: "bigintKey", input: BigInt(123456789) },
    "store and retrieve ByteArray": { key: "ByteArrayKey", input: ByteArray.fromHex("010203040506070809") },
    "store and retrieve array of string": { key: "stringArrayKey", input: ["1", "2", "3"] },
    "store and retrieve object": { key: "stringArrayKey", input: { key1: "value1", key2: 2 } },
};


describe("StorageContext", () => {

    describe("Write and read type tests", () => {
        const storage = new StorageBackendMemory();
        const storageContext = new StorageContext(storage, "context");

        for (const [testName, testVector] of Object.entries(validateStorageTestVector)) {
            it(testName, () => {
                storageContext.set(testVector.key, testVector.input);
                const valueFromStorage = storageContext.get(testVector.key);
                assert.deepEqual(valueFromStorage, testVector.input);
            });
        }
    });

    it("write and read", () => {
        const storage = new StorageBackendMemory();

        const storageContext = new StorageContext(storage, "context");

        storageContext.set("key", "value");

        const valueFromStorage = storageContext.get("key");
        assert.equal(valueFromStorage, "value");

        const valueFromStorageWithContext = storage.get("context", "key");
        assert.equal(valueFromStorageWithContext, "value");
    });

    it("read with default value", () => {
        const storage = new StorageBackendMemory();

        const storageContext = new StorageContext(storage, "context");

        const valueFromStorage = storageContext.get("key", "defaultValue");
        assert.equal(valueFromStorage, "defaultValue");
    });

    it("Throws error when reading a not set key without default value", () => {
        const storage = new StorageBackendMemory();

        const storageContext = new StorageContext(storage, "context");

        assert.throws(() => {
            storageContext.get("key");
        }, {
            message: "No value found for key key in context context and no default value specified!"
        });
    });

    it("check if key is set", () => {
        const storage = new StorageBackendMemory();

        const storageContext = new StorageContext(storage, "context");

        storageContext.set("key", "value");

        assert.equal(storageContext.has("key"), true);
    });

    it("check if key is not set", () => {
        const storage = new StorageBackendMemory();

        const storageContext = new StorageContext(storage, "context");

        storageContext.set("key", "value");

        assert.equal(storageContext.has("key2"), false);
    });
});

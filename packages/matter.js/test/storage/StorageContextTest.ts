/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeId } from "../../src/datatype/AttributeId.js";
import { NodeId } from "../../src/datatype/NodeId.js";
import { StorageError } from "../../src/storage/Storage.js";
import { StorageBackendMemory } from "../../src/storage/StorageBackendMemory.js";
import { StorageContext } from "../../src/storage/StorageContext.js";
import { StorageManager } from "../../src/storage/StorageManager.js";
import { SupportedStorageTypes } from "../../src/storage/StringifyTools.js";
import { ByteArray } from "../../src/util/ByteArray.js";

type TestVector = { [testName: string]: { key: string; input: SupportedStorageTypes } };

const validateStorageTestVector: TestVector = {
    "store and retrieve string": { key: "stringKey", input: "value" },
    "store and retrieve number": { key: "numberKey", input: 1234 },
    "store and retrieve boolean": { key: "booleanKey", input: true },
    "store and retrieve AttributeId": { key: "attributeIdKey", input: AttributeId(123) },
    "store and retrieve NodeId": { key: "nodeIdKey", input: NodeId(123456789) },
    "store and retrieve bigint": { key: "bigintKey", input: BigInt(123456789) },
    "store and retrieve ByteArray": { key: "ByteArrayKey", input: ByteArray.fromHex("010203040506070809") },
    "store and retrieve array of string": { key: "stringArrayKey", input: ["1", "2", "3"] },
    "store and retrieve object": { key: "stringArrayKey", input: { key1: "value1", key2: 2 } },
};

describe("StorageContext", () => {
    describe("Write and read type tests", () => {
        const storage = new StorageBackendMemory();
        const storageContext = new StorageContext(storage, ["context"]);

        for (const [testName, testVector] of Object.entries(validateStorageTestVector)) {
            it(testName, () => {
                storageContext.set(testVector.key, testVector.input);
                const valueFromStorage = storageContext.get(testVector.key);
                expect(valueFromStorage).toEqual(testVector.input);
            });
        }
    });

    describe("Write and read type tests multiple context levels", () => {
        const storage = new StorageBackendMemory();
        const storageContext = new StorageContext(storage, ["context", "subcontext", "subsubcontext"]);

        for (const [testName, testVector] of Object.entries(validateStorageTestVector)) {
            it(testName, () => {
                storageContext.set(testVector.key, testVector.input);
                const valueFromStorage = storageContext.get(testVector.key);
                expect(valueFromStorage).toEqual(testVector.input);
            });
        }
    });

    it("write and read", () => {
        const storage = new StorageBackendMemory();

        const storageContext = new StorageContext(storage, ["context"]);

        storageContext.set("key", "value");

        const valueFromStorage = storageContext.get("key");
        expect(valueFromStorage).toBe("value");

        const valueFromStorageWithContext = storage.get(["context"], "key");
        expect(valueFromStorageWithContext).toBe("value");
    });

    it("write and read wib subcontexts", () => {
        const storage = new StorageBackendMemory();

        const storageContext = new StorageContext(storage, ["context", "subcontext", "subsubcontext"]);

        storageContext.set("key", "value");

        const valueFromStorage = storageContext.get("key");
        expect(valueFromStorage).toBe("value");

        const valueFromStorageWithContext = storage.get(["context", "subcontext", "subsubcontext"], "key");
        expect(valueFromStorageWithContext).toBe("value");
    });

    it("read with default value", () => {
        const storage = new StorageBackendMemory();

        const storageContext = new StorageContext(storage, ["context"]);

        const valueFromStorage = storageContext.get("key", "defaultValue");
        expect(valueFromStorage).toBe("defaultValue");
    });

    it("Throws error when reading a not set key without default value", () => {
        const storage = new StorageBackendMemory();

        const storageContext = new StorageContext(storage, ["context"]);

        expect(() => {
            storageContext.get("key");
        }).toThrow(new StorageError("No value found for key key in context context and no default value specified!"));
    });

    it("check if key is set", () => {
        const storage = new StorageBackendMemory();

        const storageContext = new StorageContext(storage, ["context"]);

        storageContext.set("key", "value");

        expect(storageContext.has("key")).toBe(true);
    });

    it("check if key is not set", () => {
        const storage = new StorageBackendMemory();

        const storageContext = new StorageContext(storage, ["context"]);

        storageContext.set("key", "value");

        expect(storageContext.has("key2")).toBe(false);
    });

    it("check if key is set with subcontext", () => {
        const storage = new StorageBackendMemory();

        const storageContext = new StorageContext(storage, ["context", "subcontext", "subsubcontext"]);

        storageContext.set("key", "value");

        expect(storageContext.has("key")).toBe(true);
    });

    it("check if key is not set with subcontext", () => {
        const storage = new StorageBackendMemory();

        const storageContext = new StorageContext(storage, ["context", "subcontext", "subsubcontext"]);

        storageContext.set("key", "value");

        expect(storageContext.has("key2")).toBe(false);
    });

    it("create sub StorageContext write and read success", async () => {
        const storage = new StorageBackendMemory();

        const storageManager = new StorageManager(storage);

        await storageManager.initialize();

        const storageContext = storageManager.createContext("context");
        const subStorageContext = storageContext.createContext("subcontext");

        subStorageContext.set("key", "value");

        const valueFromStorage = subStorageContext.get("key");
        expect(valueFromStorage).toBe("value");
    });

    it("create sub StorageContext overlapping naming write and read success", async () => {
        const storage = new StorageBackendMemory();

        const storageManager = new StorageManager(storage);

        await storageManager.initialize();

        const storageContext = storageManager.createContext("context");
        const subStorageContext = storageContext.createContext("subcontext");

        subStorageContext.set("key", "value1");
        storageContext.set("subcontext", "value2");

        const valueFromStorage = subStorageContext.get("key");
        expect(valueFromStorage).toBe("value1");

        const valueFromStorage2 = storageContext.get("subcontext");
        expect(valueFromStorage2).toBe("value2");
    });
});

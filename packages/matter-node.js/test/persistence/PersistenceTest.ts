/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageInMemory } from "../../src/persistence/StorageInMemory";
import { Persistence } from "../../src/persistence/Persistence";
import * as assert from "assert";
import { SupportedStorageTypes } from "../../src/persistence/JsonConverter";
import { ByteArray } from "@project-chip/matter.js";

type TestVector = { [testName: string]: { key: string, input: SupportedStorageTypes, stringified: string } };

const validateStorageTestVector: TestVector = {
    "store and retrieve string": { key: "stringKey", input: "value", stringified: `"value"` },
    "store and retrieve number": { key: "numberKey", input: 1234, stringified: `1234` },
    "store and retrieve boolean": { key: "booleanKey", input: true, stringified: `true` },
    "store and retrieve bigint": { key: "bigintKey", input: BigInt(123456789), stringified: `"{\\"__object__\\":\\"BigInt\\",\\"__value__\\":\\"123456789\\"}"` },
    "store and retrieve Buffer": { key: "BufferKey", input: Buffer.from("value", "ascii"), stringified: `"{\\"__object__\\":\\"Buffer\\",\\"__value__\\":\\"dmFsdWU=\\"}"` },
    "store and retrieve ByteArray": { key: "ByteArrayKey", input: ByteArray.fromHex("010203040506070809"), stringified: `"{\\"__object__\\":\\"Uint8Array\\",\\"__value__\\":\\"AQIDBAUGBwgJ\\"}"` },
    "store and retrieve array of string": { key: "stringArrayKey", input: ["1", "2", "3"], stringified: `["1","2","3"]` },
    "store and retrieve object": { key: "stringArrayKey", input: { key1: "value1", key2: 2 }, stringified: `{"key1":"value1","key2":2}` },
};


describe("Persistence", () => {

    describe("Write and read type tests", () => {
        const storage = new StorageInMemory();
        const persistence = new Persistence(storage, "context");

        for (const [testName, testVector] of Object.entries(validateStorageTestVector)) {
            it(testName, () => {
                persistence.set(testVector.key, testVector.input);
                const valueFromPersistence = persistence.get(testVector.key);
                assert.deepEqual(valueFromPersistence, testVector.input);

                const valueFromStorageWithContext = storage.get("context", testVector.key);
                assert.equal(valueFromStorageWithContext, testVector.stringified);
            });
        }
    });

    it("write and read", () => {
        const storage = new StorageInMemory();

        const persistence = new Persistence(storage, "context");

        persistence.set("key", "value");

        const valueFromPersistence = persistence.get("key");
        assert.equal(valueFromPersistence, "value");

        const valueFromStorageWithContext = storage.get("context", "key");
        assert.equal(valueFromStorageWithContext, `"value"`);
    });

    it("read with default value", () => {
        const storage = new StorageInMemory();

        const persistence = new Persistence(storage, "context");

        const valueFromPersistence = persistence.get("key", "defaultValue");
        assert.equal(valueFromPersistence, "defaultValue");
    });

    it("Throws error when reading a not set key without default value", () => {
        const storage = new StorageInMemory();

        const persistence = new Persistence(storage, "context");

        assert.throws(() => {
            persistence.get("key");
        }, {
            message: "No value found for key key in context context and no default value specified!"
        });
    });

    it("check if key is set", () => {
        const storage = new StorageInMemory();

        const persistence = new Persistence(storage, "context");

        persistence.set("key", "value");

        assert.equal(persistence.has("key"), true);
    });

    it("check if key is not set", () => {
        const storage = new StorageInMemory();

        const persistence = new Persistence(storage, "context");

        persistence.set("key", "value");

        assert.equal(persistence.has("key2"), false);
    });
});

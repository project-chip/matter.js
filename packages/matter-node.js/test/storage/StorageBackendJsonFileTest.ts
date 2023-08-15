/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time, TimeFake } from "@project-chip/matter.js/time";

const fakeTime = new TimeFake(0);
Time.get = () => fakeTime;

import * as assert from "assert";
import { readFile, unlink } from "fs/promises";
import { StorageBackendJsonFile } from "../../src/storage/StorageBackendJsonFile";

const TEST_STORAGE_LOCATION = __dirname + "/testdata-storage.json";

describe("Storage in JSON File", () => {
    beforeEach(async () => {
        try {
            await unlink(TEST_STORAGE_LOCATION);
        } catch {
            // Ignore
        }
    });

    it("write and read success", async () => {
        const storage = new StorageBackendJsonFile(TEST_STORAGE_LOCATION);
        await storage.initialize();

        storage.set(["context"], "key", "value");

        const value = storage.get(["context"], "key");
        assert.equal(value, "value");

        await fakeTime.advanceTime(2 * 1000);

        await new Promise(resolve => setTimeout(resolve, 1000)); // give FS time to write

        const storageRead = new StorageBackendJsonFile(TEST_STORAGE_LOCATION);
        await storageRead.initialize();

        const valueRead = storage.get(["context"], "key");
        assert.equal(valueRead, "value");

        const fileContent = await readFile(TEST_STORAGE_LOCATION);
        assert.equal(
            fileContent.toString(),
            `{
 "context": {
  "key": "value"
 }
}`,
        );

        await storageRead.close();
        await storage.close();
    });

    it("write and delete success", async () => {
        const storage = new StorageBackendJsonFile(TEST_STORAGE_LOCATION);
        await storage.initialize();

        storage.set(["context"], "key", "value");

        const value = storage.get(["context"], "key");
        assert.equal(value, "value");

        storage.delete(["context"], "key");
        assert.equal(storage.get(["context"], "key"), undefined);

        await fakeTime.advanceTime(2 * 1000);

        await new Promise(resolve => setTimeout(resolve, 1000)); // give FS time to write

        const storageRead = new StorageBackendJsonFile(TEST_STORAGE_LOCATION);
        await storageRead.initialize();

        const valueRead = storage.get(["context"], "key");
        assert.equal(valueRead, undefined);

        const fileContent = await readFile(TEST_STORAGE_LOCATION);
        assert.equal(
            fileContent.toString(),
            `{
 "context": {}
}`,
        );

        await storageRead.close();
        await storage.close();
    });

    it("Throws error when context is empty on set", () => {
        assert.throws(
            () => {
                const storage = new StorageBackendJsonFile(TEST_STORAGE_LOCATION);
                storage.set([""], "key", "value");
            },
            {
                message: "Context must not be an empty string!",
            },
        );
    });

    it("Throws error when key is empty on set", () => {
        assert.throws(
            () => {
                const storage = new StorageBackendJsonFile(TEST_STORAGE_LOCATION);
                storage.set(["context"], "", "value");
            },
            {
                message: "Context and key must not be empty!",
            },
        );
    });

    it("Throws error when context is empty on get", () => {
        assert.throws(
            () => {
                const storage = new StorageBackendJsonFile(TEST_STORAGE_LOCATION);
                storage.get([""], "key");
            },
            {
                message: "Context must not be an empty string!",
            },
        );
    });

    it("Throws error when key is empty on get", () => {
        assert.throws(
            () => {
                const storage = new StorageBackendJsonFile(TEST_STORAGE_LOCATION);
                storage.get(["context"], "");
            },
            {
                message: "Context and key must not be empty!",
            },
        );
    });

    afterAll(async () => {
        try {
            await unlink(TEST_STORAGE_LOCATION);
        } catch {
            // Ignore
        }
    });
});

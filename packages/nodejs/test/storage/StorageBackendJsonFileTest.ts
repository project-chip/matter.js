/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageBackendJsonFile } from "#storage/StorageBackendJsonFile.js";
import * as assert from "node:assert";
import { readFile, unlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { resolve } from "node:path";

const TEST_STORAGE_LOCATION = resolve(tmpdir(), "matterjs-test-storage.json");

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
        storage.initialize();

        storage.set(["context"], "key", "value");

        const value = storage.get(["context"], "key");
        assert.equal(value, "value");

        await MockTime.advance(2 * 1000);

        await storage.committed;

        const storageRead = new StorageBackendJsonFile(TEST_STORAGE_LOCATION);
        storageRead.initialize();

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
        const storage = await StorageBackendJsonFile.create(TEST_STORAGE_LOCATION);

        storage.set(["context"], "key", "value");

        const value = storage.get(["context"], "key");
        assert.equal(value, "value");

        storage.delete(["context"], "key");
        assert.equal(storage.get(["context"], "key"), undefined);

        await MockTime.advance(2 * 1000);

        await storage.committed;

        const storageRead = await StorageBackendJsonFile.create(TEST_STORAGE_LOCATION);

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

    it("Throws error when context is empty on set", async () => {
        const storage = await StorageBackendJsonFile.create(TEST_STORAGE_LOCATION);
        assert.throws(
            () => {
                storage.set([""], "key", "value");
            },
            {
                message: "Context must not be an empty string.",
            },
        );
    });

    it("Throws error when key is empty on set", async () => {
        const storage = await StorageBackendJsonFile.create(TEST_STORAGE_LOCATION);
        assert.throws(
            () => {
                storage.set(["context"], "", "value");
            },
            {
                message: "Context and key must not be empty.",
            },
        );
    });

    it("Throws error when context is empty on get", async () => {
        const storage = await StorageBackendJsonFile.create(TEST_STORAGE_LOCATION);
        assert.throws(
            () => {
                storage.get([""], "key");
            },
            {
                message: "Context must not be an empty string.",
            },
        );
    });

    it("Throws error when key is empty on get", async () => {
        const storage = await StorageBackendJsonFile.create(TEST_STORAGE_LOCATION);
        assert.throws(
            () => {
                storage.get(["context"], "");
            },
            {
                message: "Context and key must not be empty.",
            },
        );
    });

    after(async () => {
        try {
            await unlink(TEST_STORAGE_LOCATION);
        } catch {
            // Ignore
        }
    });
});

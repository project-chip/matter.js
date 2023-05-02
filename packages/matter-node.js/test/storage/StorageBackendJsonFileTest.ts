/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageBackendJsonFile } from "../../src/storage/StorageBackendJsonFile";
import * as assert from "assert";
import { unlink, readFile } from "fs/promises";

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

        storage.set("context", "key", "value");

        const value = storage.get("context", "key");
        assert.equal(value, "value");

        await storage.close();

        const storageRead = new StorageBackendJsonFile(TEST_STORAGE_LOCATION);
        await storageRead.initialize();

        const valueRead = storage.get("context", "key");
        assert.equal(valueRead, "value");
        await storage.close();

        const fileContent = await readFile(TEST_STORAGE_LOCATION);
        assert.equal(fileContent.toString(), `{"context":{"key":"value"}}`);
    });

    it("Throws error when context is empty on set", () => {
        assert.throws(() => {
            const storage = new StorageBackendJsonFile(TEST_STORAGE_LOCATION);
            storage.set("", "key", "value");
        }, {
            message: "Context and key must not be empty strings!"
        });
    });

    it("Throws error when key is empty on set", () => {
        assert.throws(() => {
            const storage = new StorageBackendJsonFile(TEST_STORAGE_LOCATION);
            storage.set("context", "", "value");
        }, {
            message: "Context and key must not be empty strings!"
        });
    });

    it("Throws error when context is empty on get", () => {
        assert.throws(() => {
            const storage = new StorageBackendJsonFile(TEST_STORAGE_LOCATION);
            storage.get("", "key");
        }, {
            message: "Context and key must not be empty strings!"
        });
    });

    it("Throws error when key is empty on get", () => {
        assert.throws(() => {
            const storage = new StorageBackendJsonFile(TEST_STORAGE_LOCATION);
            storage.get("context", "");
        }, {
            message: "Context and key must not be empty strings!"
        });
    });

    afterAll(async () => {
        try {
            await unlink(TEST_STORAGE_LOCATION);
        } catch {
            // Ignore
        }
    });

});

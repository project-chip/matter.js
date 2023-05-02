/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageBackendDisk } from "../../src/storage/StorageBackendDisk";
import * as assert from "assert";
import { LocalStorage } from "node-localstorage";
import { stat, readFile } from "fs/promises";

const TEST_STORAGE_LOCATION = __dirname + "/testdata-storage";

describe("Storage node-localstorage", () => {

    beforeEach(() => {
        const localStorage = new LocalStorage(TEST_STORAGE_LOCATION);
        localStorage.clear();
    });

    it("write and read success", async () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set("context", "key", "value");

        const value = storage.get("context", "key");
        assert.equal(value, "value");

        const dirStat = await stat(TEST_STORAGE_LOCATION);
        assert.ok(dirStat.isDirectory());
        const KeyFileStat = await stat(TEST_STORAGE_LOCATION + "/context.key");
        assert.ok(KeyFileStat.isFile());
        const keyContent = await readFile(TEST_STORAGE_LOCATION + "/context.key");
        assert.equal(keyContent.toString(), `"value"`);
    });

    it("Throws error when context is empty on set", () => {
        assert.throws(() => {
            const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);
            storage.set("", "key", "value");
        }, {
            message: "Context and key must not be empty strings!"
        });
    });

    it("Throws error when key is empty on set", () => {
        assert.throws(() => {
            const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);
            storage.set("context", "", "value");
        }, {
            message: "Context and key must not be empty strings!"
        });
    });

    it("Throws error when context is empty on get", () => {
        assert.throws(() => {
            const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);
            storage.get("", "key");
        }, {
            message: "Context and key must not be empty strings!"
        });
    });

    it("Throws error when key is empty on get", () => {
        assert.throws(() => {
            const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);
            storage.get("context", "");
        }, {
            message: "Context and key must not be empty strings!"
        });
    });

    afterAll(() => {
        const localStorage = new LocalStorage(TEST_STORAGE_LOCATION);
        localStorage.clear();
    });

});

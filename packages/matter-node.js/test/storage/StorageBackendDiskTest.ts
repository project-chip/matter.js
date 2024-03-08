/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { readFile, stat } from "fs/promises";
import { LocalStorage } from "node-localstorage";
import { tmpdir } from "os";
import { resolve } from "path";
import { StorageBackendDisk } from "../../src/storage/StorageBackendDisk.js";

const TEST_STORAGE_LOCATION = resolve(tmpdir(), "matterjs-test-storage");

describe("Storage node-localstorage", () => {
    beforeEach(() => {
        const localStorage = new LocalStorage(TEST_STORAGE_LOCATION);
        localStorage.clear();
    });

    it("write and read success", async () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(["context"], "key", "value");

        const value = storage.get(["context"], "key");
        assert.equal(value, "value");
    });

    it("write and delete success", async () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(["context"], "key", "value");
        storage.delete(["context"], "key");

        const value = storage.get(["context"], "key");
        assert.equal(value, undefined);
    });

    it("write and clear success", async () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(["context"], "key", "value");
        storage.clear();

        const value = storage.get(["context"], "key");
        assert.equal(value, undefined);
    });

    it("write and read success with multiple context levels", async () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(["context", "subcontext", "subsubcontext"], "key", "value");

        const value = storage.get(["context", "subcontext", "subsubcontext"], "key");
        assert.equal(value, "value");

        const dirStat = await stat(TEST_STORAGE_LOCATION);
        assert.ok(dirStat.isDirectory());
        const KeyFileStat = await stat(TEST_STORAGE_LOCATION + "/context.subcontext.subsubcontext.key");
        assert.ok(KeyFileStat.isFile());
        const keyContent = await readFile(TEST_STORAGE_LOCATION + "/context.subcontext.subsubcontext.key");
        assert.equal(keyContent.toString(), `"value"`);
    });

    it("return keys with storage values", () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(["context", "subcontext", "subsubcontext"], "key", "value");

        const value = storage.keys(["context", "subcontext", "subsubcontext"]);
        expect(value).deep.equal(["key"]);
    });

    it("return keys with storage without subcontexts values", () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(["context", "subcontext"], "key", "value");
        storage.set(["context", "subcontext", "subsubcontext"], "key", "value");

        const value = storage.keys(["context", "subcontext"]);
        expect(value).deep.equal(["key"]);
    });

    it("clear all keys with multiple contextes", () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(["context"], "key1", "value");
        storage.set(["context", "subcontext"], "key2", "value");
        storage.set(["context", "subcontext", "subsubcontext"], "key3", "value");

        storage.clearAll(["context", "subcontext"]);
        expect(storage.keys(["context"])).deep.equal(["key1"]);
        expect(storage.keys(["context", "subcontext"])).deep.equal([]);
        expect(storage.keys(["context", "subcontext", "subsubcontext"])).deep.equal([]);
    });

    it("Throws error when context is empty on set", () => {
        assert.throws(
            () => {
                const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);
                storage.set([""], "key", "value");
            },
            {
                message: "Context must not be an empty and not contain dots.",
            },
        );
    });

    it("Throws error when key is empty on set", () => {
        assert.throws(
            () => {
                const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);
                storage.set(["context"], "", "value");
            },
            {
                message: "Key must not be an empty string.",
            },
        );
    });

    it("Throws error when context is empty on get", () => {
        assert.throws(
            () => {
                const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);
                storage.get([""], "key");
            },
            {
                message: "Context must not be an empty and not contain dots.",
            },
        );
    });

    it("Throws error when context is empty on get with subcontext", () => {
        assert.throws(
            () => {
                const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);
                storage.get(["ok", ""], "key");
            },
            {
                message: "Context must not be an empty and not contain dots.",
            },
        );
    });

    it("Throws error when key is empty on get", () => {
        assert.throws(
            () => {
                const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);
                storage.get(["context"], "");
            },
            {
                message: "Key must not be an empty string.",
            },
        );
    });

    after(() => {
        const localStorage = new LocalStorage(TEST_STORAGE_LOCATION);
        localStorage.clear();
    });
});

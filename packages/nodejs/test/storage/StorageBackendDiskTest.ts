/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageBackendDisk } from "#storage/StorageBackendDisk.js";
import { LocalStorage } from "node-localstorage";
import * as assert from "node:assert";
import { readFile, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { resolve } from "node:path";

const TEST_STORAGE_LOCATION = resolve(tmpdir(), "matterjs-test-storage");

const CONTEXTx1 = ["context"];
const CONTEXTx2 = [...CONTEXTx1, "subcontext"];
const CONTEXTx3 = [...CONTEXTx2, "subsubcontext"];

describe("Storage node-localstorage", () => {
    beforeEach(() => {
        const localStorage = new LocalStorage(TEST_STORAGE_LOCATION);
        localStorage.clear();
    });

    it("write and read success", async () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(CONTEXTx1, "key", "value");

        const value = storage.get(CONTEXTx1, "key");
        assert.equal(value, "value");
    });

    it("multi-write and read success", async () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(CONTEXTx1, { key: "value", key2: "value2" });

        const value = storage.get(CONTEXTx1, "key");
        assert.equal(value, "value");
        const value2 = storage.get(CONTEXTx1, "key2");
        assert.equal(value2, "value2");
    });

    it("multi-write and values read success", async () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(CONTEXTx1, { key: "value", key2: "value2" });

        const values = storage.values(CONTEXTx1);
        assert.deepEqual(values, { key: "value", key2: "value2" });
    });

    it("write and delete success", async () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(CONTEXTx1, "key", "value");
        storage.delete(CONTEXTx1, "key");

        const value = storage.get(CONTEXTx1, "key");
        assert.equal(value, undefined);
    });

    it("write and clear success", async () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(CONTEXTx1, "key", "value");
        storage.clear();

        const value = storage.get(CONTEXTx1, "key");
        assert.equal(value, undefined);
    });

    it("write and read success with multiple context levels", async () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(CONTEXTx3, "key", "value");

        const value = storage.get(CONTEXTx3, "key");
        assert.equal(value, "value");

        const dirStat = await stat(TEST_STORAGE_LOCATION);
        assert.ok(dirStat.isDirectory());
        const KeyFileStat = await stat(TEST_STORAGE_LOCATION + "/context.subcontext.subsubcontext.key");
        assert.ok(KeyFileStat.isFile());
        const keyContent = await readFile(TEST_STORAGE_LOCATION + "/context.subcontext.subsubcontext.key");
        assert.equal(keyContent.toString(), `"value"`);
    });

    it("write and read success with multiple context levels and special chars", async () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        const location = [...CONTEXTx3, "it'a/slash"];
        storage.set(location, "key", "value");

        const value = storage.get(location, "key");
        assert.equal(value, "value");

        const dirStat = await stat(TEST_STORAGE_LOCATION);
        assert.ok(dirStat.isDirectory());
        const KeyFileStat = await stat(TEST_STORAGE_LOCATION + "/context.subcontext.subsubcontext.it%27a%2Fslash.key");
        assert.ok(KeyFileStat.isFile());
        const keyContent = await readFile(
            TEST_STORAGE_LOCATION + "/context.subcontext.subsubcontext.it%27a%2Fslash.key",
        );
        assert.equal(keyContent.toString(), `"value"`);
    });

    it("return keys with storage values", () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(CONTEXTx3, "key", "value");

        const value = storage.keys(CONTEXTx3);
        expect(value).deep.equal(["key"]);
    });

    it("return keys with storage without subcontexts values", () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(CONTEXTx2, "key", "value");
        storage.set(CONTEXTx3, "key", "value");

        const value = storage.keys(CONTEXTx2);
        expect(value).deep.equal(["key"]);
    });

    it("return contexts with subcontexts", () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(CONTEXTx2, "key", "value");
        storage.set(["context", "subcontext2"], "key", "value");
        storage.set(CONTEXTx3, "key", "value");

        expect(storage.contexts(CONTEXTx3)).deep.equal([]);
        expect(storage.contexts(CONTEXTx2)).deep.equal(["subsubcontext"]);
        expect(storage.contexts(CONTEXTx1)).deep.equal(["subcontext", "subcontext2"]);
        expect(storage.contexts([])).deep.equal(CONTEXTx1);
    });

    it("return contexts with subcontexts with special chars", () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(CONTEXTx2, "key", "value");
        storage.set(["context", "sub's/fun"], "key", "value");
        storage.set(CONTEXTx3, "key", "value");

        const storageRead = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        expect(storageRead.contexts(CONTEXTx3)).deep.equal([]);
        expect(storageRead.contexts(CONTEXTx2)).deep.equal(["subsubcontext"]);
        expect(storageRead.contexts(CONTEXTx1)).deep.equal(["subcontext", "sub's/fun"]);
        expect(storageRead.contexts([])).deep.equal(CONTEXTx1);
    });

    it("clear all keys with multiple contextes", () => {
        const storage = new StorageBackendDisk(TEST_STORAGE_LOCATION);

        storage.set(CONTEXTx1, "key1", "value");
        storage.set(CONTEXTx2, "key2", "value");
        storage.set(CONTEXTx3, "key3", "value");

        storage.clearAll(CONTEXTx2);
        expect(storage.keys(CONTEXTx1)).deep.equal(["key1"]);
        expect(storage.keys(CONTEXTx2)).deep.equal([]);
        expect(storage.keys(CONTEXTx3)).deep.equal([]);
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
                storage.set(CONTEXTx1, "", "value");
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
                storage.get(CONTEXTx1, "");
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

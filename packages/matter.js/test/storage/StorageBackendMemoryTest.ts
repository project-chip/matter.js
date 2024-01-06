/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageError } from "../../src/storage/Storage.js";
import { StorageBackendMemory } from "../../src/storage/StorageBackendMemory.js";

describe("StorageBackendMemory", () => {
    it("write and read success", async () => {
        const storage = new StorageBackendMemory();

        storage.set(["context"], "key", "value");

        const value = await storage.get(["context"], "key");
        expect(value).equal("value");
    });

    it("write and delete success", async () => {
        const storage = new StorageBackendMemory();

        storage.set(["context"], "key", "value");
        storage.delete(["context"], "key");

        const value = await storage.get(["context"], "key");
        expect(value).equal(undefined);
    });

    it("write and read success with multiple context levels", async () => {
        const storage = new StorageBackendMemory();

        storage.set(["context", "subcontext", "subsubcontext"], "key", "value");

        const value = await storage.get(["context", "subcontext", "subsubcontext"], "key");
        expect(value).equal("value");
    });

    it("return keys with storage values", async () => {
        const storage = new StorageBackendMemory();

        storage.set(["context", "subcontext", "subsubcontext"], "key", "value");

        const value = storage.keys(["context", "subcontext", "subsubcontext"]);
        expect(value).deep.equal(["key"]);
    });

    it("clear all keys with multiple contextes", async () => {
        const storage = new StorageBackendMemory();

        storage.set(["context"], "key1", "value");
        storage.set(["context", "subcontext"], "key2", "value");
        storage.set(["context", "subcontext", "subsubcontext"], "key3", "value");

        storage.clearAll(["context", "subcontext"]);
        expect(storage.keys(["context"])).deep.equal(["key1"]);
        expect(storage.keys(["context", "subcontext"])).deep.equal([]);
        expect(storage.keys(["context", "subcontext", "subsubcontext"])).deep.equal([]);
    });

    it("return keys with storage without subcontexts values", async () => {
        const storage = new StorageBackendMemory();

        storage.set(["context", "subcontext"], "key", "value");
        storage.set(["context", "subcontext", "subsubcontext"], "key", "value");

        const value = storage.keys(["context", "subcontext"]);
        expect(value).deep.equal(["key"]);
    });

    it("Throws error when context is empty on set", () => {
        expect(() => {
            const storage = new StorageBackendMemory();
            storage.set([], "key", "value");
        }).throw(StorageError, "Context and key must not be empty.");
    });

    it("Throws error when context is empty on set", () => {
        expect(() => {
            const storage = new StorageBackendMemory();
            storage.set([""], "key", "value");
        }).throw(StorageError, "Context must not be an empty string.");
    });

    it("Throws error when key is empty on set", () => {
        expect(() => {
            const storage = new StorageBackendMemory();
            storage.set(["context"], "", "value");
        }).throw(StorageError, "Context and key must not be empty.");
    });

    it("Throws error when context is empty on get with subcontext", async () => {
        const storage = new StorageBackendMemory();
        expect(() => storage.get<string>(["ok", ""], "key")).throws(
            StorageError,
            "Context must not be an empty string.",
        );
    });

    it("Throws error when key is empty on get", async () => {
        const storage = new StorageBackendMemory();
        expect(() => storage.get<string>(["context", "subcontext"], "")).throws(
            StorageError,
            "Context and key must not be empty.",
        );
    });
});

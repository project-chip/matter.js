/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageBackendMemory } from "../../../src/storage/StorageBackendMemory.js";
import * as assert from "assert";

describe("StorageInMemory", () => {

    it("write and read success", () => {
        const storage = new StorageBackendMemory();

        storage.set(["context"], "key", "value");

        const value = storage.get(["context"], "key");
        assert.equal(value, "value");
    });

    it("write and read success with multiple context levels", () => {
        const storage = new StorageBackendMemory();

        storage.set(["context", "subcontext", "subsubcontext"], "key", "value");

        const value = storage.get(["context", "subcontext", "subsubcontext"], "key");
        assert.equal(value, "value");
    });

    it("Throws error when context is empty on set", () => {
        assert.throws(() => {
            const storage = new StorageBackendMemory();
            storage.set([], "key", "value");
        }, {
            message: "Context and key must not be empty!"
        });
    });

    it("Throws error when context is empty on set", () => {
        assert.throws(() => {
            const storage = new StorageBackendMemory();
            storage.set([""], "key", "value");
        }, {
            message: "Context must not be an empty string!"
        });
    });

    it("Throws error when key is empty on set", () => {
        assert.throws(() => {
            const storage = new StorageBackendMemory();
            storage.set(["context"], "", "value");
        }, {
            message: "Context and key must not be empty!"
        });
    });

    it("Throws error when context is empty on get with subcontext", () => {
        assert.throws(() => {
            const storage = new StorageBackendMemory();
            storage.get(["ok", ""], "key");
        }, {
            message: "Context must not be an empty string!"
        });
    });

    it("Throws error when key is empty on get", () => {
        assert.throws(() => {
            const storage = new StorageBackendMemory();
            storage.get(["context", "subcontext"], "");
        }, {
            message: "Context and key must not be empty!"
        });
    });
});

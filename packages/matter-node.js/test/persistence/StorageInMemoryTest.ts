/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageInMemory } from "../../src/persistence/StorageInMemory";
import * as assert from "assert";

describe("StorageInMemory", () => {

    it("write and read success", () => {
        const storage = new StorageInMemory();

        storage.set("context", "key", "value");

        const value = storage.get("context", "key");
        assert.equal(value, "value");
    });

    it("Throws error when context is empty on set", () => {
        assert.throws(() => {
            const storage = new StorageInMemory();
            storage.set("", "key", "value");
        }, {
            message: "Context and key must not be empty strings!"
        });
    });

    it("Throws error when key is empty on set", () => {
        assert.throws(() => {
            const storage = new StorageInMemory();
            storage.set("context", "", "value");
        }, {
            message: "Context and key must not be empty strings!"
        });
    });

    it("Throws error when context is empty on get", () => {
        assert.throws(() => {
            const storage = new StorageInMemory();
            storage.get("", "key");
        }, {
            message: "Context and key must not be empty strings!"
        });
    });

    it("Throws error when key is empty on get", () => {
        assert.throws(() => {
            const storage = new StorageInMemory();
            storage.get("context", "");
        }, {
            message: "Context and key must not be empty strings!"
        });
    });
});

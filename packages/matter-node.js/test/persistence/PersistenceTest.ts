/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageInMemory } from "../../src/persistence/StorageInMemory";
import { Persistence } from "../../src/persistence/Persistence";
import * as assert from "assert";

describe("Persistence", () => {

    it("write and read success",  () => {
        const storage = new StorageInMemory();

        const persistence = new Persistence(storage, "context");

        persistence.set("key", "value");

        const valueFromPersistence = persistence.get("key");
        assert.equal(valueFromPersistence, "value");

        const valueFromStorageWithContext = storage.get("context", "key");
        assert.equal(valueFromStorageWithContext, "value");
    });

    it("read with default value",  () => {
        const storage = new StorageInMemory();

        const persistence = new Persistence(storage, "context");

        const valueFromPersistence = persistence.get("key", "defaultValue");
        assert.equal(valueFromPersistence, "defaultValue");
    });

    it("Throws error when reading a not set key without default value",  () => {
        const storage = new StorageInMemory();

        const persistence = new Persistence(storage, "context");

        assert.throws(() => {
            persistence.get("key");
        }, {
            message: "No value found for key key in context context and no default value specified!"
        });
    });

    it("check if key is set",  () => {
        const storage = new StorageInMemory();

        const persistence = new Persistence(storage, "context");

        persistence.set("key", "value");

        assert.equal(persistence.has("key"), true);
    });

    it("check if key is not set",  () => {
        const storage = new StorageInMemory();

        const persistence = new Persistence(storage, "context");

        persistence.set("key", "value");

        assert.equal(persistence.has("key2"), false);
    });
});

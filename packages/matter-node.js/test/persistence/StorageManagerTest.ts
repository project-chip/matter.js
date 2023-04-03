/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageBackendMemory } from "../../src/persistence/StorageBackendMemory";
import * as assert from "assert";
import { StorageManager } from "../../src/persistence/StorageManager";

describe("PersistenceManager", () => {

    it("create StorageContext write and read success", async () => {
        const storage = new StorageBackendMemory();

        const persistenceManager = new StorageManager(storage);

        await persistenceManager.initialize();

        const persistence = persistenceManager.createContext("context");

        persistence.set("key", "value");

        const valueFromPersistence = persistence.get("key");
        assert.equal(valueFromPersistence, "value");
    });

    it("creating StorageManager without initialize throws error when creating StorageContext", async () => {
        const storage = new StorageBackendMemory();

        const persistenceManager = new StorageManager(storage);

        assert.throws(() => {
            persistenceManager.createContext("context");
        }, {
            message: "The storage needs to be initialized first!"
        });
    });

    it("creating StorageContext with  dot in name fails", async () => {
        const storage = new StorageBackendMemory();

        const persistenceManager = new StorageManager(storage);
        await persistenceManager.initialize();

        assert.throws(() => {
            persistenceManager.createContext("my.context");
        }, {
            message: "Context must not contain dots!"
        });
    });

    it("getting same StorageContext context access same data", async () => {
        const storage = new StorageBackendMemory();

        const persistenceManager = new StorageManager(storage);

        await persistenceManager.initialize();

        const persistence1 = persistenceManager.createContext("context");
        const persistence2 = persistenceManager.createContext("context");

        persistence1.set("key", "value");

        const valueFromPersistence2 = persistence2.get("key");
        assert.equal(valueFromPersistence2, "value");
    });

});

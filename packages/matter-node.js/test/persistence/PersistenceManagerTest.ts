/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageInMemory } from "../../src/persistence/StorageInMemory";
import * as assert from "assert";
import { PersistenceManager } from "../../src/persistence/PersistenceManager";

describe("PersistenceManager", () => {

    it("create Persistence write and read success",  async () => {
        const storage = new StorageInMemory();

        const persistenceManager = new PersistenceManager(storage);

        await persistenceManager.initialize();

        const persistence = persistenceManager.createPersistence("context");

        persistence.set("key", "value");

        const valueFromPersistence = persistence.get("key");
        assert.equal(valueFromPersistence, "value");
    });

    it("creating PersistenceManager without initialize throws error when creating Persistence",  async () => {
        const storage = new StorageInMemory();

        const persistenceManager = new PersistenceManager(storage);

        assert.throws(() => {
            persistenceManager.createPersistence("context");
        }, {
            message: "The persistence should be initialized first!"
        });
    });

    it("getting same Persistence context access same data",  async () => {
        const storage = new StorageInMemory();

        const persistenceManager = new PersistenceManager(storage);

        await persistenceManager.initialize();

        const persistence1 = persistenceManager.createPersistence("context");
        const persistence2 = persistenceManager.createPersistence("context");

        persistence1.set("key", "value");

        const valueFromPersistence2 = persistence2.get("key");
        assert.equal(valueFromPersistence2, "value");
    });

});

/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageBackendMemory } from "../../../src/storage/StorageBackendMemory.js";
import * as assert from "assert";
import { StorageManager } from "../../../src/storage/StorageManager.js";

describe("StorageManager", () => {

    it("create StorageContext write and read success", async () => {
        const storage = new StorageBackendMemory();

        const storageManager = new StorageManager(storage);

        await storageManager.initialize();

        const storageContext = storageManager.createContext("context");

        storageContext.set("key", "value");

        const valueFromStorage = storageContext.get("key");
        assert.equal(valueFromStorage, "value");
    });

    it("creating StorageManager without initialize throws error when creating StorageContext", async () => {
        const storage = new StorageBackendMemory();

        const storageManager = new StorageManager(storage);

        assert.throws(() => {
            storageManager.createContext("context");
        }, {
            message: "The storage needs to be initialized first!"
        });
    });

    it("creating StorageContext with  dot in name fails", async () => {
        const storage = new StorageBackendMemory();

        const storageManager = new StorageManager(storage);
        await storageManager.initialize();

        assert.throws(() => {
            storageManager.createContext("my.context");
        }, {
            message: "Context must not contain dots!"
        });
    });

    it("getting same StorageContext context access same data", async () => {
        const storage = new StorageBackendMemory();

        const storageManager = new StorageManager(storage);

        await storageManager.initialize();

        const storageContext1 = storageManager.createContext("context");
        const storageContext2 = storageManager.createContext("context");

        storageContext1.set("key", "value");

        const valueFromStorage2 = storageContext2.get("key");
        assert.equal(valueFromStorage2, "value");
    });

});

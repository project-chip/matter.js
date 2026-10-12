/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointStore } from "#storage/EndpointStore.js";
import { MemoryStorageDriver, StorageContext, StorageDriver, StorageError } from "@matter/general";

class FlakyStorageDriver extends MemoryStorageDriver {
    failNextDelete = false;

    override begin() {
        return new FlakyTransaction(this);
    }
}

class FlakyTransaction extends StorageDriver.Transaction {
    constructor(protected override readonly storage: FlakyStorageDriver) {
        super(storage);
    }

    override delete(contexts: string[], key: string) {
        if (this.storage.failNextDelete) {
            this.storage.failNextDelete = false;
            throw new StorageError("Simulated write failure");
        }
        return super.delete(contexts, key);
    }
}

describe("EndpointStore", () => {
    describe("migrated values", () => {
        async function legacyStore() {
            const driver = new FlakyStorageDriver();
            driver.initialize();
            driver.set(["ep", "commissioning"], { sessionParameters: { idleInterval: 1234, activeInterval: 321 } });
            const store = new EndpointStore(new StorageContext(driver, ["ep"]));
            await store.load();
            store.migrated("commissioning", {
                sessionParameters: undefined,
                advertisedIntervals: { idleInterval: 1234, activeInterval: 321 },
            });
            return { driver, store };
        }

        it("persist with the next write of the behavior", async () => {
            const { driver, store } = await legacyStore();
            expect(driver.get(["ep", "commissioning"], "sessionParameters")).not.undefined;

            await store.set({ commissioning: { tcpUnsupported: true } });

            expect(driver.values(["ep", "commissioning"])).deep.equals({
                advertisedIntervals: { idleInterval: 1234, activeInterval: 321 },
                tcpUnsupported: true,
            });
        });

        it("persist with a later write when the first one fails", async () => {
            const { driver, store } = await legacyStore();

            driver.failNextDelete = true;
            await expect(store.set({ commissioning: { tcpUnsupported: true } })).rejectedWith(StorageError);
            await store.set({ commissioning: { advertisedIntervals: undefined } });

            expect(driver.get(["ep", "commissioning"], "sessionParameters")).undefined;
            expect(driver.get(["ep", "commissioning"], "advertisedIntervals")).undefined;
        });

        it("do not overwrite a key a shared transaction wrote", async () => {
            const { driver, store } = await legacyStore();

            const tx = await driver.begin();
            await store.set({ commissioning: { advertisedIntervals: { idleInterval: 777 } } }, tx);
            tx.commit();
            await store.set({ commissioning: { tcpUnsupported: true } });

            expect(driver.values(["ep", "commissioning"])).deep.equals({
                advertisedIntervals: { idleInterval: 777 },
                tcpUnsupported: true,
            });
        });

        it("are not written through a shared transaction", async () => {
            const { driver, store } = await legacyStore();

            const tx = await driver.begin();
            await store.set({ commissioning: { tcpUnsupported: true } }, tx);
            tx.commit();

            expect(driver.get(["ep", "commissioning"], "sessionParameters")).not.undefined;
        });
    });
});

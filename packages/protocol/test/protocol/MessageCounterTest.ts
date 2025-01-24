/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Crypto,
    DataWriter,
    Endian,
    InternalError,
    StorageBackendMemory,
    StorageContext,
    StorageManager,
} from "#general";
import { MAX_COUNTER_VALUE_32BIT, MessageCounter, PersistedMessageCounter } from "#protocol/MessageCounter.js";

describe("MessageCounter", () => {
    let realGetRandomData = Crypto.get().getRandomData;
    let getRandom32BitNumber: (() => number) | undefined;
    let testStorageContext: StorageContext;

    before(() => {
        realGetRandomData = Crypto.get().getRandomData;
        Crypto.get().getRandomData = (length: number) => {
            if (length === 4 && getRandom32BitNumber !== undefined) {
                const writer = new DataWriter(Endian.Little);
                writer.writeUInt32(getRandom32BitNumber());
                return writer.toByteArray();
            }
            return realGetRandomData(length);
        };
    });

    after(() => {
        Crypto.get().getRandomData = realGetRandomData;
    });

    beforeEach(async () => {
        getRandom32BitNumber = () => 0x12345678;
        const testStorage = new StorageBackendMemory();
        const testStorageManager = new StorageManager(testStorage);
        await testStorageManager.initialize();
        testStorageContext = testStorageManager.createContext("TestContext");
    });

    afterEach(() => {
        getRandom32BitNumber = undefined;
    });

    describe("General Messagecounter tests", () => {
        it("gets initialized with a random value modified to 28bit", async () => {
            const messageCounter = new MessageCounter();
            expect(await messageCounter.getIncrementedCounter()).to.equal((0x12345679 >>> 4) + 2);
        });

        it("counter increases by 1", async () => {
            const messageCounter = new MessageCounter();
            const initCounter = await messageCounter.getIncrementedCounter();
            expect(initCounter).to.equal((0x12345679 >>> 4) + 2);
            expect(await messageCounter.getIncrementedCounter()).to.equal(initCounter + 1);
        });
    });

    describe("Persisted MessageCounter tests", () => {
        it("persistent initialization of counter with no persisted value", async () => {
            const messageCounter = await PersistedMessageCounter.create(testStorageContext, "counter");
            const counter = await messageCounter.getIncrementedCounter();
            expect(counter).to.equal((0x12345679 >>> 4) + 2);
            expect(testStorageContext.get<number>("counter"), counter.toString());
        });

        it("persistent initialization of counter with persisted value", async () => {
            await testStorageContext.set("counter", 0x12345678);
            const messageCounter = await PersistedMessageCounter.create(testStorageContext, "counter");
            const counter = await messageCounter.getIncrementedCounter();
            expect(counter).to.equal(0x12345679);
            expect(testStorageContext.get<number>("counter"), counter.toString());
        });

        it("persisted counter increases by 1", async () => {
            getRandom32BitNumber = () => 0x23456789;
            await testStorageContext.set("counter", 0x12345678);
            const messageCounter = await PersistedMessageCounter.create(testStorageContext, "counter");
            const initCounter = await messageCounter.getIncrementedCounter();
            expect(initCounter).to.equal(0x12345679);
            expect(testStorageContext.get<number>("counter"), initCounter.toString());
            expect(await messageCounter.getIncrementedCounter()).to.equal(initCounter + 1);
            expect(testStorageContext.get<number>("counter"), (initCounter + 1).toString());
        });

        it("persisted counter constructor throws in negative value in storage", async () => {
            await testStorageContext.set("counter", -1);
            await expect(PersistedMessageCounter.create(testStorageContext, "counter")).rejectedWith(
                "Invalid message counter value: -1",
            );
        });

        it("persisted counter constructor throws in too large value in storage", async () => {
            const tooLarge = MAX_COUNTER_VALUE_32BIT + 1;
            await testStorageContext.set("counter", tooLarge);
            await expect(PersistedMessageCounter.create(testStorageContext, "counter")).rejectedWith(
                `Invalid message counter value: ${tooLarge}`,
            );
        });
    });

    // Rollover tests use persisted message counter class because easier to inject the "high" value and code is the same
    describe("MessageCounter rollover tests", () => {
        it("Message counter throws if rollover is not allowed", async () => {
            await testStorageContext.set("counter", MAX_COUNTER_VALUE_32BIT);
            const messageCounter = await PersistedMessageCounter.create(testStorageContext, "counter");
            await expect(messageCounter.getIncrementedCounter()).rejectedWith(
                InternalError,
                "Message counter rollover not allowed.",
            );
        });

        it("Message counter rolls over if allowed", async () => {
            await testStorageContext.set("counter", MAX_COUNTER_VALUE_32BIT);
            const messageCounter = await PersistedMessageCounter.create(testStorageContext, "counter", () => {});
            expect(await messageCounter.getIncrementedCounter()).equals(0);
        });

        it("Message counter rolls over if allowed and calls callback on increase once", async () => {
            const initCounter = MAX_COUNTER_VALUE_32BIT - 101;
            await testStorageContext.set("counter", initCounter);
            let callbackCalled = false;
            const messageCounter = await PersistedMessageCounter.create(
                testStorageContext,
                "counter",
                () => {
                    callbackCalled = true;
                },
                100,
            );
            expect(callbackCalled).to.be.false;
            expect(await messageCounter.getIncrementedCounter()).equals(initCounter + 1);
            expect(callbackCalled).to.be.true;
            callbackCalled = false;
            expect(await messageCounter.getIncrementedCounter()).equals(initCounter + 2);
            expect(callbackCalled).to.be.false;
        });

        it("Message counter rolls over if allowed and calls callback already on init once", async () => {
            const initCounter = MAX_COUNTER_VALUE_32BIT - 100;
            await testStorageContext.set("counter", initCounter);
            let callbackCalled = false;
            const messageCounter = await PersistedMessageCounter.create(
                testStorageContext,
                "counter",
                () => {
                    callbackCalled = true;
                },
                100,
            );
            expect(callbackCalled).to.be.true;
            callbackCalled = false;
            expect(await messageCounter.getIncrementedCounter()).equals(initCounter + 1);
            expect(callbackCalled).to.be.false;
        });
    });
});

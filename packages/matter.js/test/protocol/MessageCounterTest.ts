/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../src/common/MatterError.js";
import { Crypto } from "../../src/crypto/Crypto.js";
import { MAX_COUNTER_VALUE_32BIT, MessageCounter, PersistedMessageCounter } from "../../src/protocol/MessageCounter.js";
import { StorageBackendMemory } from "../../src/storage/StorageBackendMemory.js";
import { StorageContext } from "../../src/storage/StorageContext.js";
import { StorageManager } from "../../src/storage/StorageManager.js";
import { Endian } from "../../src/util/ByteArray.js";
import { DataWriter } from "../../src/util/DataWriter.js";

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
        it("gets initialized with a random value modified to 28bit", () => {
            const messageCounter = new MessageCounter();
            expect(messageCounter.getIncrementedCounter()).to.equal((0x12345679 >>> 4) + 2);
        });

        it("counter increases by 1", () => {
            const messageCounter = new MessageCounter();
            const initCounter = messageCounter.getIncrementedCounter();
            expect(initCounter).to.equal((0x12345679 >>> 4) + 2);
            expect(messageCounter.getIncrementedCounter()).to.equal(initCounter + 1);
        });
    });

    describe("Persisted MessageCounter tests", () => {
        it("persistent initialization of counter with no persisted value", () => {
            const messageCounter = new PersistedMessageCounter(testStorageContext, "counter");
            const counter = messageCounter.getIncrementedCounter();
            expect(counter).to.equal((0x12345679 >>> 4) + 2);
            expect(testStorageContext.get<number>("counter"), counter.toString());
        });

        it("persistent initialization of counter with persisted value", () => {
            testStorageContext.set("counter", 0x12345678);
            const messageCounter = new PersistedMessageCounter(testStorageContext, "counter");
            const counter = messageCounter.getIncrementedCounter();
            expect(counter).to.equal(0x12345679);
            expect(testStorageContext.get<number>("counter"), counter.toString());
        });

        it("persisted counter increases by 1", () => {
            getRandom32BitNumber = () => 0x23456789;
            testStorageContext.set("counter", 0x12345678);
            const messageCounter = new PersistedMessageCounter(testStorageContext, "counter");
            const initCounter = messageCounter.getIncrementedCounter();
            expect(initCounter).to.equal(0x12345679);
            expect(testStorageContext.get<number>("counter"), initCounter.toString());
            expect(messageCounter.getIncrementedCounter()).to.equal(initCounter + 1);
            expect(testStorageContext.get<number>("counter"), (initCounter + 1).toString());
        });

        it("persisted counter constructor throws in negative value in storage", () => {
            testStorageContext.set("counter", -1);
            expect(() => new PersistedMessageCounter(testStorageContext, "counter")).throws(
                InternalError,
                "Invalid message counter value: -1",
            );
        });

        it("persisted counter constructor throws in too large value in storage", () => {
            testStorageContext.set("counter", MAX_COUNTER_VALUE_32BIT + 1);
            expect(() => new PersistedMessageCounter(testStorageContext, "counter")).throws(
                InternalError,
                `Invalid message counter value: ${MAX_COUNTER_VALUE_32BIT + 1}`,
            );
        });
    });

    // Rollover tests use persisted message counter class because easier to inject the "high" value and code is the same
    describe("MessageCounter rollover tests", () => {
        it("Message counter throws if rollover is not allowed", () => {
            testStorageContext.set("counter", MAX_COUNTER_VALUE_32BIT);
            const messageCounter = new PersistedMessageCounter(testStorageContext, "counter");
            expect(() => messageCounter.getIncrementedCounter()).throws(
                InternalError,
                "Message counter rollover not allowed.",
            );
        });

        it("Message counter rolls over if allowed", () => {
            testStorageContext.set("counter", MAX_COUNTER_VALUE_32BIT);
            const messageCounter = new PersistedMessageCounter(testStorageContext, "counter", () => {});
            expect(messageCounter.getIncrementedCounter()).equals(0);
        });

        it("Message counter rolls over if allowed and calls callback on increase once", () => {
            const initCounter = MAX_COUNTER_VALUE_32BIT - 101;
            testStorageContext.set("counter", initCounter);
            let callbackCalled = false;
            const messageCounter = new PersistedMessageCounter(
                testStorageContext,
                "counter",
                () => {
                    callbackCalled = true;
                },
                100,
            );
            expect(callbackCalled).to.be.false;
            expect(messageCounter.getIncrementedCounter()).equals(initCounter + 1);
            expect(callbackCalled).to.be.true;
            callbackCalled = false;
            expect(messageCounter.getIncrementedCounter()).equals(initCounter + 2);
            expect(callbackCalled).to.be.false;
        });

        it("Message counter rolls over if allowed and calls callback already on init once", () => {
            const initCounter = MAX_COUNTER_VALUE_32BIT - 100;
            testStorageContext.set("counter", initCounter);
            let callbackCalled = false;
            const messageCounter = new PersistedMessageCounter(
                testStorageContext,
                "counter",
                () => {
                    callbackCalled = true;
                },
                100,
            );
            expect(callbackCalled).to.be.true;
            callbackCalled = false;
            expect(messageCounter.getIncrementedCounter()).equals(initCounter + 1);
            expect(callbackCalled).to.be.false;
        });
    });
});

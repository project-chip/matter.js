/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    FinalizationError,
    SynchronousTransactionConflictError,
    TransactionDeadlockError,
} from "../../../../src/behavior/state/transaction/Errors.js";
import { Participant } from "../../../../src/behavior/state/transaction/Participant.js";
import { Resource } from "../../../../src/behavior/state/transaction/Resource.js";
import { Status } from "../../../../src/behavior/state/transaction/Status.js";
import { Transaction } from "../../../../src/behavior/state/transaction/Transaction.js";
import { MaybePromise } from "../../../../src/util/Promises.js";

class TestResource implements Resource {
    lockedBy?: Transaction;

    constructor(public description = "TestResource") {}
}

interface TestParticipant extends Participant {
    invoked: Array<string>;
}

function TestParticipant(options?: Partial<Participant>): TestParticipant {
    return {
        description: options?.description ?? "TestParticipant",

        invoked: Array<string>(),

        commit1(): MaybePromise<void> {
            this.invoked.push("commit1");
            return options?.commit1?.();
        },

        commit2(): MaybePromise<void> {
            this.invoked.push("commit2");
            return options?.commit2?.();
        },

        rollback(): MaybePromise<void> {
            this.invoked.push("rollback");
            return options?.rollback?.();
        },
    };
}

class TestTransaction extends Transaction {
    participant: Participant;

    constructor(participant?: Participant) {
        super();
        this.participant = participant ?? TestParticipant();
    }

    addParticipant() {
        this.addParticipants(this.participant);
    }

    expectInvoked(...invoked: string[]) {
        expect((this.participant as TestParticipant).invoked).deep.equals(invoked);
    }
}

function create({ participant }: { participant?: Participant } = {}) {
    if (!participant) {
        participant = TestParticipant();
    }

    const transaction = new TestTransaction(participant);

    transaction.addParticipant();

    return transaction;
}

describe("Transaction", () => {
    it("handles commit and rollback on shared", async () => {
        const transaction = create();
        await transaction.commit();

        transaction.addParticipant();
        await transaction.rollback();

        transaction.expectInvoked("rollback", "rollback");
    });

    it("flows through commit correctly", async () => {
        const transaction = create();

        expect(transaction.status).equals(Status.Shared);
        await transaction.begin();
        expect(transaction.status).equals(Status.Exclusive);
        await transaction.commit();
        expect(transaction.status).equals(Status.Shared);

        transaction.expectInvoked("commit1", "commit2");
    });

    it("flows through rollback correctly", async () => {
        const transaction = create();

        expect(transaction.status).equals(Status.Shared);
        await transaction.begin();
        expect(transaction.status).equals(Status.Exclusive);
        await transaction.rollback();
        expect(transaction.status).equals(Status.Shared);

        transaction.expectInvoked("rollback");
    });

    describe("keeps its promises", async () => {
        it("after commit", async () => {
            const transaction = create();

            await transaction.begin();
            const promise = transaction.promise;
            transaction.commit();

            expect(promise).eventually.equals(undefined);
        });

        it("after rolling back", async () => {
            const transaction = create();

            await transaction.begin();
            const promise = transaction.promise;
            await transaction.rollback();

            expect(promise).eventually.equals(undefined);
        });
    });

    it("rolls back and throws on commit phase 1 error", () => {
        it("synchronously", () => {
            const transaction = create({
                participant: TestParticipant({
                    commit1() {
                        throw new Error("oops");
                    },
                }),
            });

            transaction.beginSync();

            expect(() => transaction.commit()).throws(FinalizationError);

            transaction.expectInvoked("commit1", "rollback");
        });

        it("asychonously", async () => {
            const transaction = create({
                participant: TestParticipant({
                    async commit1() {
                        throw new Error("oops");
                    },
                }),
            });

            await transaction.begin();

            await expect(transaction.commit()).rejectedWith(FinalizationError);

            transaction.expectInvoked("commit1", "rollback");
        });
    });

    describe("locks and unlocks resource", async () => {
        describe("asynchronously", async () => {
            it("on becoming exclusive & committing", async () => {
                const transaction = create();

                const resource = new TestResource();
                await transaction.addResources(resource);

                await transaction.begin();

                expect(resource.lockedBy).equals(transaction);

                await transaction.commit();
                expect(resource.lockedBy).undefined;
            });

            it("on adding to exclusive & rolling back", async () => {
                const transaction = create();
                await transaction.begin();

                const resource = new TestResource();
                await transaction.addResources(resource);

                expect(resource.lockedBy).equals(transaction);

                await transaction.rollback();
                expect(resource.lockedBy).undefined;
            });
        });

        describe("synchronously", async () => {
            it("on becoming exclusive & rolling back", async () => {
                const transaction = create();

                const resource = new TestResource();
                transaction.addResourcesSync(resource);

                transaction.beginSync();

                expect(resource.lockedBy).equals(transaction);

                await transaction.rollback();
                expect(resource.lockedBy).undefined;
            });

            it("on adding to exclusive & committing", async () => {
                const transaction = create();
                transaction.beginSync();

                const resource = new TestResource();
                transaction.addResourcesSync(resource);

                expect(resource.lockedBy).equals(transaction);

                await transaction.commit();
                expect(resource.lockedBy).undefined;
            });
        });
    });

    describe("blocking locks", async () => {
        describe("synchronously", async () => {
            it("throws on becoming exclusive", async () => {
                const resource = new TestResource();

                const transaction1 = create();
                transaction1.addResourcesSync(resource);
                transaction1.beginSync();

                const transaction2 = create();
                transaction2.addResourcesSync(resource);
                expect(() => transaction2.beginSync()).throws(SynchronousTransactionConflictError);
                expect(transaction2.status).equals(Transaction.Status.Shared);
            });

            it("throws on adding to exclusive", async () => {
                const resource = new TestResource();

                const transaction1 = create();
                transaction1.addResourcesSync(resource);
                transaction1.beginSync();

                const transaction2 = create();
                transaction2.beginSync();
                expect(() => transaction2.addResourcesSync(resource)).throws(SynchronousTransactionConflictError);
                expect(transaction2.status).equals(Transaction.Status.Exclusive);
            });
        });

        describe("asynchronously", async () => {
            it("waits on becoming exclusive", async () => {
                const resource = new TestResource();

                const transaction1 = create();
                await transaction1.addResources(resource);
                await transaction1.begin();

                const transaction2 = create();
                await transaction2.addResources(resource);
                const t2begin = transaction2.begin();

                expect(resource.lockedBy).equals(transaction1);
                await transaction1.commit();
                expect(resource.lockedBy).equals(undefined);
                await t2begin;
                expect(resource.lockedBy).equals(transaction2);
            });

            it("waits on adding to exclusive", async () => {
                const resource = new TestResource();

                const transaction1 = create();
                await transaction1.addResources(resource);
                await transaction1.begin();

                const transaction2 = create();
                await transaction2.begin();
                const t2add = transaction2.addResources(resource);

                expect(resource.lockedBy).equals(transaction1);
                await transaction1.commit();
                await t2add;
                expect(resource.lockedBy).equals(transaction2);
            });
        });
    });

    describe("detects deadlocks", () => {
        it("directly", async () => {
            const resource1 = new TestResource("Food");
            const resource2 = new TestResource("Water");

            const transaction1 = create();
            await transaction1.addResources(resource1);
            await transaction1.begin();

            const transaction2 = create();
            await transaction2.addResources(resource2);
            await transaction2.begin();
            const t2add1 = transaction2.addResources(resource1);

            await expect(transaction1.addResources(resource2)).rejectedWith(TransactionDeadlockError);
            await transaction1.rollback();
            await t2add1;
        });

        it("indirectly", async () => {
            const resource1 = new TestResource("Food");
            const resource2 = new TestResource("Water");
            const resource3 = new TestResource("Shelter");

            const transaction1 = create();
            await transaction1.addResources(resource1);
            await transaction1.begin();

            const transaction2 = create();
            await transaction2.addResources(resource2);
            await transaction2.begin();
            const t2add1 = transaction2.addResources(resource1);

            const transaction3 = create();
            await transaction3.addResources(resource3);
            await transaction3.begin();
            const t3add2 = transaction3.addResources(resource2);

            // 2 waits on 1, 3 waits on 2, then deadlock when 1 waits on 3
            await expect(transaction1.addResources(resource3)).rejectedWith(TransactionDeadlockError);
            await transaction1.rollback();
            await t2add1;
            await transaction2.rollback();
            await t3add2;
        });
    });
});

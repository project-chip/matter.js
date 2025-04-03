/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "#log/Diagnostic.js";
import { Logger } from "#log/Logger.js";
import { ImplementationError, ReadOnlyError } from "#MatterError.js";
import { Time, Timer } from "#time/Time.js";
import { Observable } from "#util/Observable.js";
import { MaybePromise } from "#util/Promises.js";
import { describeList } from "#util/String.js";
import { FinalizationError, TransactionDestroyedError, TransactionFlowError, UnsettledStateError } from "./errors.js";
import type { Participant } from "./Participant.js";
import type { Resource } from "./Resource.js";
import { ResourceSet } from "./ResourceSet.js";
import { Status } from "./Status.js";
import type { Transaction } from "./Transaction.js";

const logger = Logger.get("Transaction");

// Controls the number of times we will cycle pre-commit handlers waiting for state to settle
const MAX_PRECOMMIT_CYCLES = 5;

// Controls the number of commits that may occur due to mutation in post-commit handlers
const MAX_CHAINED_COMMITS = 5;

/**
 * This is the only public interface to this file.
 */
export function act<T>(via: string, actor: (transaction: Transaction) => T): T {
    const tx = new Tx(via);
    let commits = 0;

    // Post-commit logic may result in the transaction requiring commit again so commit iteratively up to
    // MAX_CHAINED_COMMITS times
    function commitTransaction(finalResult: T): MaybePromise<T> {
        commits++;

        if (commits > MAX_CHAINED_COMMITS) {
            throw new TransactionFlowError(
                `Transaction commits have cascaded ${MAX_CHAINED_COMMITS} times which likely indicates an infinite loop`,
            );
        }

        // Avoid MaybePromise.then to shorten stack traces
        const result = tx.commit();
        if (MaybePromise.is(result)) {
            return result.then(() => {
                if (tx.status === Status.Exclusive) {
                    return commitTransaction(finalResult);
                }
                return finalResult;
            });
        } else if (tx.status === Status.Exclusive) {
            return commitTransaction(finalResult);
        }

        return finalResult;
    }

    const handleTransactionError = ((error: any) => {
        // If we've committed, error happened during commit and we've already logged and cleaned up
        if (commits) {
            throw error;
        }

        logger.error("Rolling back", tx.via, "due to error:", Diagnostic.weak(error?.message || `${error}`));

        try {
            const result = tx.rollback();
            if (MaybePromise.is(result)) {
                return Promise.resolve(result).catch(error2 => {
                    if (error2 !== error) {
                        logger.error("Secondary error in", tx.via, "rollback:", error2);
                    }
                    throw error;
                });
            }
        } catch (error2) {
            if (error2 !== error) {
                logger.error("Secondary error in", tx.via, "rollback:", error2);
            }
        }

        throw error;
    }) as (error: any) => MaybePromise<T>; // Cast because otherwise type is MaybePromise<void>

    const closeTransaction = tx.close.bind(tx);

    let isAsync = false;
    try {
        // Execute the actor
        const actorResult = actor(tx);

        // If actor is async, chain commit and close asynchronously
        if (MaybePromise.is(actorResult)) {
            // If the actor is async mark the transaction as async; this will enable reporting on lock changes
            isAsync = tx.isAsync = true;
            return Promise.resolve(actorResult)
                .then(commitTransaction, handleTransactionError)
                .finally(closeTransaction) as T;
        }

        // Actor is not async but if commit is, chain closeTransaction
        const commitResult = commitTransaction(actorResult);
        if (MaybePromise.is(commitResult)) {
            isAsync = true;
            return Promise.resolve(commitResult).catch(handleTransactionError).finally(closeTransaction) as T;
        }

        // Fully synchronous action
        return commitResult;
    } catch (e) {
        const result = handleTransactionError(e);

        // Above throws if synchronous so this is async code path
        isAsync = true;
        return Promise.resolve(result).finally(closeTransaction) as T;
    } finally {
        if (!isAsync) {
            tx.close();
        }
    }
}

/**
 * The concrete implementation of the Transaction interface.
 */
class Tx implements Transaction {
    #participants = new Set<Participant>();
    #roles = new Map<{}, Participant>();
    #resources = new Set<Resource>();
    #status;
    #waitingOn?: Iterable<Transaction>;
    #via: string;
    #shared?: Observable<[]>;
    #closed?: Observable<[]>;
    #isAsync = false;
    #reportingLocks = false;

    constructor(via: string, readonly = false) {
        this.#via = Diagnostic.via(via);
        if (readonly) {
            this.#status = Status.ReadOnly;
        } else {
            this.#status = Status.Shared;
        }
    }

    close() {
        Monitor.delete(this);
        this.#status = Status.Destroyed;
        this.#resources.clear();
        this.#roles.clear();
        this.#participants.clear();
        this.#closed?.emit();
    }

    get via() {
        return this.#via;
    }

    get status() {
        return this.#status;
    }

    get participants() {
        return this.#participants;
    }

    get resources() {
        return this.#resources;
    }

    get waitingOn() {
        return this.#waitingOn;
    }

    get isAsync(): boolean {
        return this.#isAsync;
    }

    set isAsync(isAsync: true) {
        // When the transaction is noted as async we start reporting locks.  A further optimization would be to not even
        // acquire locks for synchronous transactions
        if (!this.#isAsync) {
            this.#locksChanged(this.#resources);
        }
        this.#isAsync = isAsync;
    }

    onShared(listener: () => void, once?: boolean) {
        if (this.status === Status.ReadOnly) {
            return;
        }
        if (this.#shared === undefined) {
            this.#shared = Observable();
        }

        this.#shared[once ? "once" : "on"](listener);
    }

    onClose(listener: () => void) {
        if (this.status === Status.ReadOnly) {
            return;
        }
        if (this.status === Status.Destroyed) {
            listener();
        }
        if (this.#closed === undefined) {
            this.#closed = Observable();
        }
        this.#closed.once(listener);
    }

    async addResources(...resources: Resource[]) {
        this.#assertAvailable();

        if (this.#status === Status.Exclusive) {
            const set = new ResourceSet(this, resources);
            const locked = await set.acquireLocks();
            this.#locksChanged(locked);
        }

        this.addResourcesSync(...resources);
    }

    addResourcesSync(...resources: Resource[]) {
        this.#assertAvailable();

        if (this.#status === Status.Exclusive) {
            const set = new ResourceSet(this, resources);
            const locked = set.acquireLocksSync();
            this.#locksChanged(locked);
        } else if (this.#status !== Status.Shared) {
            throw new TransactionFlowError(`Cannot add resources to transaction that is ${this.status}`);
        }

        for (const resource of resources) {
            this.#resources.add(resource);
        }
    }

    async begin() {
        this.#assertAvailable();

        if (this.status === Status.Exclusive) {
            return;
        }
        if (this.status !== Status.Shared) {
            throw new TransactionFlowError(`Cannot begin write transaction because transaction is ${this.#status}`);
        }

        this.#status = Status.Waiting;
        try {
            const resources = new ResourceSet(this, this.#resources);
            const locked = await resources.acquireLocks();
            this.#locksChanged(locked);
            this.#status = Status.Exclusive;
        } catch (e) {
            this.#status = Status.Shared;
            throw e;
        }
    }

    beginSync() {
        this.#assertAvailable();

        if (this.status === Status.Exclusive) {
            return;
        }
        if (this.status !== Status.Shared) {
            throw new TransactionFlowError(`Cannot begin write transaction because transaction is ${this.#status}`);
        }

        this.#status = Status.Exclusive;
        try {
            const resources = new ResourceSet(this, this.#resources);
            const locked = resources.acquireLocksSync();
            this.#locksChanged(locked);
        } catch (e) {
            this.#status = Status.Shared;
            throw e;
        }
    }

    addParticipants(...participants: Participant[]) {
        this.#assertAvailable();

        for (const participant of participants) {
            if (this.#participants.has(participant)) {
                continue;
            }

            // This sanity check uses the participant's diagnostic name to prevent logic errors from installing multiple
            // participants that modify the same data
            if ([...this.#participants].findIndex(p => p.toString() === participant.toString()) !== -1) {
                throw new ImplementationError(`Participant ${participant} identity is not unique`);
            }

            this.#participants.add(participant);

            if (participant.role !== undefined) {
                if (this.#roles.has(participant.role)) {
                    throw new TransactionFlowError(`A participant is already registered for role ${participant.role}`);
                }
                this.#roles.set(participant.role, participant);
            }
        }
    }

    getParticipant(role: {}) {
        this.#assertAvailable();

        return this.#roles.get(role);
    }

    commit() {
        this.#assertAvailable();

        if (this.#status === Status.Shared) {
            // Use rollback() to reset state
            return this.rollback();
        }

        // Perform the actual commit once preCommit completes
        const performCommit = () => {
            const participants = [...this.#participants];
            const result = this.#finalize(Status.CommittingPhaseOne, "committed", this.#executeCommit.bind(this));
            if (MaybePromise.is(result)) {
                return result.then(() => this.#executePostCommit(participants));
            }
            return this.#executePostCommit(participants);
        };

        const result = this.#executePreCommit();
        if (MaybePromise.is(result)) {
            return result.then(performCommit);
        }
        return performCommit();
    }

    rollback() {
        this.#assertAvailable();

        return this.#finalize(Status.RollingBack, "rolled back", () => this.#executeRollback());
    }

    waitFor(others: Set<Transaction>) {
        this.#assertAvailable();

        if (this.waitingOn) {
            throw new TransactionFlowError("Attempted wait on a transaction that is already waiting");
        }

        logger.log(
            Status.slowLogLevel,
            "Tx",
            this.via,
            "waiting on",
            describeList("and", ...[...others].map(other => other.via)),
        );

        this.#waitingOn = others;
        return new Promise<void>(resolve => {
            for (const other of others) {
                other.onShared(() => {
                    others.delete(other);
                    if (!others.size) {
                        this.#waitingOn = undefined;
                        resolve();
                    }
                }, true);
            }
        }).finally(() => (this.#waitingOn = undefined));
    }

    toString() {
        return `transaction<${this.via}>`;
    }

    treatAsSlow() {
        Monitor.delete(this);
        if (this.#reportingLocks) {
            return;
        }
        this.#reportingLocks = true;
        this.#locksChanged(this.#resources);
    }

    /**
     * Shared implementation for commit and rollback.
     */
    #finalize(status: Status, why: string, finalizer: () => MaybePromise) {
        // Sanity check on status
        if (this.status !== Status.Shared && this.status !== Status.Exclusive) {
            throw new TransactionFlowError(
                `Illegal attempt to enter status ${status} when transaction is ${this.#status}`,
            );
        }

        // Post-finalization state reset
        const cleanup = () => {
            // Release locks
            const set = new ResourceSet(this, this.#resources);
            const unlocked = set.releaseLocks();
            this.#locksChanged(unlocked, `${why} and unlocked`);

            // Reset "slow" transaction state
            Monitor.delete(this);
            this.#reportingLocks = false;

            // Release participants
            this.#participants.clear();

            // Revert to shared
            this.#status = Status.Shared;

            // Notify listeners
            this.#shared?.emit();
        };

        // Perform the commit or rollback
        let isAsync = false;
        try {
            this.#status = status;
            const result = finalizer();
            if (MaybePromise.is(result)) {
                isAsync = true;
                return Promise.resolve(result).finally(cleanup);
            }
        } finally {
            if (!isAsync) {
                cleanup();
            }
        }
    }

    /**
     * Iteratively execute pre-commit until all participants "settle" and report no possible mutation.
     */
    #executePreCommit(): MaybePromise<void> {
        let mayHaveMutated = false;
        let abortedDueToError = false;
        let iterator = this.participants[Symbol.iterator]();
        let cycles = 1;

        const errorRollback = (error?: any) => {
            logger.error(
                "Rolling back",
                this.via,
                "due to pre-commit error:",
                Diagnostic.weak(error?.message || `${error}`),
            );

            const result = this.#finalize(Status.RollingBack, "rolled back", () => this.#executeRollback());

            if (MaybePromise.is(result)) {
                return result.then(() => {
                    throw error;
                });
            }

            throw error;
        };

        const nextCycle = () => {
            // Guard against infinite loops
            cycles++;
            if (cycles > MAX_PRECOMMIT_CYCLES) {
                return errorRollback(
                    new UnsettledStateError(
                        `State has not settled after ${MAX_PRECOMMIT_CYCLES} pre-commit cycles which likely indicates an infinite loop`,
                    ),
                );
            }

            // Restart iteration at the first participant
            mayHaveMutated = false;
            iterator = this.participants[Symbol.iterator]();
        };

        const nextPreCommit = (previousResult?: boolean): MaybePromise<void> => {
            // If an error occurred
            if (abortedDueToError) {
                return;
            }

            // When resuming after an async pre-commit handler, "previousResult" is the handler's return value
            // indicating whether mutation may have occurred
            if (previousResult) {
                mayHaveMutated = true;
            }

            // Cycle through participants until exhausted, there is an error or a pre-commit function is async
            while (true) {
                const n = iterator.next();

                // If we've exhausted participants, we are either done or need to restart the cycle
                if (n.done) {
                    // Restart the cycle if necessary
                    if (mayHaveMutated) {
                        const result = nextCycle();
                        if (MaybePromise.is(result)) {
                            return result;
                        }
                        continue;
                    }

                    // Done
                    break;
                }

                // Process the next participant
                const participant = n.value;

                // When an error occurs this function performs rollback then throws
                const handleError = (error: any) => {
                    abortedDueToError = true;
                    return errorRollback(error);
                };

                // Execute the pre-commit for this participant
                try {
                    const result = participant.preCommit?.();
                    if (MaybePromise.is(result)) {
                        return Promise.resolve(result).catch(handleError).then(nextPreCommit);
                    }
                    if (result) {
                        mayHaveMutated = true;
                    }
                } catch (e) {
                    return handleError(e);
                }
            }
        };

        return nextPreCommit();
    }

    /**
     * Commit logic passed to #finalize.
     */
    #executeCommit(): MaybePromise {
        //this.#log("commit");
        const result = this.#executeCommit1();
        if (MaybePromise.is(result)) {
            return Promise.resolve(result).then(this.#executeCommit2.bind(this));
        }
        return this.#executeCommit2();
    }

    #executeCommit1(): MaybePromise {
        // Commit phase 1

        let needRollback = false;
        let asyncCommits: undefined | Promise<void>[];
        for (const participant of this.participants) {
            const handleParticipantError = (error: any) => {
                logger.error(`Error committing ${participant} (phase one):`, error);
                needRollback = true;
            };

            try {
                const result = participant.commit1?.();
                if (MaybePromise.is(result)) {
                    if (!asyncCommits) {
                        asyncCommits = [];
                    }
                    asyncCommits.push(Promise.resolve(result).catch(handleParticipantError));
                }
            } catch (e) {
                handleParticipantError(e);
                break;
            }
        }

        const abortIfFailed = () => {
            if (needRollback) {
                const result = this.#executeRollback();

                if (MaybePromise.is(result)) {
                    return result.then(() => {
                        throw new FinalizationError("Rolled back due to commit phase one error");
                    });
                }

                throw new FinalizationError("Rolled back due to commit phase one error");
            }
        };

        if (asyncCommits) {
            return Promise.allSettled(asyncCommits).then(abortIfFailed);
        }

        return abortIfFailed();
    }

    #executeCommit2() {
        // Commit phase 2
        this.#status = Status.CommittingPhaseTwo;
        let errored: undefined | Array<Participant>;
        let ongoing: undefined | Array<Promise<void>>;
        for (const participant of this.participants) {
            const promise = MaybePromise.then(
                () => participant.commit2?.(),
                undefined,
                error => {
                    logger.error(`Error committing (phase two) ${participant}, state inconsistency possible:`, error);

                    if (errored) {
                        errored.push(participant);
                    } else {
                        errored = [participant];
                    }
                },
            );

            if (MaybePromise.is(promise)) {
                if (ongoing) {
                    ongoing.push(promise as Promise<void>);
                } else {
                    ongoing = [promise as Promise<void>];
                }
            }
        }

        if (ongoing) {
            // Async commit
            return Promise.allSettled(ongoing).then(() => throwIfErrored(errored, "in commit phase 2"));
        } else {
            // Synchronous commit
            throwIfErrored(errored, "in commit phase 2");
        }
    }

    #executePostCommit(participants: Participant[]) {
        const participantIterator = participants[Symbol.iterator]();

        const postCommitNextParticipant = (): MaybePromise => {
            const next = participantIterator.next();

            if (next.done) {
                return;
            }

            const participant = next.value;

            return MaybePromise.then(
                () => participant.postCommit?.(),
                () => postCommitNextParticipant(),
                error => {
                    logger.error(`Error post-commit of ${participant}:`, error);
                },
            );
        };

        return postCommitNextParticipant();
    }

    /**
     * Rollback logic passed to #finish.
     */
    #executeRollback() {
        this.#status = Status.RollingBack;
        let errored: undefined | Array<Participant>;
        let ongoing: undefined | Array<Promise<void>>;

        for (const participant of this.participants) {
            // Perform rollback
            const promise = MaybePromise.then(
                () => participant.rollback?.(),
                undefined,
                error => {
                    logger.error(`Error rolling back ${participant}, state inconsistency possible:`, error);

                    if (errored) {
                        errored.push(participant);
                    } else {
                        errored = [participant];
                    }
                },
            );

            // If commit is asynchronous, collect the promise
            if (MaybePromise.is(promise)) {
                if (ongoing) {
                    ongoing.push(promise as Promise<void>);
                } else {
                    ongoing = [promise as Promise<void>];
                }
            }
        }

        const finished = () => {
            this.#status = Status.Shared;
            throwIfErrored(errored, "in commit phase 2");
        };

        if (ongoing) {
            // Async commit
            return Promise.allSettled(ongoing).then(finished);
        } else {
            // Synchronous commit
            finished();
        }
    }

    #locksChanged(resources: Set<Resource>, how = "locked") {
        if (!resources.size || !this.isAsync) {
            return;
        }

        if (!this.#reportingLocks) {
            Monitor.add(this);
            return;
        }

        let resourceDescription;
        if (how === "locked") {
            resourceDescription = Diagnostic.strong(describeList("and", ...[...resources].map(r => r.toString())));
        } else {
            resourceDescription = `${resources.size} resource${resources.size === 1 ? "" : "s"}`;
        }
        logger.log(Status.slowLogLevel, this.via, how, resourceDescription);
    }

    #assertAvailable() {
        if (this.#status === Status.Destroyed) {
            logger.warn(
                "You have accessed transaction",
                this.via,
                "outside of the context in which it was active.  Open a new context or ensure your operation completes before the context exits",
            );
            throw new TransactionDestroyedError(`Transaction ${this.#via} is destroyed`);
        }
        if (this.#status === Status.ReadOnly) {
            throw new ReadOnlyError();
        }
    }
}

/**
 * A read-only offline transaction you may use without context.
 */
export const ReadOnlyTransaction = new Tx("readonly", true);

function throwIfErrored(errored: undefined | Array<Participant>, when: string) {
    if (!errored?.length) {
        return;
    }
    const suffix = errored.length > 1 ? "s" : "";
    throw new FinalizationError(
        `Unhandled error${suffix} ${when} participant${suffix} ${describeList(
            "and",
            ...errored.map(p => p.toString()),
        )}`,
    );
}

/**
 * "Slow" async transaction monitoring implementation.
 */
const Monitor = (function () {
    const monitored = new Map<Tx, number>();
    let monitor: Timer | undefined;

    function check() {
        const now = Time.nowMs();
        for (const [tx, slowAt] of monitored) {
            if (now > slowAt) {
                tx.treatAsSlow();
            }
        }
    }

    return {
        add(tx: Tx) {
            const { slowTransactionMs } = Status;
            if (slowTransactionMs < 0) {
                return;
            }

            if (!slowTransactionMs) {
                tx.treatAsSlow();
                return;
            }

            if (monitored.has(tx)) {
                return;
            }

            monitored.set(tx, Time.nowMs() + slowTransactionMs);
            if (monitor === undefined) {
                monitor = Time.getPeriodicTimer("tx-lock-monitor", slowTransactionMs / 10, check);
                monitor.start();
            }
        },

        delete(tx: Tx) {
            monitored.delete(tx);
            if (!monitored.size && monitor) {
                monitor.stop();
                monitor = undefined;
            }
        },
    };
})();

/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReadOnlyError } from "../../../common/MatterError.js";
import { Diagnostic } from "../../../log/Diagnostic.js";
import { Logger } from "../../../log/Logger.js";
import { MaybePromise, createPromise } from "../../../util/Promises.js";
import { describeList } from "../../../util/String.js";
import { FinalizationError, TransactionDestroyedError, TransactionFlowError } from "./Errors.js";
import type { Participant } from "./Participant.js";
import type { Resource } from "./Resource.js";
import { ResourceSet } from "./ResourceSet.js";
import { Status } from "./Status.js";
import { Transaction } from "./Transaction.js";

const logger = Logger.get("Transaction");

const MAX_CHAINED_COMMITS = 5;

/**
 * This is the only public interface to this file.
 */
export function executeTransaction<T>(
    via: string,
    actor: (transaction: Transaction) => MaybePromise<T>,
): MaybePromise<T> {
    const tx = new Tx(via);
    let commits = 0;

    // Post-commit logic may result in the transaction requiring commit again so commit iteratively up to
    // MAX_CHAINED_COMMITS times
    function commit(): MaybePromise {
        commits++;

        if (commits > MAX_CHAINED_COMMITS) {
            throw new TransactionFlowError(
                `Transaction commits have cascaded ${MAX_CHAINED_COMMITS} times which likely indicates a logic error`,
            );
        }

        return MaybePromise.then(
            () => tx.commit(),
            () => {
                if (tx.status === Transaction.Status.Exclusive) {
                    return commit();
                }
            },
        );
    }

    return MaybePromise.finally(
        () =>
            MaybePromise.then(
                () => actor(tx),

                result => {
                    return MaybePromise.then(
                        () => commit(),
                        () => result,
                    );
                },

                error => {
                    // If we've committed, error happened during commit and we've already logged and cleaned up
                    if (commits) {
                        throw error;
                    }

                    let promise = MaybePromise.then(
                        () => {
                            logger.warn("Rolling back", tx.via, "due to error:", error);
                            return tx.rollback();
                        },
                        undefined,
                        error2 => {
                            logger.error("Secondary error in", tx.via, "rollback:", error2);
                        },
                    );

                    promise = MaybePromise.finally(promise, () => {
                        tx.destroy();
                        throw error;
                    });

                    return promise as MaybePromise<T>;
                },
            ),

        () => {
            tx.destroy();
        },
    );
}

/**
 * The concrete implementation of the Transaction interface.
 */
class Tx implements Transaction {
    #participants = new Set<Participant>();
    #roles = new Map<{}, Participant>();
    #resources = new Set<Resource>();
    #status;
    #promise?: Promise<void>;
    #resolve?: () => void;
    #waitingOn?: Iterable<Transaction>;
    #via: string;
    #destroyed?: Promise<void>;
    #resolveDestroyed?: () => void;

    constructor(via: string, readonly = false) {
        this.#via = Diagnostic.via(via);
        if (readonly) {
            this.#status = Status.ReadOnly;
        } else {
            this.#status = Status.Shared;
        }
    }

    destroy() {
        this.#status = Status.Destroyed;
        this.#promise = this.#resolve = this.#waitingOn = undefined;
        this.#resources.clear();
        this.#roles.clear();
        this.#participants.clear();
        this.#resolveDestroyed?.();
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

    get promise() {
        if (this.#promise === undefined) {
            const { promise, resolver } = createPromise<void>();
            this.#promise = promise;
            this.#resolve = resolver;
        }
        return this.#promise;
    }

    get destroyed() {
        if (this.status === Status.Destroyed) {
            return Promise.resolve();
        }
        if (this.#destroyed === undefined) {
            this.#destroyed = new Promise(resolve => (this.#resolveDestroyed = resolve));
        }
        return this.#destroyed;
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
            debugger;
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

            this.#participants.add(participant);

            if (participant.role !== undefined) {
                if (this.#roles.has(participant.role)) {
                    throw new TransactionFlowError(`A participant is already registered for role ${participant.role}`);
                }
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

        const participants = [...this.#participants];

        // Perform the actual commit
        return MaybePromise.then(
            () => this.#finalize(Status.CommittingPhaseOne, "committed", () => this.#executeCommit()),
            () => this.#executePostCommit(participants),
        );
    }

    rollback() {
        this.#assertAvailable();

        return this.#finalize(Status.RollingBack, "rolled back", () => this.#executeRollback());
    }

    async waitFor(others: Iterable<Transaction>) {
        this.#assertAvailable();

        if (this.waitingOn) {
            throw new TransactionFlowError("Attempted wait on a transaction that is already waiting");
        }

        try {
            this.#waitingOn = others;
            await Promise.all([...others].map(other => other.promise));
        } finally {
            this.#waitingOn = undefined;
        }
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
            this.#locksChanged(unlocked, `${why}; unlocked`);

            // Release participants
            this.#participants.clear();

            // Revert to shared
            this.#status = Status.Shared;

            // Resolve the transaction promise
            const resolve = this.#resolve;
            this.#promise = undefined;
            this.#resolve = undefined;
            resolve?.();
        };

        // Perform the commit or rollback
        return MaybePromise.finally(
            () => {
                this.#status = status;
                return finalizer();
            },
            () => cleanup(),
        );
    }

    /**
     * Commit logic passed to #finish.
     */
    #executeCommit(): MaybePromise {
        //this.#log("commit");
        return MaybePromise.then(
            () => this.#executeCommit1(),
            () => this.#executeCommit2(),
        );
    }

    #executeCommit1(): MaybePromise {
        // Commit phase 1

        // Ugh.  Iterating with MaybePromise sucks, need to make a proper
        // sync/async wrapper that acts like a promise
        const participantIterator = this.participants[Symbol.iterator]();

        const commitNextParticipant = (): MaybePromise => {
            const next = participantIterator.next();

            if (next.done) {
                return;
            }

            const participant = next.value;

            return MaybePromise.then(
                () => participant.commit1(),
                () => commitNextParticipant(),
                error => {
                    logger.error(`Error committing ${participant} (phase one), rolling back:`, error);
                    return MaybePromise.then(this.#executeRollback(), () => {
                        throw new FinalizationError(
                            `Transaction rolled back due to unhandled error in commit (phase one) participant ${participant}`,
                        );
                    });
                },
            );
        };

        return commitNextParticipant();
    }

    #executeCommit2() {
        // Commit phase 2
        this.#status = Status.CommittingPhaseTwo;
        let errored: undefined | Array<Participant>;
        let ongoing: undefined | Array<Promise<void>>;
        for (const participant of this.participants) {
            const promise = MaybePromise.then(
                () => participant.commit2(),
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
        //this.#log("rollback");
        this.#status = Status.RollingBack;
        let errored: undefined | Array<Participant>;
        let ongoing: undefined | Array<Promise<void>>;

        for (const participant of this.participants) {
            // Perform rollback
            const promise = MaybePromise.then(
                () => participant.rollback(),
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

    #log(...message: unknown[]) {
        logger.debug("Transaction", this.#via, message);
    }

    #locksChanged(resources: Set<Resource>, how = "locked") {
        if (!resources.size) {
            return;
        }

        this.#log(how, Diagnostic.strong(describeList("and", ...[...resources].map(r => r.toString()))));
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

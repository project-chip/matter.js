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
import { FinalizationError, TransactionFlowError } from "./Errors.js";
import type { Participant } from "./Participant.js";
import type { Resource } from "./Resource.js";
import { ResourceSet } from "./ResourceSet.js";
import { Status } from "./Status.js";
import { Transaction } from "./Transaction.js";

const logger = Logger.get("Transaction");

export function executeTransaction<T>(via: string, actor: (transaction: Transaction) => MaybePromise<T>): MaybePromise<T> {
    const tx = new Tx(via);

    let committed = false;
    return MaybePromise.finally(
        () => MaybePromise.then(
            () => {
                actor(tx);
            },

            result => {
                committed = true;

                return MaybePromise.then(
                    () => tx.commit(),
                    () => result, 
                )
            },

            error => {
                // If we've committed, error happened during commit and we've already logged cleaned up
                if (committed) {
                    throw error;
                }

                // If we haven't committed, error is in the actor
                return MaybePromise.then(
                    (): T => {
                        logger.warn("Transaction", tx.via, ": Rolling back due to error");
                        tx.rollback();
                        tx.destroy();
                        throw error;
                    },

                    undefined,

                    (error2): T => {
                        logger.error("Transaction", tx.via, ": Error-induced rolled back caused additional error:", error2);
                        tx.destroy();                    
                        throw error;
                    },
                )
            },
        ),

        () => {
            tx.destroy();
        }
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
            // Use rollback() to inform participants to refresh state
            return this.rollback();
        } else {
            // Perform the actual commit
            return this.#finalize(Status.CommittingPhaseOne, "committed", () => this.#executeCommit());
        }
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
            this.#locksChanged(unlocked, `${why}; released`);

            // Release participants
            this.#participants.clear();

            // Revert to shared
            this.#status = Status.Shared;

            // Resolve the transaction promise
            const resolve = this.#resolve;
            this.#promise = undefined;
            this.#resolve = undefined;
            resolve?.();
        }

        // Perform the commit or rollback
        let promise: MaybePromise = undefined;
        try {
            this.#status = status;
            promise = finalizer();
            if (MaybePromise.is(promise)) {
                promise = promise.finally(cleanup);
            }
        } finally {
            if (!promise) {
                cleanup();
            }
        }

        // If synchronous we're done, if async this promise resolves at
        // completion
        return promise;
    }

    /**
     * Commit logic passed to #finish.
     */
    #executeCommit(): MaybePromise {
        this.#log("commit");
        const result = this.#executeCommit1();
        if (MaybePromise.is(result)) {
            return result.then(() => this.#executeCommit2());
        }
        return this.#executeCommit2();
    }

    #executeCommit1(): MaybePromise {
        // Commit phase 1
        const phase1Error = (participant: Participant, error: any) => {
            logger.error(`Error committing ${participant} (phase one), rolling back:`, error);
            this.#status = Status.RollingBack;
            return MaybePromise.then(this.#executeRollback(), () => {
                throw new FinalizationError(
                    `Transaction rolled back due to unhandled error in commit (phase one) participant ${participant}`,
                );
            });
        }

        // Ugh.  Iterating with MaybePromise sucks, need to make a proper
        // sync/async wrapper that acts like a promise
        const participantIterator = this.participants[Symbol.iterator]();

        function commitNextParticipant() {
            const next = participantIterator.next();

            if (next.done) {
                return;
            }

            const participant = next.value;

            try {
                const promise = participant.commit1();
                if (MaybePromise.is(promise)) {
                    return promise
                        .then(() => { commitNextParticipant() })
                        .catch(e => phase1Error(participant, e));
                } else {
                    commitNextParticipant();
                }
            } catch (e) {
                return phase1Error(participant, e);
            }
        }

        return commitNextParticipant();
    }

    #executeCommit2() {
        // Commit phase 2
        const phase2Error = (participant: Participant, error: any) => {
            logger.error(
                `Error committing (phase two) ${participant}, state may become inconsistent:`,
                error,
            );

            if (errored) {
                errored.push(participant);
            } else {
                errored = [ participant ];
            }
        }

        this.#status = Status.CommittingPhaseTwo;
        let errored: undefined | Array<Participant>;
        let ongoing: undefined | Array<Promise<void>>;
        for (const participant of this.participants) {
            try {
                let promise = participant.commit2();
                if (MaybePromise.is(promise)) {
                    promise = promise.catch(e => phase2Error(participant, e));
                    if (ongoing) {
                        ongoing.push(promise);
                    } else {
                        ongoing = [ promise ];
                    }
                }
            } catch (e) {
                return phase2Error(participant, e);
            }
        }

        if (ongoing) {
            // Async commit
            return Promise.all(ongoing).then(() => throwIfErrored(errored, "in commit phase 2"));
        } else {
            // Synchronous commit
            throwIfErrored(errored, "in commit phase 2");
        }
    }

    /**
     * Rollback logic passed to #finish.
     */
    #executeRollback() {
        this.#log("rollback");
        let errored: undefined | Array<Participant>;
        let ongoing: undefined | Array<Promise<void>>;
        for (const participant of this.participants) {
            try {
                let promise = participant.rollback();
                if (MaybePromise.is(promise)) {
                    promise = promise.catch(e => error(participant, e));
                    if (ongoing) {
                        ongoing.push(promise);
                    } else {
                        ongoing = [ promise ];
                    }
                }
            } catch (e) {
                error(participant, e);
            }
        }
        throwIfErrored(errored, "rolling back");

        function error(participant: Participant, error: any) {
            logger.error(`Error rolling back ${participant}, state may become inconsistent:`, error);

            if (errored) {
                errored.push(participant);
            } else {
                errored = [ participant ];
            }
        }
    }

    #log(...message: unknown[]) {
        logger.debug("Transaction", this.#via, message);
    }

    #locksChanged(resources: Set<Resource>, how = "acquired") {
        if (!resources.size) {
            return;
        }

        this.#log(
            how,
            `write lock${resources.size > 1 ? "s" : ""} for`,
            describeList("and", ...[...resources].map(r => r.toString()))
        );
    }

    #assertAvailable() {
        if (this.#status === Status.Destroyed) {
            logger.warn(
                "You have accessed transaction",
                this.via,
                "outside of the context in which it was active.  You must open a new context for this operation"
            );
            throw new TransactionFlowError(`Transaction ${this.#via} is destroyed`);
        }
        if (this.#status === Status.ReadOnly) {
            throw new ReadOnlyError();
        }
    }
}

export const ReadOnlyTransaction = new Tx("readonly", true)

function throwIfErrored(errored: undefined | Array<Participant>, when: string) {
    if (!errored?.length) {
        return;
    }
    const suffix = errored.length > 1 ? "s" : "";
    throw new FinalizationError(
        `Unhandled error${suffix} ${when} participant${suffix}${describeList("and", ...errored.map(p => p.toString()))}`,
    );
}

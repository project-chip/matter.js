/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../../log/Logger.js";
import { createPromise } from "../../../util/Promises.js";
import { describeList } from "../../../util/String.js";
import { MaybePromise } from "../../../util/Promises.js";
import { FinalizationError, TransactionFlowError } from "./Errors.js";
import { Participant as ParticipantType } from "./Participant.js";
import type { Resource as ResourceType } from "./Resource.js";
import { ResourceSet } from "./ResourceSet.js";
import { Status as StatusType } from "./Status.js";

const logger = Logger.get("Transaction");

/**
 * By default, Matter.js state is transactional.
 *
 * Transactions are either shared (for reads) or exclusive (for writes).
 * Exclusive transactions do not block shared transactions but state updates
 * will not be visible until the transaction completes.
 *
 * Writes do block other writes.  Transactions start automatically when a write
 * occurs.  Since this usually happens synchronously, the best Matter.js can do
 * is throw an error if two write transactions would conflict.  However, you
 * can avoid this by using {@link begin} which will wait for other transactions
 * to complete before acquiring resource locks.
 *
 * Persistence is implemented by a list of participants.  Commits are two
 * phase.  If an error is thrown in phase one all participants roll back.
 * An error in phase 2 could result in data inconsistency as we don't have any
 * form of retry as of yet.
 */
export class Transaction {
    #participants = new Set<ParticipantType>();
    #roles = new Map<{}, ParticipantType>();
    #resources = new Set<ResourceType>();
    #status = StatusType.Shared;
    #promise?: Promise<void>;
    #resolve?: () => void;
    #waitingOn?: Iterable<Transaction>;

    /**
     * The status of the transaction.
     */
    get status() {
        return this.#status;
    }

    /**
     * Transaction participants.
     */
    get participants() {
        return this.#participants;
    }

    /**
     * Resources addressed by the participants.
     */
    get resources() {
        return this.#resources;
    }

    /**
     * The transactions currently blocking this transaction, if any.
     */
    get waitingOn() {
        return this.#waitingOn;
    }

    /**
     * Obtain a promise that resolves when the transaction commits or rolls
     * back.
     *
     * When the transaction commits or rolls back it returns to a shared state
     * and the promise is replaced.  So this is only useful prior to commit or
     * rollback.
     */
    get promise() {
        if (this.#promise === undefined) {
            const { promise, resolver } = createPromise<void>();
            this.#promise = promise;
            this.#resolve = resolver;
        }
        return this.#promise;
    }

    /**
     * Add {@link Resources} to the transaction.
     *
     * If the transaction is exclusive (writing) the transaction will acquire
     * the lock on each {@link ResourceType}, waiting for other writers to finish
     * if necessary.
     */
    async addResources(...resources: ResourceType[]) {
        if (this.#status === StatusType.Exclusive) {
            const set = new ResourceSet(this, resources);
            await set.acquireLocks();
        }

        this.addResourcesSync(...resources);
    }

    /**
     * Add {@link ResourceType}s to the transaction synchronously.
     *
     * Unlike {@link addResources}, this method will throw an error if the
     * transaction is exclusive and the resources cannot be locked.
     */
    addResourcesSync(...resources: ResourceType[]) {
        if (this.#status === StatusType.Exclusive) {
            const set = new ResourceSet(this, resources);
            set.acquireLocksSync();
        } else if (this.#status !== StatusType.Shared) {
            throw new TransactionFlowError(`Cannot add resources to transaction that is ${this.status}`);
        }

        for (const resource of resources) {
            this.#resources.add(resource);
        }
    }

    /**
     * Begin an exclusive transaction.
     *
     * Transactions begin automatically on write but there are a few reasons
     * you may want to use this method to start an exclusive transaction
     * explicitly:
     *
     *   1. Automatic transactions are started in a synchronous context so
     *      conflicting transactions will throw an error.  If you start a
     *      transaction, your code will await any transaction that would
     *      otherwise throw an error.
     *
     *   2. Transaction isolation means your view of data may become stale if
     *      a write occurs in another transaction.  Once you start a
     *      transaction you block other writers so can be assured you're
     *      dealing with newest state.
     *
     *   3. Say transaction A has an exclusive lock on resource 1 and awaits
     *      resource 2.  Transaction B has an exclusive lock on resource 2.
     *      Transaction B cannot then await resource 1 without causing a
     *      deadlock.  Matter.js will detect the deadlock and throw an error.
     *      One way to prevent this is to begin a transaction and acquire locks
     *      in a specific order.
     *
     * None of the issues above are likely and are probably not a concern for
     * your application.  If you do encounter these issues the error message
     * will suggest solutions.
     */
    async begin() {
        if (this.status === StatusType.Exclusive) {
            return;
        }
        if (this.status !== StatusType.Shared) {
            throw new TransactionFlowError(`Cannot begin write transaction because transaction is ${this.#status}`);
        }

        this.#status = StatusType.Waiting;
        try {
            const resources = new ResourceSet(this, this.#resources);
            await resources.acquireLocks();
            this.#status = StatusType.Exclusive;
        } catch (e) {
            this.#status = StatusType.Shared;
            throw e;
        }
    }

    /**
     * Begin an exclusive transaction in a synchronous context.
     *
     * Unlike {@link begin}, this method will throw an error if any participant
     * has already joined an exclusive transaction.
     */
    beginSync() {
        if (this.status === StatusType.Exclusive) {
            return;
        }
        if (this.status !== StatusType.Shared) {
            throw new TransactionFlowError(`Cannot begin write transaction because transaction is ${this.#status}`);
        }

        this.#status = StatusType.Exclusive;
        try {
            const resources = new ResourceSet(this, this.#resources);
            resources.acquireLocksSync();
        } catch (e) {
            this.#status = StatusType.Shared;
            throw e;
        }
    }

    /**
     * Add {@link ParticipantType}s to the transaction.
     */
    addParticipants(...participants: ParticipantType[]) {
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

    /**
     * Retrieve a participant with a specific role.
     */
    getParticipant(role: {}) {
        return this.#roles.get(role);
    }

    /**
     * Commit the transaction.
     *
     * Matter.js commits automatically when an interaction completes.  You may
     * commit manually to publish your changes mid-interaction.
     *
     * After commit an exclusive transaction becomes shared and data references
     * refresh to the most recent value.
     */
    commit() {
        if (this.#status === StatusType.Shared) {
            // Use rollback() to inform participants to refresh state
            return this.rollback();
        } else {
            // Perform the actual commit
            return this.#finalize(StatusType.CommittingPhaseOne, () => this.#executeCommit());
        }
    }

    /**
     * Roll back the transaction.
     *
     * Matter.js rolls back automatically when an interaction fails.  You may
     * roll back manually to undo your changes mid-interaction.
     *
     * After rollback an exclusive transaction becomes shared and data
     * references refresh to the most recent value.
     */
    rollback() {
        return this.#finalize(StatusType.RollingBack, () => this.#executeRollback());
    }

    /**
     * Wait for a set of transactions to complete.
     */
    async waitFor(others: Iterable<Transaction>) {
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
    #finalize(status: StatusType, finalizer: () => MaybePromise<void>) {
        // Sanity check on status
        if (this.status !== StatusType.Shared && this.status !== StatusType.Exclusive) {
            throw new TransactionFlowError(
                `Illegal attempt to enter status ${status} when transaction is ${this.#status}`,
            );
        }

        // Post-finalization state reset
        const cleanup = () => {
            // Release locks
            for (const resource of this.#resources) {
                if (resource.lockedBy === this) {
                    delete resource.lockedBy;
                }
            }

            // Release participants
            this.#participants.clear();

            // Revert to shared
            this.#status = StatusType.Shared;

            // Resolve the transaction promise
            const resolve = this.#resolve;
            this.#promise = undefined;
            this.#resolve = undefined;
            resolve?.();
        }

        // Perform the commit or rollback
        let promise: MaybePromise<void> = undefined;
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
    #executeCommit(): MaybePromise<void> {
        const result = this.#executeCommit1();
        if (MaybePromise.is(result)) {
            return result.then(() => this.#executeCommit2());
        }
        return this.#executeCommit2();
    }

    #executeCommit1(): MaybePromise<void> {
        // Commit phase 1
        const phase1Error = (participant: string, error: any) => {
            logger.error(`Error committing ${participant} (phase one), rolling back:`, error);
            this.#status = StatusType.RollingBack;
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
                        .catch(e => phase1Error(participant.description, e));
                } else {
                    commitNextParticipant();
                }
            } catch (e) {
                return phase1Error(participant.description, e);
            }
        }

        return commitNextParticipant();
    }

    #executeCommit2() {
        // Commit phase 2
        const phase2Error = (participant: string, error: any) => {
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

        this.#status = StatusType.CommittingPhaseTwo;
        let errored: undefined |Array<string>;
        let ongoing: undefined | Array<Promise<void>>;
        for (const participant of this.participants) {
            try {
                let promise = participant.commit2();
                if (MaybePromise.is(promise)) {
                    const description = participant.description;
                    promise = promise.catch(e => phase2Error(description, e));
                    if (ongoing) {
                        ongoing.push(promise);
                    } else {
                        ongoing = [ promise ];
                    }
                }
            } catch (e) {
                return phase2Error(participant.description, e);
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
        let errored: undefined | Array<string>;
        let ongoing: undefined | Array<Promise<void>>;
        for (const participant of this.participants) {
            try {
                let promise = participant.rollback();
                if (MaybePromise.is(promise)) {
                    const description = participant.description;
                    promise = promise.catch(e => error(description, e));
                    if (ongoing) {
                        ongoing.push(promise);
                    } else {
                        ongoing = [ promise ];
                    }
                }
            } catch (e) {
                error(participant.description, e);
            }
        }
        throwIfErrored(errored, "rolling back");

        function error(participant: string, error: any) {
            logger.error(`Error rolling back ${participant}, state may become inconsistent:`, error);

            if (errored) {
                errored.push(participant);
            } else {
                errored = [ participant ];
            }
        }
    }
}

function throwIfErrored(errored: undefined | Array<string>, when: string) {
    if (!errored?.length) {
        return;
    }
    const suffix = errored.length > 1 ? "s" : "";
    throw new FinalizationError(
        `Unhandled error${suffix} ${when} participant${suffix}${describeList("and", ...errored)}`,
    );
}

export namespace Transaction {
    export const Status = StatusType;
    export type Status = StatusType;

    export type Resource = ResourceType;

    export type Participant = ParticipantType;
}

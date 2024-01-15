/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describeList } from "../../../util/String.js";
import { SynchronousTransactionConflictError, TransactionDeadlockError, TransactionFlowError } from "./Errors.js";
import type { Resource } from "./Resource.js";
import type { Transaction } from "./Transaction.js";

/**
 * An internal set of resources supporting bulk operations for {@link Transaction}.
 */
export class ResourceSet {
    #transaction: Transaction;
    #resources: Iterable<Resource>;

    constructor(transaction: Transaction, resources: Iterable<Resource> = transaction.resources) {
        this.#transaction = transaction;
        this.#resources = resources;
    }

    /**
     * Wait until the resources have no exclusive transactions and then lock.
     */
    async acquireLocks() {
        while (true) {
            let blockedBy: undefined | Set<Transaction>;

            for (const resource of this.#resources) {
                const lockedBy = resource.lockedBy;
                if (lockedBy && lockedBy !== this.#transaction) {
                    if (!blockedBy) {
                        blockedBy = new Set();
                    }
                    blockedBy.add(lockedBy);
                }
            }

            if (!blockedBy) {
                break;
            }

            this.#detectDeadlock(blockedBy);

            await this.#transaction.waitFor(blockedBy);
        }

        return this.acquireLocksSync();
    }

    /**
     * Acquire locks synchronously.
     *
     * Throws an error if resources aren't lockable.
     */
    acquireLocksSync() {
        const toLock = new Set<Resource>();
        const blocked = new Set<Resource>();
        for (const resource of this.#resources) {
            if (resource.lockedBy) {
                if (resource.lockedBy === this.#transaction) {
                    continue;
                }
                blocked.add(resource);
            }
            toLock.add(resource);
        }
        if (blocked.size) {
            const names = [...blocked].map(s => s.toString());
            throw new SynchronousTransactionConflictError(
                `Cannot acquire transaction lock for ${describeList(
                    "and",
                    ...names,
                )} because there is already an exclusive transaction.  ` +
                    "You can await transaction.begin() to avoid this error",
            );
        }

        // Update resource status
        for (const resource of toLock) {
            resource.lockedBy = this.#transaction;
        }

        return toLock;
    }

    /**
     * Release locks.
     */
    releaseLocks() {
        const unlocked = new Set<Resource>;

        for (const resource of this.#resources) {
            if (resource.lockedBy === this.#transaction) {
                delete resource.lockedBy;
                unlocked.add(resource);
            }
        }

        return unlocked;
    }

    /**
     * Ensure that a transaction that is committing or rolling back has all
     * resources locked.
     *
     * This is just a sanity check.
     */
    assertResourcesAreLocked(transaction: Transaction, why: string) {
        for (const resource of transaction.resources) {
            if (resource.lockedBy !== transaction) {
                throw new TransactionFlowError(`Transaction attempted ${why} but does not have all resources locked`);
            }
        }
    }

    /**
     * If two transactions would block each other then we would have a
     * deadlock.
     *
     * This is unlikely but not impossible.  It can happen if an endpoint is
     * added to an exclusive transaction but a second transaction already has
     * exclusivity on the new endpoint *and* is waiting on the first
     * transaction.
     *
     * So... detect if the wait graph would have cycles if we an endpoint.  If
     * so, throw an error.
     */
    #detectDeadlock(blockedBy: Set<Transaction>) {
        // Recursively examine the transaction holding each resource we wish
        // to lock.  If any of them are waiting for a resource that I have
        // locked then we've detected deadlock
        const examined = new Set<Transaction>();
        const examineBlocker = (transaction: Transaction) => {
            examined.add(transaction);
            if (transaction === this.#transaction) {
                throw new TransactionDeadlockError(
                    "Resource deadlock detected, write operation cannot proceed.  " +
                        "To prevent this you can await transaction.begin() before modifying state",
                );
            }

            if (transaction.waitingOn) {
                for (const blocker of transaction.waitingOn) {
                    if (!examined.has(blocker)) {
                        examineBlocker(blocker);
                    }
                }
            }
        };

        for (const transaction of blockedBy) {
            examineBlocker(transaction);
        }
    }

    [Symbol.iterator]() {
        return this.#resources[Symbol.iterator]();
    }
}

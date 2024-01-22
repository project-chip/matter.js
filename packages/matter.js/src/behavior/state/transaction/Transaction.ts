/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MaybePromise } from "../../../util/Promises.js";
import { Participant } from "./Participant.js";
import type { Resource } from "./Resource.js";
import { Status } from "./Status.js";
import { ReadOnlyTransaction, executeTransaction } from "./Tx.js";

/**
 * By default, Matter.js state is transactional.
 *
 * Transactions are either shared (for reads) or exclusive (for writes). Exclusive transactions do not block shared
 * transactions but state updates will not be visible until the transaction completes.
 *
 * Writes do block other writes.  Transactions start automatically when a write occurs.  Since this usually happens
 * synchronously, the best Matter.js can do is throw an error if two write transactions would conflict.  However, you
 * can avoid this by using {@link begin} which will wait for other transactions to complete before acquiring resource
 * locks.
 *
 * Persistence is implemented by a list of participants.  Commits are two phase.  If an error is thrown in phase one all
 * participants roll back. An error in phase 2 could result in data inconsistency as we don't have any form of retry as
 * of yet.
 */
export interface Transaction {
    /**
     * Diagnostic description of the transaction's source.
     */
    readonly via: string;

    /**
     * The status of the transaction.
     */
    readonly status: Status;

    /**
     * Transaction participants.
     */
    readonly participants: Set<Participant>;

    /**
     * Resources addressed by the participants.
     */
    readonly resources: Set<Resource>;

    /**
     * The transactions currently blocking this transaction, if any.
     */
    readonly waitingOn: Iterable<Transaction> | undefined;

    /**
     * Obtain a promise that resolves when the transaction commits or rolls back.
     *
     * When the transaction commits or rolls back it returns to a shared state and the promise is replaced.  So this is
     * only useful prior to commit or rollback.
     */
    readonly promise: Promise<void>;

    /**
     * Add {@link Resources} to the transaction.
     *
     * If the transaction is exclusive (writing) the transaction will acquire the lock on each {@link ResourceType},
     * waiting for other writers to finish if necessary.
     */
    addResources(...resources: Resource[]): Promise<void>;

    /**
     * Add {@link ResourceType}s to the transaction synchronously.
     *
     * Unlike {@link addResources}, this method will throw an error if the
     * transaction is exclusive and the resources cannot be locked.
     */
    addResourcesSync(...resources: Resource[]): void;

    /**
     * Begin an exclusive transaction.
     *
     * Transactions begin automatically on write but there are a few reasons you may want to use this method to start an
     * exclusive transaction explicitly:
     *
     *   1. Automatic transactions are started in a synchronous context so conflicting transactions will throw an error.
     *      If you start a transaction, your code will await any transaction that would otherwise throw an error.
     *
     *   2. Transaction isolation means your view of data may become stale if a write occurs in another transaction.
     *      Once you start a transaction you block other writers so can be assured you're dealing with newest state.
     *
     *   3. Say transaction A has an exclusive lock on resource 1 and awaits resource 2.  Transaction B has an exclusive
     *      lock on resource 2. Transaction B cannot then await resource 1 without causing a deadlock.  Matter.js will
     *      detect the deadlock and throw an error. One way to prevent this is to begin a transaction and acquire locks
     *      in a specific order.
     *
     * None of the issues above are likely and are probably not a concern for your application.  If you do encounter
     * these issues the error message will suggest solutions.
     */
    begin(): Promise<void>;

    /**
     * Begin an exclusive transaction in a synchronous context.
     *
     * Unlike {@link begin}, this method will throw an error if any participant has already joined an exclusive
     * transaction.
     */
    beginSync(): void;

    /**
     * Add {@link ParticipantType}s to the transaction.
     */
    addParticipants(...participants: Participant[]): void;

    /**
     * Retrieve a participant with a specific role.
     */
    getParticipant(role: {}): Participant | undefined;

    /**
     * Commit the transaction.
     *
     * Matter.js commits automatically when an interaction completes.  You may commit manually to publish your changes
     * mid-interaction.
     *
     * After commit an exclusive transaction becomes shared and data references refresh to the most recent value.
     */
    commit(): MaybePromise;

    /**
     * Roll back the transaction.
     *
     * Matter.js rolls back automatically when an interaction fails.  You may roll back manually to undo your changes
     * mid-interaction.
     *
     * After rollback an exclusive transaction becomes shared and data references refresh to the most recent value.
     */
    rollback(): MaybePromise;

    /**
     * Wait for a set of transactions to complete.
     */
    waitFor(others: Iterable<Transaction>): Promise<void>;
}

type StatusType = Status;
const StatusEnum = Status;
type ResourceType = Resource;
type ParticipantType = Participant;

export namespace Transaction {
    /**
     * Perform a transactional operation.  This is the only way to obtain a read/write transaction.
     */
    export function act<T>(via: string, actor: (transaction: Transaction) => MaybePromise<T>): MaybePromise<T> {
        return executeTransaction(via, actor);
    }

    /**
     * A read-only transaction that may be outside without context.
     */
    export const ReadOnly = ReadOnlyTransaction;

    export const Status = StatusEnum;
    export type Status = StatusType;

    export type Resource = ResourceType;

    export type Participant = ParticipantType;
}

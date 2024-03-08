/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MaybePromise } from "../../../util/Promises.js";

/**
 * Components with support for transactionality implement this interface.
 */
export interface Participant {
    /**
     * Description used in error messages.
     */
    toString(): string;

    /**
     * The "role" of a participant is an optional key you may use to retrieve
     * a participant from the transaction.
     */
    role?: {};

    /**
     * Commit phase one.
     */
    commit1(): MaybePromise;

    /**
     * Commit phase two.
     */
    commit2(): MaybePromise;

    /**
     * Post-commit logic.
     */
    postCommit?: () => MaybePromise;

    /**
     * Drop isolated writes and revert to original canonical source.
     */
    rollback(): MaybePromise;
}

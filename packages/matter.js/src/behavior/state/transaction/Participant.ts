/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
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
    description: string;

    /**
     * The "role" of a participant is an optional key you may use to retrieve
     * a participant from the transaction.
     */
    role?: {};

    /**
     * Commit phase one.
     */
    commit1(): MaybePromise<void>;

    /**
     * Commit phase two.
     */
    commit2(): MaybePromise<void>;

    /**
     * Drop isolated writes and revert to original canonical source.
     */
    rollback(): MaybePromise<void>;
}

/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Transaction } from "./Transaction.js";

/**
 * A transaction resource is the target a {@link Participant} is mutating.
 * The {@link Coordinator} tracks the state of resources to
 * ensure only a single transaction ever has exclusive access.
 */
export interface Resource {
    /**
     * Textual description of the resource used in error messages.
     */
    readonly description: string;

    /**
     * Locking transaction, maintained by {@link Transaction}.
     */
    lockedBy?: Transaction;
}

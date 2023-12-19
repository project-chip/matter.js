/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../../common/MatterError.js";

/**
 * Thrown when a transaction operation cannot complete because the transaction
 * has the wrong status.
 */
export class TransactionFlowError extends MatterError {}

/**
 * Thrown if a transaction attempts to obtain lock in-use resources
 * synchronously.
 */
export class SynchronousTransactionConflictError extends MatterError {}

/**
 * Thrown if a transaction attempts to obtain exclusivity in a manner that
 * would lead to deadlock.
 */
export class TransactionDeadlockError extends MatterError {}

/**
 * Thrown if an error occurs during commit or rollback.
 */
export class FinalizationError extends MatterError {}

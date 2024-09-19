/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "#general";
import type { Behavior } from "../../Behavior.js";
import type { ActionContext } from "../../context/ActionContext.js";
import type { OfflineContext } from "../../context/server/OfflineContext.js";
import type { Transaction } from "./Transaction.js";

/**
 * Thrown when a {@link Transaction} operation cannot complete because the transaction has the wrong status.
 */
export class TransactionFlowError extends MatterError {}

/**
 * Thrown if a {@link Transaction} attempts to lock a {@link Resource} synchronously but the resource is already locked.
 *
 * If you see this error you are probably modifying {@link Behavior} state.  You can use
 * {@link Transaction.addResources} and {@link Transaction.begin} to lock the behavior before performing your write.
 */
export class SynchronousTransactionConflictError extends MatterError {}

/**
 * Thrown if a transaction attempts to obtain exclusivity in a manner that would lead to deadlock.
 */
export class TransactionDeadlockError extends MatterError {}

/**
 * Thrown if an error occurs during commit or rollback.
 */
export class FinalizationError extends MatterError {}

/**
 * Thrown if a {@link Transaction} is accessed after it has been destroyed.
 *
 * If you see this error, you have probably kept a reference to a contextual object such as a {@link Behavior} after its
 * {@link ActionContext} exited.  You may need to create a new context using {@link OfflineContext.act}.
 *
 * A possible cause of this error is forgetting to use await on an async function.  The context will remain open so long
 * as there is an unresolved {@link Promise} it can await.
 */
export class TransactionDestroyedError extends MatterError {}

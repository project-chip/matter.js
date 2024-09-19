/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Informs the receiver that a transaction must complete time out if incomplete
 * when an interval elapses.
 *
 * @see {@link MatterSpecification.v11.Core} § 8.7.4
 */
export type TimedRequestAction = {
    timeoutMilliseconds: number;
};

/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Informs the receiver that a transaction must complete time out if incomplete
 * when an interval elapses.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 8.7.4
 */
export type TimedRequestAction = {
    timeoutMilliseconds: number;
};

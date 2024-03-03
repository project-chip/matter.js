/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Notifies subscriber of successful subscription.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 8.5.3
 */
export type SubscribeResponseAction = {
    subscription: number;
    maxIntervalSeconds: number;
};

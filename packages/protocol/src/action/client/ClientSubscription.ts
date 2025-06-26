/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Subscribe } from "#action/request/Subscribe.js";
import { ActiveSubscription } from "#action/response/SubscribeResult.js";

/**
 * The client view of an established Matter subscription.
 */
export interface ClientSubscription extends ActiveSubscription {
    request: Subscribe;
    timeoutAtMs?: number;
    isClosed: boolean;
    isReading: boolean;
}

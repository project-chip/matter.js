/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SubscribeResponse } from "#types";

export type SubscribeResult = Promise<ActiveSubscription>;

export interface ActiveSubscription extends SubscribeResponse {
    close(): void;
}

/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CRYPTO_GROUP_SIZE_BYTES, CRYPTO_PUBLIC_KEY_SIZE_BYTES } from "#general";

export const MAXIMUM_COMMISSIONING_TIMEOUT_S = 15 * 60; // 900 seconds/15 minutes
export const MINIMUM_COMMISSIONING_TIMEOUT_S = 3 * 60; // 180 seconds/3 minutes
export const DEVICE_ANNOUNCEMENT_DURATION_MS = MAXIMUM_COMMISSIONING_TIMEOUT_S * 1000; /** 15 minutes */
export const DEVICE_ANNOUNCEMENT_INTERVAL_MS = 60 * 1000;

export const PAKE_PASSCODE_VERIFIER_LENGTH = CRYPTO_GROUP_SIZE_BYTES + CRYPTO_PUBLIC_KEY_SIZE_BYTES;

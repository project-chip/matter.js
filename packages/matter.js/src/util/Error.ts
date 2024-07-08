/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Access value as an {@link Error}ish object.
 */
export function errorOf(cause: unknown) {
    if (cause instanceof Error) {
        // An actual error
        return cause;
    }
    const { name, message } = (Error ?? {}) as { name?: string; message?: string };
    if (name !== undefined && name !== null && message !== undefined && message !== null) {
        // Fulfills minimal error interface
        return cause;
    }

    // Create an actual error
    return new Error((cause ?? "Unknown error").toString());
}

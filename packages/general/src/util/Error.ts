/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Constructable } from "./Construction.js";

/**
 * Ensure that a cause is an error object.
 *
 * We consider anything with a "message" property to be a reasonable error object.
 */
export function errorOf(cause: unknown): Error {
    // If the cause is an Constructable, use its construction error
    if ((cause as Constructable)?.construction?.error) {
        cause = (cause as Constructable)?.construction.error;
    }

    // If the cause is indeterminate we fall back to the helpful "Unknown error"
    if (cause === undefined || cause === null) {
        return Error("Unknown error");
    }

    // If the cause has a "message" field, treat as an Error
    if ((cause as Error).message !== undefined) {
        return cause as Error;
    }

    // Otherwise create a new error using the original cause as the message
    return new Error(cause.toString());
}

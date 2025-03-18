/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "#general";
import { Status } from "../globals/Status.js";

export const StatusCode = Status;
export type StatusCode = Status;

/** Error base Class for all errors related to the status response messages. */
export class StatusResponseError extends MatterError {
    public constructor(
        message: string,
        public readonly code: StatusCode,
        public readonly clusterCode?: number,
    ) {
        super();

        this.message = `(${code}${clusterCode !== undefined ? `/${clusterCode}` : ""}) ${message}`;
    }

    static is(error: unknown, ...codes: StatusCode[]): error is StatusResponseError {
        return error instanceof StatusResponseError && (!codes.length || codes.includes(error.code));
    }
}

/** Error class for Status response errors that were received from the other node. */
export class ReceivedStatusResponseError extends StatusResponseError {}

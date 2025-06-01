/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Status } from "#globals/Status.js";
import { MatterError, decamelize } from "@matter/general";

/**
 * Base class for errors that should produce protocol-facing status codes.
 */
export class StatusResponseError extends MatterError {
    public constructor(
        message: string,
        public readonly code: Status,
        public readonly clusterCode?: number,
    ) {
        super(message);
    }

    static is(error: unknown, ...codes: Status[]): error is StatusResponseError {
        return error instanceof StatusResponseError && (!codes.length || codes.includes(error.code));
    }

    override get id() {
        const id = super.id;

        if (id === "status-response") {
            const code = Status[this.code];
            if (code) {
                return decamelize(code);
            }
        }

        return id;
    }
}

/** Error class for Status response errors that were received from the other node. */
export class ReceivedStatusResponseError extends StatusResponseError {}

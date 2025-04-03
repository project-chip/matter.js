/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { MatterError, TimeoutError } from "../MatterError.js";

export class EndOfStreamError extends MatterError {
    constructor(message = "Unexpected end of stream") {
        super(message);
    }
}

export class NoResponseTimeoutError extends TimeoutError {}

export interface Stream<T> {
    read(): Promise<T>;
    write(data: T): Promise<void>;
}

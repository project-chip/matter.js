/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { MatterError } from "../MatterError.js";
import { RetransmissionLimitReachedError } from "../protocol/MessageExchange.js";

export class EndOfStreamError extends MatterError {}
export class NoResponseTimeoutError extends RetransmissionLimitReachedError {}

export interface Stream<T> {
    read(): Promise<T>;
    write(data: T): Promise<void>;
}

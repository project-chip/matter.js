/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/MatterError.js";

/** @see {@link MatterCoreSpecificationV1_0}, section 8.10 */
export enum StatusCode {
    Success = 0x00,
    Failure = 0x01,
    InvalidSubscription = 0x7d,
    UnsupportedAccess = 0x7e, // old name: NOT_AUTHORIZED
    UnsupportedEndpoint = 0x7f,
    InvalidAction = 0x80,
    UnsupportedCommand = 0x81, // old name: UNSUP_COMMAND
    InvalidCommand = 0x85, // old name INVALID_FIELD
    UnsupportedAttribute = 0x86,
    ConstraintError = 0x87, // old name INVALID_VALUE
    UnsupportedWrite = 0x88, // old name READ_ONLY
    ResourceExhausted = 0x89, // old name INSUFFICIENT_SPACE
    NotFound = 0x8b,
    UnreportableAttribute = 0x8c,
    InvalidDataType = 0x8d,
    UnsupportedRead = 0x8f,
    DataVersionMismatch = 0x92,
    Timeout = 0x94,
    UnsupportedMode = 0x9b,
    Busy = 0x9c,
    UnsupportedCluster = 0xc3,
    NoUpstreamSubscription = 0xc5,
    NeedsTimedInteraction = 0xc6,
    UnsupportedEvent = 0xc7,
    PathsExhausted = 0xc8,
    TimedRequestMismatch = 0xc9,
    FailsafeRequired = 0xca,
}

/** Error base Class for all errors related to the status response messages. */
export class StatusResponseError extends MatterError {
    public constructor(
        message: string,
        public readonly code: StatusCode,
        public readonly clusterCode?: number,
    ) {
        super();

        this.message = `(${code}) ${message}`;
    }
}

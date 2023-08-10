/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Glboal status codes defined in Matter specification.
 *
 * TODO - extract/merge with StatusCode in InteractionProtocol.ts
 */
export enum StatusCode {
    Success = 0x00,
    Failure = 0x01,
    InvalidSubscription = 0x7d,
    UnsupportedAccess = 0x7e,
    UnsupportedEndpoint = 0x7f,
    InvalidAction = 0x80,
    UnsupportedCommand = 0x81,
    InvalidCommand = 0x85,
    UnsupportedAttribute = 0x86,
    ConstraintError = 0x87,
    UnsupportedWrite = 0x88,
    ResourceExhausted = 0x89,
    NotFound = 0x8b,
    UnreportableAttribute = 0x8c,
    InvalidDataType = 0x8d,
    UnsupportedRead = 0x8f,
    DataVersionMismatch = 0x92,
    UnsupportedNode = 0x9b,
    Busy = 0x9c,
    UnsupportedCluster = 0xc3,
    NoUpstreamSubscription = 0xc5,
    NeedsTimedInteraction = 0xc6,
    UnsupportedEvent = 0xc7,
    PathsExhausted = 0xc8,
    TimedRequestMismatch = 0xc9,
    FailsafeRequired = 0xca,
}

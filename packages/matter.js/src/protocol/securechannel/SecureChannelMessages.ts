/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export const SECURE_CHANNEL_PROTOCOL_ID = 0x00000000;

export const enum MessageType {
    StandaloneAck = 0x10,
    PbkdfParamRequest = 0x20,
    PbkdfParamResponse = 0x21,
    PasePake1 = 0x22,
    PasePake2 = 0x23,
    PasePake3 = 0x24,
    Sigma1 = 0x30,
    Sigma2 = 0x31,
    Sigma3 = 0x32,
    Sigma2Resume = 0x33,
    StatusReport = 0x40,
}

export const enum ProtocolStatusCode {
    Success = 0x0000,
    NoSharedTrustRoots = 0x0001,
    InvalidParam = 0x0002,
    CloseSession = 0x0003,
    Busy = 0x0004,
}

export const enum GeneralStatusCode {
    /** Operation completed successfully. */
    Success = 0,

    /** Generic failure, additional details may be included in the protocol specific status. */
    Error = 1,

    /** Operation was rejected by the system because the system is in an invalid state. */
    BadPrecondition = 2,

    /** A value was out of a required range */
    OutOfRange = 3,

    /** A request was unrecognized or malformed */
    BadRequest = 4,

    /** An unrecognized or unsupported request was received. */
    Unsupported = 5,

    /** A request was not expected at this time. */
    Unexpected = 6,

    /** Insufficient resources to process the given request. */
    ResourceExhausted = 7,

    /** Device is busy and cannot handle this request at this time. */
    Busy = 8,

    /** A timeout occurred. */
    Timeout = 9,

    /** Context-specific signal to proceed */
    Continue = 10,

    /** Failure, may be due to a concurrency error. */
    Aborted = 11,

    /** An invalid/unsupported argument was provided. */
    InvalidArgument = 12,

    /** Some requested entity was not found. */
    NotFound = 13,

    /** The sender attempted to create something that already exists. */
    AlreadyExists = 14,

    /** The sender does not have sufficient permissions to execute the requested operations. */
    PermissionDenied = 15,

    /** Unrecoverable data loss or corruption has occurred. */
    DataLoss = 16,
}

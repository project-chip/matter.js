/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Protocol ID for secure channels as per Matter specification.
 */
export const SECURE_CHANNEL_PROTOCOL_ID = 0x0000;

export enum SecureMessageType {
    /**
     * The Message Counter Synchronization Request message queries the current message counter from a peer to bootstrap
     * replay protection.
     */
    MsgCounterSyncReq = 0x00,

    /**
     * The Message Counter Synchronization Response message provides the current message counter from a peer to
     * bootstrap replay protection.
     */
    MsgCounterSyncRsp = 0x01,

    /**
     * This message is dedicated for the purpose of sending a stand-alone acknowledgement when there is no other data
     * message available to piggyback an acknowledgement on top of.
     */
    StandaloneAck = 0x10,

    /** The request for PBKDF parameters necessary to complete the PASE protocol. */
    PbkdfParamRequest = 0x20,

    /** The PBKDF parameters sent in response to PBKDFParamRequest during the PASE protocol. */
    PbkdfParamResponse = 0x21,

    /** The first PAKE message of the PASE protocol. */
    PasePake1 = 0x22,

    /** The second PAKE message of the PASE protocol. */
    PasePake2 = 0x23,

    /** The third PAKE message of the PASE protocol. */
    PasePake3 = 0x24,

    /** The first message of the CASE protocol. */
    Sigma1 = 0x30,

    /** The second message of the CASE protocol. */
    Sigma2 = 0x31,

    /** The third message of the CASE protocol. */
    Sigma3 = 0x32,

    /** The second resumption message of the CASE protocol. */
    Sigma2Resume = 0x33,

    /** The Status Report message encodes the result of an operation in the Secure Channel as well as other protocols. */
    StatusReport = 0x40,

    /** The Check-in message notifies a client that the ICD is available for communication. */
    IcdCheckInMessage = 0x50,
}

export enum ProtocolStatusCode {
    /** Indication that the last session establishment message was successfully processed. */
    Success = 0x0000,

    /** Failure to find a common set of shared roots. */
    NoSharedTrustRoots = 0x0001,

    /** Generic failure during session establishment. */
    InvalidParam = 0x0002,

    /** Indication that the sender will close the current session. See Section “CloseSession” for more details. */
    CloseSession = 0x0003,

    /** Indication that the sender cannot currently fulfill the request. See Section “Busy” for more details. */
    Busy = 0x0004,
}

export enum GeneralStatusCode {
    /** Operation completed successfully. */
    Success = 0,

    /** Generic failure, additional details may be included in the protocol specific status. */
    Failure = 1,

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

    /** Message size is larger than the recipient can handle. */
    MessageTooLarge = 17,
}

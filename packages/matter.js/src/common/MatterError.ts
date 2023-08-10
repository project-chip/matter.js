/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/** Error base class for all errors thrown by this library. */
export class MatterError extends Error {}

/**
 * Error thrown when a Platform specific implementation was not added and so a provider (Network, Time, Crypto, etc)
 * is not available.
 */
export class NoProviderError extends MatterError {}

/** Error thrown when Data validation fails. Please check the provided data. */
export class ValidationError extends MatterError {}

/**
 * Error thrown when an internal error occurs like unexpected cases or missing data that should be there. Please
 * report such errors.
 */
export class InternalError extends MatterError {}

/** Error thrown when a feature is not implemented yet. Please report such errors. */
export class NotImplementedError extends InternalError {}

/** Error thrown when an unexpected case in the matter flow is encountered. Please report such errors. */
export class MatterFlowError extends MatterError {}

/** Error thrown when an unexpected data is encountered. Please report such errors. */
export class UnexpectedDataError extends MatterError {}

/**
 * Error thrown if most likely an implementation error is detected. Please check and correct your implementation and
 * provided data. if you are sure your code is correct please report the issue.
 */
export class ImplementationError extends MatterError {}

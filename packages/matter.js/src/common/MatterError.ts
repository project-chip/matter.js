/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/** Error base class for all errors thrown by this library. */
export class MatterError extends Error { }

export class NoProviderError extends MatterError { }

export class ValidationError extends MatterError { }

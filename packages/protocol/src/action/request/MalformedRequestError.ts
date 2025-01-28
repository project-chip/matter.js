/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "#general";

/**
 * Thrown when an action request does not adhere to the Matter specification.
 */
export class MalformedRequestError extends MatterError {}

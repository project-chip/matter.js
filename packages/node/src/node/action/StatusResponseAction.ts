/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StatusCode } from "#types";

/**
 * Reports status for actions with no other response and errors for actions
 * that fail.
 *
 * @see {@link MatterSpecification.v11.Core} § 8.3.1
 */
export type StatusResponseAction = {
    status: StatusCode;
};

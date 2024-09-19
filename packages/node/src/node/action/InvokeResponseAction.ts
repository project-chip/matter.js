/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommandPayload } from "../payloads/CommandPayload.js";

/**
 * Responds with the result of command execution.
 *
 * @see {@link MatterSpecification.v11.Core} § 8.8.3
 */
export type InvokeResponseAction = {
    commands: CommandPayload.Response[];
    suppressResponse?: boolean;
};

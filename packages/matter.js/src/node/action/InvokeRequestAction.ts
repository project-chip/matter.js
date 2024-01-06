/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommandPayload } from "../payloads/CommandPayload.js";

/**
 * Initiates command execution.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 8.8.2
 */
export type InvokeRequestAction = {
    commands: CommandPayload.Request[];
    suppressResponse?: boolean;
    timedRequest?: boolean;
};

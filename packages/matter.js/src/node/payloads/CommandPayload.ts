/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommandPath } from "../paths/CommandPath.js";
import { BasePayload } from "./BasePayload.js";

export namespace CommandPayload {
    /**
     * Command request.
     *
     * @see {@link MatterSpecification.v11.Core} § 8.9.4.3
     */
    export type Request = BasePayload.Data<CommandPath.Invoke>;

    /**
     * Response to an individual command.
     *
     * @see {@link MatterSpecification.v11.Core} § 8.9.4.4
     */
    export type Response = BasePayload.DataOrStatus<CommandPath.Concrete, {}>;
}

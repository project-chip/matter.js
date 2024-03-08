/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommandId } from "../../datatype/CommandId.js";
import { BasePath } from "./BasePath.js";

export namespace CommandPath {
    /**
     * Command name or ID.
     */
    export type Address = CommandId | string;

    /**
     * Addresses a command for invocation.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 8.9.4.1
     */
    export type Invoke = BasePath.Write & {
        command: Address;
    };

    /**
     * Addresses a specific command implementation.
     */
    export type Concrete = BasePath.Concrete & {
        command: Address;
    };
}

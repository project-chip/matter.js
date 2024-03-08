/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Val } from "../Val.js";

/**
 * API for bypassing managed collections and accessing the internal object containing raw data.
 */
export namespace Internal {
    export const reference = Symbol("reference");

    export interface Collection {
        [reference]: Val.Reference<Val.Collection>;
    }
}

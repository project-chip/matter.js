/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Val } from "../Val.js";

export const REF = Symbol("ref");

export interface InternalCollection {
    [REF]: Val.Reference<Val.Collection>;
}

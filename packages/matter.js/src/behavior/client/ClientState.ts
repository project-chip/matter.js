/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClientBehaviorBacking } from "./ClientBehaviorBacking.js";

export class ClientState {
    #backing: ClientBehaviorBacking;

    constructor(backing: ClientBehaviorBacking) {
        this.#backing = backing;

        // TODO
        this.#backing;
    }
}

/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NotImplementedError } from "../../common/MatterError.js";
import { Endpoint } from "../../endpoint/Endpoint.js";
import { Behavior } from "../Behavior.js";
import { BehaviorBacking } from "../internal/BehaviorBacking.js";
import { Datasource } from "../state/managed/Datasource.js";

export class ClientBehaviorBacking extends BehaviorBacking {
    constructor(endpoint: Endpoint, type: Behavior.Type) {
        super(endpoint, type);
    }

    get store(): Datasource.Store {
        throw new NotImplementedError();
    }
}

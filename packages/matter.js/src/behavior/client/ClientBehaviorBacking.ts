/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NotImplementedError } from "../../common/MatterError.js";
import { Part } from "../../endpoint/Part.js";
import { Behavior } from "../Behavior.js";
import { BehaviorBacking } from "../BehaviorBacking.js";
import { Datasource } from "../state/managed/Datasource.js";

export class ClientBehaviorBacking extends BehaviorBacking {
    constructor(part: Part, type: Behavior.Type) {
        super(part, type);
    }

    get store(): Datasource.Store {
        throw new NotImplementedError;
    }
}

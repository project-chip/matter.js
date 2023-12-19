/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import { ImplementationError, NotImplementedError } from "../../common/MatterError.js";
import { Part } from "../../endpoint/Part.js";
import { Node } from "../Node.js";

export class NodeClient implements Node {
    get root(): Part {
        // TODO
        throw new NotImplementedError();
    }

    constructor() {
        throw new NotImplementedError("Client nodes are TODO");
    }

    indexOf(): undefined {}

    createBacking(_part: Part, _type: Behavior.Type): BehaviorBacking {
        // TODO
        throw new NotImplementedError();
    }

    getAncestor<T>(type: new (...args: any[]) => T) {
        if (this instanceof type) {
            return this;
        }
        throw new ImplementationError(`Behavior is not owned by ${type.name}`);
    }

    async [Symbol.asyncDispose]() {
        // TODO
    }
}

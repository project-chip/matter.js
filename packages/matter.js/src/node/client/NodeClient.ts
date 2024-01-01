/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import { ImplementationError, NotImplementedError } from "../../common/MatterError.js";
import { Part } from "../../endpoint/Part.js";
import type { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { Node } from "../Node.js";

export class NodeClient implements Node {
    get owner() {
        return undefined;
    }

    get root(): Part<RootEndpoint> {
        throw new ImplementationError("No root endpoint detected");
    }

    constructor() {
        throw new NotImplementedError("Client nodes are TODO");
    }

    async [Symbol.asyncDispose](): Promise<void> {
    }

    initializePart(part: Part) {
        // TODO
        part;
        throw new NotImplementedError();
    }

    initializeBehavior(_part: Part, _type: Behavior.Type): BehaviorBacking {
        // TODO
        throw new NotImplementedError();
    }
}

/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError, NotImplementedError } from "../../common/MatterError.js";
import { Agent } from "../../endpoint/Agent.js";
import { Part } from "../../endpoint/Part.js";
import type { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { Node } from "../Node.js";

export class NodeClient implements Node {
    get owner() {
        return undefined;
    }

    get root(): Agent.Instance<RootEndpoint["behaviors"]> {
        return this.rootPart.agent;
    }

    get rootPart(): Part<RootEndpoint> {
        throw new NotImplementedError();
    }

    constructor() {
        throw new NotImplementedError("Client nodes are TODO");
    }

    async [Symbol.asyncDispose](): Promise<void> {
    }

    adoptChild(part: Part) {
        // TODO
        part;
        throw new NotImplementedError();
    }

    serviceFor<T>(service: abstract new (...args: any[]) => T): T {
        throw new ImplementationError(`Unsupported service ${service.name}`);
    }
}

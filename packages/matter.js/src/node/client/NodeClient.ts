/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError, NotImplementedError } from "../../common/MatterError.js";
import { Agent } from "../../endpoint/Agent.js";
import { Part } from "../../endpoint/Part.js";
import type { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { Diagnostic } from "../../log/Diagnostic.js";
import { AsyncConstruction } from "../../util/AsyncConstruction.js";
import { Host } from "../Host.js";
import { Node } from "../Node.js";

export class NodeClient implements Node {
    #construction: AsyncConstruction<NodeClient>;
    #host?: Host;

    get id(): string {
        throw new NotImplementedError();
    }

    get owner() {
        return undefined;
    }

    get root(): Agent.Instance<RootEndpoint> {
        return this.rootPart.agent;
    }

    get rootPart(): Part<RootEndpoint> {
        throw new NotImplementedError();
    }

    get construction() {
        return this.#construction;
    }

    constructor() {
        this.#construction = AsyncConstruction(this, () => {
            throw new NotImplementedError("Client nodes are TODO");
        });
    }

    toString() {
        return `${this.constructor.name}#${this.id}`;
    }

    async start() {
        throw new NotImplementedError();
    }

    async [Symbol.asyncDispose](): Promise<void> {
    }

    get [Diagnostic.value]() {
        return "(no diagnostics yet)";
    }

    set host(host: Host) {
        this.#host = host;
        this.#host;
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

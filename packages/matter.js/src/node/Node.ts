/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OfflineContext } from "../behavior/context/server/OfflineContext.js";
import { NetworkBehavior } from "../behavior/system/networking/NetworkBehavior.js";
import { UnsupportedDependencyError } from "../common/Lifecycle.js";
import { ImplementationError } from "../common/MatterError.js";
import { Part } from "../endpoint/Part.js";
import { RootEndpoint } from "../endpoint/definitions/system/RootEndpoint.js";
import { PartLifecycle } from "../endpoint/part/PartLifecycle.js";
import { EndpointType } from "../endpoint/type/EndpointType.js";
import { Environment } from "../environment/Environment.js";
import { RuntimeService } from "../environment/RuntimeService.js";
import { NodeLifecycle } from "./NodeLifecycle.js";

/**
 * A Matter Node.
 * 
 * In Matter, a "node" is an individually addressable top-level network resource.
 */
export class Node<T extends EndpointType = RootEndpoint> extends Part<T> {
    #environment: Environment;

    constructor(config: Node.Configuration<T> | T);

    constructor(type: T, options: Node.Options<T>);

    constructor(definition: T | Part.Configuration<T>, options?: Node.Options<T>) {
        let type: T;
        if (Part.isConfiguration(definition)) {
            type = definition.type as T;
            options = { ...definition } as Node.Options<T>;
        } else {
            type = definition as T;
            options = { ...options } as Node.Options<T>;
        }

        const parentEnvironment = options.environment ?? Environment.default;

        if (options.id === undefined) {
            options.id = `node${parentEnvironment.vars.increment("node.nextFallbackId")}`;
        }

        super(type, options as unknown as Part.Options<T>);

        // We create a local environment so nodes can offer node-specific services via the environment
        this.#environment = new Environment(options.id, parentEnvironment);

        if (this.lifecycle.hasNumber) {
            if (this.number !== 0) {
                throw new ImplementationError("The root endpoint ID must be 0");
            }
        } else {
            this.number = 0;
        }

        // We don't really get "installed" as we are the root part.  This informs the part it is ready for full
        // initialization
        this.lifecycle.change(PartLifecycle.Change.Installed);
    }

    override get env() {
        return this.#environment;
    }

    /**
     * Lifecycle information.
     */
    override createLifecycle(): NodeLifecycle {
        return new NodeLifecycle(this);
    }

    /**
     * Run the node in standalone mode.
     * 
     * If you are implementing a single node this is the most convenient way to bring it online.
     */
    async run() {
        const runtime = this.env.get(RuntimeService);

        try {
            runtime.add(this);
            await runtime.run();
        } finally {
            runtime.delete(this);
        }
    }

    /**
     * Start the node.
     * 
     * Typically invoked by {@link RuntimeService}.
     */
    async [RuntimeService.start]() {
        if (!this.behaviors.has(NetworkBehavior)) {
            throw new UnsupportedDependencyError(this.toString(), "Cannot run because NetworkBehavior is unsupported");
        }

        OfflineContext.act("node-startup", context => {
            const agent = context.agentFor(this);
            agent.get(NetworkBehavior).start();
        });

        return this.lifecycle.activity;
    }

    override get lifecycle(): NodeLifecycle {
        // We only have to override the lifecycle getter so 
        return super.lifecycle as NodeLifecycle;
    }
}

export namespace Node {
    export type Configuration<T extends EndpointType> =
        & { environment?: Environment }
        & {
            [K in keyof Part.Configuration<T>]: K extends "environment" ? Environment : Part.Configuration<T>[K]
        };

    export type Options<T extends EndpointType> =
        & { environment?: Environment }
        & {
            [K in keyof Part.Options<T>]?: K extends "environment" ? Environment : Part.Options<T>[K]
        };
}

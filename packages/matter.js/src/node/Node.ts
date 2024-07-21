/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeActivity } from "../behavior/context/NodeActivity.js";
import { NetworkRuntime } from "../behavior/system/network/NetworkRuntime.js";
import { ImplementationError } from "../common/MatterError.js";
import { Endpoint } from "../endpoint/Endpoint.js";
import { RootEndpoint } from "../endpoint/definitions/system/RootEndpoint.js";
import { EndpointType } from "../endpoint/type/EndpointType.js";
import { Environment } from "../environment/Environment.js";
import { RuntimeService } from "../environment/RuntimeService.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { DiagnosticSource } from "../log/DiagnosticSource.js";
import { Logger } from "../log/Logger.js";
import { Construction } from "../util/Construction.js";
import { NodeLifecycle } from "./NodeLifecycle.js";

const logger = Logger.get("Node");

/**
 * A Matter Node.
 *
 * In Matter, a "node" is an individually addressable top-level network resource.
 */
export abstract class Node<T extends RootEndpoint = RootEndpoint> extends Endpoint<T> {
    #environment: Environment;
    #runtime?: NetworkRuntime;

    constructor(config: Node.Configuration<T>) {
        const parentEnvironment = config.environment ?? Environment.default;

        if (config.id === undefined) {
            config.id = `node${parentEnvironment.vars.increment("node.nextFallbackId")}`;
        }

        super(config);

        // We create a local environment so nodes can offer node-specific services via the environment
        this.#environment = new Environment(config.id, parentEnvironment);

        this.#environment.set(NodeActivity, new NodeActivity());

        if (this.lifecycle.hasNumber) {
            if (this.number !== 0) {
                throw new ImplementationError("The root endpoint ID must be 0");
            }
        } else {
            this.number = 0;
        }

        this.construction.start();

        this.lifecycle.online.on(() => {
            this.statusUpdate("is online");
        });

        this.lifecycle.offline.on(() => {
            this.statusUpdate("is offline");
        });
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
     * Bring the node online.
     */
    async start() {
        this.env.runtime.add(this);

        try {
            await this.construction.ready;

            if (this.#runtime) {
                return;
            }

            this.statusUpdate("going online");

            this.#runtime = this.createRuntime();
            this.#runtime.construction.start();
            await this.#runtime.construction.ready;
        } catch (e) {
            this.env.runtime.delete(this);
            throw e;
        }
    }

    /**
     * @deprecated use {@link start}
     */
    async bringOnline() {
        return this.start();
    }

    /**
     * Run the node in standalone mode.  Returns when the node is closed.
     */
    async run() {
        await this.start();
        await this.construction.closed;
    }

    /**
     * Take the node offline but leave state and structure intact.  Happens automatically on close.
     *
     * Once the node is offline you may use {@link start} to bring the node online again.
     */
    async cancel() {
        if (!this.#runtime) {
            return;
        }

        this.statusUpdate("going offline");
        await this.#runtime?.close();
        this.#runtime = undefined;
    }

    override async close() {
        // The runtime is not designed to operate with a node that is shutting down so destroy it before performing
        // actual close
        //
        // TODO - this should probably block other functions like start()
        if (this.#runtime) {
            await this.cancel();
        }

        await super.close();
    }

    /**
     * Create the network runtime.
     */
    protected abstract createRuntime(): NetworkRuntime;

    get [RuntimeService.label]() {
        return ["Runtime for", Diagnostic.strong(this.toString())];
    }

    get [Diagnostic.value](): unknown {
        const nodeActivity = this.#environment.get(NodeActivity);
        using _activity = nodeActivity.begin("diagnostics");
        return Diagnostic.node("🧩", this.id, {
            children: [
                Diagnostic.strong("Structure"),
                Diagnostic.list([super[Diagnostic.value]]),
                Diagnostic.strong("Activity"),
                nodeActivity[Diagnostic.value],
            ],
        });
    }

    override get lifecycle(): NodeLifecycle {
        // We only have to override the lifecycle getter so
        return super.lifecycle as NodeLifecycle;
    }

    protected statusUpdate(message: string) {
        logger.notice(Diagnostic.strong(this.toString()), message);
    }

    override async [Construction.destruct]() {
        await this.cancel();
        await super[Construction.destruct]();
        DiagnosticSource.delete(this);
    }

    /**
     * Normal endpoints must have an owner to complete construction but Nodes have no such precondition for
     * construction.
     */
    protected override assertConstructable() {}
}

export namespace Node {
    export interface NodeOptions extends Endpoint.EndpointOptions {
        environment?: Environment;
    }

    export type Options<T extends RootEndpoint = RootEndpoint> = Endpoint.Options<T, NodeOptions>;

    export type Configuration<T extends RootEndpoint = RootEndpoint> = Endpoint.Configuration<T, NodeOptions>;

    export function nodeConfigFor<T extends RootEndpoint>(
        defaultType: T,
        configuration: undefined | T | Configuration<T>,
        options?: Options<T>,
    ): Node.Configuration<T> {
        if (!options) {
            options = {};
        }
        if (configuration === undefined) {
            return {
                type: defaultType,
                ...options,
            };
        }
        if ((configuration as EndpointType).deviceType !== undefined) {
            return {
                type: configuration as T,
                ...options,
            };
        }
        return {
            type: defaultType,
            ...configuration,
        } as Endpoint.Configuration<T>;
    }
}

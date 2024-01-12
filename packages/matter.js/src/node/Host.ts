/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment } from "../common/Environment.js";
import { ImplementationError, InternalError } from "../common/MatterError.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { DiagnosticSource } from "../log/DiagnosticSource.js";
import { Logger } from "../log/Logger.js";
import { MdnsBroadcaster } from "../mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "../mdns/MdnsScanner.js";
import { Node } from "./Node.js";
import { ServerOptions } from "./options/ServerOptions.js";

const logger = Logger.get("Host");

enum Status {
    INACTIVE,
    ACTIVE,
    ABORTED,
}

/**
 * Host exposes one or more {@link Node} instances to a Matter network.
 */
export class Host implements Environment.Task {
    // We share configuration with the server
    #configuration: ServerOptions.Configuration;

    // The nodes we are hosting
    #nodes = new Set<Node>();

    // We track state outside of run() so it is available to abort()
    #status = Status.INACTIVE;

    // If the server is running an abortable operation internally, this method
    // will execute the abort.  If an async operation is not abortable, we wait
    // until it completes to check the abort flag and this property is
    // undefined
    #abort?: () => void;

    // MDNS support
    #mdnsBroadcaster?: MdnsBroadcaster;
    #mdnsScanner?: MdnsScanner;

    constructor(options?: ServerOptions) {
        this.#configuration = ServerOptions.configurationFor(options);
    }

    /**
     * Add a node to execute.
     */
    add(node: Node) {
        for (const other of this.#nodes) {
            if (other.root.id === node.root.id) {
                throw new ImplementationError(`An installed node already has ID "${node.root.id}"; root parts must have unique IDs`);
            }
        }

        node.host = this;

        this.#nodes.add(node);
    }

    /**
     * Bring the server online.
     *
     * This method only returns if startup fails or the host is aborted.
     * After return nodes are destroyed.
     * 
     * TODO - wire abort logic into lower levels where applicable
     */
    async run() {
        if (this.#status !== Status.INACTIVE) {
            throw new ImplementationError("Server is already running");
        }
        this.#status = Status.ACTIVE;

        const environment = this.#configuration.environment;

        environment.tasks.add(this);

        this.#mdnsBroadcaster = await MdnsBroadcaster.create({
            enableIpv4: !this.#configuration.network.disableIpv4,
            multicastInterface: this.#configuration.network.announceInterface,
        });
        this.#mdnsScanner = await MdnsScanner.create({
            enableIpv4: !this.#configuration.network.disableIpv4,
            netInterface: this.#configuration.network.discoverInterface,
        });

        try {
            for (const node of this.#nodes) {
                if (this.#aborted) {
                    return;
                }
                try {
                    await node.start();
                } catch (e) {
                    logger.error(e);
                    logger.error(`Startup aborted by failure of ${node}`);
                    this.#status = Status.ABORTED;
                }
            }

            if (!this.#aborted) {
                await new Promise<void>(resolve => {
                    this.#abort = resolve;
                });
            }
        } catch (e) {
            logger.error("Nodes terminated by unhandled error:", e);
        } finally {
            for (const node of this.#nodes) {
                try {
                    await node[Symbol.asyncDispose]();
                } catch (e) {
                    logger.error(`Error aborting ${node}:`, e);
                }
                this.#nodes.delete(node);
            }

            await this.#mdnsBroadcaster?.close();
            this.#mdnsBroadcaster = undefined;

            await this.#mdnsScanner?.close();
            this.#mdnsScanner = undefined;
    
            environment.tasks.delete(this);
            DiagnosticSource.delete(this);
        }
        this.#status = Status.INACTIVE;
    }

    /**
     * Terminate the server.  You may only invoke this method once and only
     * while the server is running.
     */
    abort() {
        if (!this.#running) {
            throw new ImplementationError("Server is not running");
        }
        if (this.#aborted) {
            throw new ImplementationError("Server is already aborted");
        }
        this.#status = Status.ABORTED;

        this.#abort?.();
    }

    get name() {
        return "Active nodes";
    }

    get mdnsBroadcaster() {
        if (!this.#mdnsBroadcaster) {
            throw new InternalError("MDNS broadcaster accessed while offline");
        }
        return this.#mdnsBroadcaster;
    }

    get mdnsScanner() {
        if (!this.#mdnsScanner) {
            throw new InternalError("MDNS scanner accessed while offline");
        }
        return this.#mdnsScanner;
    }

    get [Diagnostic.presentation]() {
        return Diagnostic.Presentation.List;
    }

    get [Diagnostic.value]() {
        return this.#nodes;
    }

    get #running() {
        return this.#status === Status.ACTIVE;
    }

    get #aborted() {
        return this.#status === Status.ABORTED;
    }
}

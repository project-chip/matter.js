/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningController } from "../CommissioningController.js";
import { MatterServer } from "../MatterServer.js";
import { Environment } from "../common/Environment.js";
import { ImplementationError } from "../common/MatterError.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { DiagnosticSource } from "../log/DiagnosticSource.js";
import { StorageManager } from "../storage/StorageManager.js";
import { Node } from "./Node.js";
import { ServerOptions } from "./options/ServerOptions.js";
import { BaseNodeServer } from "./server/BaseNodeServer.js";

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

    // One or more NodeClient and NodeServer instances we will host
    #nodes = new Set<Node>();

    // We track state outside of run() so it is available to abort()
    #status = Status.INACTIVE;

    // If the server is running an abortable operation internally, this method
    // will execute the abort.  If an async operation is not abortable, we wait
    // until it completes to check the abort flag and this property is
    // undefined
    #abort?: () => void;

    constructor(options?: ServerOptions) {
        this.#configuration = ServerOptions.configurationFor(options);
    }

    /**
     * Add a node to execute.
     */
    add(node: Node) {
        this.#nodes.add(node);
    }

    /**
     * Bring the server online.
     *
     * This method only returns on abort at which point nodes are destroyed.
     */
    async run() {
        if (this.#status !== Status.INACTIVE) {
            throw new ImplementationError("Server is already running");
        }
        this.#status = Status.ACTIVE;

        const environment = this.#configuration.environment;

        let storage: StorageManager | undefined;

        await environment.tasks.add(this);

        try {
            try {
                // Can't abort this
                storage = await environment.createStorage();
                if (this.aborted) {
                    return;
                }
            } finally {
                this.#abort = undefined;
            }

            const server = new MatterServer(storage, {
                mdnsAnnounceInterface: this.#configuration.network.announceInterface,
                mdnsInterface: this.#configuration.network.discoverInterface,
                disableIpv4: this.#configuration.network.disableIpv4,
            });

            for (const node of this.#nodes) {
                if (node instanceof CommissioningController) {
                    await server.addCommissioningController(node);
                } else if (node instanceof BaseNodeServer) {
                    await server.addCommissioningServer(node);
                } else {
                    throw new ImplementationError(
                        "Cannot run node that is neither a CommissioningController nor a CommissioningServer",
                    );
                }
            }

            // Can't abort this
            await server.start();
            if (this.aborted) {
                return;
            }

            await new Promise<void>((resolve, reject) => {
                try {
                    this.#abort = () => {
                        server.close().then(resolve).catch(reject);
                    };
                } catch (e) {
                    reject(e);
                } finally {
                    this.#abort = undefined;
                }
            });
        } finally {
            // Can't abort this
            await storage?.close();

            await environment.tasks.delete(this);
            DiagnosticSource.delete(this);
        }
        this.#status = Status.INACTIVE;
    }

    /**
     * Terminate the server.  You may only invoke this method once and only
     * while the server is running.
     */
    abort() {
        if (!this.running) {
            throw new ImplementationError("Server is not running");
        }
        if (this.aborted) {
            throw new ImplementationError("Server is already aborted");
        }
        this.#status = Status.ABORTED;
        this.#abort?.();
    }

    get name() {
        return "Active nodes";
    }

    get [Diagnostic.presentation]() {
        return Diagnostic.Presentation.List;
    }

    get [Diagnostic.value]() {
        return this.#nodes;
    }

    private get running() {
        return this.#status === Status.ACTIVE;
    }

    private get aborted() {
        return this.#status === Status.ABORTED;
    }
}

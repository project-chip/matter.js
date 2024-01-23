/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Part } from "../../../endpoint/Part.js";
import { RootEndpoint } from "../../../endpoint/definitions/system/RootEndpoint.js";
import { Diagnostic } from "../../../log/Diagnostic.js";
import { Logger } from "../../../log/Logger.js";
import { NetworkBehavior } from "./NetworkBehavior.js";

const logger = Logger.get("NetworkRuntime");

/**
 * Base class for networking implementation.
 */
export abstract class NetworkRuntime {
    #owner: Part<RootEndpoint>;
    #cancel?: () => void;

    constructor(owner: Part<RootEndpoint>) {
        this.#owner = owner;
    }

    async run() {
        try {
            await this.startup();

            this.#owner.offline("update-network", agent => {
                const network = agent.get(NetworkBehavior);
                network.state.online = true;
                network.state.operationalPort = this.operationalPort;
            })
    
            logger.notice(Diagnostic.strong(this.toString()), "is online");
    
            await new Promise<void>(resolve => {
                this.#cancel = resolve;
            })
        } finally {
            this.#cancel = undefined;
            try {
                await this.shutdown();
            } catch (e) {
                logger.error(`Error shutting down ${this.owner}.network`, e);
            }
        }
    }

    cancel() {
        if (this.#cancel) {
            logger.notice("Node", Diagnostic.strong(this.#owner.toString()), "going offline");

            this.#owner.offline("clear-network", agent => {
                const network = agent.get(NetworkBehavior);
                network.state.online = false;
                network.state.operationalPort = network.state.port;
            });

            this.#cancel();

            this.#cancel = undefined;
        }
    }

    protected abstract operationalPort: number;

    protected abstract startup(): Promise<void>;
    protected abstract shutdown(): Promise<void>;

    protected get owner() {
        return this.#owner;
    }
}

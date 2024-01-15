/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import { InternalError } from "../../common/MatterError.js";
import { PartLifecycle } from "../../endpoint/part/PartLifecycle.js";
import { Diagnostic } from "../../log/Diagnostic.js";
import { Logger } from "../../log/Logger.js";
import { Host } from "../Host.js";
import type { NodeServer } from "./NodeServer.js";
import { ServerStore } from "./storage/ServerStore.js";

const logger = Logger.get("ServerResetService");

/**
 * Performs soft- or factory-reset of a {@link NodeServer}.
 *
 * Reset is largely handled yb {@link BehaviorBacking}.  We expose reset logic as a service so backings can query to
 * determine whether non-volatile values should reset.
 */
export class ServerResetService {
    #server: NodeServer;
    #store: ServerStore;
    #host: Host;
    #active = false;
    #isFactoryReset = false;

    get isFactoryReset() {
        return this.#isFactoryReset;
    }

    constructor(server: NodeServer, store: ServerStore, host: Host) {
        this.#server = server;
        this.#store = store;
        this.#host = host;
    }

    /**
     * Restart all parts.
     *
     * We don't use this for anything currently, just including for completeness.
     */
    async softReset() {
        await this.#reset("soft");
    }

    /**
     * Perform a factory reset.
     */
    async factoryReset() {
        try {
            this.#isFactoryReset = true;
            await this.#reset("factory");
        } finally {
            this.#isFactoryReset = false;
        }
    }

    async #reset(type: string) {
        if (this.#active) {
            throw new InternalError(`Attempt at recursive reset of ${this.#server}`);
        }

        logger.notice(`Initiating`, Diagnostic.strong(type), "reset of", Diagnostic.strong(this.#server.toString()));

        try {
            this.#active = true;

            // Reset parts
            await this.#server.rootPart.lifecycle.reset();

            // Clear data that's not managed by behaviors (TODO - this should shrink over time)
            if (this.#isFactoryReset) {
                await this.#store.sessionStorage.clear();
                await this.#store.fabricStorage.clear();
                await this.#store.eventStorage.clear();
            }

            // Reinitialize
            this.#server.rootPart.lifecycle.change(PartLifecycle.Change.Installed);
            await this.#server.rootPart.construction;
        } catch (e) {
            this.#active = false;
            logger.error(`Terminating due to error in ${type} reset of ${this.#server}:`, e);
            this.#host.abort();
        }
    }
}

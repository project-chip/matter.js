/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError, Logger, MatterError } from "#general";
import type { ClientNode } from "#node/ClientNode.js";
import { ClientInteraction, ExchangeProvider, PeerSet } from "#protocol";
import { CommissioningClient } from "../commissioning/CommissioningClient.js";
import { RemoteDescriptor } from "../commissioning/RemoteDescriptor.js";
import { NetworkRuntime } from "./NetworkRuntime.js";

export class UncommissionedError extends MatterError {}
export class OfflineError extends MatterError {}

const logger = Logger.get("ClientNetworkRuntime");

/**
 * Handles network functionality for {@link ClientNode}.
 */
export class ClientNetworkRuntime extends NetworkRuntime {
    #client?: ClientInteraction;

    constructor(owner: ClientNode) {
        super(owner);
    }

    protected async start() {
        if (!this.owner.lifecycle.isCommissioned) {
            throw new UncommissionedError(`Cannot interact with ${this.owner} because it is uncommissioned`);
        }

        const commissioningState = this.owner.stateOf(CommissioningClient);
        const address = this.owner.stateOf(CommissioningClient).peerAddress;
        const peers = this.owner.env.get(PeerSet);

        if (address === undefined) {
            throw new InternalError(`Commissioned node ${this.owner} has no peer address`);
        }

        const exchangeProvider = await peers.exchangeProviderFor(address, {
            discoveryData: RemoteDescriptor.fromLongForm(commissioningState),
        });
        this.owner.env.set(ExchangeProvider, exchangeProvider);

        this.#client = this.owner.env.get(ClientInteraction);
    }

    protected async stop() {
        await this.construction;

        try {
            await this.#client?.close();
        } catch (e) {
            logger.error(`Error closing connection to ${this.owner}`, e);
        }
    }

    blockNewActivity() {
        this.owner.env.delete(ClientInteraction, this.#client);
    }
}

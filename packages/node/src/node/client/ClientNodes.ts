/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningDiscovery, ContinuousDiscovery, Discovery, InstanceDiscovery } from "#behavior/index.js";
import { RemoteDescriptor } from "#behavior/system/commissioning/RemoteDescriptor.js";
import { EndpointContainer } from "#endpoint/properties/EndpointContainer.js";
import { ServerNodeStore } from "#node/storage/ServerNodeStore.js";
import { PeerAddress, PeerAddressStore } from "#protocol";
import { ClientNode } from "../ClientNode.js";
import type { ServerNode } from "../ServerNode.js";
import { ClientNodeFactory } from "./ClientNodeFactory.js";
import { NodePeerStore } from "./NodePeerStore.js";

/**
 * Manages the set of known remote nodes.
 *
 * Remote nodes are either peers (commissioned into a fabric we share) or commissionable.
 */
export class ClientNodes extends EndpointContainer<ClientNode> {
    constructor(owner: ServerNode) {
        super(owner);

        if (!owner.env.has(ClientNodeFactory)) {
            owner.env.set(ClientNodeFactory, new Factory(this));
        }

        this.owner.env.set(PeerAddressStore, new NodePeerStore(owner));
    }

    /**
     * Load nodes.  Invoked automatically by owner.
     */
    initialize() {
        const factory = this.owner.env.get(ClientNodeFactory);

        const clientStores = this.owner.env.get(ServerNodeStore).clientStores;
        for (const id of clientStores.knownIds) {
            this.add(
                factory.create({
                    id,
                    owner: this.owner,
                }),
            );
        }
    }

    /**
     * Find a specific commissionable node.
     */
    locate(options?: Discovery.Options) {
        return new InstanceDiscovery(this.owner, options);
    }

    /**
     * Employ discovery to find a set of commissionable nodes.
     */
    discover(options?: Discovery.Options) {
        return new ContinuousDiscovery(this.owner, options);
    }

    /**
     * Find a specific commissionable node and commission.
     */
    commission(passcode: number, discriminator?: number): Promise<ClientNode>;

    /**
     * Find a specific commissionable node and commission.
     */
    commission(options: CommissioningDiscovery.Options): Promise<ClientNode>;

    commission(optionsOrPasscode: CommissioningDiscovery.Options | number, discriminator?: number) {
        if (typeof optionsOrPasscode !== "object") {
            optionsOrPasscode = { passcode: optionsOrPasscode };
        }

        if (discriminator !== undefined) {
            (optionsOrPasscode as { longDiscriminator: number }).longDiscriminator = discriminator;
        }

        return new CommissioningDiscovery(this.owner, optionsOrPasscode);
    }

    override get(id: string | PeerAddress) {
        if (typeof id !== "string") {
            const address = PeerAddress(id);
            for (const node of this) {
                const nodeAddress = node.state.commissioning.peerAddress;
                if (nodeAddress && PeerAddress(nodeAddress) === address) {
                    return node;
                }
            }
            return undefined;
        }

        return super.get(id);
    }

    override get owner() {
        return super.owner as ServerNode;
    }

    override add(node: ClientNode) {
        node.owner = this.owner;

        super.add(node);
    }
}

class Factory extends ClientNodeFactory {
    #owner: ClientNodes;

    constructor(owner: ClientNodes) {
        super();
        this.#owner = owner;
    }

    create(options: ClientNode.Options) {
        if (options.id === undefined) {
            options.id = this.#owner.owner.env.get(ServerNodeStore).clientStores.allocateId();
        }
        const node = new ClientNode({
            ...options,
            owner: this.#owner.owner,
        });
        node.construction.start();
        return node;
    }

    find(descriptor: RemoteDescriptor) {
        for (const node of this.#owner) {
            if (RemoteDescriptor.is(node.state.commissioning, descriptor)) {
                return node;
            }
        }
    }

    get nodes() {
        return this.#owner;
    }
}

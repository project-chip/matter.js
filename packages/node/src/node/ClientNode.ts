/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NetworkRuntime } from "#behavior/system/network/NetworkRuntime.js";
import { EndpointInitializer } from "#endpoint/properties/EndpointInitializer.js";
import { ImplementationError, NotImplementedError, SupportedStorageTypes } from "#general";
import { OperationalPeer, PeerAddress } from "#protocol";
import { ClientEndpointInitializer } from "./client/ClientEndpointInitializer.js";
import { ClientNodeLifecycle } from "./ClientNodeLifecycle.js";
import { Node } from "./Node.js";
import { ServerNode } from "./ServerNode.js";
import { ClientNodeStore } from "./storage/ClientNodeStore.js";

/**
 * A client-side Matter {@link Node}.
 */
export class ClientNode extends Node {
    #address: PeerAddress;
    #operationalAddress: Partial<OperationalPeer> = {};
    #store: ClientNodeStore;

    constructor({ owner, store }: ClientNode.Options) {
        const { address } = store;
        super({
            id: `${address.fabricIndex}:${address.nodeId.toString(16)}`,
            number: 0,
            type: Node.CommonRootEndpoint,
            owner,
        });
        this.#address = store.address;
        this.#store = store;

        this.env.set(EndpointInitializer, new ClientEndpointInitializer(store));
    }

    override async initialize() {
        await super.initialize();

        const discovery = this.#store.discoveryStorage;
        const operationalAddress = {} as Record<string, unknown>;
        for (const key of await discovery.keys()) {
            operationalAddress[key] = await discovery.get(key);
        }
        this.#operationalAddress = operationalAddress as Partial<OperationalPeer>;
    }

    get address() {
        return this.#address;
    }

    get operationalAddress(): OperationalPeer {
        return { ...this.#operationalAddress, address: this.#address };
    }

    updateOperationalAddress(operationalAddress: Partial<OperationalPeer>) {
        operationalAddress = { ...operationalAddress };
        delete operationalAddress.address;
        this.#operationalAddress = operationalAddress;
        return this.#store.discoveryStorage.set(operationalAddress as Record<string, SupportedStorageTypes>);
    }

    override get lifecycle() {
        return super.lifecycle as ClientNodeLifecycle;
    }

    override get owner(): ServerNode {
        return super.owner as ServerNode;
    }

    protected override set owner(node: ServerNode) {
        if (!(node instanceof ServerNode)) {
            throw new ImplementationError("Client node owner must be a server node");
        }
        super.owner = node;
    }

    createRuntime(): NetworkRuntime {
        throw new NotImplementedError();
    }

    protected override get container() {
        return this.owner?.nodes;
    }

    protected override createLifecycle() {
        return new ClientNodeLifecycle(this);
    }
}

export namespace ClientNode {
    export interface Options extends Node.Options {
        owner: ServerNode;
        store: ClientNodeStore;
    }
}

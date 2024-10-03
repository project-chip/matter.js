/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger, StorageContext, StorageContextFactory } from "#general";
import { PeerAddress } from "#protocol";
import { FabricIndex, NodeId } from "#types";
import { NodeStore } from "./NodeStore.js";

const logger = Logger.get("ClientNodeStore");

/**
 * A "client" node store is a node store with operational information detailing how to connect to a client.
 */
export class ClientNodeStore extends NodeStore {
    #address: PeerAddress;
    #discoveryStorage?: StorageContext;

    constructor(address: PeerAddress, storage: StorageContextFactory) {
        super(storage);
        this.#address = address;
        this.construction.start();
    }

    get address() {
        return this.#address;
    }

    /**
     * Load a store for each peer that was previously persisted.
     */
    static async load(peerStorage: StorageContext) {
        const addresses = await peerStorage.contexts();
        const stores = Array<ClientNodeStore>();

        for (const addrStr of addresses) {
            const addrComponents = addrStr.match(/^([0-9]+)-([0-9a-f])/i);
            if (!addrComponents) {
                logger.warn(`Ignoring peer storage context "${addrStr}" due to invalid name format`);
                continue;
            }

            const fabricIndex = FabricIndex(Number.parseInt(addrComponents[1]));
            const nodeId = NodeId(Number.parseInt(addrComponents[2], 16));
            const addr = PeerAddress({ fabricIndex, nodeId });

            stores.push(new ClientNodeStore(addr, peerStorage.createContext(addrStr)));
        }

        return stores;
    }

    /**
     * Add a store for a new (previously unknown) peer.
     */
    static async create(address: PeerAddress, peerStorage: StorageContext) {
        const addrStr = `${address.fabricIndex}-${address.nodeId.toString(16)}`;
        const store = new ClientNodeStore(address, peerStorage.createContext(addrStr));

        // Ensure we don't accidentally pick up stale information for the same address
        await store.erase();
    }

    get discoveryStorage() {
        if (!this.#discoveryStorage) {
            this.#discoveryStorage = this.factory.createContext("discovery");
        }
        return this.#discoveryStorage;
    }

    override async erase() {
        await this.discoveryStorage.clearAll();
        await super.erase();
    }
}

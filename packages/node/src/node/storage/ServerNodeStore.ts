/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    asyncNew,
    Destructable,
    Diagnostic,
    Environment,
    ImplementationError,
    Logger,
    StorageContext,
    StorageManager,
    StorageService,
} from "#general";
import { PeerAddress } from "#protocol";
import { ClientNodeStore } from "./ClientNodeStore.js";
import { NodeStore } from "./NodeStore.js";

const logger = Logger.get("ServerNodeStore");

/**
 * The "server" node store is a {@link NodeStore} with storage for components shared by the server node and client
 * nodes.
 */
export class ServerNodeStore extends NodeStore implements Destructable {
    #env: Environment;
    #nodeId: string;
    #location: string;
    #storageManager?: StorageManager;
    #peerStorage?: StorageContext;

    constructor(environment: Environment, nodeId: string) {
        super({
            createContext: (name: string) => {
                if (!this.#storageManager) {
                    throw new ImplementationError(
                        `Cannot create storage context ${name} because store is not initialized`,
                    );
                }
                return this.#storageManager.createContext(name);
            },
        });

        this.#env = environment;
        this.#nodeId = nodeId;
        this.#location = this.#env.get(StorageService).location ?? "(unknown location)";

        this.construction.start();
    }

    static async create(environment: Environment, nodeId: string) {
        return await asyncNew(this, environment, nodeId);
    }

    allPeerStores() {
        return ClientNodeStore.load(this.#peers);
    }

    addPeerStore(address: PeerAddress) {
        return ClientNodeStore.create(address, this.#peers);
    }

    async close() {
        await this.construction.close(async () => {
            await this.#storageManager?.close();
            this.#logChange("Closed");
        });
    }

    get #peers() {
        if (!this.#peerStorage) {
            this.#peerStorage = this.factory.createContext("peer");
        }
        return this.#peerStorage;
    }

    #logChange(what: "Opened" | "Closed") {
        logger.info(what, Diagnostic.strong(this.#nodeId ?? "node"), "storage at", `${this.#location}/${this.#nodeId}`);
    }

    override async initializeStorage() {
        this.#storageManager = await this.#env.get(StorageService).open(this.#nodeId);
        this.#env.set(StorageManager, this.#storageManager);

        await super.initializeStorage();

        this.#logChange("Opened");
    }
}

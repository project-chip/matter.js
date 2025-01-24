/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    asyncNew,
    Destructable,
    Diagnostic,
    Environment,
    ImplementationError,
    Logger,
    StorageManager,
    StorageService,
} from "#general";
import { ClientStoreFactory, ClientStoreService } from "./ClientStoreService.js";
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
    #clientStores?: ClientStoreFactory;

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

    async close() {
        await this.construction.close(async () => {
            await this.#clientStores?.close();
            await this.#storageManager?.close();
            this.#logChange("Closed");
        });
    }

    get clientStores(): ClientStoreService {
        return this.construction.assert("client stores", this.#clientStores);
    }

    #logChange(what: "Opened" | "Closed") {
        logger.info(what, Diagnostic.strong(this.#nodeId ?? "node"), "storage at", `${this.#location}/${this.#nodeId}`);
    }

    override async initializeStorage() {
        this.#storageManager = await this.#env.get(StorageService).open(this.#nodeId);
        this.#env.set(StorageManager, this.#storageManager);

        this.#clientStores = await asyncNew(ClientStoreFactory, this.#storageManager.createContext("nodes"));

        await super.initializeStorage();

        this.#logChange("Opened");
    }
}

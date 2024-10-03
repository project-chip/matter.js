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
import { EventHandler, PeerAddress } from "#protocol";
import { ClientNodeStore } from "./ClientNodeStore.js";
import { NodeStore } from "./NodeStore.js";

const logger = Logger.get("ServerNodeStore");

/**
 * The "server" node store is a {@link NodeStore} with storage for components shared by the server node and client
 * nodes.
 */
export class ServerNodeStore extends NodeStore implements Destructable {
    #storageService: StorageService;
    #nodeId: string;
    #location: string;
    #storageManager?: StorageManager;
    #sessionStorage?: StorageContext;
    #eventHandler?: EventHandler;
    #fabricStorage?: StorageContext;
    #eventStorage?: StorageContext;
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

        this.#storageService = environment.get(StorageService);
        this.#nodeId = nodeId;
        this.#location = this.#storageService.location ?? "(unknown location)";

        this.construction.start();
    }

    static async create(environment: Environment, nodeId: string) {
        return await asyncNew(this, environment, nodeId);
    }

    get eventStorage() {
        if (!this.#eventStorage) {
            this.#eventStorage = this.factory.createContext("events");
        }
        return this.#eventStorage;
    }

    get eventHandler() {
        if (!this.#eventHandler) {
            throw new ImplementationError("Event handler accessed prior to initialization");
        }
        return this.#eventHandler;
    }

    get sessionStorage() {
        if (!this.#sessionStorage) {
            this.#sessionStorage = this.factory.createContext("sessions");
        }
        return this.#sessionStorage;
    }

    get fabricStorage() {
        if (!this.#fabricStorage) {
            this.#fabricStorage = this.factory.createContext("fabrics");
        }
        return this.#fabricStorage;
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

    override async erase() {
        await this.#sessionStorage?.clearAll();
        await this.#fabricStorage?.clearAll();
        await this.#eventStorage?.clearAll();
        await super.erase();
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
        this.#storageManager = await this.#storageService.open(this.#nodeId);

        this.#eventHandler = await EventHandler.create(this.eventStorage);

        await super.initializeStorage();

        this.#logChange("Opened");
    }
}

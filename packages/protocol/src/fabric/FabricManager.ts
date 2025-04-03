/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Bytes,
    Construction,
    Environment,
    Environmental,
    ImplementationError,
    InternalError,
    Key,
    MatterError,
    MatterFlowError,
    MaybePromise,
    Observable,
    StorageContext,
    StorageManager,
} from "#general";
import { PeerAddress } from "#peer/PeerAddress.js";
import { FabricIndex } from "#types";
import { Fabric } from "./Fabric.js";

/** Specific Error for when a fabric is not found. */
export class FabricNotFoundError extends MatterError {}
export class FabricTableFullError extends MatterError {}

export enum FabricAction {
    Added,
    Removed,
    Updated,
}

export class FabricManager {
    #nextFabricIndex = 1;
    readonly #fabrics = new Map<FabricIndex, Fabric>();
    #initializationDone = false;
    #storage?: StorageContext;
    #events = {
        added: Observable<[fabric: Fabric]>(),
        updated: Observable<[fabric: Fabric]>(),
        deleted: Observable<[fabric: Fabric]>(),
        failsafeClosed: Observable<[]>(),
    };
    #construction: Construction<FabricManager>;

    constructor(storage?: StorageContext) {
        this.#storage = storage;

        let construct;
        if (this.#storage === undefined) {
            construct = () => {};
        } else {
            construct = async () => {
                if (this.#storage === undefined) {
                    // Storage disabled
                    return;
                }

                const fabrics = await this.#storage.get<Fabric.Config[]>("fabrics", []);
                for (const fabricConfig of fabrics) {
                    this.#addFabric(new Fabric(fabricConfig));
                }

                this.#nextFabricIndex = await this.#storage.get("nextFabricIndex", this.#nextFabricIndex);

                this.#initializationDone = true;
            };
        }

        this.#construction = Construction(this, construct);
    }

    get construction() {
        return this.#construction;
    }

    async [Construction.construct]() {
        await this.construction;
    }

    static [Environmental.create](env: Environment) {
        const instance = new FabricManager(env.get(StorageManager).createContext("fabrics"));
        env.set(FabricManager, instance);
        return instance;
    }

    get events() {
        return this.#events;
    }

    async clear() {
        await this.#construction;
        this.#nextFabricIndex = 1;
        this.#fabrics.clear();
        await this.#storage?.clear();
    }

    has(address: FabricIndex | PeerAddress) {
        if (typeof address === "object") {
            address = address.fabricIndex;
        }
        return this.#fabrics.has(address);
    }

    for(address: FabricIndex | PeerAddress) {
        if (typeof address === "object") {
            address = address.fabricIndex;
        }
        const fabric = this.#fabrics.get(address);
        if (fabric === undefined) {
            throw new FabricNotFoundError(`Cannot access fabric for unknown index ${address}`);
        }
        return fabric;
    }

    allocateFabricIndex() {
        this.#construction.assert();

        for (let i = 0; i < 254; i++) {
            const fabricIndex = this.#nextFabricIndex++;
            if (this.#nextFabricIndex > 254) this.#nextFabricIndex = 1;
            if (!this.#fabrics.has(FabricIndex(fabricIndex))) {
                return FabricIndex(fabricIndex);
            }
        }
        throw new FabricTableFullError("No free fabric index available.");
    }

    persistFabrics(): MaybePromise<void> {
        if (this.#storage === undefined) {
            throw new ImplementationError(
                "Fabric persistence is disabled because FabricManager constructed without storage",
            );
        }

        this.#construction.assert();

        const storeResult = this.#storage.set(
            "fabrics",
            Array.from(this.#fabrics.values()).map(fabric => fabric.config),
        );
        if (MaybePromise.is(storeResult)) {
            return storeResult.then(() => this.#storage!.set("nextFabricIndex", this.#nextFabricIndex));
        }
        return this.#storage.set("nextFabricIndex", this.#nextFabricIndex);
    }

    addFabric(fabric: Fabric) {
        this.#construction.assert();
        this.#addFabric(fabric);
    }

    #addFabric(fabric: Fabric) {
        const { fabricIndex } = fabric;
        if (this.#fabrics.has(fabricIndex)) {
            throw new MatterFlowError(`Fabric with index ${fabricIndex} already exists.`);
        }
        this.#fabrics.set(fabricIndex, fabric);
        fabric.addRemoveCallback(async () => this.removeFabric(fabricIndex));
        fabric.persistCallback = (isUpdate = true) => {
            const persistResult = this.persistFabrics();
            return MaybePromise.then(persistResult, () => {
                if (isUpdate) {
                    this.#events.updated.emit(fabric); // Assume Fabric got updated when persist callback is called
                }
            });
        };
        if (this.#initializationDone) {
            this.#events.added.emit(fabric);
        }
    }

    async removeFabric(fabricIndex: FabricIndex) {
        await this.#construction;

        const fabric = this.#fabrics.get(fabricIndex);
        if (fabric === undefined)
            throw new FabricNotFoundError(
                `Fabric with index ${fabricIndex} cannot be removed because it does not exist.`,
            );
        this.#fabrics.delete(fabricIndex);
        await this.persistFabrics();
        this.#events.deleted.emit(fabric);
    }

    [Symbol.iterator]() {
        this.#construction.assert();

        return this.#fabrics.values();
    }

    get fabrics() {
        this.#construction.assert();

        return Array.from(this.#fabrics.values());
    }

    get length() {
        return this.fabrics.length;
    }

    find(predicate: (fabric: Fabric) => boolean) {
        return this.fabrics.find(predicate);
    }

    map<T>(translator: (fabric: Fabric) => T) {
        return this.fabrics.map(translator);
    }

    findFabricFromDestinationId(destinationId: Uint8Array, initiatorRandom: Uint8Array) {
        this.#construction.assert();

        for (const fabric of this.#fabrics.values()) {
            const candidateDestinationId = fabric.getDestinationId(fabric.nodeId, initiatorRandom);
            if (!Bytes.areEqual(candidateDestinationId, destinationId)) continue;
            return fabric;
        }

        throw new InternalError("Fabric cannot be found from destinationId");
    }

    findByKeypair(keypair: Key) {
        this.#construction.assert();

        for (const fabric of this.#fabrics.values()) {
            if (fabric.matchesKeyPair(keypair)) {
                return fabric;
            }
        }
        return undefined;
    }

    findByIndex(index: FabricIndex) {
        return Array.from(this.#fabrics.values()).find(fabric => fabric.fabricIndex === index);
    }

    async updateFabric(fabric: Fabric) {
        await this.#construction;

        const { fabricIndex } = fabric;
        if (!this.#fabrics.has(fabricIndex)) {
            throw new FabricNotFoundError(
                `Fabric with index ${fabricIndex} cannot be updated because it does not exist.`,
            );
        }
        this.#fabrics.set(fabricIndex, fabric);
        await this.persistFabrics();
        this.#events.updated.emit(fabric);
    }

    async revokeFabric(fabricIndex: FabricIndex) {
        await this.#construction;

        const fabric = this.#fabrics.get(fabricIndex);
        if (fabric === undefined) {
            throw new MatterFlowError(`Fabric with index ${fabricIndex} does not exist to revoke.`);
        }
        await fabric.remove();
    }
}

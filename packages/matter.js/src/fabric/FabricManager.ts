/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError, MatterError, MatterFlowError } from "../common/MatterError.js";
import { Key } from "../crypto/Key.js";
import { FabricIndex } from "../datatype/FabricIndex.js";
import { StorageContext } from "../storage/StorageContext.js";
import { ByteArray } from "../util/ByteArray.js";
import { Observable } from "../util/Observable.js";
import { MaybePromise } from "../util/Promises.js";
import { Fabric, FabricJsonObject } from "./Fabric.js";

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
    #fabricStorage: StorageContext;
    #events = {
        added: Observable<[fabric: Fabric]>(),
        updated: Observable<[fabric: Fabric]>(),
        deleted: Observable<[fabric: Fabric]>(),
    };

    constructor(fabricStorage: StorageContext) {
        this.#fabricStorage = fabricStorage;
    }

    async initFromStorage() {
        const fabrics = await this.#fabricStorage.get<FabricJsonObject[]>("fabrics", []);
        fabrics.forEach(fabric => this.addFabric(Fabric.createFromStorageObject(fabric)));
        this.#nextFabricIndex = await this.#fabricStorage.get("nextFabricIndex", this.#nextFabricIndex);
        this.#initializationDone = true;
    }

    get events() {
        return this.#events;
    }

    getNextFabricIndex() {
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
        const storeResult = this.#fabricStorage.set(
            "fabrics",
            Array.from(this.#fabrics.values()).map(fabric => fabric.toStorageObject()),
        );
        if (MaybePromise.is(storeResult)) {
            return storeResult.then(() => this.#fabricStorage.set("nextFabricIndex", this.#nextFabricIndex));
        }
        return this.#fabricStorage.set("nextFabricIndex", this.#nextFabricIndex);
    }

    addFabric(fabric: Fabric) {
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
        const fabric = this.#fabrics.get(fabricIndex);
        if (fabric === undefined)
            throw new FabricNotFoundError(
                `Fabric with index ${fabricIndex} cannot be removed because it does not exist.`,
            );
        this.#fabrics.delete(fabricIndex);
        await this.persistFabrics();
        this.#events.deleted.emit(fabric);
    }

    getFabrics() {
        return Array.from(this.#fabrics.values());
    }

    findFabricFromDestinationId(destinationId: ByteArray, initiatorRandom: ByteArray) {
        for (const fabric of this.#fabrics.values()) {
            const candidateDestinationId = fabric.getDestinationId(fabric.nodeId, initiatorRandom);
            if (!candidateDestinationId.equals(destinationId)) continue;
            return fabric;
        }

        throw new InternalError("Fabric cannot be found from destinationId");
    }

    findByKeypair(keypair: Key) {
        for (const fabric of this.#fabrics.values()) {
            if (fabric.matchesKeyPair(keypair)) {
                return fabric;
            }
        }
        return undefined;
    }

    async updateFabric(fabric: Fabric) {
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
        const fabric = this.#fabrics.get(fabricIndex);
        if (fabric === undefined) {
            throw new MatterFlowError(`Fabric with index ${fabricIndex} does not exist to revoke.`);
        }
        await fabric.remove();
    }
}

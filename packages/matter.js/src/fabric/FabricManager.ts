/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError, MatterError, MatterFlowError } from "../common/MatterError.js";
import { FabricIndex } from "../datatype/FabricIndex.js";
import { StorageContext } from "../storage/StorageContext.js";
import { ByteArray } from "../util/ByteArray.js";
import { Fabric, FabricJsonObject } from "./Fabric.js";

/** Specific Error for when a fabric is not found. */
export class FabricNotFoundError extends MatterError {}
export class FabricTableFullError extends MatterError {}

export class FabricManager {
    private nextFabricIndex = 1;
    private readonly fabrics = new Map<FabricIndex, Fabric>();
    private readonly fabricStorage: StorageContext;

    constructor(storage: StorageContext) {
        this.fabricStorage = storage.createContext("FabricManager");
        const fabrics = this.fabricStorage.get<FabricJsonObject[]>("fabrics", []);
        fabrics.forEach(fabric => this.addFabric(Fabric.createFromStorageObject(fabric)));
        this.nextFabricIndex = this.fabricStorage.get("nextFabricIndex", this.nextFabricIndex);
    }

    getNextFabricIndex() {
        const startingIndex = this.nextFabricIndex;
        let iteration = 0;
        while (true) {
            const fabricIndex = this.nextFabricIndex++;
            if (this.nextFabricIndex > 254) this.nextFabricIndex = 1;
            if (!this.fabrics.has(FabricIndex(fabricIndex))) {
                return FabricIndex(fabricIndex);
            }
            if (iteration > 0 && fabricIndex === startingIndex) {
                throw new FabricTableFullError("No free fabric index available.");
            }
            iteration++;
        }
    }

    persistFabrics() {
        this.fabricStorage.set(
            "fabrics",
            Array.from(this.fabrics.values()).map(fabric => fabric.toStorageObject()),
        );
        this.fabricStorage.set("nextFabricIndex", this.nextFabricIndex);
    }

    addFabric(fabric: Fabric) {
        const { fabricIndex } = fabric;
        if (this.fabrics.has(fabricIndex)) {
            throw new MatterFlowError(`Fabric with index ${fabricIndex} already exists.`);
        }
        this.fabrics.set(fabricIndex, fabric);
        fabric.addRemoveCallback(() => this.removeFabric(fabricIndex));
        fabric.setPersistCallback(() => this.persistFabrics());
    }

    removeFabric(fabricIndex: FabricIndex) {
        if (!this.fabrics.has(fabricIndex))
            throw new FabricNotFoundError(
                `Fabric with index ${fabricIndex} cannot be removed because it does not exist.`,
            );
        this.fabrics.delete(fabricIndex);
        this.persistFabrics();
    }

    getFabrics() {
        return Array.from(this.fabrics.values());
    }

    findFabricFromDestinationId(destinationId: ByteArray, initiatorRandom: ByteArray) {
        for (const fabric of this.fabrics.values()) {
            const candidateDestinationId = fabric.getDestinationId(fabric.nodeId, initiatorRandom);
            if (!candidateDestinationId.equals(destinationId)) continue;
            return fabric;
        }

        throw new InternalError("Fabric cannot be found from destinationId");
    }

    updateFabric(fabric: Fabric) {
        const { fabricIndex } = fabric;
        if (!this.fabrics.has(fabricIndex)) {
            throw new FabricNotFoundError(
                `Fabric with index ${fabricIndex} cannot be updated because it does not exist.`,
            );
        }
        this.fabrics.set(fabricIndex, fabric);
    }

    async revokeFabric(fabricIndex: FabricIndex) {
        const fabric = this.fabrics.get(fabricIndex);
        if (fabric === undefined) {
            throw new MatterFlowError(`Fabric with index ${fabricIndex} does not exist to revoke.`);
        }
        await fabric.remove();
        if (fabricIndex === this.nextFabricIndex) {
            this.nextFabricIndex--;
            if (this.nextFabricIndex < 1) this.nextFabricIndex = 254;
        }
    }
}
